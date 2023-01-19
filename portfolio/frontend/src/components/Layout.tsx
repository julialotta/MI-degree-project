import { Outlet } from "react-router-dom";
import { AppWrapper, FlexDiv } from "./style/Wrappers";
import { motion } from "framer-motion";
import { Header } from "./partials/Header";
import { Footer } from "./partials/Footer";

export const Layout = () => {
  const animations = {
    initial: { opacity: 0, x: "100vw" },
    exit: { opacity: 0, x: "-100vw" },
    animate: { opacity: 1, x: "0%" },
  };
  return (
    <AppWrapper>
      <Header />
      <motion.main
        variants={animations}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <FlexDiv>
          <Outlet />
        </FlexDiv>
      </motion.main>
      <Footer />
    </AppWrapper>
  );
};
