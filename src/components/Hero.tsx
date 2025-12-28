
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
              We're applying for AU EU LAB funding to empower 20-25 young people through solar energy entrepreneurship, 
              bringing clean electricity to 500+ households in Mekelle, Tigray. Application deadline: January 7, 2026.
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
            <div className="flex items-center gap-3 bg-energy-green/20 border border-energy-green/30 rounded-lg p-4">
              <div className="bg-energy-green p-2 rounded-lg">
                <Sun className="text-white" size={24} />
              </div>
              <div>
                <p className="text-white font-semibold">AU EU LAB Application In Progress</p>
                <p className="text-white/80 text-sm">Seeking funding to create youth employment through clean energy solutions</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Dungo Energy Hero Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img 
                  src="/images/dungo-energy-hero-01.jpeg" 
                  alt="Dungo Energy Solutions - Youth Solar Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tigray-dark/60 via-transparent to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">Dungo Energy Solutions</h3>
                    <p className="text-white/90 text-sm">Youth-led solar enterprise bringing clean energy and employment to Tigray</p>
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
