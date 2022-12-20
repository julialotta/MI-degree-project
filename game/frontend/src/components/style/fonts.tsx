import PressStart from "../../fonts/PressStart.ttf";
import FuturaLight from "../../fonts/FuturaLightBT.ttf";
import FuturaBook from "../../fonts/FuturaPTBook.otf";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PressStart';
    src: url(${PressStart}) format('truetype');
    
  }
  @font-face {
    font-family: 'FuturaLight';
    src: url(${FuturaLight}) format('truetype');
  }
  @font-face {
    font-family: 'FuturaBook';
    src: url(${FuturaBook}) format('truetype');
   
  }
  
  h1,h2 {
    font-family: 'PressStart';
  }

  h3, h4,h5 {
    font-family: 'FuturaLight';
  }
 
p {
  font-family: 'FuturaBook';
}
a, button {
  font-family: 'FuturaBook';
  }
`;
