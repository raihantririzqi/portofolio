import { useState } from "react";
import {
  User,
  GraduationCap,
  Heart,
  Code2,
  Palette,
  Lightbulb,
  MessageSquare,
  Users,
  Target,
  Globe,
  Sparkles,
} from "lucide-react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("tech");

  const skills = {
    technical: [
      { name: "Next.js / React", level: 95, color: "bg-violet-500" },
      { name: "Go (Golang)", level: 88, color: "bg-violet-500" },
      { name: "TypeScript", level: 90, color: "bg-violet-500" },
      { name: "Tailwind CSS", level: 92, color: "bg-violet-500" },
      { name: "Flutter", level: 78, color: "bg-purple-500" },
      { name: "MySQL", level: 82, color: "bg-purple-500" },
    ],
    design: [
      { name: "Docker", level: 85, color: "bg-pink-500" },
      { name: "Nginx", level: 82, color: "bg-pink-500" },
      { name: "Linux", level: 85, color: "bg-pink-500" },
      { name: "PM2", level: 80, color: "bg-pink-500" },
    ],
    soft: [
      { name: "Problem Solving", icon: Lightbulb },
      { name: "Communication", icon: MessageSquare },
      { name: "Team Collaboration", icon: Users },
      { name: "Project Management", icon: Target },
    ],
  };

  const languages = [
    { name: "Indonesian", level: "Native", flag: "🇮🇩" },
    { name: "English", level: "Professional", flag: "🇺🇸" },
  ];

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
    },
    {
      icon: Users,
      title: "User-Centered",
      description: "Always putting user experience at the forefront",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Constantly learning and exploring new technologies",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Deeply passionate about creating impactful solutions",
    },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      {/*<div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>*/}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-4">
            <User className="h-4 w-4" />
            <span>Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A passionate developer crafting digital experiences with creativity
            and precision
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Bio & Education */}
          <div className="space-y-6">
            {/* Bio Card */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Background</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Hi! I'm Raihan, an Informatics Engineering undergraduate at
                Institut Teknologi Sumatera (ITERA) and a Full-stack Software
                Engineer & Architect specializing in Next.js and Go. Based in
                Bandar Lampung, Indonesia.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I build production-grade web applications — from ISP billing
                platforms with automated invoicing to warehouse management
                systems. I also handle infrastructure using Docker and Nginx on
                Linux environments.
              </p>
            </div>

            {/* Education Card */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-700">
                  <h4 className="text-white font-semibold mb-1">
                    Bachelor of Informatics Engineering
                  </h4>
                  <p className="text-violet-400 text-sm mb-2">
                    Institut Teknologi Sumatera (ITERA)
                  </p>
                  <p className="text-gray-500 text-sm">2025 - Present · Semester 2</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Software Engineering (RPL)
                  </h4>
                  <p className="text-violet-400 text-sm mb-2">
                    SMKN 2 Terbanggi Besar
                  </p>
                  <p className="text-gray-500 text-sm mb-3">Graduated 2025</p>
                  <p className="text-gray-500 text-xs mb-2 italic">IT Software Solution for Business</p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full flex-shrink-0"></div>
                      1st Place LKS – District Level
                    </li>
                    <li className="flex items-center gap-2 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full flex-shrink-0"></div>
                      2nd Place LKS – Provincial Level
                    </li>
                    <li className="flex items-center gap-2 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full flex-shrink-0"></div>
                      3rd Place LKS – Provincial Level
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Languages</h3>
              </div>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="text-white font-medium">
                        {lang.name}
                      </span>
                    </div>
                    <span className="text-sm text-violet-400 font-medium">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Values */}
          <div className="space-y-6">
            {/* Skills Card */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Technical Skills
                </h3>
              </div>

              {/* Tab Navigation */}
              <div className="flex gap-2 mb-6 p-1 bg-slate-800/50 rounded-xl">
                <button
                  onClick={() => setActiveTab("tech")}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                    activeTab === "tech"
                      ? "bg-violet-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Development
                </button>
                <button
                  onClick={() => setActiveTab("design")}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                    activeTab === "design"
                      ? "bg-violet-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  DevOps
                </button>
              </div>

              {/* Skills Progress Bars */}
              <div className="space-y-4">
                {(activeTab === "tech" ? skills.technical : skills.design).map(
                  (skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">
                          {skill.name}
                        </span>
                        <span className="text-violet-400 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Soft Skills Card */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skills.soft.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-all"
                  >
                    <skill.icon className="h-5 w-5 text-violet-400" />
                    <span className="text-white text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            My Work <span className="text-violet-400">Values</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
