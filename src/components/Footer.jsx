import React from "react";

function Footer() {
  return (
    <footer className="bg-black bg-opacity-80 border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-4">MITHILFLIX</h3>
            <p className="text-gray-400 text-sm">
              A Netflix-inspired portfolio showcasing full-stack development, 
              AI innovation, and security research expertise.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-300">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="/skills" className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="/education" className="hover:text-white transition-colors">Education</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-300">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="mailto:mithilbaria@example.com" className="hover:text-white transition-colors">Email</a></li>
              <li><a href="https://linkedin.com/in/mithilbaria" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/mithilbaria" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-300">Technologies</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Java & Spring Boot</li>
              <li>Angular & React</li>
              <li>AI & Machine Learning</li>
              <li>Cloud & Security</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Mithil Baria. Built with ❤️ using React, Tailwind CSS, and Netflix-inspired design.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            This portfolio is inspired by Netflix's UI/UX design principles.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
