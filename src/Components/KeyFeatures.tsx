import React from "react";
import { motion } from "framer-motion";

const KeyFeatures = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const features = [
    {
      title: "Real-Time Sentiment Analysis",
      description: "Instantly analyze customer feedback across channels for actionable insights that drive immediate business improvements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6" y2="6"></line>
          <line x1="6" y1="18" x2="6" y2="18"></line>
          <line x1="10" y1="6" x2="18" y2="6"></line>
          <line x1="10" y1="18" x2="18" y2="18"></line>
        </svg>
      ),
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-100 to-blue-200",
      darkBgColor: "from-blue-900/30 to-blue-800/30"
    },
    {
      title: "Multi-Platform Integration",
      description: "Seamlessly collect and analyze data from surveys, social media, emails, and customer service interactions in one unified system.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      ),
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-100 to-indigo-200",
      darkBgColor: "from-indigo-900/30 to-indigo-800/30"
    },
    {
      title: "Insightful Data Visualization",
      description: "Transform complex sentiment data into intuitive charts, heatmaps, and trend reports that reveal actionable patterns.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
          <path d="M2 20h20"></path>
        </svg>
      ),
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-100 to-purple-200",
      darkBgColor: "from-purple-900/30 to-purple-800/30"
    },
    {
      title: "Customizable AI Model",
      description: "Tailor our advanced machine learning algorithms to match your specific industry, audience, and business needs for precision analysis.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-100 to-teal-200",
      darkBgColor: "from-teal-900/30 to-teal-800/30"
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-indigo-950/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4">
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-blue-300/10 dark:text-blue-700/10">
            <path fill="currentColor" d="M47.1,-57.2C59.4,-49.6,66.7,-33.7,68.3,-17.8C69.9,-1.9,65.7,14,57.3,26C48.9,38,36.3,46.1,22.7,52.3C9.1,58.4,-5.5,62.5,-21.9,60.8C-38.3,59.2,-56.5,51.6,-65.3,38C-74.1,24.4,-73.5,4.7,-69.1,-13.1C-64.7,-30.9,-56.4,-46.9,-43.6,-54.5C-30.8,-62.1,-13.6,-61.3,2.3,-64.1C18.3,-66.9,34.8,-64.7,47.1,-57.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4">
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-indigo-300/10 dark:text-indigo-700/10">
            <path fill="currentColor" d="M54.2,-46.1C68.8,-30.2,78.2,-7.4,74,11.4C69.8,30.2,52.1,45,32.4,56.3C12.7,67.6,-9,75.4,-31.2,70.2C-53.5,65,-76.3,46.8,-82.4,23.9C-88.5,1.1,-77.8,-26.5,-61.3,-43.2C-44.8,-59.9,-22.4,-65.8,-0.3,-65.6C21.7,-65.4,39.5,-61.9,54.2,-46.1Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 text-center relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/40 rounded-full">Powerful Capabilities</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Features</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Feeler is designed to provide businesses with cutting-edge AI tools to analyze customer feedback efficiently and transform insights into strategic actions.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Top accent */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${feature.color}`}></div>
              
              {/* Icon */}
              <div className={`flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${feature.bgColor} dark:${feature.darkBgColor}`}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              
              <div className={`w-12 h-0.5 bg-gradient-to-r ${feature.color} mb-4 transform group-hover:w-20 transition-all duration-300`}></div>
              
              <p className="text-gray-600 dark:text-gray-300 text-center">{feature.description}</p>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-blue-50/50 dark:from-gray-800/0 dark:to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default KeyFeatures;