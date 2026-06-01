import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Extra Premium Features & Modules
import { CustomCursor } from './components/CustomCursor';
import { ParticleBackground } from './components/ParticleBackground';
import { ScrollProgress } from './components/ScrollProgress';
import { LoadingScreen } from './components/LoadingScreen';

// Core Sections
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationTimeline } from './components/EducationTimeline';
import { CertificationsSection } from './components/CertificationsSection';
import { ExperienceActivities } from './components/ExperienceActivities';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Quick icons
import { EyeOff, Eye } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [particlesEnabled, setParticlesEnabled] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-gray-100 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      {/* Scroll Progress Bar Overlay */}
      <ScrollProgress />

      {/* Interactive Glowing Trail Cursor */}
      <CustomCursor />

      {/* Loading Intro Experience */}
      <AnimatePresence>
        {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Content Layout Container */}
      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        
        {/* Animated Custom Particles Background */}
        {particlesEnabled && <ParticleBackground />}

        {/* Floating Quick Visual FX Controls */}
        <div className="fixed bottom-4 left-4 z-40 hidden sm:flex items-center gap-2 bg-gray-950/80 backdrop-blur-md p-2 rounded-full border border-gray-800 shadow-xl">
          <span className="text-[10px] font-mono font-bold text-gray-400 pl-2">FX:</span>
          <button
            onClick={() => setParticlesEnabled(!particlesEnabled)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold transition-all ${
              particlesEnabled 
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                : 'bg-gray-900 text-gray-500 border border-gray-800'
            }`}
            title="Toggle background particle physics engine"
          >
            {particlesEnabled ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
            <span>Particles</span>
          </button>
        </div>

        {/* Global sticky/animated Navigation Header */}
        <Navbar />

        {/* Section 1: Hero Area */}
        <main className="relative z-10">
          <HeroSection />

          {/* Section 2: About Me */}
          <AboutSection />

          {/* Section 3: Professional Skills */}
          <SkillsSection />

          {/* Section 4: Projects Showcase */}
          <ProjectsSection />

          {/* Section 5: Academic Timeline */}
          <EducationTimeline />

          {/* Section 6: Verified Credentials */}
          <CertificationsSection />

          {/* Section 7: Volunteering Activities */}
          <ExperienceActivities />

          {/* Section 8: Professional Contact */}
          <ContactSection />
        </main>

        {/* Section 9: Footer */}
        <Footer />

      </div>

    </div>
  );
}
