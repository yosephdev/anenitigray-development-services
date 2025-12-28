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
        <meta name="description" content="Dungo Energy Solutions - A youth-led solar social enterprise creating employment and clean energy access in Tigray. Applying for AU EU LAB funding (deadline: January 7, 2026)." />
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
            Application In Progress • Deadline: Jan 7, 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dungo Energy Solutions: Youth-Led Solar Social Enterprise
          </h1>
          <p className="text-xl text-white/95 max-w-3xl">
            We're applying for AU EU LAB funding to launch a comprehensive 12-month initiative 
            creating sustainable youth employment through solar energy distribution in Mekelle, Tigray.
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
                  <h3 className="text-xl font-bold text-tigray-dark mb-4">Problem Statement</h3>
                  <p className="text-tigray-dark/70 leading-relaxed">
                    Tigray faces two critical challenges: high youth unemployment (particularly 
                    among 18-35 year-olds) and limited access to reliable electricity in rural 
                    and peri-urban areas. Traditional job markets cannot absorb the growing 
                    youth population, while energy poverty limits economic opportunities and 
                    quality of life.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-tigray-dark mb-4">Our Solution</h3>
                  <p className="text-tigray-dark/70 leading-relaxed">
                    We address both challenges simultaneously through a social enterprise 
                    model: training and employing 20-25 young people in solar energy distribution, 
                    while bringing clean, affordable electricity to 500+ households. This creates 
                    a sustainable cycle of employment, energy access, and community development.
                  </p>
                  <p className="text-sm text-energy-green font-semibold mt-4">
                    Currently applying to AU EU LAB with a deadline of January 7, 2026.
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
                  <p className="text-sm text-tigray-dark/70">Funding Needed</p>
                </div>
                <div className="text-center p-4 bg-tigray-terracotta/10 rounded-lg">
                  <p className="text-3xl font-bold text-tigray-terracotta mb-1">12</p>
                  <p className="text-sm text-tigray-dark/70">Months Planned</p>
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
                  src="/images/dungo-solar-panel-setup.jpg" 
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
                  src="/images/dungo-team-workshop-01.jpeg" 
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
                This project is designed for long-term sustainability beyond the initial 12-month 
                funding period. Dungo Energy Solutions will operate as a revenue-generating social 
                enterprise, ensuring continued operations and impact after the grant period.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-solar-yellow/10 rounded-lg p-6">
                  <h4 className="font-bold text-tigray-dark mb-3">Revenue Streams</h4>
                  <ul className="space-y-2 text-sm text-tigray-dark/70">
                    <li>• Solar product sales</li>
                    <li>• Installation services</li>
                    <li>• Maintenance contracts</li>
                    <li>• Training programs</li>
                  </ul>
                </div>
                <div className="bg-energy-green/10 rounded-lg p-6">
                  <h4 className="font-bold text-tigray-dark mb-3">Reinvestment Model</h4>
                  <ul className="space-y-2 text-sm text-tigray-dark/70">
                    <li>• Profits fund ADS programs</li>
                    <li>• Continuous youth training</li>
                    <li>• Business expansion</li>
                    <li>• Community development</li>
                  </ul>
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
