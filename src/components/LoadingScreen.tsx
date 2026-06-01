import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

interface LoadingScreenProps {
  onFinish: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0b0f19] px-4"
      exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Central Brand Emblem */}
      <motion.div
        className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 backdrop-blur-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-2xl border border-dashed border-cyan-500/40"
        />
        <Code2 className="h-10 w-10 text-cyan-400 animate-pulse" />
      </motion.div>

      {/* Developer Name & Profession */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
          Akash <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Kumar</span>
        </h1>
        <p className="mt-1 text-xs md:text-sm font-medium tracking-widest text-cyan-400/80 uppercase">
          Portfolio Initialization
        </p>
      </motion.div>

      {/* Modern Progress Bar */}
      <div className="mt-8 w-64 max-w-full">
        <div className="flex justify-between text-xs font-mono text-gray-400 mb-2">
          <span>Loading resources...</span>
          <span className="text-cyan-400 font-bold">{Math.min(progress, 100)}%</span>
        </div>
        <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden p-0.5 border border-gray-700/50">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-md shadow-cyan-500/50"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
};
