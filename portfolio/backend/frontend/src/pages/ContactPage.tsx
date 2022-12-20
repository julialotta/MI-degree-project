import { NoiseDiv } from "../components/NoiseDiv";
import { GlobalStyle } from "../components/style/fonts";
import { FlexDiv } from "../components/style/Wrappers";
import { StyledA, StyledP } from "../components/style/StyledTextElements";
import { FaLinkedin, FaSpotify, FaInstagram, FaGithub } from "react-icons/fa";
import { BsMailbox, BsStackOverflow } from "react-icons/bs";
import { GrLocationPin } from "react-icons/gr";
export const ContactPage = () => {
  return (
    <>
      <GlobalStyle />
      <FlexDiv>
        <NoiseDiv className='noise' />
        <FlexDiv z='100' dir='column' gap='20px'>
          <StyledP fontSize='30px'>
            Julia-Lotta Tinglöf <br />
          </StyledP>
          <FlexDiv>
            <GrLocationPin size='44px' />
            <StyledP fontSize='30px'>Stockholm, Sweden</StyledP>
          </FlexDiv>

          <FlexDiv gap='10px'>
            <StyledA href='mailto:julia-lotta@tingloef.se'>
              <BsMailbox size='44px' />
            </StyledA>
            <StyledA href='linkedin.se' z='100'>
              <FaLinkedin size='44px' />
            </StyledA>
            <StyledA href='mailto:julia-lotta@tingloef.se'>
              <FaSpotify size='44px' />
            </StyledA>
            <StyledA href='mailto:julia-lotta@tingloef.se'>
              <FaInstagram size='44px' />
            </StyledA>
            <StyledA href='mailto:julia-lotta@tingloef.se'>
              <FaGithub size='44px' />
            </StyledA>
            <StyledA href='mailto:julia-lotta@tingloef.se'>
              <BsStackOverflow size='44px' />
            </StyledA>
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
