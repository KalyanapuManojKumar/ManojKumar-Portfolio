"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronRight, Calendar, Tag } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completionDate: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and responsive design. Built with modern web technologies for optimal performance.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "TailwindCSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    completionDate: "2024",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Includes advanced analytics and reporting.",
    image: "/projects/taskapp.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    completionDate: "2024",
    category: "Web Application"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "Machine learning powered content generation tool with natural language processing capabilities. Features include text generation, sentiment analysis, and content optimization.",
    image: "/projects/aigenerator.jpg",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "OpenAI API"],
    githubUrl: "https://github.com",
    featured: false,
    completionDate: "2023",
    category: "AI/ML"
  },
  {
    id: 4,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication, transaction tracking, and budget management tools. Designed with focus on security and user experience.",
    image: "/projects/banking.jpg",
    technologies: ["React Native", "TypeScript", "Node.js", "JWT", "MySQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    completionDate: "2023",
    category: "Mobile Development"
  },
  {
    id: 5,
    title: "Real Estate Platform",
    description: "Comprehensive real estate listing platform with virtual tours, advanced search filters, and integrated mortgage calculator. Features agent profiles and client management.",
    image: "/projects/realestate.jpg",
    technologies: ["Vue.js", "Laravel", "MySQL", "Google Maps API", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    completionDate: "2023",
    category: "Web Development"
  },
  {
    id: 6,
    title: "Healthcare Dashboard",
    description: "Medical dashboard for patient management with appointment scheduling, electronic health records, and telemedicine integration. HIPAA compliant with advanced security features.",
    image: "/projects/healthcare.jpg",
    technologies: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "WebRTC"],
    githubUrl: "https://github.com",
    featured: false,
    completionDate: "2022",
    category: "Healthcare"
  }
];

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            My <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Explore my portfolio of innovative solutions spanning web development, mobile applications, and AI-powered systems. Each project represents a unique challenge solved with cutting-edge technology.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project: Project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-gray-400 text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-gray-300 rounded-xl flex items-center justify-center">
                          <ChevronRight className="w-8 h-8 text-gray-500" />
                        </div>
                        <p className="text-sm">Project Preview</p>
                      </div>
                    </div>
                    
                    {/* Overlay Links */}
                    <AnimatePresence>
                      {hoveredProject === project.id && (
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex gap-3">
                            {project.liveUrl && (
                              <motion.a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-colors duration-200"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <ExternalLink className="w-5 h-5" />
                              </motion.a>
                            )}
                            {project.githubUrl && (
                              <motion.a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-colors duration-200"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                              </motion.a>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {project.title}
                        </h4>
                      </div>
                      
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.completionDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          <span>{project.category}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs sm:text-sm font-medium rounded-full border border-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
