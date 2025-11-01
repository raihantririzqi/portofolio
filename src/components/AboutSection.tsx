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
  const [activeTab, setActiveTab] = useState("bio");

  const skills = {
    technical: [
      { name: "React", level: 95, color: "bg-violet-500" },
      { name: "Next.js", level: 90, color: "bg-violet-500" },
      { name: "TypeScript", level: 88, color: "bg-violet-500" },
      { name: "Tailwind CSS", level: 95, color: "bg-violet-500" },
      { name: "Node.js", level: 85, color: "bg-purple-500" },
      { name: "PostgreSQL", level: 80, color: "bg-purple-500" },
    ],
    design: [
      { name: "Figma", level: 92, color: "bg-pink-500" },
      { name: "Adobe XD", level: 85, color: "bg-pink-500" },
      { name: "UI/UX Design", level: 90, color: "bg-pink-500" },
      { name: "Prototyping", level: 88, color: "bg-pink-500" },
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
    { name: "Japanese", level: "Intermediate", flag: "🇯🇵" },
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
                Hi! I'm Yahya, a full-stack developer and UI/UX designer based
                in Indonesia. I've been passionate about creating digital
                experiences for over 5 years, combining technical expertise with
                creative design thinking.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My journey started with a curiosity for how things work on the
                web, which led me to dive deep into both frontend and backend
                development. I love transforming complex problems into simple,
                beautiful, and intuitive solutions.
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
                    Bachelor of Computer Science
                  </h4>
                  <p className="text-violet-400 text-sm mb-2">
                    University of Lampung
                  </p>
                  <p className="text-gray-500 text-sm">2018 - 2022</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Certifications
                  </h4>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-center gap-2 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                      AWS Certified Developer
                    </li>
                    <li className="flex items-center gap-2 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                      Google UX Design Certificate
                    </li>
                    <li className="flex items-center gap-2 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                      Meta Front-End Developer
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
                  Design
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
