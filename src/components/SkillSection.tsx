import { useState } from "react";
import {
  Code2,
  Palette,
  Server,
  Wrench,
  Users,
  Lightbulb,
  MessageSquare,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { type LucideIcon } from "lucide-react"; // 👈 tambahkan ini

interface Skill {
  name: string;
  level: number;
  icon?: string;
  color: string;
}

interface ColorClasses {
  bg: string;
  border: string;
  text: string;
  hover: string;
  shadow: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  skills: Skill[];
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: Code2,
      color: "violet",
      skills: [
        { name: "Next.js / React", level: 95, color: "bg-violet-500" },
        { name: "TypeScript", level: 90, color: "bg-violet-500" },
        { name: "Tailwind CSS", level: 92, color: "bg-violet-500" },
        { name: "HTML5 / CSS3", level: 95, color: "bg-violet-500" },
        { name: "Flutter", level: 78, color: "bg-violet-500" },
      ],
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: Server,
      color: "purple",
      skills: [
        { name: "Go (Golang)", level: 88, color: "bg-purple-500" },
        { name: "Node.js / Express", level: 82, color: "bg-purple-500" },
        { name: "REST APIs", level: 92, color: "bg-purple-500" },
        { name: "MySQL", level: 82, color: "bg-purple-500" },
      ],
    },
    {
      id: "design",
      title: "Infrastructure & DevOps",
      icon: Palette,
      color: "pink",
      skills: [
        { name: "Docker", level: 85, color: "bg-pink-500" },
        { name: "Nginx", level: 82, color: "bg-pink-500" },
        { name: "Linux", level: 85, color: "bg-pink-500" },
        { name: "PM2", level: 80, color: "bg-pink-500" },
      ],
    },
    {
      id: "tools",
      title: "Tools & Others",
      icon: Wrench,
      color: "cyan",
      skills: [
        { name: "Git / GitHub", level: 95, color: "bg-cyan-500" },
        { name: "Vite", level: 88, color: "bg-cyan-500" },
        { name: "Payment Gateway", level: 82, color: "bg-cyan-500" },
        { name: "OLT Integration", level: 75, color: "bg-cyan-500" },
      ],
    },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Lightbulb, level: 95 },
    { name: "Team Collaboration", icon: Users, level: 92 },
    { name: "Communication", icon: MessageSquare, level: 90 },
    { name: "Project Management", icon: Target, level: 88 },
    { name: "Adaptability", icon: TrendingUp, level: 93 },
    { name: "Quick Learner", icon: Zap, level: 95 },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, ColorClasses> = {
      violet: {
        bg: "bg-violet-600",
        border: "border-violet-500",
        text: "text-violet-400",
        hover: "hover:border-violet-500",
        shadow: "shadow-violet-500/50",
      },
      purple: {
        bg: "bg-purple-600",
        border: "border-purple-500",
        text: "text-purple-400",
        hover: "hover:border-purple-500",
        shadow: "shadow-purple-500/50",
      },
      pink: {
        bg: "bg-pink-600",
        border: "border-pink-500",
        text: "text-pink-400",
        hover: "hover:border-pink-500",
        shadow: "shadow-pink-500/50",
      },
      cyan: {
        bg: "bg-cyan-600",
        border: "border-cyan-500",
        text: "text-cyan-400",
        hover: "hover:border-cyan-500",
        shadow: "shadow-cyan-500/50",
      },
    };
    return colors[color] || colors.violet;
  };

  const activeSkillCategory = skillCategories.find(
    (cat) => cat.id === activeCategory,
  );

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-4">
            <Zap className="h-4 w-4" />
            <span>What I'm Good At</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional
            capabilities
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? `${colors.bg} text-white shadow-lg ${colors.shadow}`
                    : `bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-800 border border-slate-700 ${colors.hover}`
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Content */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            {/* Category Header */}
            {activeSkillCategory && (
              <div className="flex items-center gap-3 mb-8">
                <div
                  className={`w-12 h-12 ${getColorClasses(activeSkillCategory.color).bg} rounded-xl flex items-center justify-center`}
                >
                  <activeSkillCategory.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {activeSkillCategory.title}
                </h3>
              </div>
            )}

            {/* Skills Grid with Progress Bars */}
            <div className="grid md:grid-cols-2 gap-6">
              {activeSkillCategory?.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span
                      className={`text-sm font-medium ${getColorClasses(activeSkillCategory.color).text}`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{
                        width:
                          hoveredSkill === skill.name
                            ? `${skill.level}%`
                            : `${skill.level}%`,
                      }}
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">
              Soft <span className="text-violet-400">Skills</span>
            </h3>
            <p className="text-gray-400">
              Professional competencies that complement technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:scale-105"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold">{skill.name}</h4>
                      <span className="text-violet-400 text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Progress Circle */}
                  <div className="relative w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Proficiency Legend */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <h4 className="text-white font-bold mb-4 text-center">
              Proficiency Scale
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { range: "90-100%", label: "Expert", color: "bg-violet-500" },
                { range: "80-89%", label: "Advanced", color: "bg-purple-500" },
                { range: "70-79%", label: "Proficient", color: "bg-pink-500" },
                {
                  range: "60-69%",
                  label: "Intermediate",
                  color: "bg-cyan-500",
                },
                { range: "0-59%", label: "Beginner", color: "bg-slate-500" },
              ].map((item) => (
                <div key={item.range} className="text-center">
                  <div
                    className={`w-full h-2 ${item.color} rounded-full mb-2`}
                  ></div>
                  <div className="text-white text-xs font-medium">
                    {item.label}
                  </div>
                  <div className="text-gray-500 text-xs">{item.range}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
