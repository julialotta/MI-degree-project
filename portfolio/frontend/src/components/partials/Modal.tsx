import { useState } from "react";
import Modal from "react-modal";
import { saveUser } from "../../utils/services";
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

Modal.setAppElement("#root");

export const CookiesModal = () => {
  const [modalIsOpen, setIsOpen] = useState(true);

  function closeModal() {
    saveUser({ user: true });
    setIsOpen(false);
  }

  return (
    <Modal isOpen={modalIsOpen} contentLabel='Kakor' style={modalStylesCookies}>
      <FlexDiv dir='column' height={"30vh"} justify={"center"} width={"100%"}>
        <StyledButton color='black' hovercolor='black' onClick={closeModal}>
          Stäng
        </StyledButton>
        <StyledP color={colors.black}>
          Tingloef använder cookies för att tillhandahålla tjänster samt för
          mätnings- och analyssyften. Genom att använda webbplatsen och våra
          tjänster godkänner du användningen av cookies på det sätt som beskrivs
          i vår
          <StyledNavLink color={colors.black} to={"/cookies"} fontSize='18px'>
            policy för cookies.
          </StyledNavLink>
        </StyledP>
      </FlexDiv>
    </Modal>
  );
};
