import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/raihantririzqi",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/raihan-tri-rizqi/",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Email",
      url: "mailto:raihantririzqi5@gmail.com",
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  return (
    <footer className=" bg-slate-950 border-t border-slate-800">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                Raihan
              </span>
            </h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Full-stack Software Engineer & Architect specializing in Next.js
              and Go. Building production-grade web applications from Lampung,
              Indonesia.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-violet-400 hover:bg-slate-700 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Copyright & Bottom Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Raihan Tri Rizqi Wibowo. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">Crafted with ❤️ and ☕</p>
        </div>
      </div>
    </footer>
  );
}
