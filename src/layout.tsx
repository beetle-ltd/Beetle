import NavigationMenu from "./navigation.tsx";
import Footer from "./footer.tsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavigationMenu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
