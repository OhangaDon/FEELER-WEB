import Hero from "../Components/Hero";
import ProblemStatement from "../Components/ProblemStatement";
import SolutionOverview from "../Components/SolutionOverview";
import KeyFeatures from "../Components/KeyFeatures";
import React from "react";
import Nav from "../Components/Navbar";
import TeamMembers from "../Components/TeamMembers";
import Footer from "../Components/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="dark:bg-gray-900">
      <Nav />
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <KeyFeatures />
      <TeamMembers/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
