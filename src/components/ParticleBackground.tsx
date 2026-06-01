import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export const ParticleBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate static initial particles to prevent server/client hydration mismatch if SSR, but pure client is fine here
    const colors = ['#0ea5e9', '#a855f7', '#6366f1', '#38bdf8'];
    const generated: Particle[] = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle animated glowing orb gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-2/3 right-10 w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            opacity: 0.4,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, (p.id % 2 === 0 ? 30 : -30), 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Code binary aesthetic faint overlay streams */}
      <div className="absolute left-4 top-1/4 opacity-5 text-[8px] font-mono select-none hidden md:block">
        {'01000001 01101011 01100001 01110011 01101000'.split(' ').map((b, idx) => (
          <div key={idx}>{b}</div>
        ))}
      </div>
      <div className="absolute right-4 top-3/4 opacity-5 text-[8px] font-mono select-none hidden md:block text-right">
        {'01001011 01110101 01101101 01100001 01110010'.split(' ').map((b, idx) => (
          <div key={idx}>{b}</div>
        ))}
      </div>
    </div>
  );
};
