import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Shield, Award } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const AboutADSSection = () => {
  const { t } = useLanguage();

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <div className="h-1 w-20 bg-tigray-terracotta mb-6"></div>
            <h2 className="text-4xl font-bold text-tigray-dark mb-6">
              Why ADS? <span className="text-tigray-terracotta">Born from Community, Built on Trust</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg text-tigray-dark/80 leading-relaxed">
                <strong className="text-tigray-dark">Anenitigray Development Services (ADS)</strong> isn't just another NGO. 
                We are <strong>from Tigray, for Tigray</strong> - a hyper-local organization founded and operated by people who share 
                the same experience as those we serve.
              </p>
              
              <p className="text-lg text-tigray-dark/80 leading-relaxed">
                While large international organizations struggle with bureaucracy and cultural barriers, 
                ADS delivers aid with <strong className="text-tigray-terracotta">unmatched efficiency and community trust</strong>. 
                Our team knows every village, speaks the language, and understands the culture.
              </p>
            </div>

            {/* Key Differentiators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="h-10 w-10 bg-tigray-terracotta/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="h-5 w-5 text-tigray-terracotta" />
                </div>
                <div>
                  <h4 className="font-semibold text-tigray-dark mb-1">Community Born</h4>
                  <p className="text-sm text-tigray-dark/70">Founded by Tigreans who experienced the same challenges</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="h-10 w-10 bg-tigray-terracotta/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-tigray-terracotta" />
                </div>
                <div>
                  <h4 className="font-semibold text-tigray-dark mb-1">Local Implementation</h4>
                  <p className="text-sm text-tigray-dark/70">Direct relationships with communities, no intermediaries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="h-10 w-10 bg-tigray-terracotta/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-tigray-terracotta" />
                </div>
                <div>
                  <h4 className="font-semibold text-tigray-dark mb-1">Verified Trust</h4>
                  <p className="text-sm text-tigray-dark/70">TDRF trusted partner, ACSOT member organization</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="h-10 w-10 bg-tigray-terracotta/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-tigray-terracotta" />
                </div>
                <div>
                  <h4 className="font-semibold text-tigray-dark mb-1">Proven Impact</h4>
                  <p className="text-sm text-tigray-dark/70">Every dollar goes directly to those who need it most</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/about">
                <Button size="lg" className="bg-tigray-terracotta hover:bg-tigray-terracotta/90 text-white font-semibold border-0">
                  Learn More About ADS
                </Button>
              </Link>
              <Link to="/programs">
                <Button size="lg" variant="outline" className="border-2 border-tigray-terracotta text-tigray-terracotta hover:bg-tigray-terracotta hover:text-white font-semibold bg-transparent">
                  See Our Programs
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Side */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative">
              <img 
                src="/images/ADS-CFS.jpg" 
                alt="ADS community work" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tigray-dark/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium">Child-Friendly Space Program</p>
                <p className="text-xs opacity-80">Supporting displaced children in Tigray</p>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="bg-tigray-light p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-tigray-dark mb-4 text-center">Our Local Impact</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-tigray-terracotta">100K+</div>
                  <div className="text-sm text-tigray-dark/70">People Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-tigray-terracotta">4</div>
                  <div className="text-sm text-tigray-dark/70">Core Programs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-tigray-terracotta">100%</div>
                  <div className="text-sm text-tigray-dark/70">Community Trust</div>
                </div>
              </div>
            </div>

            {/* Partnership Network Preview */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-tigray-dark mb-4 text-center">Trusted Partnership Network</h4>
              <img 
                src="/images/logos/ads-partners-preview.png" 
                alt="ADS Partnership Network"
                className="w-full h-auto object-contain rounded-lg"
              />
              <p className="text-xs text-tigray-dark/60 text-center mt-2">
                Working with verified partners to maximize impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutADSSection;
