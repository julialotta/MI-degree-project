import styled from "styled-components";
import { IStylingProps } from "./StyledInterface";
import { colors, device } from "./Mixins";

export const FlexDiv = styled.div`
  display: flex;
  position: ${(props: IStylingProps) => props.position || ""};
  flex-direction: ${(props: IStylingProps) => props.dir || "row"};
  align-items: ${(props: IStylingProps) => props.align || "center"};
  justify-content: ${(props: IStylingProps) => props.justify || "center"};
  flex-wrap: ${(props: IStylingProps) => props.wrap || "nowrap"};
  background-color: ${(props: IStylingProps) => props.background || "none"};
  width: ${(props: IStylingProps) => props.width || "100%"};
  height: ${(props: IStylingProps) => props.height || "100%"};

  gap: ${(props: IStylingProps) => props.gap || "0"};
  margin: ${(props: IStylingProps) => props.margin || "0"};
  padding: ${(props: IStylingProps) => props.padding || "0"};
  z-index: ${(props: IStylingProps) => props.z || "auto"};
  top: ${(props: IStylingProps) => props.top || "x"};
  bottom: ${(props: IStylingProps) => props.bottom || "x"};
  border: ${(props: IStylingProps) => props.border || "none"};
  border-radius: ${(props: IStylingProps) => props.borderRad || "none"};

  left: ${(props: IStylingProps) => props.left || "x"};
  right: ${(props: IStylingProps) => props.right || "x"};
  box-shadow: ${(props: IStylingProps) => props.shadow || 0};
  min-height: ${(props: IStylingProps) => props.minHeight || 0};
  overflow-x: ${(props: IStylingProps) => props.overflowX || "visible"};
  overflow-y: ${(props: IStylingProps) => props.overflowY || "visible"};
  :hover {
    cursor: ${(props: IStylingProps) => props.hover || "default"};
  }
  @media ${device.tablet} {
    flex-direction: ${(props: IStylingProps) => props.tabletDir || props.dir};
    align-items: ${(props: IStylingProps) => props.tabletAlign || props.align};
    justify-content: ${(props: IStylingProps) =>
      props.tabletJustify || props.justify};
    flex-wrap: ${(props: IStylingProps) => props.tabletWrap || props.wrap};
    width: ${(props: IStylingProps) => props.tabletWidth || props.width};
    height: ${(props: IStylingProps) => props.tabletHeight || props.height};
  }
  @media ${device.laptop} {
    flex-direction: ${(props: IStylingProps) =>
      props.laptopDir || props.tabletDir};

    align-items: ${(props: IStylingProps) =>
      props.laptopAlign || props.tabletAlign};
    justify-content: ${(props: IStylingProps) =>
      props.laptopJustify || props.tabletJustify};
    flex-wrap: ${(props: IStylingProps) =>
      props.laptopWrap || props.tabletWrap};
    width: ${(props: IStylingProps) => props.laptopWidth || props.tabletWidth};
    height: ${(props: IStylingProps) =>
      props.laptopHeight || props.tabletHeight};
  }
`;

export const ImageDiv = styled(FlexDiv)`
  background-image: url(${(props: IStylingProps) => props.image || ""});
  background-size: 100%;
  background-repeat: no-repeat;
  opacity: ${(props: IStylingProps) => props.opacity || "100"};
`;

export const AppWrapper = styled.div`
  background-color: ${colors.white};
  width: 100%;
  min-height: min-content;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;
