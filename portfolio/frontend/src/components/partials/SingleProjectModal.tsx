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
import { CgWebsite } from "react-icons/cg";
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
    zIndex: "1000",
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
    getProject();
  }, [props.id]);
  return (
    <Modal
      isOpen={props.open}
      onRequestClose={() => props.setOpen()}
      contentLabel='Projekt'
      style={modalStyles}
    >
      <FlexDiv dir='column' width={"100%"}>
        {isLoading ? (
          <FlexDiv margin='30px'>
            <Loader />
          </FlexDiv>
        ) : (
          <>
            <FlexDiv dir='column' tabletDir='row'>
              <FlexDiv>
                <StyledImage
                  borderRad='7px'
                  width='30%'
                  tabletWidth='40%'
                  height='30%'
                  tabletHeight='40%'
                  hover='pointer'
                  src={proj?.image}
                />
              </FlexDiv>
              <FlexDiv dir='column' align='start'>
                <StyledH2 margin='0 0 0 5px' fontSize='34px'>
                  {proj?.name}
                </StyledH2>
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
                      target='_blank'
                      rel='noopener noreferrer'
                      href={proj?.link}
                    >
                      <CgWebsite />
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
      </FlexDiv>
    </Modal>
  );
};
