import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-24">
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        {/* Left Side Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl font-extrabold leading-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Feeler: AI-Powered Sentiment Analysis
          </h1>
          <p className="mt-4 text-xl opacity-90 max-w-md">
            Transforming customer feedback into actionable business intelligence.
          </p>
          
          {/* CTA Button - Learn More button removed */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <button className="px-8 py-4 text-lg font-medium text-blue-700 bg-yellow-400 rounded-lg shadow-xl hover:bg-yellow-300 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
              Try Feeler
            </button>
          </div>
        </div>
        
        {/* Right Side Image */}
        <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-white bg-opacity-20 rounded-lg blur"></div>
            <img
              src="/FEELER-WEB/assets/image.png"
              alt="AI-powered analytics"
              className="relative rounded-lg shadow-2xl w-full max-w-lg border border-white border-opacity-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;