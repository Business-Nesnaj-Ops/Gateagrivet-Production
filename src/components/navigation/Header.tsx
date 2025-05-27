import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 border-b" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo with image and text */}
          <NavLink to="/" className="flex items-center" aria-label="Gateagrivet Home">
            <img 
              src="/favicon.ico" 
              alt="Gateagrivet Logo"
              className="h-8 w-auto mr-3"
              width="32"
              height="32"
            />
            <span className="text-xl font-bold text-gray-900">
              Gateagrivet
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-base font-medium ${
                    isActive 
                      ? 'text-gray-900 font-semibold' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden pb-4 bg-white">
            <nav role="navigation" aria-label="Mobile navigation">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => 
                      `py-2 px-4 text-base font-medium ${
                        isActive 
                          ? 'bg-gray-100 text-gray-900' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;