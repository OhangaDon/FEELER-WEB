import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-700 pb-10">
          
          {/* Brand Info */}
          <div>
            <h2 className="text-3xl font-extrabold text-white">
              Feeler<span className="text-indigo-500">.</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              AI-driven sentiment analysis for powerful insights.
            </p>
            <div className="mt-4">
              <p className="text-gray-400">📧 Email: support@feeler.com</p>
              <p className="text-gray-400">📞 Phone: +123 456 7890</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <p className="text-gray-400 text-sm mt-2">
              Connect with us on social media.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-500 mt-6">
          <p>© {new Date().getFullYear()} Feeler. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
