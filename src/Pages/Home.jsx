import React from "react";

import { Link } from "react-router-dom";

const profiles = [
  {
    name: "Developer",
    avatar: "https://i.pravatar.cc/150?img=1",
    description: "View Projects",
    route: "/projects"
  },
  {
    name: "Engineer",
    avatar: "https://i.pravatar.cc/150?img=3",
    description: "Technical Skills",
    route: "/skills"
  },
  {
    name: "Student",
    avatar: "https://i.pravatar.cc/150?img=5",
    description: "Education & Certs",
    route: "/education"
  },
  {
    name: "Professional",
    avatar: "https://i.pravatar.cc/150?img=7",
    description: "Get In Touch",
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
            <div className="w-32 h-32 rounded-lg mb-4 mx-auto border-2 border-transparent hover:border-white overflow-hidden">
              <img 
                src={profile.avatar} 
                alt={profile.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                <span className="text-4xl">👤</span>
              </div>
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