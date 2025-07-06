import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/mockData';

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const scrollToNext = () => {
    const certificationsSection = document.getElementById('certifications');
    if (certificationsSection) {
      certificationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative">
      {/* Fixed Background */}
      <div className="section-bg">
        <div className="absolute inset-0 bg-slate-900 opacity-30"></div>
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
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            machine learning, and software engineering.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12 flex-1"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 h-fit"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Video Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-300">Video Placeholder</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Video Placeholder Text */}
                <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-gray-400 italic">
                    📹 {project.videoPlaceholder}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Live
                  </motion.button>
                  <motion.button
                    className="flex-1 bg-white/10 border border-white/20 text-white py-2 px-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-gray-300 mb-6">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.button
            onClick={scrollToNext}
            className="w-6 h-10 border-2 border-white/30 rounded-full p-1 hover:border-white/60 transition-colors cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;