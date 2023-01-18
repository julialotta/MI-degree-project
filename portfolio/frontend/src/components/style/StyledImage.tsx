import styled from "styled-components";
import { device } from "./Mixins";
import { IStylingProps } from "./StyledInterface";

export const StyledImage = styled.img`
  position: ${(props: IStylingProps) => props.position || "static"};
  width: ${(props: IStylingProps) => props.width || "100%"};
  top: ${(props: IStylingProps) => props.top || ""};
  left: ${(props: IStylingProps) => props.left || ""};
  display: flex;
  margin: ${(props: IStylingProps) => props.margin || "0"};
  height: ${(props: IStylingProps) => props.height || "100%"};
  min-height: ${(props: IStylingProps) => props.minHeight || "x"};
  max-height: ${(props: IStylingProps) => props.maxHeight || "x"};
  min-width: ${(props: IStylingProps) => props.minWidth || "x"};
  max-width: ${(props: IStylingProps) => props.maxWidth || "x"};
  border-radius: ${(props: IStylingProps) => props.borderRad || "0"};
  filter: drop-shadow(${(props: IStylingProps) => props.shadow || 0});
  -webkit-filter: drop-shadow(${(props: IStylingProps) => props.shadow || 0});
  @media ${device.tablet} {
    width: ${(props: IStylingProps) => props.tabletWidth || props.width};
  }
  :hover {
    transform: ${(props: IStylingProps) => props.transform || "scale(1)"};
    transition: transform 330ms ease-in-out;
  }
`;
