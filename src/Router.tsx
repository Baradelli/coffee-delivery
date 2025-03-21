import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Container } from "./components/container";

const Home = lazy(() => import("./pages/Home"));

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
