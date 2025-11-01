import { useState } from "react";
import {
  Briefcase,
  ExternalLink,
  Github,
  ArrowRight,
  Code2,
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
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with real-time inventory management, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/username/ecommerce",
      demoUrl: "https://demo.ecommerce.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      category: "frontend",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
      githubUrl: "https://github.com/username/taskapp",
      demoUrl: "https://demo.taskapp.com",
      featured: true,
    },
    {
      id: 3,
      title: "AI Chat Assistant",
      description:
        "An intelligent chatbot powered by AI that helps users with customer support, featuring natural language processing.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
      category: "fullstack",
      technologies: ["Next.js", "OpenAI", "PostgreSQL", "Prisma"],
      githubUrl: "https://github.com/username/ai-chat",
      demoUrl: "https://demo.aichat.com",
      featured: true,
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with data visualization, post scheduling, and engagement tracking.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "design",
      technologies: ["Figma", "React", "Chart.js", "Redux"],
      githubUrl: "https://github.com/username/dashboard",
      demoUrl: "https://demo.dashboard.com",
      featured: false,
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description:
        "Mobile-first fitness application with workout plans, progress tracking, and nutrition guides.",
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=600&fit=crop",
      category: "frontend",
      technologies: ["React Native", "Redux", "Firebase", "Tailwind"],
      githubUrl: "https://github.com/username/fitness",
      demoUrl: "https://demo.fitness.com",
      featured: false,
    },
    {
      id: 6,
      title: "Weather Forecast App",
      description:
        "Real-time weather application with location-based forecasts, weather alerts, and interactive maps.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      category: "frontend",
      technologies: ["Vue.js", "Weather API", "Leaflet", "CSS3"],
      githubUrl: "https://github.com/username/weather",
      demoUrl: "https://demo.weather.com",
      featured: false,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "design", label: "UI/UX Design" },
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
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter.id
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

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="#all-projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50"
          >
            <Code2 className="h-5 w-5" />
            <span>View All Projects</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-slate-800">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-violet-400">
              {projects.length}+
            </div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-violet-400">100%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-violet-400">50K+</div>
            <div className="text-gray-400">Lines of Code</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-violet-400">24/7</div>
            <div className="text-gray-400">Support Available</div>
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