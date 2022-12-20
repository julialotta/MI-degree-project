import Abril from "../../fonts/AbrilFatface-Regular.ttf";
import FuturaLight from "../../fonts/FuturaLightBT.ttf";
import FuturaBook from "../../fonts/FuturaPTBook.otf";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Abril';
    src: url(${Abril}) format('truetype');
    
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
    font-family: 'Abril';
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
