import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInLeft, fadeIn } from "../App";

const LandingPage = () => {
  const [ref, inView] = useInView();

  return (
    <div
      id="home"
      className="overflow-hidden transition ease-in-out w-full max-h-fit md:h-screen py-16 px-4 flex flex-row items-center bg-white dark:bg-[#242424] dark:text-white"
      style={{
        backgroundImage: `url("https://i.pinimg.com/originals/99/cd/09/99cd0925c516b5d0a740dffd03c3e0df.gif")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 grid-reverse p-2 md:mt-[-80px]">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 1 }}
        >
          
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInLeft}
          transition={{ duration: 1 }}
          className="flex flex-col justify-start items-start" 
        >
          <div className="text-6xl font-semibold text-bold mb-4"> {/* Added text-bold class */}
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="gradient-text"
            >
              EFFICIENT EATS
            </motion.h1>
          </div>
          <div className="text-lg font-semibold text-left text-white dark:text-gray-300 mb-6">
            Restaurant Booking Website
          </div>

          <p className="py-7 text-lg text-white dark:text-gray-300 text-left">
            <motion.span
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="relative inline-block"
            >
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
                className="block font-bold" 
              >
                Efficient Eats is a formal restaurant that aims to 
                provide and improve operational efficiency while also 
                improving the overall customer experience. 
                This all-inclusive system provides a complete approach 
                to managing numerous elements of restaurant operations, 
                such as ordering, inventory management, scheduling, and 
                customer relationship management.
              </motion.span>
              <motion.span 
                // Your motion span styles here
              >
                &nbsp;.&nbsp;.&nbsp;.
              </motion.span>
            </motion.span>
          </p>
          <div className="flex flex-row gap-4 mb-9 justify-start items-start"> 
            <a href="#reservation" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.2, y: -5 }}
                className="hover:scale-125 text-gray-800 dark:text-gray-200 transition ease-in-out"
                style={{
                  background: "#007BFF",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Reserve Now!
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;