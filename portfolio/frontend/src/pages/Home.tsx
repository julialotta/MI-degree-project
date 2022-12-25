import { GlobalStyle } from "../components/style/fonts";
import { colors } from "../components/style/Mixins";
import { StyledH1, StyledP } from "../components/style/StyledTextElements";
import { FlexDiv } from "../components/style/Wrappers";
import { motion } from "framer-motion";
import { NoiseDiv } from "../components/NoiseDiv";

export const Home = () => {
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
          dir='column'
          width='90%'
          align='left'
          z='100'
          margin='20px 0 0 0'
        >
          <StyledH1>Hi there. I’m Julia-Lotta, nice to meet you.</StyledH1>

          <StyledP
            fontSize='35px'
            textAlign='left'
            lineheight='35px'
            style={{ display: "inline" }}
          >
            I'm an aspiring
            <StyledP
              as={motion.p}
              drag
              style={{ display: "inline" }}
              fontSize='35px'
              lineheight='35px'
              hover='pointer'
            >
              <strong>Front End Developer</strong>{" "}
            </StyledP>
            currently studying at Medieinstitutet in Stockholm. I have
            background in music and prior to my studies I worked as a project
            &#38; marketing manager. I love to
            <StyledP
              as={motion.p}
              drag
              style={{ display: "inline" }}
              fontSize='35px'
              lineheight='35px'
              hover='pointer'
            >
              <strong>create stuff</strong>
            </StyledP>
            and see them grow. Along with my studies I've already built some
            stuff that I'm kind of proud of. Please have a look around and check
            out my projects.
          </StyledP>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
