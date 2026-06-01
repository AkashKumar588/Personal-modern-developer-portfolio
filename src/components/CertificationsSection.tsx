import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  provider: string;
  category: string;
  iconColor: string;
  link: string;
}

const certsData: Certification[] = [
  {
    title: "C/C++ with DSA",
    provider: "Core Data Structures Optimization Track",
    category: "Programming Basics",
    iconColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    link: "https://drive.google.com/file/d/1t7NeaVRcBuOMfju8AEkuIP2KJEBDs7NJ/view?usp=drivesdk",
  },

  {
    title: "Introduction to Generative AI",
    provider: "Modern LLM & Prompting Essentials of AI",
    category: "Artificial Intelligence",
    iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    link: "https://drive.google.com/file/d/16NPtSD8udQTGYf8mRCvQBRszmiN02qdG/view?usp=drivesdk",
  },

  {
    title: "AI Video Generation Course",
    provider: "Synthesizing Interactive Audio-Visual Media",
    category: "Generative Tech",
    iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    link: "https://drive.google.com/file/d/16NPtSD8udQTGYf8mRCvQBRszmiN02qdG/view?usp=drivesdk",
  },

  {
    title: "VaultofCodes & System Tron",
    provider: "System Integration & Web Protocols Training",
    category: "Fullstack Systems",
    iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    link: "https://drive.google.com/file/d/1beYnkAC6I9BHzrSjb5bgqMJFmhhpqPdQ/view?usp=drivesdk",
  },
];

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-20 relative overflow-hidden bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold tracking-[3px] uppercase text-amber-400">
              Verified Achievement
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white">
              Professional Certifications
            </h2>

            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
              Continually upgrading modern technologies, AI systems, programming
              foundations, and full-stack development expertise.
            </p>
          </motion.div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certsData.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative p-6 rounded-2xl bg-gray-900/60 border border-gray-800 backdrop-blur-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
            >
              {/* Top Gradient Border */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-400" />

              {/* Badge Header */}
              <div className="flex justify-between items-start">
                <div className={`p-3 rounded-xl border ${cert.iconColor}`}>
                  <Award className="w-6 h-6" />
                </div>

                <span className="text-[10px] uppercase tracking-widest text-gray-300 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
                  {cert.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-bold text-white leading-snug group-hover:text-cyan-300 transition">
                {cert.title}
              </h3>

              {/* Provider */}
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                {cert.provider}
              </p>

              {/* Bottom Area */}
              <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between">
                {/* Verified Badge */}
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  Officially Verified
                </div>

                {/* View Button */}
                <div className="flex items-center gap-1 text-sm text-white group-hover:text-cyan-300 transition">
                  View
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-cyan-500/5" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
