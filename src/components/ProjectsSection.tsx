import { useState } from "react";
import {
  Briefcase,
  ExternalLink,
  Github,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
}

export default function ProjectSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "ISP Billing System",
      description:
        "Production-grade ISP billing platform with automated invoicing, customer management, and OLT hardware integration (ZTE & FiberHome). Deployed with Docker and Nginx on Linux.",
      image: "/Screenshot 2026-02-27 at 10.35.20.png",
      category: "fullstack",
      technologies: ["Next.js", "Go", "MySQL", "Docker", "Nginx", "OLT"],
      githubUrl: "https://github.com/raihantririzqi",
      demoUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Tinknet Inventory",
      description:
        "Comprehensive batch inventory system for warehouse management, featuring asset valuation, stock tracking, batch verification, and low-stock alerts.",
      image: "/Screenshot 2026-02-27 at 10.43.02.png",
      category: "fullstack",
      technologies: ["Next.js", "TypeScript", "MySQL", "Tailwind CSS"],
      githubUrl: "https://github.com/raihantririzqi",
      demoUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Termin — Contract Management",
      description:
        "Financial contract tracking system with payment schedule management, overdue detection, and cash flow reporting for B2B billing cycles.",
      image: "/Screenshot 2026-02-27 at 10.44.03.png",
      category: "fullstack",
      technologies: ["Next.js", "TypeScript", "MySQL", "Tailwind CSS"],
      githubUrl: "https://github.com/raihantririzqi",
      demoUrl: "#",
      featured: true,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-4">
            <Briefcase className="h-4 w-4" />
            <span>My Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest work and side projects showcasing modern web
            technologies
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeFilter === filter.id
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/50"
                  : "bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-800 border border-slate-700"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:scale-105"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1 px-3 py-1 bg-violet-600 rounded-full text-white text-xs font-medium">
                    <Sparkles className="h-3 w-3" />
                    <span>Featured</span>
                  </div>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900/90 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-violet-500 transition-all hover:scale-110"
                  >
                    <Github className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-violet-600 rounded-xl hover:bg-violet-500 transition-all hover:scale-110"
                  >
                    <ExternalLink className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-violet-600/20 text-violet-400 rounded-lg text-xs font-medium mb-3 capitalize">
                  {project.category}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-800 text-gray-300 rounded-lg text-xs border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Details Link */}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors text-sm font-medium"
                >
                  <span>View Project</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-slate-800">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-violet-400">3+</div>
            <div className="text-gray-400">Projects Shipped</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-violet-400">1</div>
            <div className="text-gray-400">Production Client</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-violet-400">1.5+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-violet-400">100%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}