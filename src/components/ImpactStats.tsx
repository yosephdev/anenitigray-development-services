
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ImpactStats = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t('impact.families'), count: '5,000+', icon: '🏠' },
    { label: t('impact.schools'), count: '23', icon: '🏫' },
    { label: t('impact.wells'), count: '47', icon: '💧' },
    { label: t('impact.healthcare'), count: '12', icon: '🏥' },
  ];

  return (
    <div className="bg-tigray-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="impact-number animate-fade-in">{stat.count}</div>
              <div className="text-tigray-dark font-medium mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;
