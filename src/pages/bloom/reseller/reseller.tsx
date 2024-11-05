import Navigation from "../../../components/bloom/navigation";
import resellerLogo from "../../../assets/bloom/business/Purple horizontally stacked 2 (3).png";

const resellerMenu = [
  {
    id: 1,
    title: "Businesses",
    href: "/bloom/businesses",
  },
  {
    id: 2,
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    id: 3,
    title: "Blog",
    href: "/blog",
  },
];

const resellerColorScheme = {
  textColor: "text-gray-800",
  hoverColor: "hover:text-primary",
};

const Reseller = () => {
  return (
    <>
      <Navigation
        colorScheme={resellerColorScheme}
        menuItems={resellerMenu}
        logoSrc={resellerLogo}
      />
    </>
  );
};

export default Reseller;
