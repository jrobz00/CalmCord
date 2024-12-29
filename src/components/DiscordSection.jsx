import React from "react";
import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";

const DiscordSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#1e2124] via-[#2c2f33] to-[#36393e] text-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Discord-Oriented Branding */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FaDiscord className="text-[#7289da] text-6xl mx-auto mb-6" />
          <h2 className="text-4xl font-extrabold text-[#7dd3fc]">
            Welcome to CalmCord
          </h2>
          <p className="text-gray-300 text-lg mt-4 max-w-3xl mx-auto">
            CalmCord is a supportive platform inspired by the inclusivity and
            community vibe of Discord. Our AI-powered mental health chatbot is
            designed to provide a safe space for users to talk about their
            challenges, whether you're dealing with stress, loneliness, career
            worries, or just need someone to listen. We're here to help you find
            calm in the chaos.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-[#2c2f33] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-[#7dd3fc]">AI Chatbot</h3>
            <p className="text-gray-300 mt-2">
              Speak to our AI-powered mental health chatbot 24/7. It’s like
              having a trusted companion always ready to listen.
            </p>
          </div>
          <div className="bg-[#2c2f33] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-[#7dd3fc]">Safe Community</h3>
            <p className="text-gray-300 mt-2">
              Our platform ensures a judgment-free space where you can openly
              discuss your feelings without fear or stigma.
            </p>
          </div>
          <div className="bg-[#2c2f33] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-[#7dd3fc]">Tailored Support</h3>
            <p className="text-gray-300 mt-2">
              We cover topics from stress and sleep issues to relationships and
              career challenges. Whatever it is, we've got you covered.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default DiscordSection;
