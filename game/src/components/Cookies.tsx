import { Link } from "react-router-dom";
import { StyledButton } from "./style/StyledButton";
import { StyledH3, StyledP } from "./style/StyledTextElements";
import { GlobalStyle } from "./style/fonts";
import { colors } from "./style/Mixins";
import { FlexDiv } from "./style/Wrappers";

export const CookiesPage = () => {
  return (
    <>
      <GlobalStyle />

      <FlexDiv
        background={colors.white}
        width={"100%"}
        dir={"column"}
        minHeight='100vh'
        justify='start'
        position={"relative"}
      >
        <FlexDiv
          dir={"column"}
          justify={"start"}
          background={colors.white}
          position={"relative"}
          width={"400px"}
          minHeight='100vh'
          shadow={
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
          }
        >
          <FlexDiv
            dir='column'
            width='400px'
            position='relative'
            height='200px'
            background={colors.white}
            z='0'
          >
            <FlexDiv
              position='relative'
              z='100'
              height='200px'
              background={colors.orange}
            >
              <FlexDiv
                top={"40px"}
                left={"-160px"}
                position='absolute'
              ></FlexDiv>
            </FlexDiv>
          </FlexDiv>
          <FlexDiv
            dir='column'
            justify='start'
            position='relative'
            background={colors.white}
            width='370px'
            bottom='5px'
            margin='-90px 0 0 0'
          >
            <StyledButton margin='0 0 30px 0'>
              <Link to='/'>Tillbaka</Link>
            </StyledButton>
            <StyledH3 color={colors.black}>
              Så använder vi kakor <br />
            </StyledH3>
            <StyledP color={colors.black}>
              En kaka, eller cookie, är en textfil som lagras på din dator,
              mobiltelefon eller annan enhet när du besöker en webbplats. <br />
              <br />
              Kakor används för att känna igen din enhet nästa gång som du
              besöker webbplatsen. <br />
              <br />
              Det finns även andra liknande tekniker, t.ex. pixeltaggar
              (genomskinliga bilder som kan finnas i e-post som skickas till
              dig) och webblagring (som kan användas för att lagra information i
              din enhets webbläsare). <br />
              På den här sidan kallar vi alla dessa typer av tekniker för
              ”kakor”.
              <br />
              <br />
              Vi använder både sessionskakor och beständiga kakor: Sessionskakor
              lagras under den tid som du använder webbplatsen och raderas när
              du stänger ner din webbläsare. Beständiga kakor lagras på din
              enhet under en viss tid eller till dess att du tar bort dem.{" "}
              <br />
              Vi använder både förstapartskakor och tredjepartskakor:
              Förstapartskakor ställs in av webbplatsen som du besöker.
              <br />
              Tredjepartskakor ställs in av någon annan än webbplatsen som du
              besöker.
            </StyledP>
            <FlexDiv dir='column' width='100%' margin='0 0 10px 0'></FlexDiv>
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
