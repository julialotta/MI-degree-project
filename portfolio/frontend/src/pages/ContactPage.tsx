import { NoiseDiv } from "../components/NoiseDiv";
import { GlobalStyle } from "../components/style/fonts";
import { FlexDiv } from "../components/style/Wrappers";
import {
  StyledA,
  StyledH2,
  StyledP,
} from "../components/style/StyledTextElements";
import { FaLinkedin, FaSpotify, FaInstagram, FaGithub } from "react-icons/fa";
import { BsMailbox } from "react-icons/bs";
import { GrLocationPin } from "react-icons/gr";
import { colors } from "../components/style/Mixins";
export const ContactPage = () => {
  return (
    <>
      <GlobalStyle />
      <FlexDiv
        background={colors.red}
        minHeight='100vh'
        padding='10px'
        justify='start'
        align='center'
        dir='column'
      >
        <NoiseDiv className='noise' />
        <StyledH2>Get in touch</StyledH2>
        <FlexDiv margin='40px 0' dir='column' gap='15px'>
          <StyledP fontSize='26px' textAlign='center'>
            Julia-Lotta Tinglöf <br />
          </StyledP>
          <StyledP fontSize='26px' textAlign='center' justify='center'>
            <FlexDiv align='center' justify='center'>
              <GrLocationPin size='26px' />
              Stockholm, Sweden
            </FlexDiv>
          </StyledP>
        </FlexDiv>

        <FlexDiv gap='15px' margin='20px 0' z='100'>
          <StyledA
            hovercolor={colors.white}
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:julia-lotta@tingloef.se'
          >
            <BsMailbox size='44px' />
          </StyledA>
          <StyledA
            hovercolor={colors.white}
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/julialottatinglof/'
            z='100'
          >
            <FaLinkedin size='44px' />
          </StyledA>
          <StyledA
            hovercolor={colors.white}
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/julialotta'
          >
            <FaGithub size='44px' />
          </StyledA>

          <StyledA
            hovercolor={colors.white}
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.instagram.com/julialotta/'
          >
            <FaInstagram size='44px' />
          </StyledA>
          <StyledA
            hovercolor={colors.white}
            target='_blank'
            rel='noopener noreferrer'
            href='https://open.spotify.com/artist/0DUdFRHNgttxt3gqOEW1ak?si=ZIRiPULARYC9JZZeeCq0GQ'
          >
            <FaSpotify size='44px' />
          </StyledA>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
