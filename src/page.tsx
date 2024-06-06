import { motion } from "framer-motion";
import ImageCard from "./components/image-card";
import Driven from "./driven";
import Footer from "./footer";
import HeroSection from "./hero";
import NavigationMenu from "./navigation";
import Products from "./products";
import GalaxyImg from "./assets/galaxy.png";
import BallonImg from "./assets/ballon-bg.png";

export default function Home() {
  return (
    <>
      <NavigationMenu />
      <HeroSection />
      <div>
        <ImageCard image={GalaxyImg}>
          <div className="p-4 sm:p-8 md:p-12 lg:p-16 grid grid-cols-1 xl:grid-cols-2 gap-x-5 md:gap-x-10 lg:gap-x-[1%] text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="xl:col-span-1 "
            >
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold leading-relaxed xl:leading-[50px]">
                &quot;We envision a future where commerce is seamless and easy,
                powered by technology that works. our technology.&quot;
              </h2>
            </motion.div>
          </div>
        </ImageCard>
      </div>
      <Driven />
      <div>
        <ImageCard image={BallonImg}>
          <div className="p-4 sm:p-8 md:p-12 lg:p-16 py-12 md:py-24 grid grid-cols-[70%,30%] gap-x-1 text-white relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold leading-relaxed xl:leading-[50px] pt-10">
                We believe that people can change the world, with the right
                tools and opportunities. that is why we exist. to create those
                opportunities that help you fulfill your dreams.
              </h2>
            </motion.div>
          </div>
        </ImageCard>
      </div>
      <Products />
      <Footer />
    </>
  );
}
