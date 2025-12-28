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
      <div className="relative py-20 bg-cover bg-center" style={{
        backgroundImage: "url('/images/ads-community-outreach-01.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <YouthLeadershipBadge size="lg" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Anenitigray Development Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              A youth-led NGO based in Mekelle, Tigray, empowering communities through 
              sustainable development, social enterprise, and youth employment since 2020.
            </p>
          </div>
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

          {/* Our Journey & Programs History */}
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-tigray-dark mb-8">Our Journey: From Emergency Response to Social Enterprise</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-tigray-dark/80 leading-relaxed mb-6">
                Since our founding in 2020, ADS has evolved from emergency response to comprehensive 
                sustainable development. Our journey reflects our commitment to meeting communities 
                where they are while building toward lasting solutions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Historical Programs */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-tigray-dark mb-4 flex items-center">
                    <Award className="mr-3 text-blue-600" size={24} />
                    Training & Capacity Building
                  </h3>
                  <ul className="space-y-3 text-tigray-dark/70">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span><strong>Leadership in Crisis Training:</strong> 20 CSO leaders trained in post-conflict leadership (Sept 2024)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span><strong>AI & Digital Literacy:</strong> Empowering youth with essential tech skills for the modern economy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span><strong>Organizational Development:</strong> Strengthening CSO capacity in governance and program management</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-tigray-dark mb-4 flex items-center">
                    <Heart className="mr-3 text-red-600" size={24} />
                    Community Development
                  </h3>
                  <ul className="space-y-3 text-tigray-dark/70">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      <span><strong>Child Protection Services:</strong> Integrated child-friendly spaces with education and psychosocial support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      <span><strong>Emergency Relief:</strong> Rapid response with food, shelter, and essential services for displaced populations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      <span><strong>Economic Empowerment:</strong> Livelihoods support through vocational training and asset building</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* New Social Enterprise */}
              <div className="bg-gradient-to-r from-solar-yellow/20 to-energy-green/20 rounded-xl p-8 border-2 border-solar-yellow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-r from-solar-yellow to-energy-green rounded-full p-3">
                    <Users className="text-tigray-dark" size={28} />
                  </div>
                  <div>
                    <div className="inline-block bg-gradient-to-r from-solar-yellow to-energy-green text-tigray-dark text-sm font-semibold px-4 py-1 rounded-full mb-2">
                      NEW IN 2024-2025
                    </div>
                    <h3 className="text-2xl font-bold text-tigray-dark mb-2">
                      Dungo Energy Solutions: Our Social Enterprise Revolution
                    </h3>
                  </div>
                </div>
                <p className="text-tigray-dark/80 mb-4 leading-relaxed">
                  Building on our foundation of community service, we've launched Dungo Energy — 
                  a youth-led solar social enterprise that creates sustainable employment while 
                  delivering clean energy. This represents our evolution from traditional aid to 
                  innovative, self-sustaining development.
                </p>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-solar-dark mb-1">20-25</div>
                    <div className="text-sm text-tigray-dark/70">Youth Employed</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-solar-dark mb-1">500+</div>
                    <div className="text-sm text-tigray-dark/70">Households</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-solar-dark mb-1">100%</div>
                    <div className="text-sm text-tigray-dark/70">Self-Sustaining</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-solar-dark mb-1">100%</div>
                    <div className="text-sm text-tigray-dark/70">Profits Reinvested</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white rounded-xl p-6 border-l-4 border-tigray-terracotta">
                <h4 className="font-bold text-tigray-dark mb-3">Our Comprehensive Impact Today</h4>
                <p className="text-tigray-dark/70 mb-4">
                  ADS now delivers a full spectrum of services — from emergency relief to sustainable 
                  enterprise, from child protection to youth employment, from leadership training to 
                  clean energy distribution. We're proving that effective development requires both 
                  immediate response AND long-term solutions.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-tigray-terracotta mb-1">500+</div>
                    <div className="text-tigray-dark/70">Total Households Served</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-tigray-terracotta mb-1">25+</div>
                    <div className="text-tigray-dark/70">Youth Currently Employed</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-tigray-terracotta mb-1">20+</div>
                    <div className="text-tigray-dark/70">Leaders Trained</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-tigray-terracotta mb-1">3-4 Years</div>
                    <div className="text-tigray-dark/70">Of Continuous Service</div>
                  </div>
                </div>
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

          {/* Video Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-tigray-dark mb-8">Our Work & Impact in Video</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <div className="bg-gray-900 w-full h-96 flex items-center justify-center">
                  <video
                    src="/images/ads-emergency-response-overview.mp4"
                    className="w-full h-full object-cover"
                    controls
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-tigray-dark mb-3">Emergency Response & Community Relief</h3>
                  <p className="text-tigray-dark/70 leading-relaxed">
                    Watch how ADS responds to community emergencies and provides essential relief services 
                    to vulnerable populations in Tigray. Our video documents the real-world impact of our 
                    rapid response initiatives and community support programs.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-youth-blue/10 to-youth-purple/10 rounded-xl p-6 border border-youth-blue/20">
                  <h4 className="font-semibold text-tigray-dark mb-3">Learn More About Our Programs</h4>
                  <ul className="space-y-2 text-sm text-tigray-dark/70">
                    <li>→ Emergency Relief & Rapid Response</li>
                    <li>→ Youth Leadership Development</li>
                    <li>→ Child Protection & Care Services</li>
                    <li>→ Community Outreach & Engagement</li>
                  </ul>
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
