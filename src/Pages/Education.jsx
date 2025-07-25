import React from "react";

const education = [
    { 
    degree: "MSc", 
    place: "The University Of Manchester", 
    year: "2026",
    type: "Masters",
    focus: "Advanced Computer Science",
    icon: "🎓"
  },
  { 
    degree: "M.Tech in Computer Science & Engineering", 
    place: "Somaiya Vidyavihar University", 
    year: "2023",
    type: "Masters",
    focus: "Computer Engineering",
    icon: "🎓"
  },
  { 
    degree: "B.E. in Information Technology", 
    place: "SSJCOE (Mumbai University)", 
    year: "2019",
    type: "Bachelors",
    focus: "Information Technology",
    icon: "🎓"
  },
];

const certifications = [
  { name: "Java Fundamentals and Advanced Java", issuer: "Linked Learning", year: "2022", icon: "☁️" },
  { name: "Splunk Analytics", issuer: "LinkedIn Learning", year: "2023", icon: "🌱" },
  { name: "Machine Learning basics", issuer: "Coursera", year: "2025", icon: "🔒" },
  { name: "JavaScript Fundamentals", issuer: "GrassHopper", year: "2021", icon: "🤖" }
];

function Education() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Education & Certifications</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Academic foundation and professional certifications driving technical excellence
          </p>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Academic Background</h2>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={i} className="netflix-card p-6 rounded-lg flex items-center">
                <div className="text-4xl mr-6">{edu.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-semibold text-red-400">{edu.degree}</h3>
                    <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-semibold">{edu.year}</span>
                  </div>
                  <p className="text-lg text-gray-300 mb-1">{edu.place}</p>
                  <p className="text-sm text-gray-400">Specialization: {edu.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Professional Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <div key={i} className="netflix-card p-6 rounded-lg text-center group hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-red-400 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-300 mb-2">{cert.issuer}</p>
                <span className="inline-block bg-gray-700 px-2 py-1 rounded text-xs">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="px-6 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="netflix-card p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4 text-red-400">Continuous Learning</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              "Technology evolves rapidly, and so do I. My commitment to continuous learning ensures 
              I stay at the forefront of innovation, constantly expanding my expertise in emerging 
              technologies and methodologies."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;