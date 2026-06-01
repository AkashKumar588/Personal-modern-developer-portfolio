import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, Cpu, Sparkles } from 'lucide-react';

interface StatCounterProps {
  end: number;
  decimals?: number;
  suffix?: string;
  label: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ end, decimals = 0, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="relative p-5 rounded-2xl bg-gray-900/60 border border-gray-800 backdrop-blur-sm text-center group hover:border-cyan-500/40 transition-all duration-300">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>
      <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
        {count.toFixed(decimals)}
        <span className="text-cyan-400">{suffix}</span>
      </div>
      <p className="mt-2 text-xs text-gray-400 font-medium tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              Personal Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full"></div>
          </motion.div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Info Card */}
          <motion.div
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-950/90 border border-gray-800 backdrop-blur-md relative overflow-hidden flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Academic Identity & Core Ambition</span>
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I am an energetic <strong className="text-cyan-400 font-semibold">B.Tech Computer Science & Engineering</strong> student currently completing my degree at <strong className="text-white font-semibold">IES University, Bhopal</strong>. Driven by curiosity and code aesthetics, I specialize in engineering crisp frontends that perform seamlessly across all modern devices.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* University Details */}
                <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider">Institution</h4>
                    <p className="text-sm font-medium text-gray-300 mt-0.5">IES University, Bhopal</p>
                    <span className="text-[10px] text-gray-500 font-mono">CSE Undergraduate</span>
                  </div>
                </div>

                {/* Score Details */}
                <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider">Performance</h4>
                    <p className="text-sm font-bold text-cyan-400 mt-0.5">8.03 CGPA</p>
                    <span className="text-[10px] text-gray-500 font-mono">Consistently Strong</span>
                  </div>
                </div>

              </div>

              {/* Interests Tags */}
              <div className="pt-2 border-t border-gray-800/60">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  <span>Key Interests</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Frontend Development',
                    'AI Tools & Prompting',
                    'Responsive Web Apps',
                    'UI/UX Polish',
                    'Data Structures',
                    'Modern API Integration'
                  ].map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-900 text-gray-300 border border-gray-800 hover:border-cyan-500/40 hover:text-white transition-colors"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-800/40 text-xs text-gray-500 italic">
              "Focused on transforming complex backend logistics into elegant, self-explanatory client experiences."
            </div>
          </motion.div>

          {/* Premium stats and features grid */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Top custom highlight graphic container */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-purple-500/20 backdrop-blur-sm relative flex-1 flex flex-col justify-center items-center text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-black font-extrabold text-xl shadow-lg shadow-cyan-500/30 mb-4 animate-bounce">
                🚀
              </div>
              <h4 className="text-base font-bold text-white mb-1">Passionate Builder</h4>
              <p className="text-xs text-gray-300 max-w-sm leading-relaxed">
                As a fast-learning fresher, I treat every project as an opportunity to apply robust object-oriented principles alongside highly optimized, component-driven modular architectures.
              </p>
            </div>

            {/* Extra Premium Animated Statistics Counters */}
            <div className="grid grid-cols-2 gap-4">
              <StatCounter end={8.03} decimals={2} label="Academic CGPA" />
              <StatCounter end={10} suffix="+" label="Technologies Stack" />
              <StatCounter end={15} suffix="+" label="Repositories Built" />
              <StatCounter end={450} suffix="+" label="Hours Coded" />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
