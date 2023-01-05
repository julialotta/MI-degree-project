import { Link } from "react-router-dom";
import { StyledButton } from "./style/StyledButton";
import { StyledH3, StyledP } from "./style/StyledTextElements";
import { GlobalStyle } from "./style/fonts";
import { colors } from "./style/Mixins";
import { FlexDiv } from "./style/Wrappers";
import { NoiseDiv } from "./NoiseDiv";

export const CookiesPage = () => {
  return (
    <>
      <GlobalStyle />

      <FlexDiv
        position='relative'
        background={colors.orange}
        minHeight='100vh'
        align='start'
      >
        <NoiseDiv className='noise' />
        <FlexDiv
          margin='30px 50px'
          height='100%'
          z='1'
          align='center'
          justify='start'
          gap='50px'
          dir='column'
        >
          <StyledButton margin='0 0 30px 0' background='black'>
            <Link to='/'>Tillbaka</Link>
          </StyledButton>
          <StyledH3 color={colors.black}>
            Så använder vi kakor <br />
          </StyledH3>
          <StyledP color={colors.black}>
            En kaka, eller cookie, är en textfil som lagras på din dator,
            mobiltelefon eller annan enhet när du besöker en webbplats. <br />
            <br />
            Kakor används för att känna igen din enhet nästa gång som du besöker
            webbplatsen. <br />
            <br />
            Det finns även andra liknande tekniker, t.ex. pixeltaggar
            (genomskinliga bilder som kan finnas i e-post som skickas till dig)
            och webblagring (som kan användas för att lagra information i din
            enhets webbläsare). <br />
            På den här sidan kallar vi alla dessa typer av tekniker för ”kakor”.
            <br />
            <br />
            Vi använder både sessionskakor och beständiga kakor: Sessionskakor
            lagras under den tid som du använder webbplatsen och raderas när du
            stänger ner din webbläsare. Beständiga kakor lagras på din enhet
            under en viss tid eller till dess att du tar bort dem. <br />
            Vi använder både förstapartskakor och tredjepartskakor:
            Förstapartskakor ställs in av webbplatsen som du besöker.
            <br />
            Tredjepartskakor ställs in av någon annan än webbplatsen som du
            besöker.
          </StyledP>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
