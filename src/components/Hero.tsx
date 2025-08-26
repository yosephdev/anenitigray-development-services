
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
        <div className="max-w-2xl animate-slide-in">
          <div className="h-1 w-20 bg-tigray-terracotta mb-6"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-white/90 mb-8">
            {t('hero.subtitle')}
          </p>
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
