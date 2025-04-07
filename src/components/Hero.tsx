
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative h-[70vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1604081119657-1ee70f3bb91e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-tigray-dark/80 to-tigray-dark/50"></div>
      </div>

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
              <Button size="lg" className="bg-tigray-terracotta hover:bg-opacity-90 text-white">
                {t('donate')}
              </Button>
            </Link>
            <Link to="/programs">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
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
