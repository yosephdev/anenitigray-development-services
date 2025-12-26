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
      <div className="bg-gradient-to-br from-solar-yellow/20 to-energy-green/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <SocialEnterprisePill variant="dungo" size="lg" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-tigray-dark mb-6">
            Dungo Energy Solutions
          </h1>
          <p className="text-xl text-tigray-dark/80 max-w-3xl">
            A youth-led social enterprise bringing clean, affordable solar energy to households 
            across Mekelle while creating sustainable employment for young people.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
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
