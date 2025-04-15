import React from "react";

const team = [
  {
    name: "Dr. Lawrence Nderu",
    role: "Principle Investigator",
    image: "/FEELER-WEB/assets/Nderu.jpg",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Joram Kireki",
    role: "Backend Developer",
    image: "/FEELER-WEB/assets/Joram.jpeg",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Vincent Ochieng'",
    role: "Backend Developer",
    image: "/FEELER-WEB/assets/Ohanga.jpeg",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Jany Muong",
    role: "Machine Learning Engineer",
    image: "/FEELER-WEB/assets/Janny.jpeg",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Gatmach Yuol",
    role: "Frontend Developer",
    image: "/FEELER-WEB/assets/Gatmatch.jpeg",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Akech Atem",
    role: "Frontend Developer",
    image: "/FEELER-WEB/assets/Akech.jpg",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Josphat Waweru",
    role: "UI/UX Designer",
    image: "/FEELER-WEB/assets/Josphat.jpeg",
    linkedin: "#",
    twitter: "#",
    instagram: "",
  },
];

const TeamMembers = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <div className="mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Meet Our <span className="text-indigo-600 dark:text-indigo-400">Team</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The brilliant minds behind Feeler, dedicated to AI innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg">
              {/* Image Background */}
              <div
                className="h-96 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${member.image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Name & Role */}
              <div className="absolute bottom-6 left-0 w-full text-white text-center px-4">
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-indigo-300 text-lg">{member.role}</p>
              </div>

              {/* Social Icons */}
              <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-indigo-600 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                </a>

                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-indigo-600 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </div>
                </a>

                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-indigo-600 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
