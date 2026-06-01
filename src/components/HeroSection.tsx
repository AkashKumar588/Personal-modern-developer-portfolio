import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Download, ArrowRight, Sparkles } from "lucide-react";

const titles = [
  "Frontend Developer",
  "Web Developer",
  "JavaScript Developer",
  "React Learner",
];

export const HeroSection: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleTyping = () => {
      const fullText = titles[currentTitleIndex];

      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText === fullText) {
          // Pause at end of text before starting to delete
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(60); // Delete faster
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(120);
          return;
        }
      }
      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, typingSpeed]);

  // Sample Resume Data URI or action
  const handleDownloadResume = () => {
    // Generate a simple professional summary text document as a simulated resume download since we are building a live site without static PDF
    const resumeText = `AKASH KUMAR\nProfessional Software Developer Fresher\nEmail: akashkumar.024026@gmail.com | Location: Bhopal, MP\n\nEDUCATION:\n- B.Tech CSE (IES University, Bhopal) | CGPA: 8.03\n- 12th (Janta Inter College)\n- 10th (B.L. Indo Anglian Public School)\n\nSKILLS:\nHTML5, CSS3, Tailwind CSS, JavaScript, React.js, C++, Core Java, DBMS, OOPs, Oracle Database.\n\nPROJECTS:\n1. Weather App - Real-time updates via OpenWeatherMap API.\n2. Flat Buddies - Room finding platform using React.js, Tailwind CSS, MongoDB.\n\nCERTIFICATIONS:\n- C/C++ with DSA\n- Introduction to Generative AI\n- AI Video Generation Course\n- VaultofCodes & System Tron`;

    const element = document.createElement("a");
    const file = new Blob([resumeText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "Akash_Kumar_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Availability pill */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-xs text-gray-300 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="font-medium tracking-wide">
                Available for Immediate Joining
              </span>
              <Sparkles className="w-3 h-3 text-purple-400 ml-1" />
            </motion.div>

            {/* Greeting */}
            <h2 className="text-sm md:text-base font-bold tracking-widest text-cyan-400 uppercase mb-2">
              Hello World, I'm
            </h2>

            {/* Main Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none mb-4">
              Akash{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500">
                Kumar
              </span>
            </h1>

            {/* Animated Title effect */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start text-lg sm:text-xl md:text-2xl font-bold text-gray-300 mb-6">
              <span className="mr-2 text-gray-500 font-normal">I am a</span>
              <span className="text-cyan-400 font-mono border-b-2 border-purple-500 pb-0.5">
                {displayedText}
              </span>
              <span className="animate-pulse text-purple-500 ml-0.5">|</span>
            </div>

            {/* Short Intro */}
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 border-l-2 border-cyan-500/40 pl-4 py-1 italic bg-gradient-to-r from-cyan-500/5 to-transparent backdrop-blur-xs rounded-r-lg">
              “Passionate Web Development Fresher skilled in HTML, CSS,
              JavaScript and modern frontend technologies, focused on building
              responsive and user-friendly web applications.”
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <button
                onClick={handleDownloadResume}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-purple-600 text-white overflow-hidden shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gray-900/80 border border-gray-700/80 text-gray-300 hover:text-white hover:border-cyan-500/50 hover:bg-gray-900 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm cursor-pointer"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-cyan-400" />
              </a>
            </div>

            {/* Social Icons Container */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/akash-kumar-68587b25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-900/80 border border-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/AkashKumar588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-900/80 border border-gray-800 text-gray-400 hover:text-white hover:border-purple-500/40 hover:scale-110 transition-all"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href="mailto:akashkumar.024026@gmail.com"
                  className="p-2.5 rounded-xl bg-gray-900/80 border border-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all"
                  aria-label="Email"
                >
                  <FaEnvelope className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Floating Photo Column */}
          <motion.div
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-square">
              {/* Glowing Aura Rings */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500 to-purple-600 blur-2xl opacity-40 animate-pulse-slow"></div>

              {/* Animated orbital ring frame */}
              <div
                className="absolute -inset-4 rounded-3xl border border-cyan-500/20 animate-spin"
                style={{ animationDuration: "30s" }}
              ></div>
              <div
                className="absolute -inset-2 rounded-3xl border border-purple-500/20 animate-spin"
                style={{
                  animationDuration: "20s",
                  animationDirection: "reverse",
                }}
              ></div>

              {/* Main uploaded photo glass container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-cyan-400/40 bg-gray-900/90 p-2 shadow-2xl backdrop-blur-sm animate-float">
                <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-950 relative">
                  <img
                    src="/images/akash-pic.jpeg"
                    alt="Akash Kumar Profile"
                    className="w-full h-full object-cover object-center filter saturate-105 contrast-105 transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      // Fallback profile silhouette placeholder if generation path gets lost
                      e.currentTarget.src = "/images/akash-pic.jpeg";
                    }}
                  />
                  {/* Bottom elegant info bar overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-center">
                    <p className="text-xs font-bold text-cyan-400 tracking-wider">
                      AKASH KUMAR
                    </p>
                    <p className="text-[10px] text-gray-400 font-mono">
                      B.Tech CSE Fresher
                    </p>
                  </div>
                </div>
              </div>

              {/* Little Floating Tech Badges */}
              <motion.div
                className="absolute -top-3 -left-3 px-3 py-1.5 rounded-lg bg-gray-900/90 border border-cyan-500/40 shadow-lg backdrop-blur-md flex items-center gap-1.5"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span className="text-[10px] font-bold text-white font-mono">
                  React 19
                </span>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-lg bg-gray-900/90 border border-purple-500/40 shadow-lg backdrop-blur-md flex items-center gap-1.5"
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                <span className="text-[10px] font-bold text-white font-mono">
                  CGPA: 8.03
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
