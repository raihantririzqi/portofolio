import { useState } from 'react';
import { Menu, X, ChevronDown, Home, Info, Briefcase, FolderOpen, Mail, Rocket, Code, Smartphone, Palette } from 'lucide-react';

export default function NavbarComponents({ className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'portfolio', label: 'Portfolio', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const services = [
    { id: 'service1', label: 'Web Development', desc: 'Full-stack solutions', icon: Code },
    { id: 'service2', label: 'Mobile Apps', desc: 'iOS & Android', icon: Smartphone },
    { id: 'service3', label: 'UI/UX Design', desc: 'User-centered design', icon: Palette },
  ];

  return (
    <nav className={`bg-slate-900 shadow-2xl shadow-violet-900/10 m-3 rounded-lg border border-slate-800 ${className}`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <Rocket className="h-8 w-8 text-violet-400 mr-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <h1 className="text-2xl font-bold text-white transition-all duration-300 group-hover:text-violet-400">Yahya Alifandi</h1>
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
            
            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="group relative text-gray-300 hover:text-violet-400 px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-2"
              >
                <Briefcase className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-all duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-slate-800 border border-purple-700 rounded-xl shadow-2xl py-2 z-10">
                  <div className="px-2 py-1">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">Our Services</p>
                    
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <a
                          key={service.id}
                          href={`#${service.id}`}
                          className="group flex items-center gap-3 px-3 py-3 text-sm text-gray-300 hover:bg-purple-900 hover:text-violet-400 rounded-lg transition-all duration-200 hover:translate-x-1"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-violet-600/20 rounded-lg flex items-center justify-center group-hover:bg-violet-600 transition-all duration-200">
                            <Icon className="h-4 w-4 text-violet-400 group-hover:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{service.label}</div>
                            <div className="text-xs text-gray-500 group-hover:text-gray-400">{service.desc}</div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            
            {/* CTA Button */}
            <a
              href="#signup"
              className="relative group bg-violet-600 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-violet-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/50 flex items-center gap-2 overflow-hidden"
            >
              <span className="absolute inset-0 w-0 bg-violet-500 transition-all duration-300 ease-out group-hover:w-full"></span>
              <Rocket className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <span className="relative z-10">Get Started</span>
            </a>
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
        <div className="md:hidden border-t border-purple-700 animate-slideDown">
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
            
            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={toggleDropdown}
                className="w-full flex items-center justify-between text-gray-300 hover:text-violet-400 hover:bg-slate-800 px-3 py-3 rounded-lg text-base font-medium transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5" />
                  Services
                </span>
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <div className="pl-4 mt-1 space-y-1 animate-fadeIn">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <a
                        key={service.id}
                        href={`#${service.id}`}
                        className="group flex items-center gap-3 text-gray-400 hover:text-violet-400 hover:bg-slate-800 px-3 py-3 rounded-lg text-sm transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-8 h-8 bg-violet-600/20 rounded-lg flex items-center justify-center group-hover:bg-violet-600 transition-all duration-200">
                          <Icon className="h-4 w-4 text-violet-400 group-hover:text-white" />
                        </div>
                        <span>{service.label}</span>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
            
            <a
              href="#signup"
              className="flex items-center justify-center gap-2 bg-violet-600 text-white px-3 py-3 rounded-lg text-base font-bold hover:bg-violet-500 transition-all duration-300 mt-2 shadow-lg hover:shadow-violet-500/50 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              <Rocket className="h-5 w-5" />
              Get Started
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spinOnce {
          from { transform: rotate(0deg); }
          to { transform: rotate(90deg); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
        .animate-spin-once { animation: spinOnce 0.3s ease-out; }
      `}</style>
    </nav>
  );
}