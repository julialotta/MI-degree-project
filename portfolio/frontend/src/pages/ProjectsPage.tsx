import { NoiseDiv } from "../components/NoiseDiv";
import { GlobalStyle } from "../components/style/fonts";
import { colors } from "../components/style/Mixins";
import { StyledImage } from "../components/style/StyledImage";
import {
  StyledA,
  StyledH3,
  StyledH5,
  StyledP,
} from "../components/style/StyledTextElements";
import { FlexDiv } from "../components/style/Wrappers";
import { projects } from "../data/projects";
import { useState } from "react";
import { ITech } from "../models/IProjects";

export const ProjectsPage = () => {
  const [image, setImage] = useState("");

  return (
    <>
      <GlobalStyle />
      <FlexDiv
        position='relative'
        background={colors.green}
        minHeight='100vh'
        align='start'
      >
        <NoiseDiv className='noise' />
        <FlexDiv
          margin='30px 50px'
          height='100%'
          z='1'
          align='start'
          gap='20px'
        >
          <FlexDiv>
            {image !== "" ? (
              <StyledImage
                borderRad='7px'
                hover='pointer'
                src={image}
              ></StyledImage>
            ) : null}
          </FlexDiv>
          <FlexDiv dir='column' justify='start' align='start'>
            <StyledH3 textAlign='left'>Projects</StyledH3>
            <StyledH5 margin='20px 5px 5px 5px'>Work</StyledH5>
            <FlexDiv background='black' height='0.5px' />
            {projects.map((p) =>
              p.tag === "work" ? (
                <>
                  <StyledA
                    onMouseOver={() => setImage(p.image)}
                    key={p.id}
                    href={p.link}
                    target='_blank'
                    margin='20px 5px 0px 5px'
                    rel='noopener noreferrer'
                  >
                    {p.name}
                  </StyledA>
                  <StyledP margin='0 0 0 5px'>{p.description}</StyledP>
                  <FlexDiv justify='start' width='100%' wrap='wrap'>
                    {p.tech.map((tech: ITech) => (
                      <FlexDiv width='max-content' margin='5px'>
                        <FlexDiv border='1px solid black' borderRad='3px'>
                          <StyledP fontSize='12px'>{tech.tech}</StyledP>
                        </FlexDiv>
                      </FlexDiv>
                    ))}
                  </FlexDiv>
                </>
              ) : null
            )}
            <StyledH5 margin='20px 5px 5px 5px'>School</StyledH5>
            <FlexDiv background='black' height='0.5px' />
            {projects.map((p) =>
              p.tag === "school" ? (
                <>
                  <StyledA
                    onMouseOver={() => setImage(p.image)}
                    href={p.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {p.name}
                  </StyledA>
                  <FlexDiv justify='start' width='90%' wrap='wrap'>
                    {p.tech.map((tech: ITech) => (
                      <FlexDiv width='max-content' margin='5px'>
                        <FlexDiv border='1px solid black' borderRad='3px'>
                          <StyledP fontSize='12px'>{tech.tech}</StyledP>
                        </FlexDiv>
                      </FlexDiv>
                    ))}
                  </FlexDiv>
                </>
              ) : null
            )}
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
