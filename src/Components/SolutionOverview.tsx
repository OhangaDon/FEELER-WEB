import React from "react";
import { motion } from "framer-motion";

const SolutionOverview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const features = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <line x1="8" y1="10" x2="8" y2="16"></line>
          <line x1="12" y1="7" x2="12" y2="16"></line>
          <line x1="16" y1="12" x2="16" y2="16"></line>
        </svg>
      ), 
      title: "Data-Driven Insights", 
      description: "Track customer sentiment in real-time with AI-driven analytics that transform feedback into actionable business intelligence."
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ), 
      title: "Automated Analysis", 
      description: "Eliminate manual effort and get instant feedback reports that highlight trends, patterns and priority areas for improvement."
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="17 1 21 5 17 9"></polyline>
          <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
          <polyline points="7 23 3 19 7 15"></polyline>
          <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
        </svg>
      ), 
      title: "Multi-Platform Integration", 
      description: "Analyze feedback from emails, social media, and surveys in one unified dashboard for comprehensive sentiment overview."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-indigo-50 via-blue-50 to-white dark:from-gray-900 dark:via-indigo-950/30 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 dark:bg-blue-700/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-700/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/40 rounded-full">Innovative Solutions</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Future</span> of Sentiment Analysis
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Feeler utilizes cutting-edge <span className="font-semibold text-indigo-700 dark:text-indigo-400">AI and machine learning</span> to transform raw customer feedback into real-time, actionable insights. Make data-driven decisions effortlessly.
            </p>
          </motion.div>

          {/* Key Benefits */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden group"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <div className="w-12 h-0.5 bg-indigo-600/60 mx-auto mb-4 transform origin-center group-hover:w-16 transition-all duration-300"></div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call-to-Action */}
          <motion.div 
            variants={itemVariants}
            className="relative z-10"
          >
            <a href="#" className="relative inline-flex group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
              <button className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg text-white text-lg font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-600/30">
                Get Started with Feeler
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-200 group-hover:translate-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionOverview;