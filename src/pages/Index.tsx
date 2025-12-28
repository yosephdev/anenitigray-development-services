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
                <li>✓ 3-4 years serving the community</li>
                <li>✓ Proven track record in programs</li>
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
                AU EU LAB application in progress with deadline January 7, 2026. Creating 
                sustainable youth employment through solar energy solutions.
              </p>
              <ul className="space-y-2 text-sm text-tigray-dark/70 mb-6">
                <li>→ Target: 20-25 youth to employ</li>
                <li>→ Solar energy distribution to 500+ households</li>
                <li>→ Professional training and certification</li>
                <li>→ 100% of profits reinvested in ADS programs</li>
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
              <div className="bg-youth-blue/10 text-youth-blue text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
                AU EU LAB Application • Deadline: Jan 7, 2026
              </div>
              <h3 className="text-2xl font-bold text-tigray-dark mb-4 text-center">
                Planned Project Impact
              </h3>
              <p className="text-tigray-dark/70 text-center mb-6">
                If approved, this 12-month solar social enterprise will launch January 2026, 
                creating lasting community impact and sustainability.
              </p>
              <ul className="space-y-2 text-sm text-tigray-dark/70 mb-6">
                <li>→ Target: 500+ households</li>
                <li>→ Target: 2,500+ people impacted</li>
                <li>→ Goal: 50 tons CO₂ reduced/year</li>
                <li>→ Sustainable business model</li>
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

      {/* Our Diverse Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-1 w-20 bg-tigray-terracotta mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-tigray-dark mb-4">
              Our Diverse Programs
            </h2>
            <p className="text-xl text-tigray-dark/70 max-w-3xl mx-auto">
              From leadership training to proposed clean energy enterprise, building comprehensive impact across Tigray
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Training & Education Card */}
            <Link to="/programs/capacity-building" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-xl transition-all border border-blue-200 h-full">
                <div className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
                  Training Programs
                </div>
                <h3 className="text-2xl font-bold text-tigray-dark mb-4">
                  Leadership & Capacity Building
                </h3>
                <p className="text-tigray-dark/70 mb-6">
                  Professional training programs including Leadership in Crisis, AI & Digital Literacy, 
                  and organizational development for CSOs across Tigray.
                </p>
                <ul className="space-y-2 text-sm text-tigray-dark/70 mb-6">
                  <li>✓ Leadership in Crisis Training</li>
                  <li>✓ AI & Digital Literacy Programs</li>
                  <li>✓ CSO Capacity Building</li>
                  <li>✓ Professional Development</li>
                </ul>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2" size={18} />
                </div>
              </div>
            </Link>

            {/* Social Enterprise Card */}
            <Link to="/dungo-energy" className="group">
              <div className="bg-gradient-to-br from-solar-yellow/20 to-energy-green/20 rounded-xl p-8 hover:shadow-xl transition-all border border-solar-yellow h-full">
                <div className="bg-gradient-to-r from-solar-yellow to-energy-green text-tigray-dark text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
                  Under Development • Seeking Funding
                </div>
                <h3 className="text-2xl font-bold text-tigray-dark mb-4">
                  Dungo Energy Solutions
                </h3>
                <p className="text-tigray-dark/70 mb-6">
                  Youth-led solar social enterprise to create sustainable employment while delivering 
                  clean energy to communities. Applying to AU EU LAB (deadline January 7, 2026).
                </p>
                <ul className="space-y-2 text-sm text-tigray-dark/70 mb-6">
                  <li>→ Target: 20-25 Youth to Employ</li>
                  <li>→ Target: 500+ Households to Power</li>
                  <li>→ Solar Energy Distribution</li>
                  <li>→ Professional Training to Provide</li>
                </ul>
                <div className="flex items-center text-energy-green font-semibold group-hover:translate-x-2 transition-transform">
                  Explore Dungo Energy <ArrowRight className="ml-2" size={18} />
                </div>
              </div>
            </Link>

            {/* Community & Emergency Card */}
            <Link to="/programs" className="group">
              <div className="bg-gradient-to-br from-tigray-sand/30 to-tigray-ochre/20 rounded-xl p-8 hover:shadow-xl transition-all border border-tigray-ochre h-full">
                <div className="bg-tigray-terracotta text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
                  Community Programs
                </div>
                <h3 className="text-2xl font-bold text-tigray-dark mb-4">
                  Community & Emergency Services
                </h3>
                <p className="text-tigray-dark/70 mb-6">
                  Comprehensive community development, child protection, emergency relief, 
                  and integrated support services for vulnerable populations.
                </p>
                <ul className="space-y-2 text-sm text-tigray-dark/70 mb-6">
                  <li>✓ Emergency Relief & Food Security</li>
                  <li>✓ Child Protection Services</li>
                  <li>✓ Community Development</li>
                  <li>✓ Healthcare & Wellness</li>
                </ul>
                <div className="flex items-center text-tigray-terracotta font-semibold group-hover:translate-x-2 transition-transform">
                  View All Programs <ArrowRight className="ml-2" size={18} />
                </div>
              </div>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="bg-gradient-to-r from-tigray-dark to-tigray-brown rounded-xl p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-solar-yellow mb-2">500+</div>
                <div className="text-sm text-white/80">Target Households (Dungo)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-solar-yellow mb-2">25+</div>
                <div className="text-sm text-white/80">Youth to Employ (Dungo)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-solar-yellow mb-2">20+</div>
                <div className="text-sm text-white/80">CSO Leaders Trained (ADS)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-solar-yellow mb-2">3-4</div>
                <div className="text-sm text-white/80">Years Operating (ADS)</div>
              </div>
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
              Expected Impact Overview
            </h2>
            <p className="text-xl text-tigray-dark/70">
              Projected outcomes and targets if AU EU LAB application is approved
            </p>
          </div>
          <ImpactMetricsDashboard showTrends={true} />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-tigray-dark mb-12 text-center">
            How We Plan to Create Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Youth Recruitment',
                description: 'We will identify and recruit passionate young people aged 18-35 from Mekelle'
              },
              {
                step: '02',
                title: 'Training & Certification',
                description: 'Comprehensive 3-month training in solar technology and business skills'
              },
              {
                step: '03',
                title: 'Employment & Distribution',
                description: 'Graduates will join Dungo Energy to install solar systems in communities'
              },
              {
                step: '04',
                title: 'Sustainable Growth',
                description: 'Revenue to be reinvested for continued youth employment and community programs'
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
            Are You Aged 18-35? Join Our Planned Initiative!
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            We will be recruiting for our first training cohort once the project is funded. Get certified, gain employment, 
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
                Every solar system we plan to install will represent multiple victories: a young person 
                employed, a family with reliable electricity, and a community moving toward 
                sustainable energy independence.
              </p>
              <p className="text-lg text-tigray-dark/70 mb-8 leading-relaxed">
                Our model demonstrates that social enterprise can be both profitable and purposeful, 
                creating lasting change that goes far beyond traditional charity approaches. If approved, 
                this initiative will launch January 2026 with full AU EU LAB support.
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
                    Will provide professional skills, stable employment, career growth, and the pride of 
                    meaningful work
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-tigray-dark mb-2">For Households</h4>
                  <p className="text-sm text-tigray-dark/70">
                    Will bring reliable electricity, cost savings, improved quality of life, and 
                    environmental benefits
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-tigray-dark mb-2">For Tigray</h4>
                  <p className="text-sm text-tigray-dark/70">
                    Will drive economic development, youth retention, clean energy adoption, and 
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
