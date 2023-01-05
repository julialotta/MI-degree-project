import { useState } from "react";
import Modal from "react-modal";
import { colors } from "../style/Mixins";
import { StyledButton } from "../style/StyledButton";
import { StyledP, StyledNavLink } from "../style/StyledTextElements";
import { FlexDiv } from "../style/Wrappers";

export const modalStylesCookies = {
  content: {
    width: "80%",
    top: "75%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: colors.white,
  },
};

export const CookiesModal = () => {
  const [modalIsOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal isOpen={modalIsOpen} contentLabel='Kakor' style={modalStylesCookies}>
      <FlexDiv dir='column' height={"30vh"} justify={"center"} width={"100%"}>
        <StyledButton onClick={closeModal}>Stäng</StyledButton>
        <StyledP color={colors.black}>
          Vi använder cookies för att tillhandahålla våra tjänster samt för
          mätnings- och analyssyften. Genom att använda vår webbplats och våra
          tjänster godkänner du användningen av cookies på det sätt som beskrivs
          i vår
          <StyledNavLink color={colors.black} to={"/cookies"}>
            policy för cookies.
          </StyledNavLink>
        </StyledP>
      </FlexDiv>
    </Modal>
  );
};
