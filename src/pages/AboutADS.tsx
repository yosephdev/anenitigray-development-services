import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Users, Heart, Target, Award, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import YouthLeadershipBadge from '../components/YouthLeadershipBadge';

const AboutADS = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About ADS - Youth-Led NGO in Tigray | Anenitigray Development Services</title>
        <meta name="description" content="Learn about Anenitigray Development Services (ADS), a youth-led NGO based in Mekelle, Tigray, operating for 3-4 years with a focus on sustainable community development." />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-youth-blue/10 to-youth-purple/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <YouthLeadershipBadge size="lg" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-tigray-dark mb-6">
            About Anenitigray Development Services
          </h1>
          <p className="text-xl text-tigray-dark/80 max-w-3xl">
            A youth-led NGO based in Mekelle, Tigray, empowering communities through 
            sustainable development, social enterprise, and youth employment since 2020.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Who We Are */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-tigray-dark mb-8">Who We Are</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-youth-blue/10 p-3 rounded-lg">
                    <Users className="text-youth-blue" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-tigray-dark">Youth-Led Organization</h3>
                </div>
                <p className="text-tigray-dark/70 leading-relaxed">
                  ADS is proudly youth-led, with 100% of our governance structure and staff 
                  comprising young people aged 18-35. We believe in the power of youth to 
                  drive meaningful change in their communities.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-energy-green/10 p-3 rounded-lg">
                    <MapPin className="text-energy-green" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-tigray-dark">Based in Mekelle, Tigray</h3>
                </div>
                <p className="text-tigray-dark/70 leading-relaxed">
                  Operating from Hadnet Sub-city in Mekelle, we have deep roots in the Tigray 
                  region. Our local presence enables us to understand and address the unique 
                  challenges facing our communities.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-solar-yellow/10 p-3 rounded-lg">
                    <Calendar className="text-solar-dark" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-tigray-dark">3-4 Years of Impact</h3>
                </div>
                <p className="text-tigray-dark/70 leading-relaxed">
                  Since our establishment in 2020, we've been consistently delivering 
                  community development programs, capacity building initiatives, and now, 
                  our groundbreaking solar energy social enterprise.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-tigray-terracotta/10 p-3 rounded-lg">
                    <Heart className="text-tigray-terracotta" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-tigray-dark">Community-Focused</h3>
                </div>
                <p className="text-tigray-dark/70 leading-relaxed">
                  Every program and initiative is designed with community needs at the center. 
                  We work alongside community members to create sustainable solutions that 
                  have lasting impact.
                </p>
              </div>
            </div>
          </section>

          {/* Our Mission & Vision */}
          <section className="mb-16 bg-gradient-to-br from-solar-yellow/10 to-energy-green/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-energy-green" size={32} />
                  <h3 className="text-2xl font-bold text-tigray-dark">Our Mission</h3>
                </div>
                <p className="text-lg text-tigray-dark/80 leading-relaxed">
                  To empower Tigray's youth through sustainable social enterprise, creating 
                  meaningful employment opportunities while addressing critical community needs 
                  in clean energy, education, and economic development.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-youth-blue" size={32} />
                  <h3 className="text-2xl font-bold text-tigray-dark">Our Vision</h3>
                </div>
                <p className="text-lg text-tigray-dark/80 leading-relaxed">
                  A thriving Tigray where every young person has access to quality employment, 
                  where communities have reliable clean energy, and where youth-led innovation 
                  drives sustainable development for all.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-tigray-dark mb-8">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Youth Empowerment',
                  description: 'Investing in young people as agents of change and innovation'
                },
                {
                  title: 'Sustainability',
                  description: 'Creating solutions that last and benefit future generations'
                },
                {
                  title: 'Community Partnership',
                  description: 'Working collaboratively with communities, not for them'
                },
                {
                  title: 'Innovation',
                  description: 'Embracing new ideas and approaches to old problems'
                },
                {
                  title: 'Transparency',
                  description: 'Operating openly and accountably in all our activities'
                },
                {
                  title: 'Impact Focus',
                  description: 'Measuring success by the real change we create'
                }
              ].map((value, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                  <h4 className="font-bold text-tigray-dark mb-3">{value.title}</h4>
                  <p className="text-sm text-tigray-dark/70">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Organizational Model */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-tigray-dark mb-8">Our Organizational Model</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-tigray-dark mb-4">
                    NGO + Social Enterprise
                  </h3>
                  <p className="text-tigray-dark/70 mb-6 leading-relaxed">
                    ADS operates as a non-governmental organization with a unique social 
                    enterprise arm. This hybrid model allows us to combine the best of both 
                    worlds: the social mission and accountability of an NGO with the 
                    sustainability and innovation of a business.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-youth-blue rounded-full p-2 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-tigray-dark">ADS (NGO)</h4>
                        <p className="text-sm text-tigray-dark/70">
                          Provides governance, strategic direction, and social impact measurement
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-solar-yellow rounded-full p-2 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-tigray-dark">Dungo Energy Solutions (Social Enterprise)</h4>
                        <p className="text-sm text-tigray-dark/70">
                          Generates revenue through solar energy distribution while creating youth employment
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-energy-green rounded-full p-2 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-tigray-dark">Reinvestment Model</h4>
                        <p className="text-sm text-tigray-dark/70">
                          All profits from Dungo Energy reinvested into ADS programs and youth initiatives
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-youth-blue/10 to-energy-green/10 rounded-xl p-8">
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h4 className="font-bold text-tigray-dark mb-2">Governance</h4>
                      <p className="text-sm text-tigray-dark/70">
                        Youth-led board of directors (18-35 years)
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-px h-12 bg-tigray-dark/20"></div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h4 className="font-bold text-tigray-dark mb-2">Operations</h4>
                      <p className="text-sm text-tigray-dark/70">
                        Young professional staff implementing programs
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-px h-12 bg-tigray-dark/20"></div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h4 className="font-bold text-tigray-dark mb-2">Impact</h4>
                      <p className="text-sm text-tigray-dark/70">
                        Community members benefiting from programs and employment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-youth-blue to-youth-purple rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're a young person looking for opportunities, a partner organization, 
              or a supporter of youth-led development, we'd love to connect with you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/youth-employment" 
                className="bg-white text-youth-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Youth Opportunities
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-youth-blue transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutADS;
