import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CookiesPage } from "./components/Cookies";
import { Layout } from "./components/Layout";
import { NotFound } from "./components/NotFound";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { Home } from "./pages/Home";
import { FlexDiv } from "./components/style/Wrappers";
import { ContactPage } from "./pages/ContactPage";
import { GamePage } from "./pages/GamePage";

function App() {
  const location = useLocation();

  return (
    <FlexDiv>
      <Routes key={location.pathname} location={location.pathname}>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='projects' element={<ProjectsPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='game' element={<GamePage />} />
          <Route path='cookies' element={<CookiesPage />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </FlexDiv>
  );
}

export default App;
