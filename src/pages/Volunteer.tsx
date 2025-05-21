import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const Volunteer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{t('volunteer.title')} - ADS</title>
        <meta name="description" content="Volunteer with ADS and contribute your skills to make a difference in Tigray." />
      </Helmet>
      <Navbar />

      <main className="flex-grow">
        <div className="bg-tigray-dark text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-6">{t('volunteer.hero.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('volunteer.hero.subtitle')}
            </p>
          </div>
        </div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-tigray-dark mb-6">
                {t('volunteer.opportunities.title')}
              </h2>
              <p className="text-tigray-dark/80 text-lg mb-6">
                {t('volunteer.opportunities.description')}
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-tigray-dark mb-2">
                    {t('volunteer.types.community.title')}
                  </h3>
                  <p className="text-tigray-dark/70 mb-3">
                    {t('volunteer.types.community.description')}
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-tigray-dark mb-2">
                    {t('volunteer.types.professional.title')}
                  </h3>
                  <p className="text-tigray-dark/70 mb-3">
                    {t('volunteer.types.professional.description')}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-tigray-sand/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-tigray-dark mb-6">
                {t('volunteer.apply.title')}
              </h3>
              <p className="text-tigray-dark/80 mb-6">
                {t('volunteer.apply.description')}
              </p>
              <a
                href="/contact"
                className="inline-block bg-tigray-terracotta text-white px-6 py-3 rounded-md font-medium hover:bg-tigray-terracotta/90 transition-colors"
              >
                {t('volunteer.apply.button')}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Volunteer;
