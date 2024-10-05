import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavigationMenu from "./pages/shared/navigation";
import Footer from "./pages/shared/footer";

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
