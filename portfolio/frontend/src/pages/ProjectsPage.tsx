import React, { useEffect, useRef, useState } from "react";
import { NoiseDiv } from "../components/NoiseDiv";
import { GlobalStyle } from "../components/style/fonts";
import { colors } from "../components/style/Mixins";
import { StyledImage } from "../components/style/StyledImage";
import {
  StyledH2,
  StyledH3,
  StyledH5,
  StyledP,
} from "../components/style/StyledTextElements";
import { FlexDiv, ScrollDiv } from "../components/style/Wrappers";
import { ProjectModal } from "../components/partials/SingleProjectModal";
import { IProjects } from "../models/IProjects";
import { fetchProjects } from "../utils/services/handleFetch.service";
import { motion, useScroll } from "framer-motion";
import { Loader } from "../components/Loader";

export const ProjectsPage = () => {
  const [image, setImage] = useState("/JL.png");
  const [projectTags, setProjectTags] = useState<string[]>([]);
  const [projects, setProjects] = useState<IProjects[]>([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  useEffect(() => {
    async function getProjects() {
      const projs = await fetchProjects();
      setProjects(projs);
      setIsLoading(false);
    }
    getProjects();
  }, []);

  //ADDING DIFFERENT CATEGORIES(tags) OF PROJECTS
  useEffect(() => {
    let tempArray: string[] = [];
    for (let i = 0; i < projects.length; i++) {
      if (tempArray.includes(projects[i].tag) === false) {
        tempArray.push(projects[i].tag);
      }
    }
    setProjectTags(tempArray);
  }, [projects]);

  return (
    <>
      <GlobalStyle />
      <FlexDiv
        background={colors.green}
        minHeight='100vh'
        justify='start'
        dir='column'
        padding='20px 0'
      >
        <ProjectModal id={id} open={open} setOpen={() => setOpen(false)} />
        <NoiseDiv className='noise' />
        <StyledH2 textAlign='left'>Projects </StyledH2>
        <FlexDiv
          margin='30px 50px 70px 50px'
          height='100%'
          z='1'
          align='center'
          gap='50px'
          dir='column'
          tabletDir='row'
        >
          <FlexDiv height='350px' position='sticky' top='70px' left='40px'>
            <StyledImage
              borderRad='2px'
              width='x'
              height='330px'
              tabletHeight='400px'
              hover='pointer'
              src={image}
            />
          </FlexDiv>

          <FlexDiv
            dir='column'
            justify='start'
            align='start'
            height='450px'
            overflow='scroll'
            ref={ref}
            position='relative'
          >
            {isLoading ? (
              <FlexDiv justify='start' padding='0 0 0 80px'>
                <Loader />
              </FlexDiv>
            ) : (
              <>
                <ScrollDiv
                  as={motion.div}
                  style={{ scaleX: scrollYProgress }}
                />
                {projectTags.map((pt) => (
                  <FlexDiv
                    dir='column'
                    align='start'
                    key={pt}
                    padding='30px 0 0 10px'
                    overflow='visible'
                    minHeight='min-contect'
                    width='90%'
                  >
                    <StyledH5 key={pt}>{pt}</StyledH5>
                    <FlexDiv background='black' height='0.5px' />

                    {projects.map(
                      (p) =>
                        p.tag === pt && (
                          <FlexDiv
                            dir='column'
                            align='start'
                            key={p._id}
                            gap='10px'
                          >
                            <StyledH3
                              onClick={() => {
                                setOpen(true);
                                setId(p._id);
                              }}
                              onMouseOver={() => setImage(p.image)}
                              key={p._id}
                              data-cy={p._id}
                              margin='5px 5px 0px 5px'
                              hover='pointer'
                            >
                              {p.name}
                            </StyledH3>
                            <StyledP margin='0 0 0 5px'>
                              {p.description}
                            </StyledP>
                            <FlexDiv
                              justify='start'
                              width='100%'
                              wrap='wrap'
                              margin='0 0 40px 0'
                            >
                              {p.tech.map((tech: string, i: number) => (
                                <FlexDiv
                                  width='max-content'
                                  margin='5px'
                                  key={i}
                                  height='30px'
                                >
                                  <FlexDiv
                                    border='1px solid black'
                                    borderRad='3px'
                                  >
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
              </>
            )}
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
