import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import LineImg from "./assets/line.svg";
import WorkImg from "./assets/work.png";
import BadgeImg from "./assets/badge.svg";

const Driven = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      className="py-10 mx-auto max-w-[1440px] px-4 sm:px-8 md:px-16 lg:px-24"
      ref={ref}
    >
      <div>
        <motion.h2
          className="text-2xl font-bold max-w-[500px] px-2"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
        >
          At Beetle, we're driven by more than just business; we're inspired by
          the people we serve.
        </motion.h2>
        <div className="px-10 flex items-end py-5">
          <motion.div
            initial={{ pathLength: 0 }}
            animate={controls}
            transition={{ duration: 2, delay: 0.6 }}
            variants={{
              visible: { pathLength: 1 },
            }}
          >
            <img src={LineImg} alt="gradient-line" width={50} height={80} />
          </motion.div>
          <motion.h2
            className="text-text text-xl font-bold max-w-[250px] ml-5 -mb-5"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 1.2 }}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
          >
            Their story, your story is our story.
          </motion.h2>
        </div>
        <div className="py-10 w-full flex flex-col md:flex-row items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 1.6 }}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
            className="mb-8 md:mb-0"
          >
            <img
              src={WorkImg}
              alt="an-image-of-a-lady-working"
              width={750}
              height={500}
              className="max-w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 2 }}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
            className="flex flex-col gap-y-3 md:-ml-40 md:-mt-10 relative ml-0 mt-0"
          >
            <img
              src={BadgeImg}
              alt="badge"
              width={50}
              height={50}
              className="absolute -top-5 -left-5"
            />
            <div className="border border-gray-200 bg-white shadow-lg rounded-xl max-w-[620px] text-text font-medium p-6 text-lg">
              Our commitment to building a better reality along each point of
              the commerce value chain is unwavering.
            </div>
            <div className="border border-gray-200 bg-white shadow-lg rounded-xl max-w-[620px] text-text font-medium p-6 text-lg">
              We're passionate about building things that work and dedicated to
              solving the problems of our customers, as unique individuals.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Driven;
