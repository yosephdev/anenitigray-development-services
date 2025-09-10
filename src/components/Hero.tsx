
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Video Background */}
      <video 
        className="absolute inset-0 w-full h-full object-cover hero-video"
        autoPlay 
        muted 
        loop 
        playsInline
        preload="metadata"
        aria-label="Tigray Emergency Response Video Background"
        poster="/images/home-banner-01.jpg"
      >
        <source src="/images/Tigray_Emergency_Response_Video_Creation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Fallback background for mobile/unsupported browsers */}
      <div 
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ 
          backgroundImage: "url('/images/home-banner-01.jpg')",
          backgroundPosition: "center 30%"
        }}
      ></div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-tigray-dark/80 to-tigray-dark/50"></div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
        <div className="max-w-3xl animate-slide-in">
          {/* ADS Branding Badge */}
          <div className="flex items-center mb-6">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-tigray-terracotta to-tigray-brown flex items-center justify-center shadow-lg mr-4">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white leading-tight">ADS</span>
              <span className="text-sm text-white/80 leading-tight">Anenitigray Development Services</span>
            </div>
          </div>
          
          <div className="h-1 w-24 bg-tigray-terracotta mb-6"></div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          
          {/* Enhanced Subtitle with Story */}
          <div className="mb-8 space-y-4">
            <p className="text-2xl text-white/95 font-medium">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg text-white/85 max-w-2xl">
              Born from the community we serve, ADS delivers life-saving humanitarian aid with unmatched local trust and efficiency. 
              Every donation reaches families in need through our verified partnership network.
            </p>
          </div>
          
          {/* Credibility Indicators */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-white text-sm font-medium">✓ TDRF Trusted Partner</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-white text-sm font-medium">✓ ACSOT Member</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-white text-sm font-medium">✓ Local Implementation</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/donate">
              <Button size="lg" className="bg-tigray-terracotta hover:bg-tigray-terracotta/90 text-white font-semibold border-0">
                {t('donate')}
              </Button>
            </Link>
            <Link to="/programs">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-tigray-dark font-semibold bg-transparent">
                {t('hero.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
