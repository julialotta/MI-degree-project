import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CookiesPage } from "./components/Cookies";
import { Layout } from "./components/Layout";
import { NotFound } from "./components/NotFound";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { Home } from "./pages/Home";
import { SingleProjectPage } from "./pages/SingleProject";
import { AnimatePresence } from "framer-motion";
import { AdminPage } from "./pages/Admin";
function App() {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Routes key={location.pathname} location={location.pathname}>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='projects' element={<ProjectsPage />} />
          <Route path='projects/:id' element={<SingleProjectPage />} />
          <Route path='admin' element={<AdminPage />}></Route>
          <Route path='cookies' element={<CookiesPage />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
