import React from 'react';
import { motion } from 'framer-motion';
import { Users, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface Activity {
  title: string;
  role: string;
  description: string[];
  accentColor: string;
  iconBg: string;
}

const activitiesData: Activity[] = [
  {
    title: 'INFORIA Technical / Cultural Fest',
    role: 'INFORIA Volunteer',
    description: [
      'Facilitated technical workshops and event setup logistics for multiple collegiate engineering contingents.',
      'Assisted in coordination between student developers, event presenters, and internal faculty sponsors.',
      'Maintained transparent scheduling and quick issue resolution during dynamic multi-day activities.'
    ],
    accentColor: 'border-cyan-500/30 text-cyan-400',
    iconBg: 'bg-cyan-500/10'
  },
  {
    title: 'Aravalli Terrain Vehicle Championship (ATVC)',
    role: 'ATVC Volunteer',
    description: [
      'Managed structural setup checkpoints and monitored technical evaluation compliance guidelines.',
      'Supported operations mapping, participant communications, and cross-functional team coordination.',
      'Collaborated effectively within pressurized outdoor race protocols ensuring optimal participant safety.'
    ],
    accentColor: 'border-purple-500/30 text-purple-400',
    iconBg: 'bg-purple-500/10'
  }
];

export const ExperienceActivities: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-[#0a0d14] border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              Community Engagement
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              Volunteering & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Activities</span>
            </h2>
            <p className="mt-3 text-sm text-gray-400 max-w-xl mx-auto">
              Cultivating dynamic communication capabilities and operational accountability alongside computer programming code.
            </p>
          </motion.div>
        </div>

        {/* Activities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activitiesData.map((activity, index) => (
            <motion.div
              key={index}
              className="p-6 sm:p-8 rounded-3xl bg-gray-900/40 border border-gray-800/80 backdrop-blur-sm relative group hover:border-gray-700 transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Top ambient color dot */}
              <div className="absolute top-4 right-4">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl border ${activity.accentColor} ${activity.iconBg}`}>
                    {index === 0 ? <Users className="w-5 h-5" /> : <HeartHandshake className="w-5 h-5" />}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-gray-400 block uppercase">
                      Engagement Role
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {activity.role}
                    </h3>
                  </div>
                </div>

                <div className="text-xs font-semibold text-purple-400/90 mb-4 pb-2 border-b border-gray-800/60">
                  {activity.title}
                </div>

                <div className="space-y-2.5">
                  {activity.description.map((desc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 opacity-80" />
                      <span className="leading-relaxed">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag indicator */}
              <div className="mt-6 pt-3 border-t border-gray-800/40 flex justify-between items-center text-[10px] text-gray-500">
                <span>Active Core Management Contributor</span>
                <span className="font-mono text-gray-600">IES University</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
