import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

interface LegacyOption {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
}

const LegacyGiving: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('bequests');

  const legacyOptions: LegacyOption[] = [
    {
      id: 'bequests',
      titleKey: 'legacy.bequests.title',
      descriptionKey: 'legacy.bequests.description',
      image: '/images/ads-legacy-bequests-program.jpg'
    },
    {
      id: 'trusts',
      titleKey: 'legacy.trusts.title',
      descriptionKey: 'legacy.trusts.description',
      image: '/images/ads-legacy-trusts-program.jpg'
    },
    {
      id: 'insurance',
      titleKey: 'legacy.insurance.title',
      descriptionKey: 'legacy.insurance.description',
      image: '/images/ads-legacy-insurance-program.jpg'
    }
  ];

  const activeOption = legacyOptions.find(option => option.id === activeTab) || legacyOptions[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{t('legacy.title')} - ADS</title>
        <meta name="description" content="Leave a lasting legacy by including ADS in your estate planning." />
      </Helmet>
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-tigray-dark text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-6">{t('legacy.hero.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('legacy.hero.subtitle')}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {legacyOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveTab(option.id)}
                className={`p-6 text-left rounded-lg transition-colors ${
                  activeTab === option.id
                    ? 'bg-tigray-terracotta text-white shadow-lg'
                    : 'bg-white text-tigray-dark hover:bg-gray-50 shadow-md'
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">{t(option.titleKey)}</h3>
                <p className="text-sm opacity-90">
                  {t(option.descriptionKey).substring(0, 100)}...
                </p>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 h-64 md:h-auto">
                <img
                  src={activeOption.image}
                  alt={t(activeOption.titleKey)}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h2 className="text-2xl font-bold text-tigray-dark mb-4">
                  {t(activeOption.titleKey)}
                </h2>
                <div className="prose max-w-none text-tigray-dark/80">
                  <p className="mb-4">{t(activeOption.descriptionKey)}</p>
                  <p className="text-sm text-tigray-dark/60">
                    {t('legacy.consultation')}
                  </p>
                </div>
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-block bg-tigray-dark text-white px-6 py-3 rounded-md font-medium hover:bg-tigray-dark/90 transition-colors"
                  >
                    {t('legacy.contact_button')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-tigray-sand/20 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-tigray-dark mb-12">
              {t('legacy.faq.title')}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-tigray-dark mb-2">
                    {t(`legacy.faq.q${item}.question`)}
                  </h3>
                  <p className="text-tigray-dark/80">
                    {t(`legacy.faq.q${item}.answer`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegacyGiving;
