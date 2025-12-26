
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import YouthLeadershipBadge from './YouthLeadershipBadge';
import SocialEnterprisePill from './SocialEnterprisePill';
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
                            <img 
                              src="/images/logos/AneniTigray-Development-Services-logo.png" 
                              alt="ADS Logo"
                              className="h-10 w-auto object-contain mr-3"
                            />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white leading-tight">Anenitigray</span>
                                <span className="text-xs text-white/70 leading-tight">Development Services</span>
                            </div>
                        </Link>
                        <div className="mb-4 space-y-2">
                            <YouthLeadershipBadge size="sm" />
                            <p className="text-white/80 text-sm">
                                A youth-led NGO empowering Tigray through clean energy social enterprise.
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com/adsfordevelopment" className="text-white/70 hover:text-solar-yellow transition-colors" target="_blank" rel="noopener noreferrer">
                                <Facebook size={20} />
                            </a>
                            <a href="https://twitter.com/ADSTigray" className="text-white/70 hover:text-solar-yellow transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="https://instagram.com/ads_tigray_ngo/" className="text-white/70 hover:text-solar-yellow transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://linkedin.com/in/ads-anenitigray-development-services" className="text-white/70 hover:text-solar-yellow transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* ADS & Dungo Energy */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Our Organization</h3>
                        <div className="space-y-4 mb-6">
                            <div className="bg-white/5 rounded-lg p-3">
                                <h4 className="font-semibold text-white mb-1">ADS (NGO)</h4>
                                <p className="text-xs text-white/70">Youth-led governance & social impact</p>
                            </div>
                            <div className="bg-white/5 rounded-lg p-3">
                                <SocialEnterprisePill variant="dungo" size="sm" showIcon={false} />
                                <p className="text-xs text-white/70 mt-1">Social enterprise trading arm</p>
                            </div>
                        </div>
                        <p className="text-xs text-white/60">
                            100% of Dungo Energy profits reinvested in ADS programs
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/about-ads" className="text-white/80 hover:text-solar-yellow transition-colors">
                                    About ADS
                                </Link>
                            </li>
                            <li>
                                <Link to="/dungo-energy" className="text-white/80 hover:text-solar-yellow transition-colors">
                                    Dungo Energy Solutions
                                </Link>
                            </li>
                            <li>
                                <Link to="/project" className="text-white/80 hover:text-solar-yellow transition-colors">
                                    Our Project
                                </Link>
                            </li>
                            <li>
                                <Link to="/youth-employment" className="text-white/80 hover:text-solar-yellow transition-colors">
                                    Youth Opportunities
                                </Link>
                            </li>
                            <li>
                                <Link to="/impact" className="text-white/80 hover:text-solar-yellow transition-colors">
                                    Our Impact
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white/80 hover:text-solar-yellow transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Grant Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4 mb-6">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-3 text-solar-yellow flex-shrink-0" />
                                <span className="text-white/80 text-sm">Hadnet Sub city, Mekelle, Tigray, Ethiopia</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-3 text-solar-yellow flex-shrink-0" />
                                <span className="text-white/80 text-sm">+251 93 702 2100</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-3 text-solar-yellow flex-shrink-0" />
                                <span className="text-white/80 text-sm">contact@anenitigray.org</span>
                            </li>
                        </ul>

                        {/* Grant Information */}
                        <div className="bg-youth-blue/20 border border-youth-blue/30 rounded-lg p-3">
                            <p className="text-xs font-semibold text-white mb-1">Funded by</p>
                            <p className="text-xs text-white/90">AU-EU Youth Lab Entrepreneurship Grant</p>
                            <p className="text-xs text-white/70 mt-1">€30,000 • 12 months</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/20">
                    <div className="grid md:grid-cols-3 gap-6 items-center">
                        <div className="text-white/60 text-sm">
                            © {currentYear} ADS - Anenitigray Development Services
                        </div>
                        <div className="text-center">
                            <p className="text-xs text-white/60">
                                Dungo Energy Solutions is the trading arm of ADS
                            </p>
                        </div>
                        <div className="flex justify-end space-x-6">
                            <Link to="/privacy-policy" className="text-white/60 text-sm hover:text-white transition-colors">
                                {t('footer.privacy')}
                            </Link>
                            <Link to="/terms-and-conditions" className="text-white/60 text-sm hover:text-white transition-colors">
                                {t('footer.terms')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
