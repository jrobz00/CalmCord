import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#1e2124] to-[#292b2f] text-white py-10">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Column 1: About */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-lg font-bold text-[#7dd3fc]">About Us</h3>
            <p className="text-gray-300">
              We provide a safe and supportive space where students can connect with AI-powered assistance for their mental well-being.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-lg font-bold text-[#7dd3fc]">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="/"
                  className="hover:text-[#7dd3fc] transition-colors duration-300 no-underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/ask"
                  className="hover:text-[#7dd3fc] transition-colors duration-300 no-underline"
                >
                  Ask
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-[#7dd3fc] transition-colors duration-300 no-underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#7dd3fc] transition-colors duration-300 no-underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Social Media */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-lg font-bold text-[#7dd3fc]">Follow Us</h3>
            <p className="text-gray-300">
              Stay updated by following us on social media.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="p-3 bg-[#36393e] hover:bg-[#7dd3fc] rounded-full transition duration-300 no-underline"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="https://twitter.com"
                className="p-3 bg-[#36393e] hover:bg-[#7dd3fc] rounded-full transition duration-300 no-underline"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                className="p-3 bg-[#36393e] hover:bg-[#7dd3fc] rounded-full transition duration-300 no-underline"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-3 bg-[#36393e] hover:bg-[#7dd3fc] rounded-full transition duration-300 no-underline"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="mt-10 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p>
            © {new Date().getFullYear()} CalmCord. All rights reserved.
          </p>
          <p className="mt-1">
            Designed with ❤️ by the CalmCord Team. - OpenAI. Hybrid Version
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
