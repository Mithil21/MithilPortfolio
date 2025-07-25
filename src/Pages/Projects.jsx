import React from "react";

const projects = [
  {
    title: "Fake Review Detection",
    tech: ["Flask", "PyTorch", "Angular"],
    description: "Intelligent Amazon product filtering system with sophisticated fake review detection using deep learning models",
    category: "AI & E-commerce",
    link:"https://github.com/Mithil21/FakeReviewDetection",
    year: "2024",
    status: "Live",
    tags:["AI & Machine Learning","Frontend Development"]
  },
  {
    title: "Memory Matrix",
    tech: ["Python", "Flask", "Vector DB(FAISS)","Transformers"],
    description: "In large organizations, developers often rebuild similar functionalities from scratch (e.g., login, file upload, validation) — leading to duplicated effort and long testing cycles. This app reduces that by reusing tested code snippets from past applications.",
    category: "AI & NLP",
    link:"https://github.com/Mithil21/MemoryMatrix",
    year: "2025",
    status: "Production",
    tags:["AI & Machine Learning","Frontend Development"]
  },
  {
    title: "URL Shortner",
    tech: ["Java", "Docker", "Redis","Spring Boot", "PLSQL"],
    description: "This project implements a highly available and scalable URL shortening microservice, similar to TinyURL. It allows users to convert long, unwieldy URLs into short, memorable ones, and then redirects users from the short URL back to the original. Built using Spring Boot, PostgreSQL for robust data persistence, and Redis for high-performance caching, the application stack is fully containerized using Docker and orchestrated with Docker Compose, following modern microservice best practices.",
    link:"https://github.com/Mithil21/URLShortnerOnDocker",
    category: "Backend & DevOps",
    year: "2025",
    status: "Production",
    tags:["Backend Development","Cloud & DevOps","Database & Storage"]
  }
];

function Projects() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            A showcase of innovative solutions spanning security, AI, and full-stack development
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Featured Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="netflix-card rounded-lg overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🚀</div>
                    <div className="text-sm font-semibold">{project.category}</div>
                  </div>
                  <div className="absolute top-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded text-xs">
                    {project.status}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-gray-400">{project.year}</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-3 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((t, j) => (
                      <span key={j} className="bg-gray-700 text-xs px-2 py-1 rounded">{t}</span>
                    ))}
                  </div>
                  <div className="mb-3">
                    <p className="text-xs text-gray-400 mb-1">Skills Used:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag, k) => (
                        <span key={k} className="bg-red-600 bg-opacity-20 border border-red-600 text-red-400 text-xs px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs font-semibold transition-colors"
                  >
                    📂 View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;