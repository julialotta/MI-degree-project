import { Link } from "react-router-dom";
import { StyledButton } from "./style/StyledButton";
import { StyledH3 } from "./style/StyledTextElements";
import { GlobalStyle } from "./style/fonts";
import { colors } from "./style/Mixins";
import { FlexDiv } from "./style/Wrappers";

export const NotFound = () => {
  return (
    <>
      <GlobalStyle />
      <FlexDiv
        dir='column'
        position='relative'
        background={colors.white}
        minHeight={"100vh"}
      >
        <StyledH3 color={colors.black}>Hoppsan! Nu blev det fel</StyledH3>
        <StyledButton>
          <Link to='/'>Till startsidan</Link>
        </StyledButton>
        <FlexDiv dir='column' width='100%' margin='0 0 10px 0'>
          <FlexDiv
            align='start'
            width='90%'
            gap='30px'
            wrap='wrap'
            margin='50px 0 90px 0'
          ></FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
