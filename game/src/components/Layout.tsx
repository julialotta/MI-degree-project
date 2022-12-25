import { Outlet } from "react-router-dom";
import { AppWrapper } from "./style/Wrappers";
import { Header } from "./partials/Header";
import { motion } from "framer-motion";

export const Layout = () => {
  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
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
        <Outlet />
      </motion.main>
    </AppWrapper>
  );
};
