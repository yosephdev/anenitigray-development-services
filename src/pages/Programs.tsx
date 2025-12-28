
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Sun, Heart, Users, Lightbulb, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const Programs = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState('training');

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <html lang={language} />
        <title>Our Programs - ADS</title>
        <meta name="description" content="Explore ADS's comprehensive programs: Training & Education, Social Enterprise (Dungo Energy), and Community Services in Tigray, Ethiopia." />
      </Helmet>
      <Navbar />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="relative py-24 bg-tigray-dark">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
            backgroundImage: "url('/images/ads-economic-empowerment-01.jpg')"
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Our Programs</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              From leadership training to clean energy, from community development to emergency relief — 
              ADS delivers comprehensive solutions for Tigray's challenges
            </p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto">
              <button
                onClick={() => setActiveTab('training')}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === 'training'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Award className="inline mr-2" size={18} />
                Training & Education
              </button>
              <button
                onClick={() => setActiveTab('enterprise')}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === 'enterprise'
                    ? 'border-solar-yellow text-energy-green'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Sun className="inline mr-2" size={18} />
                Social Enterprise
                <span className="ml-2 text-xs bg-solar-yellow text-tigray-dark px-2 py-0.5 rounded">NEW</span>
              </button>
              <button
                onClick={() => setActiveTab('community')}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === 'community'
                    ? 'border-tigray-terracotta text-tigray-terracotta'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Heart className="inline mr-2" size={18} />
                Community Services
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="py-16">
          {/* Training & Education Tab */}
          {activeTab === 'training' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-tigray-dark mb-4">Training & Capacity Building Programs</h2>
                <p className="text-lg text-tigray-dark/70">
                  Building leadership capacity, digital skills, and organizational resilience for individuals 
                  and organizations across Tigray.
                </p>
              </div>

              {/* Leadership in Crisis Training */}
              <div className="mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
                      Featured Program
                    </div>
                    <h3 className="text-2xl font-bold text-tigray-dark mb-4">
                      Leadership in Crisis Training for CSO Leaders
                    </h3>
                    <p className="text-tigray-dark/70 mb-6">
                      In partnership with TDRF and ACSOT, we delivered comprehensive leadership development 
                      training for civil society organization leaders, strengthening their capacity to lead 
                      during post-conflict recovery.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <Users className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                        <span><strong>20 CSO Leaders</strong> trained across Tigray</span>
                      </li>
                      <li className="flex items-start">
                        <Award className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                        <span><strong>Facilitated by</strong> Merho Training & Consultancy Services</span>
                      </li>
                      <li className="flex items-start">
                        <Heart className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                        <span><strong>Partnership</strong> with TDRF and ACSOT</span>
                      </li>
                    </ul>
                    <Link to="/programs/capacity-building">
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Learn More <ArrowRight className="inline ml-2" size={18} />
                      </button>
                    </Link>
                  </div>
                  <div>
                    <img 
                      src="/images/PHOTO-2025-09-15-17-43-54.jpg"
                      alt="Leadership Training Session"
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* AI & Digital Literacy */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <div className="bg-purple-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Lightbulb className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-tigray-dark mb-3">
                    AI & Digital Literacy Programs
                  </h3>
                  <p className="text-tigray-dark/70 mb-4">
                    Equipping youth and professionals with essential digital skills and AI literacy 
                    to thrive in the modern economy and leverage technology for community development.
                  </p>
                  <ul className="text-sm text-tigray-dark/70 space-y-2 mb-6">
                    <li>• Introduction to AI and Machine Learning</li>
                    <li>• Digital tools for business and nonprofits</li>
                    <li>• Online collaboration and productivity</li>
                    <li>• Technology for social good applications</li>
                  </ul>
                </div>

                {/* Organizational Development */}
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <div className="bg-green-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Shield className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-tigray-dark mb-3">
                    CSO Capacity Building
                  </h3>
                  <p className="text-tigray-dark/70 mb-4">
                    Strengthening civil society organizations through comprehensive capacity building 
                    in governance, financial management, program design, and monitoring & evaluation.
                  </p>
                  <ul className="text-sm text-tigray-dark/70 space-y-2 mb-6">
                    <li>• Organizational governance and leadership</li>
                    <li>• Financial management and reporting</li>
                    <li>• Strategic planning and program design</li>
                    <li>• Monitoring, evaluation, and learning</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Social Enterprise Tab */}
          {activeTab === 'enterprise' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-br from-solar-yellow/10 to-energy-green/10 rounded-2xl p-12">
                <div className="text-center mb-12">
                  <div className="inline-block bg-gradient-to-r from-solar-yellow to-energy-green text-tigray-dark text-sm font-semibold px-6 py-2 rounded-full mb-4">
                    AU EU LAB Application • Deadline: Jan 7, 2026
                  </div>
                  <h2 className="text-4xl font-bold text-tigray-dark mb-4">Dungo Energy Solutions</h2>
                  <p className="text-xl text-tigray-dark/70 max-w-3xl mx-auto">
                    Youth-led solar enterprise to create sustainable employment while delivering clean energy to communities
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold text-tigray-dark mb-6">About Dungo Energy</h3>
                    <p className="text-lg text-tigray-dark/70 mb-6">
                      Dungo Energy Solutions is ADS's social enterprise arm — a youth-led solar energy 
                      distribution company that employs 20-25 young people while bringing clean, reliable 
                      electricity to communities across Mekelle.
                    </p>
                    <p className="text-lg text-tigray-dark/70 mb-6">
                      This innovative model combines social impact with business sustainability: 100% of 
                      profits are reinvested in ADS programs, creating a virtuous cycle of employment, 
                      empowerment, and community development.
                    </p>
                    
                    <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                      <h4 className="font-bold text-tigray-dark mb-4">Key Impact Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-3xl font-bold text-solar-dark mb-1">20-25</div>
                          <div className="text-sm text-tigray-dark/70">Youth Employed</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-solar-dark mb-1">500+</div>
                          <div className="text-sm text-tigray-dark/70">Households Reached</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-solar-dark mb-1">2,500+</div>
                          <div className="text-sm text-tigray-dark/70">People Impacted</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-solar-dark mb-1">50 tons</div>
                          <div className="text-sm text-tigray-dark/70">CO₂ Reduced/Year</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h4 className="font-bold text-tigray-dark mb-3">Solar Products Offered</h4>
                      <ul className="space-y-2 text-tigray-dark/70">
                        <li>• Residential solar home systems</li>
                        <li>• Commercial solar installations</li>
                        <li>• Solar lighting solutions</li>
                        <li>• Portable solar chargers</li>
                        <li>• Energy-efficient appliances</li>
                      </ul>
                    </div>

                    <img 
                      src="/images/dungo-solar-solutions-hero.jpeg"
                      alt="Dungo Energy Solutions"
                      className="w-full h-64 object-cover rounded-xl shadow-lg"
                    />

                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h4 className="font-bold text-tigray-dark mb-3">Youth Training Program</h4>
                      <ul className="space-y-2 text-tigray-dark/70">
                        <li>• 3-month comprehensive solar training</li>
                        <li>• Installation and maintenance skills</li>
                        <li>• Business and customer service</li>
                        <li>• Safety and quality standards</li>
                        <li>• Ongoing professional development</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-energy-green">
                      <h4 className="font-bold text-tigray-dark mb-2">Sustainable Business Model</h4>
                      <p className="text-sm text-tigray-dark/70">
                        Self-sustaining social enterprise model with 100% of profits reinvested 
                        into ADS programs, youth employment, and community impact.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link to="/dungo-energy">
                    <button className="bg-gradient-to-r from-solar-yellow to-energy-green text-tigray-dark px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity shadow-lg">
                      Explore Dungo Energy <ArrowRight className="inline ml-2" size={20} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Community Services Tab */}
          {activeTab === 'community' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-tigray-dark mb-4">Community Development & Emergency Services</h2>
                <p className="text-lg text-tigray-dark/70">
                  Providing integrated support for vulnerable populations through emergency relief, 
                  child protection, healthcare, and sustainable development initiatives.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Integrated Child Care */}
                <Link to="/programs/integrated-child-care" className="group">
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow h-full">
                    <img 
                      src="/images/ads-child-friendly-space-01.jpg"
                      alt="Child Care Program"
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    <h3 className="text-2xl font-bold text-tigray-dark mb-3">
                      Integrated Child Care & Protection
                    </h3>
                    <p className="text-tigray-dark/70 mb-4">
                      Comprehensive child-friendly spaces providing education, nutrition, psychosocial 
                      support, and protection services for vulnerable children affected by conflict.
                    </p>
                    <div className="flex items-center text-tigray-terracotta font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="ml-2" size={18} />
                    </div>
                  </div>
                </Link>

                {/* Rapid Relief */}
                <Link to="/programs/rapid-relief" className="group">
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow h-full">
                    <img 
                      src="/images/ads-youth-program-01.jpg"
                      alt="Emergency Relief"
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    <h3 className="text-2xl font-bold text-tigray-dark mb-3">
                      Rapid Emergency Relief
                    </h3>
                    <p className="text-tigray-dark/70 mb-4">
                      Immediate response to humanitarian crises with food distribution, emergency shelter, 
                      medical supplies, and essential services for displaced populations.
                    </p>
                    <div className="flex items-center text-tigray-terracotta font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="ml-2" size={18} />
                    </div>
                  </div>
                </Link>

                {/* Asset Program */}
                <Link to="/programs/asset-program" className="group">
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow h-full">
                    <img 
                      src="/images/ads-education-program-01.jpg"
                      alt="Asset Building Program"
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    <h3 className="text-2xl font-bold text-tigray-dark mb-3">
                      Economic Empowerment & Asset Building
                    </h3>
                    <p className="text-tigray-dark/70 mb-4">
                      Supporting sustainable livelihoods through vocational training, microfinance, 
                      agricultural support, and income-generating activities for vulnerable households.
                    </p>
                    <div className="flex items-center text-tigray-terracotta font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="ml-2" size={18} />
                    </div>
                  </div>
                </Link>

                {/* Healthcare & Wellness */}
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 h-full">
                  <div className="bg-red-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                    <Heart className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-tigray-dark mb-3">
                    Healthcare & Wellness Programs
                  </h3>
                  <p className="text-tigray-dark/70 mb-4">
                    Mobile health clinics, mental health support, nutrition programs, and health education 
                    reaching remote communities with limited access to healthcare services.
                  </p>
                  <ul className="text-sm text-tigray-dark/70 space-y-2">
                    <li>• Primary healthcare services</li>
                    <li>• Psychosocial support and trauma counseling</li>
                    <li>• Maternal and child health</li>
                    <li>• Health education and disease prevention</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Partnership Section */}
        <div className="py-16 bg-tigray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-tigray-dark mb-4">Our Trusted Partners</h2>
              <p className="text-lg text-tigray-dark/70 max-w-3xl mx-auto">
                Working with leading organizations to maximize impact and ensure effective program delivery
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="h-20 w-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center">
                  <img 
                    src="/images/logos/Tigray-Disaster-Relief-Fund-preview.png"
                    alt="TDRF Logo"
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <h4 className="font-semibold text-tigray-dark text-sm">Tigray Disaster Relief Fund</h4>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="h-20 w-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center">
                  <img 
                    src="/images/logos/acsot-logo-preview.png"
                    alt="ACSOT Logo"
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <h4 className="font-semibold text-tigray-dark text-sm">ACSOT</h4>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="h-20 w-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center">
                  <img 
                    src="/images/logos/ternafit-logo-nobg.png"
                    alt="Ternafit Logo"
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <h4 className="font-semibold text-tigray-dark text-sm">Ternafit.org</h4>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="h-20 w-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center">
                  <div className="text-energy-green font-bold text-lg">💡</div>
                </div>
                <h4 className="font-semibold text-tigray-dark text-sm">Seeking Partners</h4>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-tigray-dark to-tigray-brown text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Support Our Comprehensive Programs</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              From training to clean energy to community services — your support makes all our programs possible
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/donate">
                <button className="bg-solar-yellow text-tigray-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-solar-yellow/90 transition-colors shadow-lg">
                  Donate Now <ArrowRight className="inline ml-2" size={20} />
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-tigray-dark transition-colors">
                  Partner With Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Programs;
