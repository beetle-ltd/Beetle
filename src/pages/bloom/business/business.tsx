import Navigation from "../../../components/bloom/navigation";
import businessLogo from "../../../assets/bloom/business/Purple horizontally stacked 2 (3).png";
import bloomLogoWhite from "../../../assets/bloom/Purple horizontally stacked 2 (4).png";
import DownSvg from "../../../assets/bloom/business/down.svg";
import HeaderImg from "../../../assets/bloom/business/1.png";
import GrowthImg from "../../../assets/bloom/business/2.png";
import SectionImg3 from "../../../assets/bloom/business/3.png";
import SectionImg4 from "../../../assets/bloom/business/4.png";
import Section5Img from "../../../assets/bloom/business/5.png";
import Section6Img from "../../../assets/bloom/business/6.png";
import GooglePlay from "../../../assets/bloom/business/google-play-badge-logo-svgrepo-com (1) 1.png";
import AppleStore from "../../../assets/bloom/business/download-on-the-app-store-apple-logo-svgrepo-com (1) 1.png";
import FooterImg from "../../../assets/bloom/business/7.png";
import LinkedinSvg from "../../../assets/bloom/linkedin.svg";
import TwitterSvg from "../../../assets/bloom/twitter.svg";
import InstagramSvg from "../../../assets/bloom/instagram.svg";

