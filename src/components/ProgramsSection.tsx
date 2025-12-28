
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProgramsSection = () => {
  const { t, language } = useLanguage();
  
  const programs = [
    {
      title: t('childcare.title'),
      description: t('childcare.desc'),
      image: '/images/ads-child-friendly-space-01.jpg',
      link: '/programs/integrated-child-care'
    },
    {
      title: t('asset.title'),
      description: t('asset.desc'),
      image: '/images/ads-education-program-01.jpg',
      link: '/programs/asset-program'
    },
    {
      title: t('relief.title'),
      description: t('relief.desc'),
      image: '/images/ads-youth-program-01.jpg',
      link: '/programs/rapid-relief'
    },
    {
      title: t('capacity.title'),
      description: t('capacity.desc'),
      image: '/images/ads-food-security-01.jpg',
      link: '/programs/capacity-building'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tigray-dark mb-4">{t('programs.title')}</h2>
          <p className="text-tigray-dark/80 max-w-2xl mx-auto">{t('programs.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Link to={program.link} key={index} className="program-card group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-tigray-dark mb-2">{program.title}</h3>
                <p className="text-tigray-dark/70 mb-4">{program.description}</p>
                <div className="flex items-center text-tigray-terracotta font-medium group-hover:translate-x-1 transition-transform">
                  {language === 'en' ? 'Learn More' : 'ዝያዳ ኣንብብ'} <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsSection;
