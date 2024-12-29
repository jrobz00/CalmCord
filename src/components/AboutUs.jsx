import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br from-[#1e2124] via-[#2c2f33] to-[#36393e] text-white py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold text-[#7dd3fc]">
            About Us
          </h2>
          <p className="mt-4 text-gray-400">
            Empowering students with a safe space to talk, reflect, and grow.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image/Visual */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="https://via.placeholder.com/500x300"
              alt="About Us Visual"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            className="text-gray-300 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <p>
              At <span className="text-[#7dd3fc] font-bold">MindEase</span>, we understand that
              mental health is a journey. Our platform is designed to be your companion, offering
              a safe and supportive environment where you can explore your thoughts and feelings.
            </p>
            <p>
              Using advanced AI technology, we provide a personalized and confidential chat experience.
              Whether you need someone to listen or practical advice, our AI assistant is here to help 24/7.
            </p>
            <p>
              Beyond the chat, we offer curated resources, exercises, and access to professional
              help, ensuring you always have the tools you need to thrive.
            </p>
            <p className="text-[#7dd3fc] font-semibold">
              Our mission? To empower students to take control of their mental well-being, one step at a time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
