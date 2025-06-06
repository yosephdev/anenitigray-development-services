
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProgramsSection from '../components/ProgramsSection';
import { useLanguage } from '../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const Programs = () => {
  const { t, language } = useLanguage();

  const programDetails = [
    {
      id: 'childcare',
      titleKey: 'childcare.title',
      descriptionKey: 'childcare.desc',
      outcomeKey: 'childcare.outcome', // Added outcome
      image: '/images/ADS-CFS.jpg' // Existing image related to Child Protection
    },
    {
      id: 'asset',
      titleKey: 'asset.title',
      descriptionKey: 'asset.desc',
      image: '/images/ADS-10.jpg' // Existing education-related image
    },
    {
      id: 'relief',
      titleKey: 'relief.title',
      descriptionKey: 'relief.desc',
      image: '/images/ADS-1(1).jpg' // Existing distribution image
    },
    {
      id: 'capacity-building',
      titleKey: 'capacity.title',
      descriptionKey: 'capacity.desc',
      image: '/images/ADS-15(1).jpg' // Existing training/empowerment image
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <html lang={language} />
        <title>{t('programs')} - ADS</title>
        <meta name="description" content="Learn about ADS's community-driven programs in Tigray, including food security, education, healthcare, economic empowerment, and child protection." />
      </Helmet>
      <Navbar />
      
      <div className="flex-grow">
        <div className="relative py-24 bg-tigray-dark">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
            backgroundImage: "url('/images/ADS-18.jpg')" // TODO: Replace with relevant image (e.g., ADS program participants, community)
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{t('programs.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('programs.subtitle')}
            </p>
          </div>
        </div>

        <ProgramsSection />

        {/* Detailed Programs Section */}
        <div className="py-16 bg-tigray-sand/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {programDetails.map((program, index) => (
                <div id={program.id} key={index} className="scroll-mt-24">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                    <div className="w-full md:w-1/2">
                      <img 
                        src={program.image || '/images/ADS-1.jpg'} // TODO: Replace with relevant program-specific images 
                        alt={t(program.titleKey)}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <h2 className="text-3xl font-bold text-tigray-dark mb-4">{t(program.titleKey)}</h2>
                      <p className="text-tigray-dark/80 text-lg mb-4">{t(program.descriptionKey)}</p>
                      {program.outcomeKey && (
                        <p className="text-tigray-dark/70 text-md italic mb-6">{t(program.outcomeKey)}</p>
                      )}
                      <div className="flex flex-wrap gap-3">
                        <span className="text-sm bg-tigray-terracotta/10 text-tigray-terracotta px-3 py-1 rounded-full">
                          {t('detail.sustainable')}
                        </span>
                        <span className="text-sm bg-tigray-terracotta/10 text-tigray-terracotta px-3 py-1 rounded-full">
                          {t('detail.community')}
                        </span>
                        <span className="text-sm bg-tigray-terracotta/10 text-tigray-terracotta px-3 py-1 rounded-full">
                          {t('detail.impact')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Programs;
