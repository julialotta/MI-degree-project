import { GlobalStyle } from "../style/fonts";
import { StyledImage } from "../style/StyledImage";
import { FlexDiv, ScrollDiv } from "../style/Wrappers";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { motion, useScroll } from "framer-motion";

export const Header = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <GlobalStyle />
      <ScrollDiv as={motion.div} style={{ scaleX: scrollYProgress }} />
      <FlexDiv height='100px'>
        <FlexDiv margin='10px 20px' align='center' z='1'>
          <Link to={"/"}>
            <StyledImage
              width='200px'
              height='none'
              src={logo}
              margin='0 0 0 15px'
            />
          </Link>
          <FlexDiv justify='flex-end' margin='10px' gap='10px' z='2'>
            <Navbar />
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
