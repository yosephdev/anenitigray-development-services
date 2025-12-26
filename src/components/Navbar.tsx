
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import YouthLeadershipBadge from './YouthLeadershipBadge';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center">
                <img 
                  src="/images/logos/AneniTigray-Development-Services-logo.png" 
                  alt="ADS Logo"
                  className="h-12 w-auto object-contain"
                />
                <div className="ml-3 flex flex-col">
                  <span className="text-xl font-bold text-tigray-dark leading-tight">Anenitigray</span>
                  <span className="text-xs text-tigray-dark/70 leading-tight">Development Services</span>
                </div>
              </div>
            </Link>
            <div className="hidden lg:block ml-6">
              <YouthLeadershipBadge size="sm" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link to="/" className="font-medium text-tigray-dark hover:text-solar-yellow px-3 py-2 transition-colors">
                  Home
                </Link>
                <Link to="/about-ads" className="font-medium text-tigray-dark hover:text-solar-yellow px-3 py-2 transition-colors">
                  About ADS
                </Link>
                <Link to="/dungo-energy" className="font-medium text-tigray-dark hover:text-solar-yellow px-3 py-2 transition-colors">
                  Dungo Energy
                </Link>
                <Link to="/project" className="font-medium text-tigray-dark hover:text-solar-yellow px-3 py-2 transition-colors">
                  Our Project
                </Link>
                <Link to="/youth-employment" className="font-medium text-tigray-dark hover:text-solar-yellow px-3 py-2 transition-colors">
                  Youth Opportunities
                </Link>
                <Link to="/impact" className="font-medium text-tigray-dark hover:text-solar-yellow px-3 py-2 transition-colors">
                  Impact
                </Link>
                <Link to="/contact" className="font-medium text-tigray-dark hover:text-solar-yellow px-3 py-2 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/donate">
              <Button className="bg-gradient-to-r from-solar-yellow to-energy-green hover:opacity-90 text-tigray-dark font-semibold border-0">
                Support Us
              </Button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
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
            <div className="mb-3 px-3">
              <YouthLeadershipBadge size="sm" />
            </div>
            <Link to="/" className="block font-medium text-tigray-dark hover:text-solar-yellow px-3 py-2 transition-colors">
              Home
            </Link>
            <Link to="/about-ads" className="block font-medium text-tigray-dark hover:text-solar-yellow px-3 py-2 transition-colors">
              About ADS
            </Link>
            <Link to="/dungo-energy" className="block font-medium text-tigray-dark hover:text-solar-yellow px-3 py-2 transition-colors">
              Dungo Energy
            </Link>
            <Link to="/project" className="block font-medium text-tigray-dark hover:text-solar-yellow px-3 py-2 transition-colors">
              Our Project
            </Link>
            <Link to="/youth-employment" className="block font-medium text-tigray-dark hover:text-solar-yellow px-3 py-2 transition-colors">
              Youth Opportunities
            </Link>
            <Link to="/impact" className="block font-medium text-tigray-dark hover:text-solar-yellow px-3 py-2 transition-colors">
              Impact
            </Link>
            <Link to="/contact" className="block font-medium text-tigray-dark hover:text-solar-yellow px-3 py-2 transition-colors">
              Contact
            </Link>
            <Link to="/donate" className="block">
              <Button className="w-full bg-gradient-to-r from-solar-yellow to-energy-green hover:opacity-90 text-tigray-dark font-semibold border-0 mt-2">
                Support Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
