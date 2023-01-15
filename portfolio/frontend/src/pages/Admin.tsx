import { GlobalStyle } from "../components/style/fonts";
import { colors } from "../components/style/Mixins";
import { StyledH1, StyledP } from "../components/style/StyledTextElements";
import { FlexDiv } from "../components/style/Wrappers";
import { motion } from "framer-motion";
import logo from "../assets/favicon.png";
import { NoiseDiv } from "../components/NoiseDiv";
import { CookiesModal } from "../components/partials/Modal";
import { StyledImage } from "../components/style/StyledImage";
import { getUser } from "../utils/services";
import { useEffect, useState } from "react";

//! göra en adminsida där man kan lägga till projekt
// npm install --save multer
export const AdminPage = () => {
  const [user, setUser] = useState(true);

  const animations = {
    initial: { opacity: 0, y: "100vh" },
    animate: { opacity: 1, y: "0%" },
    exit: { opacity: 0 },
  };

  useEffect(() => {
    let user: [] = getUser();

    if (user.length !== 0) {
      setUser(false);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <FlexDiv
        background={colors.green}
        minHeight='70vh'
        align='start'
        padding='100px 0 0 0'
      >
        {user && <CookiesModal />}
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
              transition={{ duration: 0.6 }}
            >
              Hi there, nice to meet you.
            </StyledH1>
            <StyledP
              fontSize='45px'
              as={motion.p}
              variants={animations}
              initial='initial'
              animate='animate'
              exit='exit'
              transition={{ duration: 0.6 }}
            >
              I’m Julia-Lotta, a front end developer based in Stockholm.
            </StyledP>
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
