import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaStar } from "react-icons/fa";

const middlemen = [
  {
    id: 1,
    name: "John Doe",
    description: "Experienced middleman with over 200 successful transactions.",
    rating: 4.8,
    status: "Available",
  },
  {
    id: 2,
    name: "Jane Smith",
    description: "Trusted by hundreds of users for dispute-free services.",
    rating: 4.9,
    status: "Available",
  },
  {
    id: 3,
    name: "Mike Johnson",
    description: "Specializes in high-value transactions and secure payments.",
    rating: 4.7,
    status: "Busy",
  },
  {
    id: 4,
    name: "Emma Brown",
    description: "Known for quick responses and smooth transaction handling.",
    rating: 4.9,
    status: "Available",
  },
  {
    id: 5,
    name: "Chris Wilson",
    description: "Expert in dispute resolution and secure fund holding.",
    rating: 4.6,
    status: "Busy",
  },
];

const BrowseMiddlemen = () => {
  return (
    <section className="bg-gradient-to-br from-[#202225] via-[#292b2f] to-[#2f3136] text-white py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold text-[#7289da]">
            Meet Trusted Middlemen
          </h2>
          <p className="mt-4 text-gray-400">
            Discover verified middlemen to facilitate smooth, secure, and trustworthy transactions.
          </p>
        </motion.div>

        {/* Middleman Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {middlemen.map((member) => (
            <motion.div
              key={member.id}
              className="bg-[#36393e] border border-[#424549] rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 hover:scale-[1.03] transform"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: member.id * 0.1 }}
            >
              {/* Member Info */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#7289da]">{member.name}</h3>
                <div
                  className={`px-3 py-1 text-sm rounded-full ${
                    member.status === "Available"
                      ? "bg-green-500 text-white"
                      : "bg-yellow-500 text-white"
                  }`}
                >
                  {member.status}
                </div>
              </div>
              <p className="text-gray-300 mt-3">{member.description}</p>

              {/* Rating and Action */}
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-sm font-semibold">{member.rating}</span>
                </div>
                <a
                  href={`/connect/${member.id}`}
                  className="text-sm font-bold text-[#7289da] hover:underline"
                >
                  Connect
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseMiddlemen;
