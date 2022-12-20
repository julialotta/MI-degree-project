import { Outlet } from "react-router-dom";
import { AppWrapper } from "./style/Wrappers";
import { Header } from "./partials/Header";
import { HighScore } from "./partials/HighScore";

export const Layout = () => {
  return (
    <AppWrapper>
      <Header />
      <HighScore />
      <Outlet />
    </AppWrapper>
  );
};
