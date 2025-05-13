
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
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
              <a href="https://facebook.com/adsfordevelopment" className="text-white/70 hover:text-tigray-terracotta transition-colors" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/ADSTigray" className="text-white/70 hover:text-tigray-terracotta transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com/ads_tigray_ngo/" className="text-white/70 hover:text-tigray-terracotta transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com/in/ads-anenitigray-development-services" className="text-white/70 hover:text-tigray-terracotta transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-tigray-terracotta flex-shrink-0" />
                <span className="text-white/80">Hadnet Sub city, Mekelle, Tigray, Ethiopia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-tigray-terracotta flex-shrink-0" />
                <span className="text-white/80">+251 93 702 2100 / +251-931329055</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-tigray-terracotta flex-shrink-0" />
                <span className="text-white/80">contact@anenitigray.org</span>
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
              {/* <li>
                <Link to="/news" className="text-white/80 hover:text-tigray-terracotta transition-colors">
                  News & Updates
                </Link>
              </li> */}
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
            <form action="https://anenitigray.us11.list-manage.com/subscribe/post?u=72947c9cdde68a612bead9c7f&amp;id=c229937d1f&amp;f_id=005110e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" className="mb-4">
              <input type="email" name="EMAIL" className="form-control flex-grow p-2 rounded-md focus:ring-tigray-terracotta focus:border-tigray-terracotta text-gray-800 w-full" placeholder="Enter your email" required />
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_72947c9cdde68a612bead9c7f_c229937d1f" tabIndex={-1} />
              </div>
              <button className="btn btn-custom bg-tigray-terracotta text-white p-2 rounded-md hover:bg-tigray-terracotta/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tigray-terracotta w-full mt-2" type="submit">Subscribe</button>
              {/* The label was outside the form in the original HTML, but placed here for grouping. It may need styling. */}
              {/* <label className="text-white/80 mt-2 block">Stay updated with our latest news and updates</label> */}
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} ADS - Anenitigray Development Services. {t('footer.rights')}
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-white/60 text-sm hover:text-white transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms-and-conditions" className="text-white/60 text-sm hover:text-white transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
