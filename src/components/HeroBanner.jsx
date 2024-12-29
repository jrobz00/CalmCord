import React from "react";
import { motion } from "framer-motion";
import {
  FaCommentDots,
  FaUserAlt,
  FaRegSmile,
  FaRegMeh,
  FaShieldAlt,
  FaRocket,
  FaHeartbeat,
} from "react-icons/fa";

const HeroBanner = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1e2124] via-[#2c2f33] to-[#36393e] text-white py-16">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-extrabold text-[#7289da] mb-6">
              Talk to Someone Who Cares
            </h1>
            <p className="text-gray-400 text-lg mb-6">
              Chat with our AI-powered assistant for confidential support.
            </p>
            <div className="mt-6">
              <button className="bg-[#7289da] text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-[#5d73c5] transition duration-300">
                Get Started
              </button>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex-1 mt-12 lg:mt-0 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Chatbox Style Animation */}
              <div className="absolute top-0 left-0 bg-[#7289da] text-white p-4 rounded-lg shadow-lg w-60">
                <FaCommentDots className="text-2xl mb-2" />
                <p>"Hi there! How can I help you today?"</p>
              </div>
              <div className="absolute bottom-0 right-0 bg-[#2c2f33] text-white p-4 rounded-lg shadow-lg w-60">
                <FaUserAlt className="text-2xl mb-2" />
                <p>"I need help managing stress."</p>
              </div>

              {/* Smiley with Brief Animation */}
              <motion.div
                className="absolute top-1/2 left-1/3 bg-[#36393e] border border-[#7289da] p-6 rounded-full"
                initial={{ opacity: 1 }}
                animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="text-6xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.5,
                  }}
                >
                  <FaRegSmile />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
