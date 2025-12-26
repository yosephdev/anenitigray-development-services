import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Sun, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import GrantAlignmentBanner from '../components/GrantAlignmentBanner';
import ImpactMetricsDashboard from '../components/ImpactMetricsDashboard';
import YouthLeadershipBadge from '../components/YouthLeadershipBadge';
import SocialEnterprisePill from '../components/SocialEnterprisePill';
import { useLanguage } from '../contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <html lang={language} />
        <title>ADS - Youth-Led Solar Social Enterprise in Tigray | Dungo Energy Solutions</title>
        <meta name="description" content="Anenitigray Development Services (ADS) is a youth-led NGO creating employment through solar energy distribution. Empowering 20-25 youth, reaching 500+ households in Mekelle, Tigray." />
      </Helmet>
      
      <Navbar />
      <Hero />

      {/* Three-Column Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-tigray-dark mb-4">
              Our Dual Mission: Social + Environmental Impact
            </h2>
            <p className="text-xl text-tigray-dark/70 max-w-3xl mx-auto">
              Combining youth-led governance with social enterprise innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* ADS - NGO */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-youth-blue hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-youth-blue/10 p-4 rounded-full">
                  <Users className="text-youth-blue" size={48} />
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <YouthLeadershipBadge size="md" />
              </div>
              <h3 className="text-2xl font-bold text-tigray-dark mb-4 text-center">
                ADS (Youth-Led NGO)
              </h3>
              <p className="text-tigray-dark/70 text-center mb-6">
                Governance, strategy, and social impact measurement for sustainable 
                community development in Tigray.
              </p>
              <ul className="space-y-2 text-sm text-tigray-dark/70 mb-6">
                <li>✓ 100% youth governance (18-35)</li>
                <li>✓ Based in Mekelle, Tigray</li>
                <li>✓ 3-4 years of operation</li>
                <li>✓ Community-focused programs</li>
              </ul>
              <Link to="/about-ads" className="block">
                <button className="w-full bg-youth-blue text-white py-3 rounded-lg font-semibold hover:bg-youth-blue/90 transition-colors">
                  Learn About ADS
                  <ArrowRight className="inline ml-2" size={18} />
                </button>
              </Link>
            </div>

            {/* Dungo Energy - Social Enterprise */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-solar-yellow hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-solar-yellow/10 p-4 rounded-full">
                  <Sun className="text-solar-dark" size={48} />
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <SocialEnterprisePill variant="dungo" size="md" />
              </div>
              <h3 className="text-2xl font-bold text-tigray-dark mb-4 text-center">
                Dungo Energy Solutions
              </h3>
              <p className="text-tigray-dark/70 text-center mb-6">
                Social enterprise delivering clean solar energy while creating sustainable 
                youth employment.
              </p>
              <ul className="space-y-2 text-sm text-tigray-dark/70 mb-6">
                <li>✓ 20-25 youth employed</li>
                <li>✓ Solar energy distribution</li>
                <li>✓ Professional training provided</li>
                <li>✓ Profits reinvested in ADS</li>
              </ul>
              <Link to="/dungo-energy" className="block">
                <button className="w-full bg-gradient-to-r from-solar-yellow to-energy-green text-tigray-dark py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Explore Dungo Energy
                  <ArrowRight className="inline ml-2" size={18} />
                </button>
              </Link>
            </div>

            {/* Project Impact */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-energy-green hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-energy-green/10 p-4 rounded-full">
                  <TrendingUp className="text-energy-green" size={48} />
                </div>
              </div>
              <div className="bg-energy-green/10 text-energy-green text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
                EU-Funded Project
              </div>
              <h3 className="text-2xl font-bold text-tigray-dark mb-4 text-center">
                Project Impact
              </h3>
              <p className="text-tigray-dark/70 text-center mb-6">
                12-month solar social enterprise project creating lasting community impact 
                and sustainability.
              </p>
              <ul className="space-y-2 text-sm text-tigray-dark/70 mb-6">
                <li>✓ 500+ households reached</li>
                <li>✓ 2,500+ people impacted</li>
                <li>✓ 50 tons CO₂ reduced/year</li>
                <li>✓ €30,000 grant investment</li>
              </ul>
              <Link to="/project" className="block">
                <button className="w-full bg-energy-green text-white py-3 rounded-lg font-semibold hover:bg-energy-dark transition-colors">
                  View Project Details
                  <ArrowRight className="inline ml-2" size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grant Information Banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GrantAlignmentBanner />
        </div>
      </section>

      {/* Impact Metrics Dashboard */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-tigray-dark mb-4">
              Our Impact at a Glance
            </h2>
            <p className="text-xl text-tigray-dark/70">
              Real numbers, real change, real sustainability
            </p>
          </div>
          <ImpactMetricsDashboard showTrends={true} />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-tigray-dark mb-12 text-center">
            How We Create Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Youth Recruitment',
                description: 'We identify and recruit passionate young people aged 18-35 from Mekelle'
              },
              {
                step: '02',
                title: 'Training & Certification',
                description: 'Comprehensive 3-month training in solar technology and business skills'
              },
              {
                step: '03',
                title: 'Employment & Distribution',
                description: 'Graduates join Dungo Energy to install solar systems in communities'
              },
              {
                step: '04',
                title: 'Sustainable Growth',
                description: 'Revenue reinvested for continued youth employment and community programs'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-5xl font-bold text-solar-yellow/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-tigray-dark mb-3">{item.title}</h3>
                  <p className="text-tigray-dark/70">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="text-solar-yellow" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Youth Opportunities CTA */}
      <section className="py-16 bg-gradient-to-r from-youth-blue to-youth-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Are You Aged 18-35? Join Our Team!
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            We're recruiting for our next training cohort. Get certified, gain employment, 
            and build a career in clean energy while making a difference in your community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/youth-employment">
              <button className="bg-white text-youth-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                Explore Opportunities
                <ArrowRight className="inline ml-2" size={20} />
              </button>
            </Link>
            <Link to="/contact">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-youth-blue transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-tigray-dark mb-6">
                Powering Communities, Empowering Youth
              </h2>
              <p className="text-lg text-tigray-dark/70 mb-6 leading-relaxed">
                Every solar system we install represents multiple victories: a young person 
                employed, a family with reliable electricity, and a community moving toward 
                sustainable energy independence.
              </p>
              <p className="text-lg text-tigray-dark/70 mb-8 leading-relaxed">
                Our model proves that social enterprise can be both profitable and purposeful, 
                creating lasting change that goes far beyond traditional charity approaches.
              </p>
              <Link to="/impact">
                <button className="bg-energy-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-energy-dark transition-colors">
                  See Our Full Impact
                  <ArrowRight className="inline ml-2" size={18} />
                </button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-solar-yellow/20 to-energy-green/20 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-tigray-dark mb-2">For Youth</h4>
                  <p className="text-sm text-tigray-dark/70">
                    Professional skills, stable employment, career growth, and the pride of 
                    meaningful work
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-tigray-dark mb-2">For Households</h4>
                  <p className="text-sm text-tigray-dark/70">
                    Reliable electricity, cost savings, improved quality of life, and 
                    environmental benefits
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-tigray-dark mb-2">For Tigray</h4>
                  <p className="text-sm text-tigray-dark/70">
                    Economic development, youth retention, clean energy adoption, and 
                    sustainable growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
