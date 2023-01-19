import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CookiesPage } from "./components/Cookies";
import { Layout } from "./components/Layout";
import { NotFound } from "./components/NotFound";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { Home } from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import { AdminPage } from "./pages/Admin";
import { HighscorePage } from "./pages/Highscore";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <ScrollToTop>
        <Routes key={location.pathname} location={location.pathname}>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='projects' element={<ProjectsPage />} />
            <Route path='admin' element={<AdminPage />} />
            <Route path='highscore' element={<HighscorePage />} />
            <Route path='cookies' element={<CookiesPage />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </AnimatePresence>
  );
}

export default App;
