import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Container } from "./components/Container";
import { CartContextProvider } from "./contexts/CartProvider";

const Home = lazy(() => import("./pages/Home"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Success = lazy(() => import("./pages/Success"));

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CartContextProvider />}>
          <Route element={<Container />}>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order/:orderId/success" element={<Success />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
