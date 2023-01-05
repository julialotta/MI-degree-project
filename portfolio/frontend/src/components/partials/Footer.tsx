import { GlobalStyle } from "../style/fonts";
import { FlexDiv } from "../style/Wrappers";
import { StyledA, StyledP } from "../style/StyledTextElements";
import { FaLinkedin, FaGithub, FaInstagram, FaSpotify } from "react-icons/fa";
import { BsMailbox } from "react-icons/bs";
import { colors } from "../style/Mixins";

export const Footer = () => {
  return (
    <>
      <GlobalStyle />
      <FlexDiv dir='column' margin='30px 0' gap='10px'>
        <FlexDiv gap='15px' z='100'>
          <StyledA
            hovercolor={colors.orange}
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:julia-lotta@tingloef.se'
          >
            <BsMailbox size='35px' />
          </StyledA>
          <StyledA
            hovercolor={colors.orange}
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/julialottatinglof/'
            z='100'
          >
            <FaLinkedin size='35px' />
          </StyledA>
          <StyledA
            hovercolor={colors.orange}
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/julialotta'
          >
            <FaGithub size='35px' />
          </StyledA>

          <StyledA
            hovercolor={colors.orange}
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.instagram.com/julialotta/'
          >
            <FaInstagram size='35px' />
          </StyledA>
          <StyledA
            hovercolor={colors.orange}
            target='_blank'
            rel='noopener noreferrer'
            href='https://open.spotify.com/artist/0DUdFRHNgttxt3gqOEW1ak?si=ZIRiPULARYC9JZZeeCq0GQ'
          >
            <FaSpotify size='35px' />
          </StyledA>
        </FlexDiv>
        <StyledP fontSize='14px' textAlign='center'>
          Copyright &#169; 2023 Tingloef. All rights reserved <br />
        </StyledP>
      </FlexDiv>
    </>
  );
};
