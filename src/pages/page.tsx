import { motion } from "framer-motion";
import Driven from "./shared/driven.tsx";
import HeroSection from "./shared/hero.tsx";
import Products from "./shared/products.tsx";
import VisionSection from "./shared/vison.tsx";
import Ballons from "../assets/ballons.png";
import BallonsMobile from "../assets/mobile/ballons_mobile.png";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <Driven />
      <div className="px-5 md:px-0 py-10 md:py-20 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="max-w-4xl text-center mx-auto"
        >
          <p className="text-xl md:text-3xl font-semibold text-gray-900 leading-relaxed">
            We believe that people can change the world, with the right tools
            and opportunities. That is why we exist.
            <span className="text-transparent bg-clip-text px-1 bg-gradient-to-r from-[#8C52FF] via-[#0281FC] to-[#60E9FF]">
              To create those opportunities that help you fulfill your dreams.
            </span>
          </p>
        </motion.div>
        <img
          src={Ballons}
          alt="Baloons"
          className="hidden md:block mx-auto py-10"
        />
        <img
          src={BallonsMobile}
          alt="Baloons"
          className="block md:hidden mx-auto py-10"
        />
      </div>
      <Products />
    </>
  );
}
