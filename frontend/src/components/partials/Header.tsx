import { GlobalStyle } from "../style/fonts";
import { StyledImage } from "../style/StyledImage";
import { FlexDiv } from "../style/Wrappers";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const Header = () => {
  return (
    <>
      <GlobalStyle />
      <FlexDiv>
        <FlexDiv margin='10px 20px' align='space-between' z='1'>
          <Link to={"/"}>
            <StyledImage
              width='200px'
              height='none'
              src={logo}
              margin='0 0 0 15px'
            />
          </Link>
          <FlexDiv justify='flex-end' margin='10px' gap='10px'>
            <Navbar />
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
