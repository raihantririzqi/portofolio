import { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

interface Experience {
  id: number;
  position: string;
  company: string;
  location: string;
  duration: string;
  type: "fulltime" | "freelance" | "internship";
  description: string[];
  technologies: string[];
  current: boolean;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa?: string;
  description: string;
  achievements: string[];
}

export default function ExperienceEducationSection() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience"
  );

  const experiences: Experience[] = [
    {
      id: 1,
      position: "Full-stack Developer",
      company: "PT. Tunas Link Indonesia",
      location: "Bandar Lampung, Indonesia",
      duration: "Jun 2025 - Present",
      type: "fulltime",
      description: [
        "Architecting a comprehensive Batch Inventory System as a Full-stack Next.js application to manage warehouse stocks and logistics",
        "Maintaining a production-grade ISP billing platform with automated invoicing and OLT hardware integration (ZTE & FiberHome) using Next.js and Go",
        "Managing high-performance deployments using Docker and Nginx on Linux environments",
      ],
      technologies: ["Next.js", "Go", "Docker", "Nginx", "Linux"],
      current: true,
    },
    {
      id: 2,
      position: "Full-stack Developer",
      company: "PT. Tunas Link Indonesia",
      location: "Remote",
      duration: "Oct 2024 - Jun 2025",
      type: "freelance",
      description: [
        "Designed and built the core billing application for ISP services as a Full-stack Next.js application, focusing on automated client management and invoicing",
        "Integrated secure payment gateways to automate collection processes and financial reporting",
        "Maintained service stability and performance using PM2 and Nginx server configurations",
      ],
      technologies: ["Next.js", "Flutter", "PM2", "Nginx"],
      current: false,
    },
    {
      id: 3,
      position: "Head of IT Division — PEMIKET 2025 Committee",
      company: "Institut Teknologi Sumatera",
      location: "Lampung Selatan, Indonesia",
      duration: "Dec 2025 - Jan 2026",
      type: "internship",
      description: [
        "Ensured a secure digital environment and oversaw technical safety protocols for student platforms",
        "Designed and implemented user-friendly interfaces using Next.js, prioritizing aesthetic and user comfort",
        "Managed a team of technical analysts to ensure all departmental activities were conducted orderly and securely",
      ],
      technologies: ["Next.js", "TypeScript"],
      current: false,
    },
  ];

  const education: Education[] = [
    {
      id: 1,
      degree: "Bachelor of Informatics Engineering",
      institution: "Institut Teknologi Sumatera (ITERA)",
      location: "Bandar Lampung, Indonesia",
      duration: "2025 - Present · Semester 2",
      description:
        "Focusing on Software Engineering, web development, and system architecture. Currently in semester 2.",
      achievements: [
        "Head of IT Division at PEMIKET 2025 Committee (ITERA)",
        "Active in full-stack software development alongside studies",
      ],
    },
    {
      id: 2,
      degree: "Software Engineering (RPL)",
      institution: "SMKN 2 Terbanggi Besar",
      location: "Lampung Tengah, Indonesia",
      duration: "Graduated 2025",
      description:
        "Software Engineering major focused on software development and programming. Competed in LKS field: IT Software Solution for Business.",
      achievements: [
        "1st Place LKS IT Software Solution for Business – District Level",
        "2nd Place LKS IT Software Solution for Business – Provincial Level",
        "3rd Place LKS IT Software Solution for Business – Provincial Level",
      ],
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "fulltime":
        return "bg-violet-600/20 text-violet-400 border-violet-500/30";
      case "freelance":
        return "bg-purple-600/20 text-purple-400 border-purple-500/30";
      case "internship":
        return "bg-pink-600/20 text-pink-400 border-pink-500/30";
      default:
        return "bg-slate-600/20 text-slate-400 border-slate-500/30";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "fulltime":
        return "Contract";
      case "freelance":
        return "Part Time";
      case "internship":
        return "Volunteer";
      default:
        return type;
    }
  };

  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-4">
            <TrendingUp className="h-4 w-4" />
            <span>My Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience &{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of my professional journey and academic achievements
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-slate-800/50 rounded-xl border border-slate-700">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all ${
                activeTab === "experience"
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/50"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Briefcase className="h-5 w-5" />
              <span>Experience</span>
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all ${
                activeTab === "education"
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/50"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <GraduationCap className="h-5 w-5" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Experience Section */}
        {activeTab === "experience" && (
          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-600 via-purple-600 to-pink-600"></div>

              {/* Experience Items */}
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className="relative pl-20"
                    style={{
                      animation: `fadeInLeft 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-violet-600 border-4 border-slate-950 shadow-lg shadow-violet-500/50"></div>

                    {/* Content Card */}
                    <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">
                              {exp.position}
                            </h3>
                            {exp.current && (
                              <span className="px-3 py-1 bg-green-600/20 text-green-400 border border-green-500/30 rounded-full text-xs font-medium">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-violet-400 font-medium mb-2">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Type Badge */}
                        <span
                          className={`px-4 py-2 rounded-lg text-xs font-medium border ${getTypeColor(
                            exp.type
                          )}`}
                        >
                          {getTypeLabel(exp.type)}
                        </span>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((desc, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-400 text-sm"
                          >
                            <CheckCircle2 className="h-4 w-4 text-violet-400 mt-0.5 flex-shrink-0" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-slate-800 text-gray-300 rounded-lg text-xs border border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Education Section */}
        {activeTab === "education" && (
          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-600 via-purple-600 to-pink-600"></div>

              {/* Education Items */}
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div
                    key={edu.id}
                    className="relative pl-20"
                    style={{
                      animation: `fadeInLeft 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-purple-600 border-4 border-slate-950 shadow-lg shadow-purple-500/50"></div>

                    {/* Content Card */}
                    <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-purple-400 font-medium mb-2">
                            {edu.institution}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{edu.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* GPA Badge */}
                        {edu.gpa && (
                          <div className="px-4 py-2 bg-purple-600/20 text-purple-400 border border-purple-500/30 rounded-lg text-sm font-medium">
                            GPA: {edu.gpa}
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-4">
                        {edu.description}
                      </p>

                      {/* Achievements */}
                      {edu.achievements.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Award className="h-4 w-4 text-purple-400" />
                            <span className="text-white font-medium text-sm">
                              Achievements
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-gray-400 text-sm"
                              >
                                <CheckCircle2 className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-slate-800">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-violet-400">1.5+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-violet-400">1</div>
            <div className="text-gray-400">Company</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-violet-400">3+</div>
            <div className="text-gray-400">Projects Shipped</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-violet-400">1</div>
            <div className="text-gray-400">Leadership Role</div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}