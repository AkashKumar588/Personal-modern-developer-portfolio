import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  CheckCircle2,
  Layers,
  Search,
  Sun,
  CloudRain,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  accentColor: string;
  badge: string;
  interactiveSimulator?: "weather" | "flat";
}

const projectsData: Project[] = [
  {
    id: "weather-app",
    title: "Weather App",
    subtitle: "Real-time weather updates system",
    description: [
      "Engineered dynamic state management for instantaneous location fetching and condition mapping.",
      "Robust OpenWeatherMap API integration handling asynchronous JSON payloads and timeout fallbacks.",
      "Responsive UI adaptive to mobile layouts with modern animated status indicators.",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "REST APIs"],
    image: "/images/weather-app.jpg",
    demoUrl: "#demo-weather",
    githubUrl: "https://github.com/AkashKumar588/Weather-App",
    accentColor: "from-cyan-500 to-blue-600",
    badge: "API Integrated",
    interactiveSimulator: "weather",
  },
  {
    id: "flat-buddies",
    title: "Flat Buddies",
    subtitle: "Real-time room/flat finding platform",
    description: [
      "Developed live search queries with dynamic filtering based on room configuration, pricing, and availability parameters.",
      "Integrated smooth frontend router transitions powered by React.js alongside Tailwind CSS utilities.",
      "Designed backend database schema interactions mimicking full-stack MongoDB real-time record delivery.",
    ],
    tags: ["React.js", "Tailwind CSS", "MongoDB", "Modern UI"],
    image: "/images/flat-buddies.jpg",
    demoUrl: "#demo-flat",
    githubUrl: "https://github.com/AkashKumar588/FlatBuddies",
    accentColor: "from-purple-500 to-indigo-600",
    badge: "Fullstack Stack",
    interactiveSimulator: "flat",
  },
];

