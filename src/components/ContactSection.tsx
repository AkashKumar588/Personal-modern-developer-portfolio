import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate backend submission trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Automatically dismiss confirmation banner after 6 seconds
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden bg-[#0b0f19] border-t border-gray-900"
    >
      {/* Glow orb */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>

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
              Communication Portal
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-400">
                Connect
              </span>
            </h2>
            <p className="mt-3 text-sm text-gray-400 max-w-xl mx-auto">
              Ready to contribute optimized web interfaces and solid algorithms
              to high performance engineering teams.
            </p>
          </motion.div>
        </div>

        {/* Layout container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Glowing Contact Cards */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white tracking-tight">
              Direct Channels
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Whether you are an engineering manager seeking freshly trained raw
              talent or an individual with collaboration inquiries, feel free to
              reach out directly.
            </p>

            {/* Glowing Card 1: Email */}
            <a
              href="mailto:akash.kumar@example.com"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-gray-900/80 border border-gray-800 backdrop-blur-md hover:border-cyan-500/50 transition-all duration-300 glow-cyan relative overflow-hidden block"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase block tracking-wider">
                  Electronic Mail
                </span>
                <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                  akashkumar.024026@gmail.com
                </span>
              </div>
            </a>

            {/* Glowing Card 2: Phone */}
            <div className="group flex items-center gap-4 p-5 rounded-2xl bg-gray-900/80 border border-gray-800 backdrop-blur-md hover:border-purple-500/50 transition-all duration-300 glow-purple relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase block tracking-wider">
                  Mobile Identity
                </span>
                <span className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                  +91 (8434451225)
                </span>
              </div>
            </div>

            {/* Glowing Card 3: Location */}
            <div className="group flex items-center gap-4 p-5 rounded-2xl bg-gray-900/80 border border-gray-800 backdrop-blur-md hover:border-indigo-500/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase block tracking-wider">
                  Base Residence
                </span>
                <span className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                  Bhopal, Madhya Pradesh
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-gray-900 to-gray-950 border border-gray-800/80 text-center">
              <p className="text-[11px] text-gray-400">
                🎓 Proud undergraduate from{" "}
                <strong className="text-white">IES University</strong>. Open to
                relocation across major global developer hubs.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Professional Contact Form */}
          <motion.div
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-gray-900/60 border border-gray-800 backdrop-blur-md relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-between">
              <span>Send An Interactive Dispatch</span>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                State Responsive
              </span>
            </h3>

            {submitted ? (
              <motion.div
                className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">
                  Message Transmitted Successfully!
                </h4>
                <p className="text-xs text-gray-300">
                  Thank you for triggering communication. Your inquiry has been
                  correctly buffered into local virtual memory logs. I will
                  initiate response protocol at the earliest opportunity.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-cyan-400 underline hover:text-cyan-300"
                >
                  Draft Another Memo
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Form Field: Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5"
                  >
                    Your Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Recruiter Lead"
                    className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors text-xs sm:text-sm"
                  />
                </div>

                {/* Form Field: Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5"
                  >
                    Electronic Return Address{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. talent@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors text-xs sm:text-sm"
                  />
                </div>

                {/* Form Field: Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5"
                  >
                    Correspondence Payload{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Outline your application guidelines, feedback, or scheduling queries..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors text-xs sm:text-sm resize-none"
                  ></textarea>
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white shadow-lg transition-all cursor-pointer ${
                    isSubmitting
                      ? "bg-gray-800 text-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:opacity-90 shadow-cyan-500/20 active:scale-[0.98]"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span>Transmit Message Securely</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
