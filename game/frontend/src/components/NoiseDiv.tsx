import styled from "styled-components";
import { FlexDiv } from "./style/Wrappers";

type BackgroundProps = {
  children: React.ReactNode;
};

export const NoiseDiv = styled.div`
  background-image: url("https://itssharl.ee/noise.png");
  background-repeat: repeat;
  opacity: 0.45;
  animation: grain 7s steps(10) infinite;
  -webkit-animation: grain 7s steps(10) infinite;
  background-size: 200px;
  height: 600%;

  width: 600%;
  top: -300%;
  left: -150%;
  position: absolute;

  @keyframes grain {
    0%,
    100% {
      transform: translate(0);
    }

    10% {
      transform: translate(-5%, -10%);
    }
    20% {
      transform: translate(-15%, 5%);
    }
    30% {
      transform: translate(7%, -25%);
    }
    40% {
      transform: translate(-5%, 25%);
    }
    50% {
      transform: translate(-15%, 10%);
    }
    60% {
      transform: translate(15%);
    }
    70% {
      transform: translateY(15%);
    }
    80% {
      transform: translate(3%, 35%);
    }
    90% {
      transform: translate(-10%, 10%);
    }
  }
`;

export const Noise = (props: BackgroundProps) => {
  return (
    <FlexDiv>
      <NoiseDiv>{props.children}</NoiseDiv>
    </FlexDiv>
  );
};
