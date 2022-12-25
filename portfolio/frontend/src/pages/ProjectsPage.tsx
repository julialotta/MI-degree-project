import { NoiseDiv } from "../components/NoiseDiv";
import { GlobalStyle } from "../components/style/fonts";
import { colors } from "../components/style/Mixins";
import { StyledImage } from "../components/style/StyledImage";
import {
  StyledA,
  StyledH2,
  StyledH5,
  StyledP,
} from "../components/style/StyledTextElements";
import { FlexDiv } from "../components/style/Wrappers";
import { projects } from "../data/projects";
import React, { useEffect, useState } from "react";

export const ProjectsPage = () => {
  const [image, setImage] = useState("/JL.png");
  const [projectTags, setProjectTags] = useState<string[]>([]);

  //ADDING DIFFERENT CATEGORIES(tags) OF PROJECTS
  useEffect(() => {
    let tempArray: string[] = [];
    for (let i = 0; i < projects.length; i++) {
      if (tempArray.includes(projects[i].tag) === false) {
        tempArray.push(projects[i].tag);
      }
    }
    setProjectTags(tempArray);
  }, []);

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
          gap='50px'
        >
          <FlexDiv margin='20px 0 0 0'>
            <StyledImage
              borderRad='2px'
              width='80%'
              hover='pointer'
              src={image}
            ></StyledImage>
          </FlexDiv>
          <FlexDiv
            dir='column'
            justify='start'
            align='start'
            gap='5px'
            height='400px'
            overflowY='scroll'
          >
            <StyledH2 textAlign='left'>Projects {projects.length}</StyledH2>
            {projectTags.map((pt) => (
              <FlexDiv dir='column' key={pt} height='200px'>
                <StyledH5 key={pt} margin='20px 5px 5px 5px'>
                  {pt}
                </StyledH5>
                <FlexDiv background='black' height='0.5px' />

                {projects.map(
                  (p) =>
                    p.tag === pt && (
                      <FlexDiv
                        dir='column'
                        align='start'
                        height='300px'
                        gap='5px'
                      >
                        <StyledA
                          onMouseOver={() => setImage(p.image)}
                          key={p.id}
                          href={"projects/" + p.id}
                          margin='20px 5px 0px 5px'
                        >
                          {p.name}
                        </StyledA>
                        <StyledP margin='0 0 0 5px'>{p.description}</StyledP>
                        <FlexDiv justify='start' width='100%' wrap='wrap'>
                          {p.tech.map((tech: string, i: number) => (
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
                      </FlexDiv>
                    )
                )}
              </FlexDiv>
            ))}
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
