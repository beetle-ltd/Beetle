import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavigationMenu from "./components/shared/navigation";
import Footer from "./components/shared/footer";

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
