import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Sun, Zap, TrendingUp, Users, Award, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialEnterprisePill from '../components/SocialEnterprisePill';
import SolarProductCatalog from '../components/SolarProductCatalog';

const DungoEnergy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Dungo Energy Solutions - Social Enterprise | Solar Energy Distribution</title>
        <meta name="description" content="Dungo Energy Solutions is the social enterprise arm of ADS, providing solar energy solutions while creating youth employment in Mekelle, Tigray." />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <div className="relative py-20 bg-cover bg-center" style={{
        backgroundImage: "url('/images/dungo-energy-hero-01.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <SocialEnterprisePill variant="dungo" size="lg" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Dungo Energy Solutions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              A youth-led social enterprise bringing clean, affordable solar energy to households 
              across Mekelle while creating sustainable employment for young people. Currently applying 
              for AU EU LAB funding (deadline: January 7, 2026).
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Funding Status Banner */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-energy-green/10 to-youth-blue/10 border border-energy-green/30 rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="bg-energy-green/20 p-3 rounded-lg">
                  <Sun className="text-energy-green" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-tigray-dark mb-2">Applying for AU EU LAB Funding</h3>
                  <p className="text-tigray-dark/80 mb-3">
                    Dungo Energy is currently applying for AU EU LAB funding to accelerate our launch. 
                    Application deadline: <span className="font-semibold">January 7, 2026</span>
                  </p>
                  <p className="text-sm text-tigray-dark/70">
                    If approved, we will launch our full operations in January 2026, creating employment 
                    for 20-25 young people and bringing solar energy to 500+ households. If not selected, 
                    we will continue seeking funding from other sources to make this vision a reality.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* What is Dungo Energy */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-tigray-dark mb-8">What is Dungo Energy?</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100">
              <p className="text-lg text-tigray-dark/80 leading-relaxed mb-6">
                Dungo Energy Solutions is the trading arm and social enterprise of Anenitigray 
                Development Services (ADS). We operate as a for-profit business with a social 
                mission: every sale creates impact, every employee is a young person, and every 
                profit is reinvested into community development.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-solar-yellow/10 p-4 rounded-full inline-block mb-4">
                    <Sun className="text-solar-dark" size={40} />
                  </div>
                  <h3 className="font-bold text-tigray-dark mb-2">Clean Energy</h3>
                  <p className="text-sm text-tigray-dark/70">
                    Quality solar products for every need
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-youth-blue/10 p-4 rounded-full inline-block mb-4">
                    <Users className="text-youth-blue" size={40} />
                  </div>
                  <h3 className="font-bold text-tigray-dark mb-2">Youth Employment</h3>
                  <p className="text-sm text-tigray-dark/70">
                    20-25 young people employed full-time
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-energy-green/10 p-4 rounded-full inline-block mb-4">
                    <TrendingUp className="text-energy-green" size={40} />
                  </div>
                  <h3 className="font-bold text-tigray-dark mb-2">Sustainable Model</h3>
                  <p className="text-sm text-tigray-dark/70">
                    Profits reinvested in community programs
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Business Model */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-tigray-dark mb-8">Our Business Model</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-solar-yellow/10 to-solar-gold/10 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-solar-dark" size={28} />
                  <h3 className="text-xl font-bold text-tigray-dark">Revenue Generation</h3>
                </div>
                <ul className="space-y-3 text-tigray-dark/70">
                  <li className="flex items-start gap-2">
                    <Zap className="text-solar-yellow mt-1 flex-shrink-0" size={18} />
                    <span>Sale of solar home systems, lanterns, and accessories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="text-solar-yellow mt-1 flex-shrink-0" size={18} />
                    <span>Professional installation and setup services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="text-solar-yellow mt-1 flex-shrink-0" size={18} />
                    <span>Ongoing maintenance and repair services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="text-solar-yellow mt-1 flex-shrink-0" size={18} />
                    <span>Customer training and education programs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-energy-green/10 to-energy-dark/10 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-energy-green" size={28} />
                  <h3 className="text-xl font-bold text-tigray-dark">Social Impact</h3>
                </div>
                <ul className="space-y-3 text-tigray-dark/70">
                  <li className="flex items-start gap-2">
                    <Zap className="text-energy-green mt-1 flex-shrink-0" size={18} />
                    <span>100% youth employment (ages 18-35)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="text-energy-green mt-1 flex-shrink-0" size={18} />
                    <span>Fair wages and professional development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="text-energy-green mt-1 flex-shrink-0" size={18} />
                    <span>Clean energy access for underserved communities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="text-energy-green mt-1 flex-shrink-0" size={18} />
                    <span>All profits reinvested in ADS programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Product Catalog */}
          <section className="mb-16">
            <SolarProductCatalog />
          </section>

          {/* Photo Gallery Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-tigray-dark mb-8">Our Work in Action</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="/images/dungo-solar-installation-01.jpg" 
                  alt="Solar installation by Dungo Energy team"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <h4 className="font-semibold text-tigray-dark">Professional Installation</h4>
                  <p className="text-sm text-tigray-dark/70 mt-1">Expert setup and configuration services</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="/images/dungo-youth-team-01.jpg" 
                  alt="Dungo Energy youth team members"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <h4 className="font-semibold text-tigray-dark">Youth Team</h4>
                  <p className="text-sm text-tigray-dark/70 mt-1">Our dedicated young professionals</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="/images/dungo-community-solar-01.jpeg" 
                  alt="Community solar energy solutions"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <h4 className="font-semibold text-tigray-dark">Community Solutions</h4>
                  <p className="text-sm text-tigray-dark/70 mt-1">Tailored energy solutions for families</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="/images/dungo-youth-training-01.jpg" 
                  alt="Youth training and certification"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <h4 className="font-semibold text-tigray-dark">Training Programs</h4>
                  <p className="text-sm text-tigray-dark/70 mt-1">Technical and business skills development</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="/images/dungo-solar-distribution-04.jpg" 
                  alt="Solar panel setup process"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <h4 className="font-semibold text-tigray-dark">Quality Products</h4>
                  <p className="text-sm text-tigray-dark/70 mt-1">High-performance solar systems</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="/images/dungo-team-workshop-01.jpeg" 
                  alt="Team workshop and collaboration"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <h4 className="font-semibold text-tigray-dark">Collaboration</h4>
                  <p className="text-sm text-tigray-dark/70 mt-1">Teamwork and knowledge sharing</p>
                </div>
              </div>
            </div>
          </section>

          {/* Video Showcase */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-tigray-dark mb-8">See Dungo Energy in Action</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gray-900 w-full h-96 flex items-center justify-center relative group">
                  <video
                    src="/images/dungo-solar-operations-overview.mp4"
                    className="w-full h-full object-cover"
                    controls
                  />
                </div>
                <div className="p-6 bg-white">
                  <h4 className="font-semibold text-tigray-dark mb-2">Operations Overview</h4>
                  <p className="text-sm text-tigray-dark/70">See how Dungo Energy operates and delivers solar solutions to communities</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-energy-green/10 to-solar-yellow/10 rounded-xl p-8 border border-energy-green/20">
                <h3 className="text-2xl font-bold text-tigray-dark mb-6">Why Video Matters</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-energy-green/20 p-2 rounded-lg mt-1">
                      <svg className="w-4 h-4 text-energy-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-tigray-dark mb-1">Real Impact Stories</h4>
                      <p className="text-sm text-tigray-dark/70">Watch how our solar solutions transform communities</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-energy-green/20 p-2 rounded-lg mt-1">
                      <svg className="w-4 h-4 text-energy-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-tigray-dark mb-1">Youth Employment</h4>
                      <p className="text-sm text-tigray-dark/70">Meet the young people creating solar solutions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-energy-green/20 p-2 rounded-lg mt-1">
                      <svg className="w-4 h-4 text-energy-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-tigray-dark mb-1">Clean Energy Access</h4>
                      <p className="text-sm text-tigray-dark/70">Discover the difference solar energy makes</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-tigray-dark mb-8">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Consultation',
                  description: 'Free energy needs assessment for your home or business'
                },
                {
                  title: 'Installation',
                  description: 'Professional setup by certified young technicians'
                },
                {
                  title: 'Maintenance',
                  description: 'Regular check-ups and repairs for optimal performance'
                },
                {
                  title: 'Training',
                  description: 'Customer education on system operation and care'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-tigray-dark mb-3">{service.title}</h4>
                  <p className="text-sm text-tigray-dark/70">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Dungo */}
          <section className="mb-16 bg-gradient-to-r from-youth-blue to-youth-purple rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Dungo Energy?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">💡</div>
                <h3 className="font-bold mb-2">Quality Products</h3>
                <p className="text-white/90 text-sm">
                  Certified solar systems with warranties and guaranteed performance
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">🤝</div>
                <h3 className="font-bold mb-2">Community Trust</h3>
                <p className="text-white/90 text-sm">
                  Local youth-led organization with deep community connections
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">🌍</div>
                <h3 className="font-bold mb-2">Social Impact</h3>
                <p className="text-white/90 text-sm">
                  Every purchase creates employment and supports community development
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-solar-yellow/20 to-energy-green/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-tigray-dark mb-4">
                Ready to Go Solar?
              </h2>
              <p className="text-xl text-tigray-dark/80 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and join hundreds of households 
                enjoying clean, reliable solar energy.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-solar-yellow to-energy-green text-tigray-dark px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                Get Started
              </a>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DungoEnergy;
