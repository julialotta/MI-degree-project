import { NoiseDiv } from "../components/NoiseDiv";
import { GlobalStyle } from "../components/style/fonts";
import { colors } from "../components/style/Mixins";
import { StyledImage } from "../components/style/StyledImage";
import { StyledH3, StyledP } from "../components/style/StyledTextElements";
import { FlexDiv } from "../components/style/Wrappers";
import { projects } from "../data/projects";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProjects } from "../models/IProjects";

export const SingleProjectPage = () => {
  const [project, setProject] = useState<IProjects>();

  const id = useParams();

  //ADDING DIFFERENT CATEGORIES(tags) OF PROJECTS
  useEffect(() => {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id.toString() === id.id) {
        setProject(projects[i]);
      }
    }
  }, [id.id]);

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
            <StyledImage
              borderRad='7px'
              hover='pointer'
              src={project?.image}
            ></StyledImage>
          </FlexDiv>
          <FlexDiv dir='column' justify='start' align='start' gap='30px'>
            <>
              <StyledH3 textAlign='left'>{project?.name}</StyledH3>
              <FlexDiv background='black' height='0.5px' />

              <StyledP margin='0 0 0 5px'>{project?.description}</StyledP>
              <FlexDiv justify='start' width='100%' wrap='wrap'>
                {project?.tech.map((tech: string, i: number) => (
                  <FlexDiv width='max-content' margin='5px' key={i}>
                    <FlexDiv border='1px solid black' borderRad='3px'>
                      <StyledP fontSize='12px'>{tech}</StyledP>
                    </FlexDiv>
                  </FlexDiv>
                ))}
              </FlexDiv>
            </>
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