const businessMenu = [
  {
    id: 1,
    title: "Resellers",
    href: "/bloom/resellers",
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

const businessColorScheme = {
  textColor: "text-[#3D266D]",
  hoverColor: "hover:text-gray-800",
  lineColor: "bg-[#3D266D]",
};

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`bg-[#8C52FF] text-white text-base py-3 px-9 rounded-xl font-semibold hover:scale-105  transition ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

const Chip = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="inline-flex px-1 text-[#8040FF] bg-purple-100 rounded-md  ">
      {children}
    </span>
  );
};

const Business = () => {
  return (
    <>
      <Navigation
        colorScheme={businessColorScheme}
        menuItems={businessMenu}
        logoSrc={businessLogo}
      />
      <header className="md:py-10">
        <div className="container mx-auto md:min-h-[600px] md:flex items-center justify-between p-4 md:p-8">
          <div className="space-y-6">
            <div className="text-4xl md:text-6xl font-semibold text-purple-900 leading-tight">
              <p className="flex items-end gap-x-3 leading-none">
                Where{" "}
                <span>
                  <img src={DownSvg} alt="Down arrow icon" className="-mb-3" />
                </span>
              </p>
              <span className="leading-tight">entrepreneurial dreams</span>
              <span className="text-[#8C52FF]"> take flight.</span>
            </div>
            <p className="text-md font-medium text-[#3D266D] md:text-lg max-w-lg">
              Bloom makes it easy to sell more products and grow your business
              quickly.
            </p>
            <Button>Join the Beta</Button>
          </div>
          <div className="w-full hidden md:flex justify-center">
            <img
              src={HeaderImg}
              alt="Header Illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </header>
      <section
        className="py-20 "
        style={{
          background:
            "linear-gradient(180deg, rgba(237, 232, 255, 0) 0%, #EDE8FF 100%)",
        }}
      >
        <div className="flex flex-col items-center gap-y-10">
          <div className="mx-auto max-w-3xl text-center space-y-5">
            <h1 className="text-[#372360] text-xl md:text-4xl font-semibold">
              Bloom is more than just an app — it's your partner in business
              growth.{" "}
            </h1>
            <p className="text-[#4A2D85] max-w-lg mx-auto">
              Bloom helps you get your products off the shelves quickly and into
              the hands of more customers.
            </p>
          </div>
          <div className="pt-10">
            <img src={GrowthImg} alt="" />
          </div>
        </div>
      </section>
      <section className="text-center py-10 md:py-20 md:min-h-screen">
        <div className="space-y-5 max-w-2xl mx-auto">
          <p className="text-sm text-[#8C52FF] font-medium">
            EXPAND YOUR SEARCH
          </p>
          <h1 className="text-xl md:text-4xl font-semibold text-[#372360]">
            Get your products into the hands of so much more people!
          </h1>
          <p className="text-[#3D266D]">
            Bloom connects you to a wide range of <Chip>resellers</Chip> who can
            take your products to places you can’t go. They’ll help you reach
            more customers and sell more in less time.
          </p>
        </div>
        <img src={SectionImg3} className="block mx-auto" alt="" />
      </section>
      <section className="py-10 md:py-20 md:min-h-screen space-y-10">
        <div className="space-y-5 text-center max-w-2xl mx-auto">
          <p className="text-sm text-[#8C52FF] font-medium">
            SHOWCASE AND SELL
          </p>
          <h1 className="text-xl md:text-4xl font-semibold text-[#372360]">
            Your Products deserve a stage
          </h1>
          <p className="text-lg text-[#3D266D]">
            Let’s give them one that is simple and sleek. One that sells.
          </p>
          <p className="text-[#3D266D]">
            Bloom provides your business with a simple webpage where customers
            can browse, buy, and come back for more. It’s your online
            storefront, available 24/7, so you never miss a sale.
          </p>
        </div>
        <img src={SectionImg4} alt="" className="block mx-auto" />
      </section>
      {/* insightful - management */}
      <section className="py-10 md:py-20 md:min-h-screen space-y-10">
        <div className="space-y-5 text-center max-w-2xl mx-auto">
          <p className="text-sm text-[#8C52FF] font-medium">
            INSIGHTFUL MANAGEMENT
          </p>
          <h1 className="text-xl md:text-4xl font-semibold text-[#372360]">
            Your business management made simple
          </h1>
          <p className="text-[#3D266D]">
            Enjoy detailed weekly insights into your inventory and sales. You’ll
            know what’s selling, what’s not, and where to adjust.
          </p>
        </div>
        <img src={Section5Img} alt="" className="block mx-auto" />
      </section>
      {/* why bloom */}
      <section className="bg-[#EDE8FF] py-20 relative">
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          <h1 className="text-5xl text-[#8C52FF] font-semibold">
            Why Bloom? Because it works!
          </h1>
          <h2 className="text-3xl text-[#3D266D] font-medium">
            Bloom is simple, easy to use, and powerful.
          </h2>
          <p className="text-[#3D266D] font-medium">
            We are delivering to you a superior experience that works. From
            ensuring the sale of your products to getting it into the hands of
            your customers. Bloom has got you covered!
          </p>
          <Button>Join the Beta</Button>
        </div>
        <div className="overflow-y-hidden h-[700px]">
          <img src={Section6Img} alt="" className="block mx-auto" />
        </div>

        <div className="mx-auto text-center max-w-1/2 pt-20 space-y-5">
          <h1 className="text-3xl font-semibold text-[#372360]">
            Start growing your business with Bloom today.
          </h1>
          <p className="text-[#3D266D] font-semibold text-xl">
            Download the app here
          </p>

          <div className="inline-flex gap-x-5">
            <img src={AppleStore} alt="" />
            <img src={GooglePlay} alt="" />
          </div>
        </div>
      </section>
      <section className="bg-[#197AD9]">
        <div className="container mx-auto py-10">
          <div className="flex items-center justify-between">
            <div className="text-white space-y-5">
              <h1 className="text-4xl font-semibold">
                Want to make extra money?
              </h1>
              <p className="text-xl">
                Start your business now with Bloom: For Resellers
              </p>
              <p>
                Get instant access to a wide range of existing products you can
                resell and make money off.
              </p>
              <Button className="bg-white text-[#083D71]">Learn More</Button>
            </div>
            <img src={FooterImg} alt="" />
          </div>
        </div>
        <footer className="border-t-2 py-2">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <img src={bloomLogoWhite} alt="" />
            </div>
            <div className="flex-1 text-sm text-white text-center">
              Copyright © 2024 Beetle Ltd. All rights reserved.
            </div>
            <div className="inline-flex gap-x-2">
              <img src={LinkedinSvg} alt="" />
              <img src={TwitterSvg} alt="" />
              <img src={InstagramSvg} alt="" />
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Business;
