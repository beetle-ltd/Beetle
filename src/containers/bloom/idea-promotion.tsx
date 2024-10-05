import { motion } from "framer-motion";
import "../../index.css";

const IdeaPromotion = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        delay: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const smallerElementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        delay: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="smaller-element py-5 md:py-8 lg:py-10 xl:mb-[10rem] mb-16 mt-0"
      variants={smallerElementVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-main w-full text-white p-6 md:p-8 lg:p-10 rounded-3xl flex flex-col items-center justify-center text-center shadow-2xl mx-auto max-w-screen min-h-[320px] "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="max-w-[560px] mx-auto"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            variants={textVariants}
          >
            An idea is not enough...
          </motion.h1>
          <motion.p
            className="mt-4 text-base md:text-lg lg:text-xl"
            variants={textVariants}
          >
            Bloom gives you the power and support to translate your idea into a
            thriving business.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default IdeaPromotion;
