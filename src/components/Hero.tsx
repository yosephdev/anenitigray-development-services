
import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Users, Zap, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import YouthLeadershipBadge from './YouthLeadershipBadge';
import SocialEnterprisePill from './SocialEnterprisePill';

const Hero = () => {
  return (
    <div className="relative min-h-[85vh] overflow-hidden bg-gradient-to-br from-tigray-dark via-tigray-dark/95 to-energy-dark">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-solar-yellow rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-energy-green rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-youth-blue rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Message */}
          <div className="space-y-8 animate-slide-in">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <YouthLeadershipBadge size="md" />
              <SocialEnterprisePill variant="dungo" size="md" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Youth-Led Solar Social Enterprise for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-yellow to-energy-green">
                Responsible Economic Growth
              </span>{' '}
              in Tigray
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/90 leading-relaxed">
              Proposed project to empower 20-25 young people through solar energy entrepreneurship, 
              bringing clean electricity to 500+ households in Mekelle, Tigray. Launching January 2026.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Users className="text-solar-yellow" size={28} />
                </div>
                <p className="text-2xl font-bold text-white">20-25</p>
                <p className="text-sm text-white/80">Youth to Employ</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Sun className="text-solar-yellow" size={28} />
                </div>
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-sm text-white/80">Target Households</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Zap className="text-solar-yellow" size={28} />
                </div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-sm text-white/80">Self-Sustaining</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/project">
                <Button size="lg" className="bg-gradient-to-r from-solar-yellow to-solar-gold hover:opacity-90 text-tigray-dark font-semibold border-0 shadow-lg">
                  Explore Our Project
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/youth-employment">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-tigray-dark font-semibold bg-transparent">
                  Join Our Team
                </Button>
              </Link>
            </div>

            {/* Mission Badge */}
            <div className="flex items-center gap-3 bg-youth-blue/20 border border-youth-blue/30 rounded-lg p-4">
              <div className="bg-youth-blue p-2 rounded-lg">
                <Sun className="text-white" size={24} />
              </div>
              <div>
                <p className="text-white font-semibold">Proposed Youth-Led Social Enterprise</p>
                <p className="text-white/80 text-sm">To create employment through clean energy solutions</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Placeholder for solar/youth imagery */}
              <div className="relative bg-gradient-to-br from-solar-yellow/20 to-energy-green/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="space-y-6">
                  {/* Mission Statement Card */}
                  <div className="bg-white rounded-xl p-6 shadow-2xl">
                    <h3 className="text-xl font-bold text-tigray-dark mb-3">Our Dual Mission</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-youth-blue/10 p-2 rounded-lg">
                          <Users className="text-youth-blue" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-tigray-dark">Social Impact</h4>
                          <p className="text-sm text-tigray-dark/70">Creating meaningful employment for young people aged 18-35</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-energy-green/10 p-2 rounded-lg">
                          <Sun className="text-energy-green" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-tigray-dark">Environmental Impact</h4>
                          <p className="text-sm text-tigray-dark/70">Providing clean, sustainable energy access to communities</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Organization Structure */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-tigray-dark">Organization Structure</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-tigray-dark">ADS (NGO)</span>
                        <span className="text-sm text-tigray-dark/70">Governance & Impact</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <ArrowRight className="text-tigray-dark/40" size={20} />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-solar-yellow/20 to-energy-green/20 rounded-lg">
                        <span className="font-medium text-tigray-dark">Dungo Energy</span>
                        <span className="text-sm text-tigray-dark/70">Social Enterprise</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-solar-yellow rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-energy-green rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
