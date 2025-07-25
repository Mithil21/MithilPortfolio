import React from "react";

const contactMethods = [
  {
    platform: "Email",
    handle: "mithilbaria98@gmail.com",
    link: "mailto:mithilbaria98@gmail.com",
    icon: "📧",
    description: "Direct communication for opportunities"
  },
  {
    platform: "LinkedIn",
    handle: "linkedin.com/in/mithil-baria-887347173/",
    link: "https://www.linkedin.com/in/mithil-baria-887347173/",
    icon: "🔗",
    description: "Professional networking & career updates"
  },
  {
    platform: "GitHub",
    handle: "github.com/Mithil21",
    link: "https://github.com/Mithil21",
    icon: "💻",
    description: "Code repositories & open source contributions"
  }
];

function Contact() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Let's Connect</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss exciting opportunities? 
            I'm always open to connecting with fellow developers, recruiters, and tech enthusiasts.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-6 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((contact, i) => (
              <a 
                key={i} 
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="netflix-card p-6 rounded-lg block group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-4">{contact.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-red-400 group-hover:text-red-300">
                      {contact.platform}
                    </h3>
                    <p className="text-sm text-gray-400">{contact.description}</p>
                  </div>
                </div>
                <p className="text-gray-300 font-mono text-sm bg-gray-800 bg-opacity-50 p-2 rounded">
                  {contact.handle}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto">
          <div className="netflix-card p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4 text-red-400">Ready to Work Together?</h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you're looking for a full-stack developer, security researcher, or AI enthusiast, 
              I'm excited to bring innovative solutions to your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/mithilflix\Mithil_Baria_Resume_25_06_2025.pdf" 
                download 
                className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                📄 Download Resume
              </a>
              <a 
                href="mailto:mithilbaria98@gmail.com" 
                className="border border-red-600 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                📧 Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Status */}
      <section className="px-6 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-green-600 bg-opacity-20 border border-green-600 px-4 py-2 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-green-400 font-semibold">Available for new opportunities</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
