import { motion } from "framer-motion";
import AppleLogo from "../../assets/bloom/apple.svg";
import PlayStore from "../../assets/bloom/playstore.svg";
import HeroImg from "../../assets/bloom/hero-img.svg";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="md:min-h-screen w-full flex flex-col lg:flex-row justify-between pt-28 pb-7 md:py-20 items-center px-4 md:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-col space-y-7 w-full lg:w-1/2 lg:max-w-[630px] mb-10 lg:mb-0"
        variants={itemVariants}
      >
        <motion.h1
          className="text-primary text-4xl md:text-5xl xl:text-[56px] leading-tight md:leading-[1.2] font-bold"
          variants={itemVariants}
        >
          Where entrepreneurial dreams&nbsp;
          <span className="text-main">take flight.</span>
        </motion.h1>

        <motion.p
          className="text-text text-lg md:text-xl font-normal"
          variants={itemVariants}
        >
          With Bloom, it becomes easy to grow and manage your business to
          success. Join the <span className="text-main">BETA</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row w-full items-center space-y-4 sm:space-y-0 sm:space-x-5"
          variants={itemVariants}
        >
          <motion.button
            className="w-full sm:w-auto px-6 py-4 bg-black text-white rounded-[15px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://apps.apple.com/ng/app/bloom-for-your-business/id6504585209"
              className="flex items-center justify-center space-x-2"
            >
              <img src={AppleLogo} alt="Apple logo" className="w-6 h-6" />
              <span>Get on iPhone</span>
            </a>
          </motion.button>

          <motion.button
            className="w-full sm:w-auto px-6 py-4 bg-black text-white rounded-[15px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="
         https://play.google.com/store/apps/details?id=com.beetle.bloom
            "
              className="flex items-center justify-center space-x-2"
            >
              <img src={PlayStore} alt="Google Play logo" className="w-6 h-6" />
              <span>Get on Android</span>
            </a>
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full lg:w-1/2  justify-center lg:justify-end hidden lg:flex"
        variants={itemVariants}
      >
        <motion.img
          src={HeroImg}
          alt="Hero image showing different people"
          className="max-w-full h-auto object-cover"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
