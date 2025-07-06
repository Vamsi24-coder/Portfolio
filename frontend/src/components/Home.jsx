import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TypingAnimation from './TypingAnimation';
import { personalInfo } from '../data/mockData';

const Home = () => {
  const [showObjective, setShowObjective] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1 });

  const handleTypingComplete = () => {
    setShowObjective(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-900 opacity-20"></div>
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Text Content */}
          <div className="space-y-8" ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-2xl md:text-4xl text-gray-300 mb-4">
                Hello, I am
              </h1>
              <TypingAnimation 
                text="Vamsi" 
                speed={150} 
                onComplete={handleTypingComplete}
              />
              <motion.p
                className="text-xl md:text-2xl text-blue-400 mt-4 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: showObjective ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {personalInfo.title}
              </motion.p>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur opacity-75"></div>
                <img
                  src={personalInfo.profileImage}
                  alt="Vamsi"
                  className="relative w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Objective Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: showObjective ? 1 : 0, y: showObjective ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Objective</h3>
              <p className="text-gray-300 leading-relaxed">
                {personalInfo.objective}
              </p>
            </motion.div>

            {/* Skills Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: showObjective ? 1 : 0, y: showObjective ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="flex flex-wrap gap-3"
            >
              {['Java', 'Python', 'Machine Learning', 'Spring Boot', 'React', 'MySQL'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-sm text-blue-300 font-medium"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.2 + index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right Column - 3D Skills Representation */}
          <div className="h-[600px] w-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full w-full relative flex items-center justify-center"
            >
              <div className="grid grid-cols-2 gap-8 w-full max-w-md">
                {/* Java Skill */}
                <motion.div
                  className="text-center"
                  animate={{ 
                    rotateY: [0, 360],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">J</span>
                  </div>
                  <p className="text-red-400 font-medium">Java</p>
                </motion.div>

                {/* Python Skill */}
                <motion.div
                  className="text-center"
                  animate={{ 
                    rotateY: [0, -360],
                    y: [0, -15, 0]
                  }}
                  transition={{ 
                    rotateY: { duration: 6, repeat: Infinity, ease: "linear" },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <p className="text-green-400 font-medium">Python</p>
                </motion.div>

                {/* Machine Learning Skill */}
                <motion.div
                  className="text-center col-span-2"
                  animate={{ 
                    rotateZ: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotateZ: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="w-32 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">ML</span>
                  </div>
                  <p className="text-blue-400 font-medium">Machine Learning</p>
                </motion.div>
              </div>
              
              {/* Skills Overlay */}
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
                <p className="text-white text-sm">🎯 Interactive Skills</p>
                <p className="text-gray-300 text-xs">Animated representations</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;