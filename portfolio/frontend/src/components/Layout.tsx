import { Outlet } from "react-router-dom";
import { AppWrapper, FlexDiv } from "./style/Wrappers";
import { motion } from "framer-motion";
import { Header } from "./partials/Header";
import { Footer } from "./partials/Footer";

export const Layout = () => {
  const animations = {
    initial: { opacity: 0, x: "100vw" },
    animate: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "-100vw" },
  };
  return (
    <AppWrapper>
      <Header />
      <motion.main
        variants={animations}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.6 }}
      >
        <FlexDiv>
          <Outlet />
        </FlexDiv>
      </motion.main>
      <Footer />
    </AppWrapper>
  );
};
