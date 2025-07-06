import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutMe } from '../data/mockData';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know more about my journey, interests, and aspirations in the world of technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                {aboutMe.introduction}
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Background</h2>
              <p className="text-gray-300 leading-relaxed">
                {aboutMe.background}
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Career Goals</h2>
              <p className="text-gray-300 leading-relaxed">
                {aboutMe.careerGoals}
              </p>
            </motion.div>
          </div>

          {/* Right Column - Interactive Content */}
          <div className="space-y-8">
            {/* Video Placeholder */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Video Introduction</h2>
              <div className="relative h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white font-medium">Personal Introduction Video</p>
                </div>
              </div>
              <div className="mt-4 bg-gray-800/50 rounded-lg p-4">
                <p className="text-sm text-gray-400 italic">
                  📹 {aboutMe.videoPlaceholder}
                </p>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Areas of Interest</h2>
              <div className="grid grid-cols-1 gap-4">
                {aboutMe.interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-400/30"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(168, 85, 247, 0.2)' }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">{interest}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Fun Facts */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Fun Facts</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  <span className="text-gray-300">Problem solver at heart</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💡</span>
                  <span className="text-gray-300">Love learning new technologies</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <span className="text-gray-300">Always ready for new challenges</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌟</span>
                  <span className="text-gray-300">Believer in continuous improvement</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Let's Connect!</h2>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new opportunities, projects, or just having a chat about technology.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
              <motion.button
                className="bg-white/10 border border-white/20 text-white py-3 px-6 rounded-lg font-medium hover:bg-white/20 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;