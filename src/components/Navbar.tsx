import React, { useState, useEffect } from 'react';
import { Menu, X, Youtube, ListStart, Video } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-3 border-b border-blue-900/30' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img 
                src="https://yt3.googleusercontent.com/xIwL1F5HTg0c7zhkajS9YeeM03P9qU5y8UOHir2uQWkxngr5ffbEVCgMfcdNl4XC3dZnphg4=s160-c-k-c0x00ffffff-no-rj" 
                alt="EuSouOBackk" 
                className="relative w-10 h-10 rounded-full shadow-lg shadow-blue-500/20"
              />
            </div>
            <span className="text-xl font-bold">Backk</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white hover:text-blue-400 transition-colors"><ListStart size={20} /></a>
            <a href="#videos" className="text-white hover:text-blue-400 transition-colors"><Video size={20} /></a>
            <a 
              href="https://www.youtube.com/@EuSouOBackk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 rounded-full transition-colors"
            >
              <Youtube size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 border-t border-blue-900/30 absolute top-full left-0 right-0 p-4">
          <div className="flex flex-col gap-4">
            <a 
              href="#" 
              className="rounded-full text-white hover:text-blue-400 transition-colors flex justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <ListStart size={30} />
            </a>
            <a 
              href="#videos" 
              className="rounded-full text-white hover:text-blue-400 transition-colors flex justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Video size={30} />
            </a>
            <a 
              href="https://www.youtube.com/@EuSouOBackk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full transition-colors text-white hover:text-blue-400 text-center flex justify-center"
            >
              <Youtube size={30} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;