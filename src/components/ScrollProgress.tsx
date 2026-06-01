import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollWidth(Number((scrollPx / winHeightPx) * 100));
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 shadow-md shadow-cyan-500/50"
        style={{ width: `${scrollWidth}%` }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />
    </div>
  );
};
