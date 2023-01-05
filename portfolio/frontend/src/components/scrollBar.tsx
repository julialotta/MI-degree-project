import { motion, useScroll } from "framer-motion";
export const ScrollBar = () => {
  const { scrollYProgress } = useScroll();

  return <motion.div style={{ scaleX: scrollYProgress }} />;
};
