import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IStylingProps } from "./StyledInterface";
import { colors, device } from "./Mixins";

export const StyledH1 = styled.h1`
  color: ${(props: IStylingProps) => props.color || colors.black};
  text-decoration: none;
  text-align: ${(props: IStylingProps) => props.textAlign || 0};
  font-size: ${(props: IStylingProps) => props.fontSize || "44px"};
  margin: ${(props: IStylingProps) => props.margin || "0px"};
  line-height: ${(props: IStylingProps) => props.lineheight || "default"};
  @media ${device.tablet} {
    line-height: ${(props: IStylingProps) =>
      props.tabletLineheight || props.lineheight};
    font-size: ${(props: IStylingProps) =>
      props.tabletFontSize || props.fontSize};
  }
`;

export const StyledH2 = styled.h2`
  color: ${(props: IStylingProps) => props.color || colors.black};
  text-decoration: none;
  text-align: ${(props: IStylingProps) => props.textAlign || 0};
  font-size: ${(props: IStylingProps) => props.fontSize || "44px"};
  margin: ${(props: IStylingProps) => props.margin || "0px"};
  line-height: ${(props: IStylingProps) => props.lineheight || "default"};
  @media ${device.tablet} {
    line-height: ${(props: IStylingProps) =>
      props.tabletLineheight || props.lineheight};
    font-size: ${(props: IStylingProps) =>
      props.tabletFontSize || props.fontSize};
  }
`;

export const StyledH3 = styled.h3`
  color: ${(props: IStylingProps) => props.color || colors.black};
  font-size: 18px;
  text-align: center;
  text-transform: ${(props: IStylingProps) => props.textTransform || "none"};
  font-size: ${(props: IStylingProps) => props.fontSize || "30px"};
  text-shadow: ${(props: IStylingProps) => props.shadow || 0};
  margin: ${(props: IStylingProps) => props.margin || "5px"};
  line-height: ${(props: IStylingProps) => props.lineheight || "default"};
  @media ${device.tablet} {
    font-size: ${(props: IStylingProps) =>
      props.tabletFontSize || props.fontSize};
  }
`;

export const StyledH5 = styled.h5`
  color: ${(props: IStylingProps) => props.color || colors.black};
  text-align: center;
  text-shadow: ${(props: IStylingProps) => props.shadow || 0};
  text-transform: ${(props: IStylingProps) => props.textTransform || "none"};
  margin: ${(props: IStylingProps) => props.margin || "5px"};
  font-weight: bold;
  @media ${device.tablet} {
    font-size: ${(props: IStylingProps) =>
      props.tabletFontSize || props.fontSize};
  }
`;

export const StyledP = styled.p`
  color: ${(props: IStylingProps) => props.color || colors.black};
  text-align: ${(props: IStylingProps) => props.textAlign || 0};
  line-height: ${(props: IStylingProps) => props.lineheight || "default"};
  display: ${(props: IStylingProps) => props.display || "default"};
  margin: ${(props: IStylingProps) => props.margin || "5px"};
  font-size: ${(props: IStylingProps) => props.fontSize || "18px"};
  text-shadow: ${(props: IStylingProps) => props.shadow || 0};
  text-transform: ${(props: IStylingProps) => props.textTransform || "none"};
  width: ${(props: IStylingProps) => props.width || "100%"};

  @media ${device.tablet} {
    font-size: ${(props: IStylingProps) =>
      props.tabletFontSize || props.fontSize};
  }
  :hover {
    cursor: ${(props: IStylingProps) => props.hover || "default"};
  }
`;
export const StyledSpan = styled.span``;

export const StyledNavLink = styled(NavLink)`
  color: ${(props: IStylingProps) => props.color || colors.orange};
  font-size: ${(props: IStylingProps) => props.fontSize || "15px"};
  text-align: center;
  line-height: 22px;
  margin: ${(props: IStylingProps) => props.margin || "5px"};
  text-shadow: ${(props: IStylingProps) => props.shadow || 0};
  text-decoration: none;
  :hover {
    color: ${(props: IStylingProps) => props.hovercolor || props.color};
  }
  &.active {
    color: ${colors.red};
  }
`;

export const StyledA = styled.a`
  color: ${(props: IStylingProps) => props.color || colors.black};
  margin: ${(props: IStylingProps) => props.margin || "5px"};
  font-size: ${(props: IStylingProps) => props.fontSize || "25px"};
  text-decoration: none;

  :hover {
    color: ${(props: IStylingProps) => props.hovercolor || colors.red};
  }
`;
