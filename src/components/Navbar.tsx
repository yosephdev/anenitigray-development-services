
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center">
                <span className="h-8 w-8 rounded-full bg-tigray-terracotta flex items-center justify-center text-white font-bold">A</span>
                <span className="ml-2 text-xl font-bold text-tigray-dark">ADS</span>
              </div>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link to="/" className="font-medium text-tigray-dark hover:text-tigray-terracotta px-3 py-2 transition-colors">
                  Home
                </Link>
                <Link to="/about" className="font-medium text-tigray-dark hover:text-tigray-terracotta px-3 py-2 transition-colors">
                  About Us
                </Link>
                <Link to="/programs" className="font-medium text-tigray-dark hover:text-tigray-terracotta px-3 py-2 transition-colors">
                  Programs
                </Link>
                <Link to="/impact" className="font-medium text-tigray-dark hover:text-tigray-terracotta px-3 py-2 transition-colors">
                  Our Impact
                </Link>
                <Link to="/news" className="font-medium text-tigray-dark hover:text-tigray-terracotta px-3 py-2 transition-colors">
                  News
                </Link>
                <Link to="/contact" className="font-medium text-tigray-dark hover:text-tigray-terracotta px-3 py-2 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link to="/donate">
              <Button className="bg-tigray-terracotta hover:bg-opacity-90">
                Donate Now
              </Button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 ml-3 rounded-md text-tigray-dark hover:bg-tigray-sand focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block font-medium text-tigray-dark hover:text-tigray-terracotta px-3 py-2 transition-colors">
              Home
            </Link>
            <Link to="/about" className="block font-medium text-tigray-dark hover:text-tigray-terracotta px-3 py-2 transition-colors">
              About Us
            </Link>
            <Link to="/programs" className="block font-medium text-tigray-dark hover:text-tigray-terracotta px-3 py-2 transition-colors">
              Programs
            </Link>
            <Link to="/impact" className="block font-medium text-tigray-dark hover:text-tigray-terracotta px-3 py-2 transition-colors">
              Our Impact
            </Link>
            <Link to="/news" className="block font-medium text-tigray-dark hover:text-tigray-terracotta px-3 py-2 transition-colors">
              News
            </Link>
            <Link to="/contact" className="block font-medium text-tigray-dark hover:text-tigray-terracotta px-3 py-2 transition-colors">
              Contact
            </Link>
            <Link to="/donate" className="block">
              <Button className="w-full bg-tigray-terracotta hover:bg-opacity-90 mt-2">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
