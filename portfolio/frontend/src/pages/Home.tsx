import { GlobalStyle } from "../components/style/fonts";
import { colors } from "../components/style/Mixins";
import { StyledH1, StyledP } from "../components/style/StyledTextElements";
import { FlexDiv } from "../components/style/Wrappers";
import { motion } from "framer-motion";
import logo from "../assets/favicon.png";
import { NoiseDiv } from "../components/NoiseDiv";
import { CookiesModal } from "../components/partials/Modal";
import { StyledImage } from "../components/style/StyledImage";

//TODO animera texten
export const Home = () => {
  const animations = {
    initial: { opacity: 0, y: "100vh" },
    animate: { opacity: 1, y: "0%" },
    exit: { opacity: 0, y: "-100vh" },
  };

  return (
    <>
      <GlobalStyle />
      <FlexDiv
        background={colors.green}
        minHeight='70vh'
        align='start'
        padding='100px 0 0 0'
      >
        <CookiesModal />
        <NoiseDiv className='noise' />
        <FlexDiv
          width='90%'
          tabletWidth='70%'
          laptopWidth='60%'
          dir='column'
          tabletDir='row'
          gap='50px'
          align='start'
          z='100'
          margin='20px 0 0 0'
        >
          <StyledImage width='200px' src={logo}></StyledImage>
          <FlexDiv dir='column'>
            <StyledH1
              fontSize='52px'
              as={motion.h1}
              variants={animations}
              initial='initial'
              animate='animate'
              exit='exit'
              transition={{ duration: 2 }}
            >
              Hi there, nice to meet you.
            </StyledH1>
            <StyledP fontSize='45px' as={motion.p}>
              I’m Julia-Lotta, a front end developer based in Stockholm.
            </StyledP>
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
