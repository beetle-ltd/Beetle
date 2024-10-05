import NavigationMenu from "./navigation.tsx";
import Footer from "./footer.tsx";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="">
      <NavigationMenu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
