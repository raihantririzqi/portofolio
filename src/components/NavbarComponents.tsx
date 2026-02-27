import { useState } from 'react';
import { Menu, X, Home, Info, Briefcase, FolderOpen, Mail, Zap, Star } from 'lucide-react';

export default function NavbarComponents({ className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Star },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className={`bg-slate-900 shadow-2xl shadow-violet-900/10 m-3 rounded-lg border border-slate-800 ${className}`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <Zap className="h-8 w-8 text-violet-400 mr-2 transition-all duration-300 group-hover:scale-110" />
            <h1 className="text-2xl font-bold text-white transition-all duration-300 group-hover:text-violet-400">Raihan Tri Rizqi Wibowo</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group relative text-gray-300 hover:text-violet-400 px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-2"
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-violet-400 focus:outline-none transition-all duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} className="animate-spin-once" /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-700 animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-violet-400 hover:bg-slate-800 px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:translate-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spinOnce {
          from { transform: rotate(0deg); }
          to { transform: rotate(90deg); }
        }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
        .animate-spin-once { animation: spinOnce 0.3s ease-out; }
      `}</style>
    </nav>
  );
}
