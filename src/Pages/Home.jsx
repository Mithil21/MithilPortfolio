import React from "react";

import { Link } from "react-router-dom";

const profiles = [
  {
    name: "Projects",
    avatar: "🚀",
    description: "Innovative Solutions",
    route: "/projects"
  },
  {
    name: "Skills",
    avatar: "⚡",
    description: "Technical Expertise",
    route: "/skills"
  },
  {
    name: "Education",
    avatar: "🎓",
    description: "Academic Journey",
    route: "/education"
  },
  {
    name: "Contact",
    avatar: "📧",
    description: "Let's Connect",
    route: "/contact"
  }
];

function Home() {
  return (
    <div className="profile-selector">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-red-600 mb-4 tracking-wider">Mithil's Portfolio</h1>
        <h2 className="text-3xl font-light mb-2">Who's exploring today?</h2>
        {/* <p className="text-gray-400">Mithil Baria - Full Stack/LLM Developer & Security Researcher</p> */}
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {profiles.map((profile, index) => (
          <Link key={index} to={profile.route} className="profile-card text-center">
            <div className="w-32 h-32 bg-gray-800 rounded-lg flex items-center justify-center mb-4 mx-auto border-2 border-transparent hover:border-white">
              <span className="text-6xl">{profile.avatar}</span>
            </div>
            <h3 className="profile-name text-gray-400 text-lg font-medium mb-1 transition-colors">{profile.name}</h3>
            <p className="text-gray-500 text-sm">{profile.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;