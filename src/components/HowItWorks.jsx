import React from "react";
import { motion } from "framer-motion";
import { FaSmile, FaComments, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaSmile className="text-4xl text-[#7dd3fc]" />,
    title: "Sign Up",
    description: "Create your free account to begin your journey to mental wellness.",
  },
  {
    id: 2,
    icon: <FaComments className="text-4xl text-[#7dd3fc]" />,
    title: "Start a Chat",
    description: "Connect with our AI assistant for personalized mental health support.",
  },
  {
    id: 3,
    icon: <FaCheckCircle className="text-4xl text-[#7dd3fc]" />,
    title: "Take Action",
    description: "Get actionable advice, exercises, or connect with professional resources.",
  },
];

const HowItWorks = () => {
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
            How It Works
          </h2>
          <p className="mt-4 text-gray-400">
            Getting support has never been easier. Just follow these three simple steps:
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="bg-[#292b2f] border border-[#424549] rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 hover:scale-[1.03] transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: step.id * 0.2 }}
            >
              <div className="flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-[#7dd3fc] text-center">
                {step.title}
              </h3>
              <p className="text-gray-300 mt-3 text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
