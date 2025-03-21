import { Outlet } from "react-router-dom";

import { ContainerComponent } from "../Container/styles";
import { Header } from "../Header";

export const Container = () => {
  return (
    <>
      <Header />

      <ContainerComponent>
        <Outlet />
      </ContainerComponent>
    </>
  );
};
