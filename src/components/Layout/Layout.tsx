import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
