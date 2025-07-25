import React from "react";

import { Link } from "react-router-dom";

const profiles = [
  {
    name: "Developer",
    avatar: "https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif",
    description: "View Projects",
    route: "/projects"
  },
  {
    name: "Skills",
    avatar: "https://media.giphy.com/media/LaVp0AyqR5bGsC5Cbm/giphy.gif",
    description: "Technical Skills",
    route: "/skills"
  },
  {
    name: "Student",
    avatar: "https://media.giphy.com/media/WFZvB7VIXBgiz3oDXE/giphy.gif",
    description: "Education & Certs",
    route: "/education"
  },
  {
    name: "Professional",
    avatar: "https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif",
    description: "Get In Touch",
    route: "/contact"
  }
];

function Home() {
  return (
    <div className="profile-selector netflix-bg">
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
                <span className="text-4xl">
                  {profile.name === 'Developer' && '💻'}
                  {profile.name === 'Skills' && '⚡'}
                  {profile.name === 'Student' && '🎓'}
                  {profile.name === 'Professional' && '📧'}
                </span>
              </div>
            </div>
            <h3 className="profile-name text-gray-400 text-lg font-medium mb-1 transition-colors">{profile.name}</h3>
            <p className="text-gray-500 text-sm">{profile.description}</p>
          </Link>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <div className="netflix-card p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold text-red-400 mb-4">About Me</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Hi, I'm Mithil Baria — a Full Stack Developer with 5+ years of experience building scalable Java and Angular applications. 
            I specialize in Spring Boot, JavaScript frameworks, and security-centric systems like User Behavior Analytics (UBA).
          </p>
          <p className="text-gray-300 leading-relaxed">
            I'm passionate about combining clean code, system design, and AI-enhanced solutions to solve real-world problems. 
            Whether it's detecting threats offline, building RAG engines, or creating seamless user experiences — I love working 
            at the intersection of backend, frontend, and machine learning.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;