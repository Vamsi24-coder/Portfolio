import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '../data/mockData';

const ProgressBar = ({ totalMarks, achievedMarks, percentage, isInView, delay }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        controls.start({
          width: `${percentage}%`,
          transition: { duration: 2, ease: "easeOut" }
        });
        
        // Animate the counter
        const interval = setInterval(() => {
          setCurrentValue(prev => {
            if (prev >= achievedMarks) {
              clearInterval(interval);
              return achievedMarks;
            }
            return prev + (achievedMarks / 100);
          });
        }, 20);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, percentage, achievedMarks, controls, delay]);

  return (
    <div className="w-full">
      <div className="relative bg-gray-700/50 rounded-full h-6 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
          initial={{ width: 0 }}
          animate={controls}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-sm z-10">
            {currentValue.toFixed(totalMarks > 10 ? 2 : 0)}/{totalMarks} ({percentage}%)
          </span>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const scrollToTop = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative">
      {/* Fixed Background */}
      <div className="section-bg">
        <div className="absolute inset-0 bg-blue-900 opacity-30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center py-8">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent mb-6">
            Education
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey showcasing consistent excellence and dedication to learning.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8 mb-12 flex-1">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 hover:border-blue-400/50 transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Left Column - Education Details */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{edu.level}</h3>
                      <p className="text-blue-400 font-medium">{edu.institution}</p>
                      <p className="text-gray-300">{edu.year}</p>
                    </div>
                  </div>

                  {edu.specialization && (
                    <p className="text-gray-300 mb-4">
                      <span className="font-medium">Specialization:</span> {edu.specialization}
                    </p>
                  )}

                  <div className="flex items-center gap-6 text-sm">
                    <div className="bg-green-500/20 px-3 py-1 rounded-full border border-green-400/30">
                      <span className="text-green-400 font-medium">Grade: {edu.grade}</span>
                    </div>
                    <div className="text-gray-300">
                      <span className="font-medium">Score:</span> {edu.achievedMarks}/{edu.totalMarks}
                    </div>
                  </div>
                </div>

                {/* Right Column - Progress Bar */}
                <div className="space-y-4">
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-white mb-2">Performance</h4>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">
                      {edu.percentage}%
                    </div>
                  </div>
                  
                  <ProgressBar
                    totalMarks={edu.totalMarks}
                    achievedMarks={edu.achievedMarks}
                    percentage={edu.percentage}
                    isInView={inView}
                    delay={index * 200}
                  />
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-400">
                      {edu.totalMarks > 10 ? 'CGPA' : 'Marks'} Achievement
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-2xl font-bold text-white text-center mb-8">Academic Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent mb-2">
                96.3%
              </div>
              <p className="text-gray-300">Average Performance</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-600 bg-clip-text text-transparent mb-2">
                A+
              </div>
              <p className="text-gray-300">Consistent Grade</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-gray-300">Success Rate</p>
            </div>
          </div>
        </motion.div>

        {/* Interactive Note */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-gray-400 text-sm mb-4">
            💡 Hover over the progress bars to see detailed information
          </p>
        </motion.div>

        {/* Back to Top Indicator */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.button
            onClick={scrollToTop}
            className="flex flex-col items-center group cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-white/30 rounded-full p-1 hover:border-white/60 transition-colors mb-2 rotate-180"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-1 h-3 bg-white rounded-full"></div>
            </motion.div>
            <p className="text-white/60 text-xs group-hover:text-white/80 transition-colors">Back to top</p>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;