export const ProjectsSection: React.FC = () => {
  const [activeSimulator, setActiveSimulator] = useState<string | null>(null);

  // Weather simulator local states
  const [simCity] = useState("Bhopal");
  const [simTemp, setSimTemp] = useState(28);
  const [simCond, setSimCond] = useState<"Sunny" | "Rainy">("Sunny");

  // Flat simulator local states
  const [flatFilter, setFlatFilter] = useState<"All" | "1BHK" | "2BHK">("All");
  const sampleFlats = [
    {
      id: 1,
      title: "Cozy 1BHK near IES University",
      price: "₹5,500/mo",
      type: "1BHK",
      available: true,
    },
    {
      id: 2,
      title: "Spacious 2BHK Shared Flat",
      price: "₹8,200/mo",
      type: "2BHK",
      available: true,
    },
    {
      id: 3,
      title: "Premium Single Studio Room",
      price: "₹6,000/mo",
      type: "1BHK",
      available: false,
    },
  ];

  const handleTriggerDemo = (
    e: React.MouseEvent,
    type?: "weather" | "flat",
  ) => {
    e.preventDefault();
    if (type) {
      setActiveSimulator(activeSimulator === type ? null : type);
    } else {
      alert("Opening live web deployment...");
    }
  };

  const toggleWeatherCondition = () => {
    if (simCond === "Sunny") {
      setSimCond("Rainy");
      setSimTemp(22);
    } else {
      setSimCond("Sunny");
      setSimTemp(31);
    }
  };

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden bg-[#0b0f19] border-t border-gray-900"
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
            <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              High-Fidelity Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Projects
              </span>
            </h2>
            <p className="mt-3 text-sm text-gray-400 max-w-xl mx-auto">
              Real-world logic transformed into intuitive UI designs and API
              integrations.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projectsData.map((project, idx) => {
            const isSimulating =
              activeSimulator === project.interactiveSimulator;

            return (
              <motion.div
                key={project.id}
                className="group rounded-3xl bg-gray-900/50 border border-gray-800/80 overflow-hidden backdrop-blur-sm hover:border-gray-700 transition-all duration-300 flex flex-col justify-between relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {/* Glowing border top overlay */}
                <div
                  className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${project.accentColor} opacity-75 group-hover:opacity-100 transition-opacity`}
                ></div>

                {/* Project Screenshot Placeholder Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-gray-950 border-b border-gray-800/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter saturate-105"
                    onError={(e) => {
                      // Fallback abstract layout image
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80";
                    }}
                  />

                  {/* Floating badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-white uppercase bg-gray-950/80 backdrop-blur-md border border-gray-700">
                      {project.badge}
                    </span>
                  </div>

                  {/* Absolute simulated component test button directly inside screenshot */}
                  {project.interactiveSimulator && (
                    <div className="absolute bottom-4 right-4 z-10">
                      <button
                        onClick={(e) =>
                          handleTriggerDemo(e, project.interactiveSimulator)
                        }
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg backdrop-blur-md transition-all flex items-center gap-1.5 ${
                          isSimulating
                            ? "bg-amber-500 text-black hover:bg-amber-400"
                            : "bg-cyan-500 text-black hover:bg-cyan-400"
                        }`}
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>
                          {isSimulating
                            ? "Close Interactive View"
                            : "Try Mini-Simulator"}
                        </span>
                      </button>
                    </div>
                  )}

                  {/* Glass Simulated Dashboard overlay */}
                  <AnimatePresence>
                    {isSimulating &&
                      project.interactiveSimulator === "weather" && (
                        <motion.div
                          className="absolute inset-0 bg-gray-950/95 backdrop-blur-md p-6 flex flex-col justify-center items-center text-center z-20"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1">
                            ⚡ Simulated OpenWeatherMap API Fetch
                          </span>
                          <div className="p-4 rounded-2xl bg-gray-900 border border-gray-800 w-full max-w-xs mb-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs font-bold text-gray-300">
                                {simCity}, MP
                              </span>
                              <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400">
                                Live
                              </span>
                            </div>
                            <div className="flex items-center justify-around my-2">
                              {simCond === "Sunny" ? (
                                <Sun className="w-10 h-10 text-amber-400 animate-spin-slow" />
                              ) : (
                                <CloudRain className="w-10 h-10 text-blue-400 animate-bounce" />
                              )}
                              <div className="text-left">
                                <div className="text-3xl font-extrabold text-white">
                                  {simTemp}°C
                                </div>
                                <div className="text-xs text-gray-400 font-medium">
                                  {simCond} Conditions
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={toggleWeatherCondition}
                            className="px-4 py-1.5 rounded-lg bg-gray-800 text-xs font-semibold text-gray-200 hover:bg-gray-700 transition-colors border border-gray-700"
                          >
                            Trigger Weather Change Update
                          </button>
                          <button
                            onClick={() => setActiveSimulator(null)}
                            className="mt-3 text-[10px] text-gray-500 underline hover:text-gray-300"
                          >
                            Return to Original Preview
                          </button>
                        </motion.div>
                      )}

                    {isSimulating &&
                      project.interactiveSimulator === "flat" && (
                        <motion.div
                          className="absolute inset-0 bg-gray-950/95 backdrop-blur-md p-4 flex flex-col justify-between z-20"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                            <span className="text-xs font-bold text-purple-400 flex items-center gap-1">
                              <Search className="w-3 h-3" /> Flat Buddies App
                            </span>
                            <div className="flex gap-1">
                              {(["All", "1BHK", "2BHK"] as const).map((f) => (
                                <button
                                  key={f}
                                  onClick={() => setFlatFilter(f)}
                                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                    flatFilter === f
                                      ? "bg-purple-500 text-white"
                                      : "bg-gray-900 text-gray-400 hover:text-gray-200"
                                  }`}
                                >
                                  {f}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-1.5 overflow-y-auto max-h-36 pr-1">
                            {sampleFlats
                              .filter(
                                (flat) =>
                                  flatFilter === "All" ||
                                  flat.type === flatFilter,
                              )
                              .map((flat) => (
                                <div
                                  key={flat.id}
                                  className="p-2 rounded bg-gray-900 border border-gray-800 text-left flex justify-between items-center"
                                >
                                  <div>
                                    <div className="text-xs font-semibold text-gray-200 truncate max-w-[150px]">
                                      {flat.title}
                                    </div>
                                    <div className="text-[9px] text-gray-500 font-mono">
                                      {flat.type} •{" "}
                                      {flat.available ? "Immediate" : "Rented"}
                                    </div>
                                  </div>
                                  <span className="text-xs font-bold text-cyan-400">
                                    {flat.price}
                                  </span>
                                </div>
                              ))}
                          </div>

                          <button
                            onClick={() => setActiveSimulator(null)}
                            className="text-[10px] text-center text-gray-500 underline hover:text-gray-300 pt-1"
                          >
                            Close Filter view
                          </button>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </div>

                {/* Content details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-purple-400 mb-4">
                      {project.subtitle}
                    </p>

                    <div className="space-y-2 mb-6">
                      {project.description.map((desc, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs sm:text-sm text-gray-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom section: Tags & Buttons */}
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-gray-950 text-cyan-400/90 border border-gray-800/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Button actions */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-800/60">
                      <a
                        href={project.demoUrl}
                        onClick={(e) => {
                          if (project.interactiveSimulator) {
                            handleTriggerDemo(e, project.interactiveSimulator);
                          } else {
                            handleTriggerDemo(e);
                          }
                        }}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 transition-opacity"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-gray-900 text-gray-300 border border-gray-700 hover:text-white hover:bg-gray-800 transition-all"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        <span>Codebase</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
