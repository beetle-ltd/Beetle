import BloomWhite from "../../assets/bloom/bloom_white.png";
import LinkedIn from "../../assets/bloom/linkedin.svg";
import X from "../../assets/bloom/x.svg";
import Instagram from "../../assets/bloom/instagram.svg";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
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
    },
  };

  return (
    <footer className="w-full bg-[#303030] py-2">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0  md:py-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="order-1 md:order-1 pb-3 "
          >
            <img
              src={BloomWhite}
              alt="Bloom logo"
              className="w-24 md:w-30 -mb-3"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-white text-sm text-center order-3 md:order-2"
          >
            Copyright © 2024 Beetle Ltd. All rights reserved.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex space-x-6 items-center h-full order-2 md:order-3 pb-2 sm:pb-0"
          >
            {[
              {
                href: "https://www.linkedin.com/company/use-bloom/",
                src: LinkedIn,
                alt: "LinkedIn",
              },
              {
                href: "https://x.com/usebloom_?t=NjriTYaqKrO7ABSr9WLbFw&s=09",
                src: X,
                alt: "Twitter",
              },
              {
                href: "https://www.instagram.com/getbloom_?igsh=Y2IzYTdxaDBjcTZt",
                src: Instagram,
                alt: "Instagram",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 ease-in-out hover:scale-110"
              >
                <motion.img
                  src={social.src}
                  alt={social.alt}
                  className="w-6 h-6"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
