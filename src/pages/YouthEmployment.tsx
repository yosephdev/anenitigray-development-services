import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import YouthLeadershipBadge from '../components/YouthLeadershipBadge';
import YouthEmploymentPathwayComponent from '../components/YouthEmploymentPathwayComponent';
import { Users, Briefcase, GraduationCap, TrendingUp, Heart, Award } from 'lucide-react';

const YouthEmployment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Youth Opportunities - Join Our Team | Dungo Energy Solutions</title>
        <meta name="description" content="Join our youth-led solar energy team. Training, certification, and employment opportunities for young people aged 18-35 in Mekelle, Tigray." />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-youth-blue to-youth-purple text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <YouthLeadershipBadge size="lg" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Youth Employment Opportunities
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Join our solar energy revolution! We're recruiting 20-25 young people aged 18-35 
            for paid training, certification, and full-time employment at Dungo Energy Solutions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Why Join Us */}
          <section>
            <h2 className="text-3xl font-bold text-tigray-dark mb-8 text-center">Why Join Dungo Energy?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Briefcase,
                  title: 'Guaranteed Employment',
                  description: 'Full-time paid positions upon successful completion of training',
                  color: 'youth-blue'
                },
                {
                  icon: GraduationCap,
                  title: 'Professional Training',
                  description: 'Comprehensive technical and business skills training with certification',
                  color: 'solar-yellow'
                },
                {
                  icon: TrendingUp,
                  title: 'Career Growth',
                  description: 'Clear career pathways with opportunities for advancement and leadership',
                  color: 'energy-green'
                },
                {
                  icon: Heart,
                  title: 'Meaningful Impact',
                  description: 'Work that creates real change in your community every single day',
                  color: 'tigray-terracotta'
                },
                {
                  icon: Award,
                  title: 'Industry Certification',
                  description: 'Recognized solar installation certification for career mobility',
                  color: 'youth-purple'
                },
                {
                  icon: Users,
                  title: 'Youth-Led Environment',
                  description: 'Work alongside other passionate young people in a supportive team',
                  color: 'solar-gold'
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 border border-gray-100">
                  <div className={`bg-${benefit.color}/10 p-4 rounded-lg inline-block mb-4`}>
                    <benefit.icon className={`text-${benefit.color}`} size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-tigray-dark mb-3">{benefit.title}</h3>
                  <p className="text-tigray-dark/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Employment Pathway */}
          <section>
            <YouthEmploymentPathwayComponent />
          </section>

          {/* Eligibility & Requirements */}
          <section>
            <h2 className="text-3xl font-bold text-tigray-dark mb-8">Eligibility & Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-tigray-dark mb-6">Who Can Apply?</h3>
                <ul className="space-y-3">
                  {[
                    'Young people aged 18-35 years',
                    'Residents of Mekelle or surrounding areas',
                    'Basic literacy and numeracy skills',
                    'Interest in renewable energy and technology',
                    'Commitment to full-time employment',
                    'Good communication skills',
                    'Team player with positive attitude',
                    'No prior experience required (we train you!)'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-energy-green text-xl">✓</span>
                      <span className="text-tigray-dark/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-youth-blue/10 to-youth-purple/10 rounded-xl p-8 border border-youth-blue/20">
                <h3 className="text-xl font-bold text-tigray-dark mb-6">What You'll Learn</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-tigray-dark mb-2">Technical Skills</h4>
                    <ul className="text-sm text-tigray-dark/70 space-y-1 ml-4">
                      <li>• Solar panel installation</li>
                      <li>• System configuration & testing</li>
                      <li>• Maintenance & troubleshooting</li>
                      <li>• Safety procedures</li>
                      <li>• Quality assurance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-tigray-dark mb-2">Business Skills</h4>
                    <ul className="text-sm text-tigray-dark/70 space-y-1 ml-4">
                      <li>• Customer service excellence</li>
                      <li>• Sales & product knowledge</li>
                      <li>• Basic business operations</li>
                      <li>• Financial literacy</li>
                      <li>• Professional communication</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Compensation & Benefits */}
          <section>
            <h2 className="text-3xl font-bold text-tigray-dark mb-8">Compensation & Benefits</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-tigray-dark mb-4">During Training</h3>
                  <ul className="space-y-2 text-tigray-dark/70">
                    <li>• Training stipend provided</li>
                    <li>• Free training materials & equipment</li>
                    <li>• Meals during training sessions</li>
                    <li>• Transport allowance</li>
                    <li>• Professional certification</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-tigray-dark mb-4">After Employment</h3>
                  <ul className="space-y-2 text-tigray-dark/70">
                    <li>• Competitive monthly salary</li>
                    <li>• Performance bonuses</li>
                    <li>• Health benefits</li>
                    <li>• Ongoing professional development</li>
                    <li>• Career advancement opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section className="bg-gradient-to-br from-solar-yellow/10 to-energy-green/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-tigray-dark mb-8 text-center">
              Hear from Our Team
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-tigray-dark/70 italic mb-4">
                  "This program changed my life. I went from being unemployed to having 
                  professional skills, a stable job, and the ability to support my family. 
                  The best part is knowing my work helps my community."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-youth-blue/20 rounded-full flex items-center justify-center font-bold text-youth-blue">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-tigray-dark">Alem, 24</p>
                    <p className="text-sm text-tigray-dark/60">Solar Technician</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-tigray-dark/70 italic mb-4">
                  "I never imagined I could work in technology. The training was excellent, 
                  and now I'm certified and earning a good salary. I'm even training new 
                  team members now!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-solar-yellow/20 rounded-full flex items-center justify-center font-bold text-solar-dark">
                    M
                  </div>
                  <div>
                    <p className="font-semibold text-tigray-dark">Marta, 28</p>
                    <p className="text-sm text-tigray-dark/60">Installation Supervisor</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Application CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-youth-blue to-youth-purple rounded-2xl p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Career?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Applications are now open for our next training cohort. Don't miss this 
                opportunity to build your future while making a difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="bg-white text-youth-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Apply Now
                </a>
                <a 
                  href="/project" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-youth-blue transition-colors"
                >
                  Learn More About Our Project
                </a>
              </div>
              <p className="mt-6 text-white/80 text-sm">
                Questions? Contact us at contact@anenitigray.org or +251 93 702 2100
              </p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default YouthEmployment;
