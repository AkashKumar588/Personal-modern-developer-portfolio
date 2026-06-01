import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, CheckCircle, MapPin } from "lucide-react";

interface TimelineItem {
  year: string;
  degree: string;
  institution: string;
  location: string;
  status: string;
  type: "Current" | "Completed";
  color: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2022 – Present",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "IES University",
    location: "Bhopal, Madhya Pradesh",
    status: "CGPA: 8.03 (Consistent Performance)",
    type: "Current",
    color: "border-cyan-400 text-cyan-400 bg-cyan-500/10",
  },
  {
    year: "2020-2022",
    degree: "12th Standard (Higher Secondary)",
    institution: "Janta Inter College",
    location: "Bihar / BSEB Board",
    status: "Focused on Science & Core Mathematics",
    type: "Completed",
    color: "border-purple-400 text-purple-400 bg-purple-500/10",
  },
  {
    year: "2019-2020",
    degree: "10th Standard (High School)",
    institution: "B.L. Indo Anglian Public School",
    location: "Bihar / CBSE Board",
    status: "Strong Foundational Curriculum",
    type: "Completed",
    color: "border-indigo-400 text-indigo-400 bg-indigo-500/10",
  },
];

export const EducationTimeline: React.FC = () => {
  return (
    <section
      id="timeline"
      className="py-20 relative overflow-hidden bg-[#0a0d14] border-t border-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              Academic Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              Education{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Timeline
              </span>
            </h2>
            <p className="mt-3 text-sm text-gray-400">
              Milestones of continuous technical and academic evolution.
            </p>
          </motion.div>
        </div>

        {/* Animated Timeline Container */}
        <div className="relative pl-6 sm:pl-32 py-6">
          {/* Vertical central stem line */}
          <div className="absolute left-6 sm:left-32 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-gray-800 transform -translate-x-1/2"></div>

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Year Label - absolute desktop left column */}
                <div className="hidden sm:block absolute left-0 top-1.5 w-24 text-right pr-6 -translate-x-full">
                  <span className="text-xs font-mono font-bold text-gray-400 block">
                    {item.year}
                  </span>
                  <span
                    className={`inline-block text-[9px] font-bold px-2 py-0.5 rounded-sm mt-1 uppercase ${
                      item.type === "Current"
                        ? "bg-cyan-500/20 text-cyan-300"
                        : "bg-gray-800 text-gray-400"
                    }`}
                  >
                    {item.type}
                  </span>
                </div>

                {/* Timeline Icon Marker Node */}
                <div className="absolute left-0 sm:left-0 top-1.5 w-8 h-8 rounded-full bg-gray-950 border-2 border-gray-700 group-hover:border-cyan-400 flex items-center justify-center transform -translate-x-1/2 z-10 transition-colors shadow-md shadow-black">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      item.type === "Current"
                        ? "bg-cyan-400 animate-pulse"
                        : "bg-purple-500"
                    }`}
                  ></div>
                </div>

                {/* Content Box */}
                <div className="ml-6 sm:ml-8 p-6 rounded-2xl bg-gray-900/60 border border-gray-800/80 backdrop-blur-sm group-hover:border-gray-700 transition-all duration-300">
                  {/* Mobile year display */}
                  <div className="sm:hidden flex items-center gap-2 mb-2 pb-2 border-b border-gray-800">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {item.year} ({item.type})
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-purple-400 shrink-0" />
                    <span>{item.degree}</span>
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400">
                    <span className="font-semibold text-gray-200">
                      {item.institution}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gray-500" />
                      {item.location}
                    </span>
                  </div>

                  {/* Highlights Status */}
                  <div className="mt-4 pt-3 border-t border-gray-800/50 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="text-xs font-medium text-cyan-300/90">
                      {item.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
