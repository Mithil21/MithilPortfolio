import React from "react";

const skillCategories = [
  {
    category: "Backend Development",
    skills: ["Java", "Spring Boot", "Microservices", "REST APIs", "JPA/Hibernate", "Maven"],
    icon: "⚙️"
  },
  {
    category: "Frontend Development", 
    skills: ["Angular", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind"],
    icon: "🎨"
  },
  {
    category: "Database & Storage",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Vector Databases"],
    icon: "🗄️"
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Git", "Linux"],
    icon: "☁️"
  },
  {
    category: "AI & Machine Learning",
    skills: ["Python", "PyTorch", "TensorFlow", "LangChain", "NLP", "RAG Systems"],
    icon: "🤖"
  },
  {
    category: "Security & Analytics",
    skills: ["UBA Systems", "Security Research", "Threat Detection", "Data Analysis"],
    icon: "🔒"
  }
];

function Skills() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Technical Skills</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            A comprehensive toolkit spanning full-stack development, AI, and cybersecurity
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, i) => (
              <div key={i} className="netflix-card p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-red-400">{category.category}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, j) => (
                    <div key={j} className="bg-gray-700 bg-opacity-50 px-3 py-2 rounded text-sm text-center hover:bg-red-600 hover:bg-opacity-20 transition-colors cursor-pointer">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proficiency Levels */}
      <section className="px-6 mt-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Core Competencies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="netflix-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-red-400">Expert Level</h3>
              <div className="space-y-2">
                {["Java", "Spring Boot", "Angular", "Security Research"].map((skill, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span>{skill}</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="netflix-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-red-400">Advanced Level</h3>
              <div className="space-y-2">
                {["React", "Python", "AWS", "Machine Learning"].map((skill, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span>{skill}</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;