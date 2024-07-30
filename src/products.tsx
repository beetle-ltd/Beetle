import { motion } from "framer-motion";
import BloomLogo from "./assets/bloom-logo.svg";
import SpotlightLogo from "./assets/spotlight-logo.svg";
import BloomAppImg from "./assets/bloom-app.png";
import SpotlightAppImg from "./assets/spotlight-app.png";
import { useNavigate } from "react-router-dom";

const Products = () => {
  type TProduct = {
    id: number;
    title: string;
    logo: string;
    handleClick: () => void;
    description: string;
    appImg: string;
    buttonColor?: string;
  };
  const navigate = useNavigate();
  const products: TProduct[] = [
    {
      id: 1,
      title: "Bloom",
      logo: BloomLogo,
      handleClick: () =>
        (window.location.href = "https://bloom.beetleltd.org/"),
      description:
        "Bloom helps you grow your business and simplifies its management. It is simple, easy to use and powerful.",
      appImg: BloomAppImg,
      buttonColor: "red",
    },
    {
      id: 2,
      title: "Spotlight",
      logo: SpotlightLogo,
      handleClick: () => (window.location.href = "https://myspotlight.me/"),
      description:
        "Spotlight radically improves your shopping experience. Find and acquire products you love from your favorite brands, easily.",
      appImg: SpotlightAppImg,
      buttonColor: "yellow",
    },
  ];
  return (
    <div className={"pt-10 overflow-x-hidden w-full"}>
      {products.map((product, index) => (
        <div key={product.id}>
          <div
            className={`pt-24 mx-auto w-full xl:max-w-[80%] flex flex-col items-center justify-between gap-y-10 ${
              index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.4 }}
              className="flex-1 flex flex-col items-center xl:items-start pb-16 xl:pb-0"
            >
              <img
                src={product.logo}
                alt="Logo"
                width={300}
                height={300}
                className="mb-8"
              />
              <p className="text-lg xl:text-xl text-center xl:text-left mb-8 max-w-[600px]">
                {product.description}
              </p>
              <a href="#" className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${
                    product.buttonColor === "red"
                      ? "bg-[#8c52ff] text-white"
                      : "bg-[#fefd00] text-[#000]"
                  } font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300`}
                  onClick={product.handleClick}
                >
                  Learn More
                </motion.button>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.4 + 0.2 }}
              className={
                "flex justify-center flex-1 aspect-auto overflow-x-hidden"
              }
            >
              <div className="aspect-w-16 aspect-h-9 flex justify-center">
                <img
                  src={product.appImg}
                  alt={`${product.title} App Image`}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
          {index !== products.length - 1 && (
            <div className="mx-auto max-w-7xl border-b border-gray-300 my-8" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
