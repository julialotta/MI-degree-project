import styled from "styled-components";
import { IStylingProps } from "../style/StyledInterface";
import { colors } from "../style/Mixins";
import { StyledNavLink } from "../style/StyledTextElements";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding: 0;
  li {
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${colors.white};
    position: fixed;
    transform: ${(props: IStylingProps) => props.ultransform};
    top: -20px;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 4.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      padding: 20px;
    }
  }
`;

interface IProps {
  open: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
}

const RightNav = (props: IProps) => {
  return (
    <Ul ultransform={props.open ? "translateX(0)" : "translateX(100%)"}>
      <li>
        <StyledNavLink
          hovercolor={colors.black}
          fontSize='25px'
          to={"/projects"}
          data-cy='projectlink'
        >
          Projects
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink
          hovercolor={colors.black}
          fontSize='25px'
          to={"/about"}
          data-cy='aboutlink'
        >
          About
        </StyledNavLink>
      </li>
    </Ul>
  );
};

export default RightNav;
