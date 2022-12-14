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
      <FlexDiv position='relative' background={colors.green} minHeight='100vh'>
        <NoiseDiv className='noise' />
        <FlexDiv dir='column' width='100%' align='left' z='1'>
          <StyledH1
            as={motion.h1}
            drag
            fontSize='100px'
            tabletFontSize='170px'
            lineheight='100px'
            tabletLineheight='170px'
            textAlign='left'
          >
            Hi, I'm <br /> Julia-Lotta
          </StyledH1>

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
            currently studying at Medieinstitutet in Stockholm, Sweden. Prior to
            my studies I worked as a project &#38; marketing manager at the
            music company Jubel. I had a lot of fun there, but to be honest I
            think coding is more fun than sending e-mails. I think I think that
            because I like to
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
            and see them grow. Kind of like writing a song, only it's easier to
            know if you're any good at it. Along with my studies I've already
            built some stuff that I'm kind of proud of. I built an App in React
            Native while learning to code. I guess you can kind of say that that
            project was what taught me how to code.
          </StyledP>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
