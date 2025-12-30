import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GrantAlignmentBanner from '../components/GrantAlignmentBanner';
import BudgetBreakdownComponent from '../components/BudgetBreakdown';
import ProjectTimelineComponent from '../components/ProjectTimeline';
import { projectActivities } from '../data/projectData';
import { GraduationCap, Sun, Building2, BarChart3 } from 'lucide-react';

const iconMap = {
  GraduationCap,
  Sun,
  Building2,
  BarChart3
};

const Project = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Dungo Energy - Youth-Led Solar Social Enterprise | ADS Application</title>
        <meta name="description" content="Dungo Energy Solutions - A youth-led solar social enterprise creating employment and clean energy access in Tigray. Applying for YAL Entrepreneurship Grant (deadline: January 7, 2026)." />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-energy-green to-youth-blue py-20 relative">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "url('/images/logos/AneniTigray-Development-Services-logo.png')",
          backgroundSize: '300px',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-white text-energy-green px-4 py-2 rounded-full text-sm font-semibold mb-4">
            YAL Entrepreneurship Grant • Submitted: Dec 30, 2025
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dungo Energy: Solar Power & Jobs in Tigray
          </h1>
          <p className="text-xl text-white/95 max-w-3xl">
            A youth-led solar social enterprise creating sustainable employment for 20-25 young people 
            while delivering clean energy solutions to 500+ households in Mekelle, Tigray through the YAL Entrepreneurship Grant.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Grant Information */}
          <section>
            <GrantAlignmentBanner />
          </section>

          {/* Project Overview */}
          <section>
            <h2 className="text-3xl font-bold text-tigray-dark mb-8">Project Overview</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-tigray-dark mb-4">Context & Problem Statement</h3>
                  <p className="text-tigray-dark/70 leading-relaxed">
                    Tigray faces acute youth unemployment (post-conflict, limited opportunities), 
                    energy poverty (unreliable grid access), and psychosocial trauma affecting community recovery. 
                    Over 11,741 individuals benefited from ADS programs in 2025, with 3,861 IDPs assisted. 
                    Young people urgently need dignified employment and trauma-informed support within a 
                    post-conflict context where energy access remains critical for household productivity.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-tigray-dark mb-4">Our Solution</h3>
                  <p className="text-tigray-dark/70 leading-relaxed">
                    Dungo Energy combines youth employment with community energy needs through a sustainable 
                    solar enterprise model. By training and employing 20-25 young people in solar technology, 
                    we create dignified livelihoods while extending clean energy access to 500+ households. 
                    This approach rebuilds economic security and social cohesion—the most effective solution 
                    addressing both livelihood creation and critical community infrastructure needs.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-youth-blue/10 rounded-lg">
                  <p className="text-3xl font-bold text-youth-blue mb-1">20-25</p>
                  <p className="text-sm text-tigray-dark/70">Youth to Employ</p>
                </div>
                <div className="text-center p-4 bg-solar-yellow/10 rounded-lg">
                  <p className="text-3xl font-bold text-solar-dark mb-1">500+</p>
                  <p className="text-sm text-tigray-dark/70">Target Households</p>
                </div>
                <div className="text-center p-4 bg-energy-green/10 rounded-lg">
                  <p className="text-3xl font-bold text-energy-green mb-1">€30K</p>
                  <p className="text-sm text-tigray-dark/70">Funding Requested</p>
                </div>
                <div className="text-center p-4 bg-tigray-terracotta/10 rounded-lg">
                  <p className="text-3xl font-bold text-tigray-terracotta mb-1">May-Apr</p>
                  <p className="text-sm text-tigray-dark/70">2026-2027</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-tigray-dark mb-4">Target Beneficiaries</h3>
                <p className="text-tigray-dark/70 mb-4">
                  Dungo Energy specifically targets marginalized youth populations:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 text-tigray-dark/70">
                  <li>• IDP youth who lost livelihoods during conflict (40% employment target)</li>
                  <li>• Out-of-school youth whose education was interrupted by conflict</li>
                  <li>• War-affected youth experiencing trauma and psychosocial stress</li>
                  <li>• Rural youth with no local employment opportunities</li>
                  <li>• Female youth facing gender barriers in technical sectors (30% employment target)</li>
                  <li>• Youth with disabilities facing employment discrimination</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Organization Information */}
          <section>
            <h2 className="text-3xl font-bold text-tigray-dark mb-8">About Anenitigray Development Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-tigray-dark mb-4">Organization Profile</h3>
                <ul className="space-y-3 text-tigray-dark/70">
                  <li><strong className="text-tigray-dark">Name:</strong> Anenitigray Development Services</li>
                  <li><strong className="text-tigray-dark">Registration Number:</strong> 15/2015</li>
                  <li><strong className="text-tigray-dark">Country:</strong> Ethiopia, Tigray</li>
                  <li><strong className="text-tigray-dark">Location:</strong> Hadnet Sub-City, Mekelle</li>
                  <li><strong className="text-tigray-dark">Type:</strong> Youth-Led NGO</li>
                  <li><strong className="text-tigray-dark">Established:</strong> June 21, 2020</li>
                  <li><strong className="text-tigray-dark">Registered:</strong> February 28, 2023</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-tigray-dark mb-4">Youth-Led Leadership</h3>
                <p className="text-tigray-dark/70 mb-4">
                  100% of ADS governance and staff are aged 18-35, ensuring authentic youth leadership 
                  at all decision-making levels.
                </p>
                <div className="space-y-2 text-sm text-tigray-dark/70">
                  <li><strong className="text-tigray-dark">Executive Director:</strong> Kbrom Weldegebreal (Age 28)</li>
                  <li><strong className="text-tigray-dark">Deputy Director:</strong> Ruta Kahsay</li>
                  <li><strong className="text-tigray-dark">Technical Lead:</strong> Yoseph Gebremedhin</li>
                  <li><strong className="text-tigray-dark">Project Manager (Dungo):</strong> Age 28</li>
                  <li><strong className="text-tigray-dark">Operations Coordinator:</strong> Age 24</li>
                  <li><strong className="text-tigray-dark">Community Engagement Officer:</strong> Age 26</li>
                </div>
              </div>

              <div className="bg-gradient-to-br from-energy-green/10 to-youth-blue/10 rounded-xl p-8 md:col-span-2">
                <h3 className="text-xl font-bold text-tigray-dark mb-4">Vision, Mission & Values</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-tigray-dark mb-2">Vision</h4>
                    <p className="text-tigray-dark/70 text-sm">
                      A resilient and empowered society with equitable access to opportunities and resources.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-tigray-dark mb-2">Mission</h4>
                    <p className="text-tigray-dark/70 text-sm">
                      Advance inclusive development and recovery programs that strengthen community resilience 
                      and deliver sustainable impact.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-tigray-dark mb-2">Core Values</h4>
                    <p className="text-tigray-dark/70 text-sm">
                      Knowledge-sharing, Innovation, Resilience, Inclusivity, Sustainability, Partnership
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 md:col-span-2">
                <h3 className="text-xl font-bold text-tigray-dark mb-4">2024-2025 Program Impact</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center p-4 bg-solar-yellow/10 rounded-lg">
                    <p className="text-2xl font-bold text-solar-dark mb-1">11,741</p>
                    <p className="text-xs text-tigray-dark/70">Individuals Benefited</p>
                  </div>
                  <div className="text-center p-4 bg-youth-blue/10 rounded-lg">
                    <p className="text-2xl font-bold text-youth-blue mb-1">3,861</p>
                    <p className="text-xs text-tigray-dark/70">IDPs Assisted</p>
                  </div>
                  <div className="text-center p-4 bg-energy-green/10 rounded-lg">
                    <p className="text-2xl font-bold text-energy-green mb-1">4,196</p>
                    <p className="text-xs text-tigray-dark/70">Children Reached</p>
                  </div>
                  <div className="text-center p-4 bg-tigray-terracotta/10 rounded-lg">
                    <p className="text-2xl font-bold text-tigray-terracotta mb-1">3,684</p>
                    <p className="text-xs text-tigray-dark/70">Women Supported</p>
                  </div>
                  <div className="text-center p-4 bg-purple-100 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600 mb-1">20+</p>
                    <p className="text-xs text-tigray-dark/70">AI Literacy Trained</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Activities */}
          <section>
            <h2 className="text-3xl font-bold text-tigray-dark mb-8">Project Activities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projectActivities.map((activity) => {
                const IconComponent = iconMap[activity.icon as keyof typeof iconMap] || Sun;
                
                return (
                  <div 
                    key={activity.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 border border-gray-100"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-solar-yellow/10 p-3 rounded-lg">
                        <IconComponent className="text-solar-dark" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-tigray-dark mb-2">
                          {activity.title}
                        </h3>
                        <div className="flex gap-4 text-sm text-tigray-dark/60">
                          <span>Duration: {activity.duration}</span>
                          <span>Budget: €{activity.budget.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-tigray-dark/70 mb-4 leading-relaxed">
                      {activity.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-tigray-dark mb-2">Expected Outcomes:</h4>
                      <ul className="space-y-1">
                        {activity.outcomes.map((outcome, index) => (
                          <li key={index} className="text-sm text-tigray-dark/70 flex items-start gap-2">
                            <span className="text-energy-green mt-1">✓</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Project Implementation Images */}
          <section>
            <h2 className="text-3xl font-bold text-tigray-dark mb-8">Project Implementation Highlights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="/images/dungo-youth-training-01.jpg" 
                  alt="Youth training in solar installation"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 bg-white">
                  <h4 className="font-semibold text-tigray-dark">Training Activity</h4>
                  <p className="text-sm text-tigray-dark/70 mt-1">Comprehensive solar technical training</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="/images/home-slider-3.png" 
                  alt="Solar panel installation"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 bg-white">
                  <h4 className="font-semibold text-tigray-dark">Solar Distribution</h4>
                  <p className="text-sm text-tigray-dark/70 mt-1">Product procurement & distribution</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="/images/dungo-logo-bg.png" 
                  alt="Team collaboration workshop"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 bg-white">
                  <h4 className="font-semibold text-tigray-dark">Enterprise Operations</h4>
                  <p className="text-sm text-tigray-dark/70 mt-1">Social enterprise management setup</p>
                </div>
              </div>
            </div>
          </section>

          {/* Budget Breakdown */}
          <section>
            <BudgetBreakdownComponent />
          </section>

          {/* Project Timeline */}
          <section>
            <ProjectTimelineComponent />
          </section>

          {/* Impact Framework */}
          <section>
            <h2 className="text-3xl font-bold text-tigray-dark mb-8">Impact Framework</h2>
            <div className="bg-gradient-to-br from-energy-green/10 to-youth-blue/10 rounded-xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-tigray-dark mb-4">Social Impact</h3>
                  <ul className="space-y-2 text-tigray-dark/70">
                    <li>• Youth employment creation (20-25 jobs)</li>
                    <li>• Skills development & certification</li>
                    <li>• Career pathway establishment</li>
                    <li>• Economic empowerment</li>
                    <li>• Professional development</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-tigray-dark mb-4">Environmental Impact</h3>
                  <ul className="space-y-2 text-tigray-dark/70">
                    <li>• 50+ tons CO₂ reduction annually</li>
                    <li>• Clean energy adoption</li>
                    <li>• Reduced fossil fuel dependency</li>
                    <li>• Sustainable energy practices</li>
                    <li>• Climate action contribution</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-tigray-dark mb-4">Economic Impact</h3>
                  <ul className="space-y-2 text-tigray-dark/70">
                    <li>• Local job creation</li>
                    <li>• Household energy cost savings</li>
                    <li>• Social enterprise sustainability</li>
                    <li>• Revenue reinvestment</li>
                    <li>• Community economic growth</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Sustainability */}
          <section>
            <h2 className="text-3xl font-bold text-tigray-dark mb-8">Sustainability Strategy</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100">
              <p className="text-lg text-tigray-dark/80 mb-6 leading-relaxed">
                Dungo Energy Solutions is designed for long-term sustainability beyond the initial 12-month 
                funding period. The enterprise will operate as a revenue-generating social enterprise, with 
                100% profit reinvested back into ADS programs to expand impact.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-solar-yellow/10 rounded-lg p-6">
                  <h4 className="font-bold text-tigray-dark mb-3">Revenue Generation Plan</h4>
                  <ul className="space-y-2 text-sm text-tigray-dark/70">
                    <li>• Direct sales revenue from 500+ solar systems</li>
                    <li>• Ongoing installation and maintenance services</li>
                    <li>• Customer support contracts</li>
                    <li>• Business certifications for new youth cohorts</li>
                  </ul>
                </div>
                <div className="bg-energy-green/10 rounded-lg p-6">
                  <h4 className="font-bold text-tigray-dark mb-3">Sustainability Metrics</h4>
                  <ul className="space-y-2 text-sm text-tigray-dark/70">
                    <li>• Month 8-10: Expected break-even point</li>
                    <li>• Month 12: Target 80% cost recovery</li>
                    <li>• Year 2: Full self-sustainability through sales revenue</li>
                    <li>• Continuous youth employment & training</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-bold text-tigray-dark mb-2">Reinvestment Commitment</h4>
                <p className="text-tigray-dark/70">
                  100% of Dungo Energy profits will be reinvested into ADS programs, including continuous 
                  youth training, business expansion, and community development initiatives. This ensures 
                  sustained impact beyond grant funding and strengthens the organization's financial independence.
                </p>
              </div>
            </div>
          </section>

          {/* Risk Management */}
          <section>
            <h2 className="text-3xl font-bold text-tigray-dark mb-8">Risk Management Framework</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="bg-red-50 border-l-4 border-red-400 p-6">
                  <h3 className="text-lg font-bold text-tigray-dark mb-2">Risk 1: Security & Political Instability</h3>
                  <p className="text-sm text-tigray-dark/70 mb-3">
                    <strong>Likelihood:</strong> Medium | <strong>Impact:</strong> High
                  </p>
                  <p className="text-tigray-dark/70 mb-3">
                    Conflict relapse or security instability could disrupt project implementation, 
                    delay equipment delivery, and pose staff safety risks.
                  </p>
                  <div className="bg-white rounded p-4">
                    <h4 className="font-semibold text-tigray-dark mb-2">Mitigation Measures:</h4>
                    <ul className="space-y-1 text-sm text-tigray-dark/70">
                      <li>• Maintain active security liaison with Tigray Interim Regional Administration (TIRA)</li>
                      <li>• Develop flexible implementation schedule with contingency timelines</li>
                      <li>• Establish community safety protocols and insurance for youth staff</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="bg-orange-50 border-l-4 border-orange-400 p-6">
                  <h3 className="text-lg font-bold text-tigray-dark mb-2">Risk 2: Economic & Supply Chain</h3>
                  <p className="text-sm text-tigray-dark/70 mb-3">
                    <strong>Likelihood:</strong> Medium | <strong>Impact:</strong> High
                  </p>
                  <p className="text-tigray-dark/70 mb-3">
                    Inflation, foreign exchange volatility, or supply chain disruptions could limit 
                    equipment availability and increase costs beyond budget.
                  </p>
                  <div className="bg-white rounded p-4">
                    <h4 className="font-semibold text-tigray-dark mb-2">Mitigation Measures:</h4>
                    <ul className="space-y-1 text-sm text-tigray-dark/70">
                      <li>• Establish supplier relationships with multiple vendors</li>
                      <li>• Lock in equipment prices early with advance contracts</li>
                      <li>• Partner with private sector suppliers (Skylights Solar, DASS Venture) for cost negotiations</li>
                      <li>• Source locally where possible to reduce foreign exchange exposure</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <h3 className="text-lg font-bold text-tigray-dark mb-2">Risk 3: Community Adoption</h3>
                  <p className="text-sm text-tigray-dark/70 mb-3">
                    <strong>Likelihood:</strong> Medium | <strong>Impact:</strong> Medium
                  </p>
                  <p className="text-tigray-dark/70 mb-3">
                    Community resistance to solar technology, youth-led implementation, or unequal 
                    benefit distribution could create adoption barriers.
                  </p>
                  <div className="bg-white rounded p-4">
                    <h4 className="font-semibold text-tigray-dark mb-2">Mitigation Measures:</h4>
                    <ul className="space-y-1 text-sm text-tigray-dark/70">
                      <li>• Conduct pre-implementation community engagement and awareness campaigns</li>
                      <li>• Partner with trusted local organizations (TDA, ACSOT) to build credibility</li>
                      <li>• Provide customer education and training on solar system operation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h3 className="text-lg font-bold text-tigray-dark mb-2">Risk 4: Technical Capacity</h3>
                  <p className="text-sm text-tigray-dark/70 mb-3">
                    <strong>Likelihood:</strong> Low | <strong>Impact:</strong> High
                  </p>
                  <p className="text-tigray-dark/70 mb-3">
                    Youth lack of technical expertise, equipment failures, or maintenance gaps 
                    could threaten service quality and customer satisfaction.
                  </p>
                  <div className="bg-white rounded p-4">
                    <h4 className="font-semibold text-tigray-dark mb-2">Mitigation Measures:</h4>
                    <ul className="space-y-1 text-sm text-tigray-dark/70">
                      <li>• Partner with experienced solar companies for intensive 3-month technical training</li>
                      <li>• Hire 1-2 experienced supervisors (age 35+) to oversee youth technicians</li>
                      <li>• Establish quality assurance protocols and regular inspection systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                  <h3 className="text-lg font-bold text-tigray-dark mb-2">Risk 5: Regulatory & Legal</h3>
                  <p className="text-sm text-tigray-dark/70 mb-3">
                    <strong>Likelihood:</strong> Low | <strong>Impact:</strong> Medium
                  </p>
                  <p className="text-tigray-dark/70 mb-3">
                    Unclear or changing energy sector regulations, licensing requirements, or 
                    tax complications could delay operations.
                  </p>
                  <div className="bg-white rounded p-4">
                    <h4 className="font-semibold text-tigray-dark mb-2">Mitigation Measures:</h4>
                    <ul className="space-y-1 text-sm text-tigray-dark/70">
                      <li>• Obtain legal advice on energy licensing and business registration requirements</li>
                      <li>• Engage with Bureau of Labor and Social Affairs (BoLSA) and TIRA early for guidance</li>
                      <li>• Maintain transparent records and tax compliance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-youth-blue to-youth-purple rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Help Us Launch This Project</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in making this vision a reality. We're seeking partners and funders to help create sustainable youth employment and clean energy access in Tigray.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/youth-employment" 
                className="bg-white text-youth-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Join as Youth
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-youth-blue transition-colors"
              >
                Partner With Us
              </a>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Project;
