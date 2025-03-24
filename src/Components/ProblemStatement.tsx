import React from "react";

const ProblemStatement: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-300/20 dark:bg-blue-600/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-indigo-300/20 dark:bg-indigo-600/10 blur-3xl"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            The <span className="text-indigo-600 dark:text-indigo-400">Growing Challenge</span> of Customer Sentiment Analysis
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4 leading-relaxed">
            Businesses today struggle with processing vast amounts of customer feedback.
            Extracting meaningful insights efficiently is a challenge that requires advanced solutions.
          </p>
        </div>

        {/* Problem Points - Enhanced Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
          {[
            {
              image: "/assets/image.png",
              title: "Overwhelming Feedback",
              description: [
                "Companies receive vast amounts of feedback from surveys, reviews, and social media.",
                "Manual analysis is slow, inefficient, and unscalable.",
                "A streamlined approach is essential for real-time insights."
              ],
            },
            {
              image: "/assets/image.png",
              title: "Slow and Inconsistent Insights",
              description: [
                "Traditional sentiment analysis is time-consuming and prone to human bias.",
                "Delays in understanding customer concerns lead to missed opportunities.",
                "Businesses need faster, AI-driven solutions to stay competitive."
              ],
            },
            {
              image: "/assets/image.png",
              title: "Difficulty in Detecting Trends",
              description: [
                "Without the right tools, businesses struggle to identify emerging sentiment trends.",
                "Late reactions to market changes can impact customer satisfaction.",
                "AI-powered analytics offer proactive insights to stay ahead."
              ],
            },
            {
              image: "/assets/image.png",
              title: "The Need for AI-Powered Insights",
              description: [
                "AI-driven sentiment analysis enables real-time, data-backed decisions.",
                "Enhancing customer experience through actionable insights.",
                "Unlocking business growth with automation and efficiency."
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 group-hover:opacity-0 transition-opacity duration-300"></div>

              <div className="flex flex-col sm:flex-row h-full">
                {/* Image Section */}
                <div className="relative w-full sm:w-2/5 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 sm:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Text Section */}
                <div className="relative p-6 sm:p-8 flex flex-col justify-center sm:w-3/5">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {item.title}
                  </h3>
                  <div className="w-16 h-1 bg-indigo-600/60 mb-4 transform origin-left group-hover:scale-x-125 transition-transform duration-300"></div>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-3">
                    {item.description.map((point, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mt-0.5">
                          <span className="text-indigo-600 dark:text-indigo-400 text-xs">✓</span>
                        </span>
                        <span className="text-sm sm:text-base leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
