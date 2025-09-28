import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ChevronDown, Briefcase, GraduationCap, Code, Lightbulb, Award } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      title: "Senior ML Engineer",
      company: "Folio3",
      period: "June 2022 - Current",
      location: "Lahore, Pakistan",
      description: "Leading NLP and Generative AI projects for US-based clients, developing internal products with cutting-edge AI technologies."
    },
    {
      title: "Data Scientist",
      company: "Afiniti",
      period: "April 2021 - May 2022",
      location: "Lahore, Pakistan",
      description: "Optimized call center revenue through AI-powered agent-customer pairing using statistical modeling and deep learning."
    },
    {
      title: "Software Engineer",
      company: "Tkxel",
      period: "July 2019 - March 2021",
      location: "Lahore, Pakistan",
      description: "Developed and maintained property management software using .NET and SQL Server for UK-based clients."
    }
  ];

  const projects = [
    {
      title: "Customer Interaction Automation",
      description: "Multi-agent orchestration framework using LangGraph, Neo4j, and GPT-4 for automated customer service tasks.",
      tags: ["LangGraph", "Neo4j", "GPT-4", "Multi-Agent"]
    },
    {
      title: "Medical Chatbot",
      description: "Advanced chatbot using OpenAI embeddings, Langchain, and GPT-4 for medical database queries from 50+ PDFs.",
      tags: ["OpenAI", "Langchain", "GPT-4", "Gradio"]
    },
    {
      title: "Image Logo Detection",
      description: "Vision-Language Models (Gemini, DeepSeek, GPT-4V) for automated logo detection and coordinate generation.",
      tags: ["VLMs", "Gemini", "GPT-4V", "Computer Vision"]
    },
    {
      title: "Solar Panel Defect Detection",
      description: "YOLOv8-based system for detecting defects in thermal drone imagery of solar panels.",
      tags: ["YOLOv8", "Computer Vision", "Roboflow"]
    },
    {
      title: "Vehicle Tracking System",
      description: "Real-time vehicle counting and tracking using Strong Sort and YOLOv8 for traffic analysis.",
      tags: ["YOLOv8", "Strong Sort", "Object Detection"]
    },
    {
      title: "Food Nutrition Calculator",
      description: "NLP-powered system for extracting and calculating nutritional content from recipe datasets.",
      tags: ["NLP", "Data Extraction", "Parser Development"]
    }
  ];

  const skills = {
    "Programming": ["Python", "C++", "SQL", "R", "C"],
    "ML Frameworks": ["PyTorch", "TensorFlow", "Keras", "Scikit-learn"],
    "AI Tools": ["OpenAI", "Langchain", "Huggingface", "OpenCV"],
    "Cloud & Platforms": ["Azure", "AWS", "Gradio"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Wajid</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center z-10">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl font-bold text-white">
                W
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Wajid</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Senior Machine Learning Engineer
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            5+ years of experience in AI/ML • Specializing in NLP & Generative AI • Building intelligent solutions that make an impact
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
              Get In Touch
            </a>
            <a href="#projects" className="px-8 py-3 border-2 border-purple-500 text-white rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-200">
              View Projects
            </a>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="mx-auto text-gray-400" size={32} />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            <Briefcase className="inline-block mr-3 mb-2" size={40} />
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 border border-purple-500/20"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-purple-400 text-lg font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-gray-400 text-sm md:text-right mt-2 md:mt-0">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-16 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <GraduationCap className="mr-3" size={32} />
              Education
            </h3>
            <p className="text-xl text-purple-400 font-semibold">Bachelor of Computer Science</p>
            <p className="text-gray-300">FAST-NUCES, Lahore</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-10 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            <Lightbulb className="inline-block mr-3 mb-2" size={40} />
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 border border-purple-500/20 group"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            <Code className="inline-block mr-3 mb-2" size={40} />
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white rounded-lg font-semibold hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Interested in collaborating on AI/ML projects? Let's connect!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:wajidaqeel36@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <Mail size={24} />
              wajidaqeel36@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 relative z-10 border-t border-slate-800">
        <p>&copy; 2025 Wajid. All rights reserved.</p>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}