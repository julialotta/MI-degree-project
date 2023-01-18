import { useEffect, useState } from "react";
import Modal from "react-modal";
import { colors } from "../style/Mixins";
import {
  StyledP,
  StyledA,
  StyledH2,
  StyledH5,
} from "../style/StyledTextElements";
import { FlexDiv } from "../style/Wrappers";
import { IProjects } from "../../models/IProjects";
import { StyledImage } from "../style/StyledImage";
import { fetchProjectByID } from "../../utils/services/handleFetch.service";
import { Loader } from "../Loader";
import { AiOutlineLink } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

export const modalStyles = {
  content: {
    width: "80%",
    left: "50%",
    top: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    background: colors.white,
    zIndex: 999,
  },
};

Modal.setAppElement("#root");

interface IOpen {
  open: boolean;
  setOpen(): void;
  id: string;
}

export const ProjectModal = (props: IOpen) => {
  const [proj, setProj] = useState<IProjects>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getProject() {
      const project = await fetchProjectByID(props.id);
      setProj(project);
      setIsLoading(false);
    }
    if (props.id !== "") getProject();
  }, [props.id]);
  return (
    <Modal
      isOpen={props.open}
      onRequestClose={() => props.setOpen()}
      contentLabel='Projekt'
      style={modalStyles}
    >
      {isLoading ? (
        <FlexDiv margin='30px'>
          <Loader />
        </FlexDiv>
      ) : (
        <>
          <FlexDiv dir='column' tabletDir='row' gap='20px'>
            <FlexDiv>
              <StyledImage
                borderRad='7px'
                tabletWidth='100%'
                tabletHeight='100%'
                height='60%'
                width='60%'
                hover='pointer'
                src={proj?.image}
              />
            </FlexDiv>
            <FlexDiv dir='column' align='start' gap='5px'>
              <StyledH2 margin='0 0 0 5px' fontSize='34px'>
                {proj?.name}
              </StyledH2>
              <StyledH5>About:</StyledH5>
              <StyledP color={colors.black}>{proj?.longDescription}</StyledP>
              <StyledH5>Tech:</StyledH5>
              <FlexDiv justify='start' wrap='wrap'>
                {proj?.tech.map((tech: string, i: number) => (
                  <FlexDiv
                    height='min-content'
                    width='max-content'
                    margin='5px'
                    key={i}
                  >
                    <FlexDiv border='1px solid black' borderRad='3px'>
                      <StyledP fontSize='12px'>{tech}</StyledP>
                    </FlexDiv>
                  </FlexDiv>
                ))}
              </FlexDiv>
              <StyledH5>Links:</StyledH5>
              <FlexDiv justify='start'>
                {proj?.link && (
                  <StyledA
                    data-cy='website'
                    target='_blank'
                    rel='noopener noreferrer'
                    href={proj?.link}
                  >
                    <AiOutlineLink />
                  </StyledA>
                )}
                {proj?.github && (
                  <StyledA
                    target='_blank'
                    rel='noopener noreferrer'
                    href={proj?.github}
                  >
                    <FaGithub />
                  </StyledA>
                )}
              </FlexDiv>
            </FlexDiv>
          </FlexDiv>
        </>
      )}
    </Modal>
  );
};
