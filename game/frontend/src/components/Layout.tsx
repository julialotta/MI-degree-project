import { Outlet } from "react-router-dom";
import { AppWrapper } from "./style/Wrappers";
import { motion } from "framer-motion";
import { Header } from "./partials/Header";

export const Layout = () => {
  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <AppWrapper>
      <motion.main
        variants={animations}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.6 }}
      >
        <Header />
        <Outlet />
      </motion.main>
    </AppWrapper>
  );
};
