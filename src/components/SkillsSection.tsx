import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Cpu, Database, Layers } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
  category: 'Frontend' | 'Programming' | 'Database / Core';
  color: string;
}

const skillsData: Skill[] = [
  { name: 'HTML5', percentage: 95, category: 'Frontend', color: 'from-orange-500 to-amber-600' },
  { name: 'CSS3', percentage: 90, category: 'Frontend', color: 'from-blue-500 to-indigo-600' },
  { name: 'Tailwind CSS', percentage: 92, category: 'Frontend', color: 'from-cyan-400 to-teal-500' },
  { name: 'JavaScript', percentage: 88, category: 'Frontend', color: 'from-yellow-400 to-amber-500' },
  { name: 'React.js', percentage: 85, category: 'Frontend', color: 'from-cyan-400 to-blue-500' },
  { name: 'C++', percentage: 80, category: 'Programming', color: 'from-blue-600 to-indigo-800' },
  { name: 'Core Java', percentage: 82, category: 'Programming', color: 'from-red-500 to-orange-600' },
  { name: 'DBMS', percentage: 85, category: 'Database / Core', color: 'from-emerald-400 to-teal-600' },
  { name: 'OOPs', percentage: 90, category: 'Database / Core', color: 'from-purple-500 to-indigo-600' },
  { name: 'Oracle Database', percentage: 80, category: 'Database / Core', color: 'from-red-600 to-rose-800' },
];

export const SkillsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const categories: Skill['category'][] = ['Frontend', 'Programming', 'Database / Core'];

  const getCategoryIcon = (cat: Skill['category']) => {
    switch (cat) {
      case 'Frontend': return <Code className="w-4 h-4 text-cyan-400" />;
      case 'Programming': return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'Database / Core': return <Database className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-[#0a0d14] border-t border-gray-900">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              Technical Arsenal
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Skills</span>
            </h2>
            <p className="mt-3 text-sm text-gray-400 max-w-xl mx-auto">
              Combining foundational engineering clarity with highly optimized modern client interfaces.
            </p>
          </motion.div>
        </div>

        {/* Content Side by side: Orbit Animation & Skills Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Extra Premium Features: Skills Orbit Animation */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center relative order-2 lg:order-1 py-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square flex items-center justify-center">
              
              {/* Outer Outer Static border decoration */}
              <div className="absolute inset-0 rounded-full border border-gray-800/80 bg-gray-950/40 backdrop-blur-xs"></div>

              {/* Orbit Track 3 */}
              <motion.div 
                className="absolute w-72 sm:w-80 h-72 sm:h-80 rounded-full border border-dashed border-purple-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                {/* Node on Track 3 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-gray-900 border border-purple-500/50 text-[10px] font-bold text-purple-300 shadow-md">
                  React.js
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-3 py-1 rounded-full bg-gray-900 border border-purple-500/50 text-[10px] font-bold text-purple-300 shadow-md">
                  DBMS
                </div>
              </motion.div>

              {/* Orbit Track 2 */}
              <motion.div 
                className="absolute w-52 sm:w-60 h-52 sm:h-60 rounded-full border border-cyan-500/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                {/* Nodes on Track 2 */}
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full bg-gray-900 border border-cyan-400/50 text-[10px] font-bold text-cyan-300">
                  Tailwind
                </div>
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full bg-gray-900 border border-cyan-400/50 text-[10px] font-bold text-cyan-300">
                  C++
                </div>
                <div className="absolute top-0 right-1/4 translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full bg-gray-900 border border-cyan-400/50 text-[10px] font-bold text-cyan-300">
                  Core Java
                </div>
              </motion.div>

              {/* Orbit Track 1 */}
              <motion.div 
                className="absolute w-32 sm:w-36 h-32 sm:h-36 rounded-full border border-dashed border-gray-700"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute bottom-0 right-0 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-[9px] font-mono text-amber-400">
                  JS
                </div>
                <div className="absolute top-0 left-0 px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/30 text-[9px] font-mono text-orange-400">
                  HTML5
                </div>
              </motion.div>

              {/* Central Sun / Emblem */}
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/40 z-10 animate-pulse">
                <Layers className="w-8 h-8 text-gray-950" />
                <div className="absolute -inset-1 rounded-full border border-white/20 animate-ping pointer-events-none"></div>
              </div>

              {/* Title overlay label */}
              <div className="absolute bottom-4 inset-x-0 text-center">
                <span className="text-[10px] font-mono tracking-widest text-cyan-400/80 uppercase bg-gray-900/90 px-3 py-1 rounded-full border border-gray-800">
                  Skills Orbit Simulator
                </span>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Beautiful Progress Bars grouped by category */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            {categories.map((category, catIdx) => {
              const categorySkills = skillsData.filter((s) => s.category === category);
              
              return (
                <motion.div
                  key={category}
                  className="p-5 sm:p-6 rounded-2xl bg-gray-900/60 border border-gray-800/80 backdrop-blur-sm relative group hover:border-gray-700 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIdx * 0.2 }}
                >
                  {/* Category Title */}
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-800">
                    {getCategoryIcon(category)}
                    <h3 className="text-xs sm:text-sm font-bold text-gray-200 tracking-wider uppercase">
                      {category}
                    </h3>
                  </div>

                  {/* Skills Progress grid */}
                  <div className="space-y-4">
                    {categorySkills.map((skill, index) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                          <span className="text-gray-300 group-hover/skill:text-cyan-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-gray-500 font-mono group-hover/skill:text-gray-300 transition-colors">
                            {isInView ? `${skill.percentage}%` : '0%'}
                          </span>
                        </div>

                        {/* Progress Bar container */}
                        <div className="h-2 w-full bg-gray-950 rounded-full overflow-hidden p-0.5 border border-gray-800/60">
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-300 relative`}
                            initial={{ width: "0%" }}
                            animate={isInView ? { width: `${skill.percentage}%` } : { width: "0%" }}
                            transition={{ duration: 1.2, delay: 0.1 + index * 0.1, ease: "easeOut" }}
                          >
                            {/* Animated glowing tip */}
                            <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-white rounded-full opacity-75 animate-pulse"></div>
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
