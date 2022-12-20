import { GlobalStyle } from "../style/fonts";
import { FlexDiv } from "../style/Wrappers";
import { StyledH1, StyledLink } from "../style/StyledTextElements";

export const Header = () => {
  return (
    <>
      <GlobalStyle />
      <FlexDiv>
        <FlexDiv margin='10px 20px' align='space-between' z='1'>
          <StyledLink to={"/"}>
            <StyledH1>Debugger Jullan</StyledH1>
          </StyledLink>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
