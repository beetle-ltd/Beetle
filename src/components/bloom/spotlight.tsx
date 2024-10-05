import SpotlightWeb from "../../assets/bloom/spotlight_web.png";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Spotlight = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="w-full h-[70dvh] justify-center xl:justify-start xl:h-auto py-10 sm:py-16 md:py-20 flex flex-col items-center space-y-5 sm:space-y-8 bg-custom-gradient overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="text-center px-4 sm:px-6 lg:px-8"
        variants={itemVariants}
      >
        <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl xl:text-[56px] leading-tight font-bold mb-4">
          You get a free website for your business.
        </h1>
        <p className="max-w-[500px] mx-auto text-center text-base sm:text-lg xl:text-xl">
          Whatever products you add on Bloom automatically reflects on your
          website
        </p>
      </motion.div>
      <motion.div
        className="w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%]"
        variants={itemVariants}
      >
        <LazyLoadImage
          src={SpotlightWeb}
          alt="Spotlight Web Example"
          effect="blur"
        />
      </motion.div>
    </motion.div>
  );
};

export default Spotlight;
