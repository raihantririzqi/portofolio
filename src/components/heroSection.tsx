import { useState, useEffect } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  Code,
  Palette,
  Rocket,
  Github,
  Linkedin,
} from "lucide-react";

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Creative Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-visible">
      {/* Animated Background */}
      {/*<div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>*/}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium animate-fadeIn">
              <Sparkles className="h-4 w-4" />
              <span>Available for freelance</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                  Yahya
                </span>
              </h1>

              {/* Animated Role */}
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl text-gray-400">A</span>
                <div className="relative h-12 overflow-hidden">
                  <div
                    className="transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateY(-${currentRole * 3}rem)` }}
                  >
                    {roles.map((role, index) => (
                      <h2
                        key={index}
                        className="text-2xl md:text-3xl font-bold text-violet-400 h-12 flex items-center"
                      >
                        {role}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              I craft beautiful digital experiences with a focus on
              user-centered design and clean code. Passionate about creating
              innovative solutions that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-violet-600 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50 flex items-center gap-2"
              >
                <span className="absolute inset-0 w-0 bg-violet-500 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="group px-8 py-4 bg-slate-800 text-white rounded-xl font-semibold border border-slate-700 hover:border-violet-500 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="#github"
                className="group p-3 bg-slate-800 rounded-xl border border-slate-700 hover:border-violet-500 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5 text-gray-400 group-hover:text-violet-400 transition-colors" />
              </a>
              <a
                href="#linkedin"
                className="group p-3 bg-slate-800 rounded-xl border border-slate-700 hover:border-violet-500 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-violet-400 transition-colors" />
              </a>
              <a
                href="#email"
                className="group p-3 bg-slate-800 rounded-xl border border-slate-700 hover:border-violet-500 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5 text-gray-400 group-hover:text-violet-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative lg:block hidden">
            <div className="relative w-full h-[600px]">
              {/* Card 1 */}
              <div className="absolute top-0 right-0 w-64 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl hover:scale-105 transition-all duration-300 animate-float">
                <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Clean Code
                </h3>
                <p className="text-gray-400 text-sm">
                  Writing maintainable and scalable code
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 bg-violet-600/20 text-violet-400 rounded-full text-xs">
                    React
                  </span>
                  <span className="px-3 py-1 bg-violet-600/20 text-violet-400 rounded-full text-xs">
                    Node.js
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="absolute top-32 right-72 w-64 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl hover:scale-105 transition-all duration-300 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  UI/UX Design
                </h3>
                <p className="text-gray-400 text-sm">
                  Creating beautiful user experiences
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs">
                    Figma
                  </span>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs">
                    Adobe
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div
                className="absolute bottom-0 right-16 w-64 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl hover:scale-105 transition-all duration-300 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Fast Delivery
                </h3>
                <p className="text-gray-400 text-sm">
                  Delivering projects on time
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 bg-pink-600/20 text-pink-400 rounded-full text-xs">
                    Agile
                  </span>
                  <span className="px-3 py-1 bg-pink-600/20 text-pink-400 rounded-full text-xs">
                    CI/CD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-slate-800">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-violet-400">50+</div>
            <div className="text-gray-400">Projects Done</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-violet-400">30+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-violet-400">5+</div>
            <div className="text-gray-400">Years Exp</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-violet-400">15+</div>
            <div className="text-gray-400">Awards Won</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
