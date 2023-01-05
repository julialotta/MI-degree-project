import { useState } from "react";
import styled from "styled-components";
import { colors, device } from "../style/Mixins";
import { IStylingProps } from "../style/StyledInterface";
import RightNav from "./RightNav";

const StyledBurger = styled.div`
  width: 3rem;
  height: 2rem;
  position: fixed;
  right: 20px;
  padding: 12px;
  background-color: ${(props: IStylingProps) => props.background};
  border-radius: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column;
  cursor: pointer;
  z-index: 3;

  div {
    width: 3rem;
    height: 0.2rem;
    background-color: ${(props: IStylingProps) => props.color || "white"};
    transform-origin: 0.5rem;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${(props: IStylingProps) => props.transform1stchild};
    }

    &:nth-child(2) {
      transform: ${(props: IStylingProps) => props.transform2ndchild};
      opacity: ${(props: IStylingProps) => props.opacity2ndchild};
    }

    &:nth-child(3) {
      transform: ${(props: IStylingProps) => props.transform3rdchild};
    }
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger
        color={open ? colors.orange : colors.black}
        transform1stchild={open ? "rotate(45deg)" : "rotate(0)"}
        transform2ndchild={open ? "translateX(100%)" : "translateX(0)"}
        opacity2ndchild={open ? "0" : "1"}
        transform3rdchild={open ? "rotate(-45deg)" : "rotate(0)"}
        onClick={() => setOpen(!open)}
      >
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <RightNav onClick={() => setOpen(!open)} open={open} />
    </>
  );
};

export default Navbar;
