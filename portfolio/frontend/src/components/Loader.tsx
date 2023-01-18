import styled from "styled-components";
import { colors } from "./style/Mixins";
export const Loader = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;

  :after {
    content: " ";
    display: block;
    width: 100px;
    height: 100px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: ${colors.white} transparent ${colors.white} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
