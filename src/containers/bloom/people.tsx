import PeopleImg from "../../assets/bloom/people.png";
import AppleLogoBlack from "../../assets/bloom/apple_black.svg";
import PlayStore from "../../assets/bloom/playstore.svg";
import { motion } from "framer-motion";

const People = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        when: "beforeChildren",
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="rounded-lg md:rounded-2xl xl:rounded-3xl w-full relative overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[450px] my-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute inset-0 w-full h-full">
        <motion.img
          src={PeopleImg}
          alt="Diverse group of people"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black to-transparent via-black/50"></div>
      </div>
      <div className="absolute inset-0 flex items-end pb-8 md:pb-0 md:items-center justify-center p-4">
        <div className="text-center max-w-[786px]">
          <motion.h2
            className="text-white text-2xl sm:text-3xl xl:text-4xl leading-tight font-bold mb-6"
            variants={itemVariants}
          >
            We truly believe your business can change the world. Let Bloom help
            you.
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            {[
              {
                icon: AppleLogoBlack,
                text: "Get on iPhone",
                alt: "Apple logo",
                link: "https://apps.apple.com/ng/app/bloom-for-your-business/id6504585209",
              },
              {
                icon: PlayStore,
                text: "Get on Android",
                alt: "Google Play logo",
                link: "https://play.google.com/store/apps/details?id=com.beetle.bloom",
              },
            ].map((button, index) => (
              <motion.button
                key={index}
                className="px-6 py-3 bg-white text-black rounded-[15px] transition-transform duration-200 ease-in-out hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href={button.link} className="flex items-center space-x-2">
                  <img
                    src={button.icon}
                    alt={button.alt}
                    className="w-5 h-5 object-contain"
                  />
                  <span>{button.text}</span>
                </a>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default People;
