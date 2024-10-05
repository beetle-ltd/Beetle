import { motion } from "framer-motion";
import EnterpreneurImg from "../../assets/bloom/entrepreneur.png";
import WithBloomImg from "../../assets/bloom/withBloom.png";

const Offers = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-5 flex flex-col space-y-20 md:space-y-32 xl:space-y-52">
      <motion.div
        id="offer__1"
        className="flex flex-col md:flex-row items-center justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
      >
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0"
          variants={fadeInUpVariants}
        >
          <img
            src={EnterpreneurImg}
            alt="Entrepreneur"
            className="w-full h-auto"
          />
        </motion.div>
        <motion.div
          className="flex flex-col space-y-5 w-full md:w-1/2 md:pl-8"
          variants={fadeInUpVariants}
        >
          <h2 className="text-main text-3xl md:text-4xl xl:text-5xl font-bold">
            As an entrepreneur
          </h2>
          <p className="text-text text-base md:text-lg xl:text-xl">
            you work everyday on your business.&nbsp;People should remember and
            find it easy to talk about your business.
          </p>
          <motion.div
            className="border border-gray-200 bg-white shadow-lg rounded-xl text-text font-medium p-6 text-base md:text-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Bloom helps you generate customized e-cards that communicate your
            essence and leave a lasting impression on your customers.
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        id="offer__2"
        className="flex flex-col-reverse md:flex-row items-center justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
      >
        <motion.div
          className="flex flex-col space-y-5 w-full md:w-1/2 md:pr-8 mt-8 md:mt-0"
          variants={fadeInUpVariants}
        >
          <h2 className="text-main text-3xl md:text-4xl xl:text-5xl font-bold">
            With Bloom
          </h2>
          <p className="text-text text-base md:text-lg xl:text-xl">
            you can generate beautiful cards and shots of your products easily
            and share them with the world!
          </p>
          <motion.button
            className="px-6 py-4 bg-main text-white rounded-xl w-full md:w-auto xl:max-w-[200px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScrollToBottom}
          >
            <p className="flex items-center justify-center font-semibold">
              <span>Get Bloom</span>
            </p>
          </motion.button>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center"
          variants={fadeInUpVariants}
        >
          <img src={WithBloomImg} alt="With Bloom" className="w-full h-auto" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Offers;
