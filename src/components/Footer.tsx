
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tigray-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="h-8 w-8 rounded-full bg-tigray-terracotta flex items-center justify-center text-white font-bold">A</span>
              <span className="ml-2 text-xl font-bold text-white">ADS</span>
            </Link>
            <p className="text-white/80 mb-6">
              Empowering Tigray through sustainable development initiatives in education, healthcare, economic empowerment, and food security.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white/70 hover:text-tigray-terracotta transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-white/70 hover:text-tigray-terracotta transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-white/70 hover:text-tigray-terracotta transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-white/70 hover:text-tigray-terracotta transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-tigray-terracotta flex-shrink-0" />
                <span className="text-white/80">123 Development Street, Mekelle, Tigray, Ethiopia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-tigray-terracotta flex-shrink-0" />
                <span className="text-white/80">+251 912 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-tigray-terracotta flex-shrink-0" />
                <span className="text-white/80">info@ads-tigray.org</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/80 hover:text-tigray-terracotta transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-white/80 hover:text-tigray-terracotta transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-white/80 hover:text-tigray-terracotta transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-white/80 hover:text-tigray-terracotta transition-colors">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-tigray-terracotta transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter to receive updates on our work and impact.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 rounded-l-md focus:outline-none text-tigray-dark"
                />
                <button 
                  type="submit" 
                  className="bg-tigray-terracotta px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} ADS - Association for Development in Tigray. {t('footer.rights')}
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-white/60 text-sm hover:text-white transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-white/60 text-sm hover:text-white transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
