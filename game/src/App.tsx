import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CookiesPage } from "./components/Cookies";
import { Layout } from "./components/Layout";
import { NotFound } from "./components/NotFound";
import { Home } from "./pages/Home";
import { FlexDiv } from "./components/style/Wrappers";

function App() {
  const location = useLocation();

  return (
    <FlexDiv>
      <Routes key={location.pathname} location={location.pathname}>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />

          <Route path='cookies' element={<CookiesPage />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </FlexDiv>
  );
}

export default App;
