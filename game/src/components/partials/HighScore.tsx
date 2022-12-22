import { GlobalStyle } from "../style/fonts";
import { FlexDiv } from "../style/Wrappers";
import { StyledH2, StyledLink } from "../style/StyledTextElements";

export const HighScore = () => {
  return (
    <>
      <GlobalStyle />
      <FlexDiv>
        <FlexDiv margin='10px 20px' align='space-between' z='1'>
          <StyledLink to={"/"}>
            <StyledH2>Highscore</StyledH2>
          </StyledLink>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
