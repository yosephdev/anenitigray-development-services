import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PartnersSection = () => {
  const { t } = useLanguage();

  return (
    <div className="py-16 bg-tigray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="h-1 w-20 bg-tigray-terracotta mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-tigray-dark mb-4">
            Trusted Partnership Network
          </h2>
          <p className="text-tigray-dark/80 max-w-3xl mx-auto text-lg">
            ADS is a verified implementing partner working within the formal humanitarian response architecture in Tigray. Our partnerships provide credibility, expertise, and expanded reach to serve more communities effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {/* TDRF Partnership */}
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="mb-4">
              <div className="h-16 w-16 mx-auto bg-tigray-terracotta rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">TDRF</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-tigray-dark mb-2">
              Tigray Disaster Relief Fund (TDRF)
            </h3>
            <p className="text-tigray-dark/70 text-sm">
              <strong>Trusted Implementing Partner</strong> - TDRF is an established international 501(c)(3) organization founded by diaspora professionals channeling funds to verified local partners like ADS.
            </p>
          </div>

          {/* ACSOT Partnership */}
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="mb-4">
              <div className="h-16 w-16 mx-auto bg-tigray-sand rounded-full flex items-center justify-center">
                <span className="text-tigray-dark font-bold text-sm">ACSOT</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-tigray-dark mb-2">
              Alliance of Civil Society Organizations of Tigray (ACSOT)
            </h3>
            <p className="text-tigray-dark/70 text-sm">
              <strong>Member Organization</strong> - Part of a consortium of 124 local and national CSOs focusing on coordination, capacity building, and advocacy.
            </p>
          </div>

          {/* Ternafit Partnership */}
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="mb-4">
              <div className="h-16 w-16 mx-auto bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">TF</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-tigray-dark mb-2">
              Ternafit.org
            </h3>
            <p className="text-tigray-dark/70 text-sm">
              <strong>Digital Partner</strong> - Winner of "Best Tigrean Community Support Initiative 2025" award from Acquisition International, providing expert digital strategy and web development.
            </p>
          </div>

          {/* Tigray Knowledge Resource */}
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="mb-4">
              <div className="h-16 w-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">📚</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-tigray-dark mb-2">
              <a href="https://tigray.ternafit.org" target="_blank" rel="noopener noreferrer" className="hover:text-tigray-terracotta transition-colors">
                Tigray Knowledge Base
              </a>
            </h3>
            <p className="text-tigray-dark/70 text-sm">
              <strong>Educational Resource</strong> - The world's most comprehensive multimedia resource on Tigray's history, culture, and current situation. Essential for understanding the context of our humanitarian work.
            </p>
            <a 
              href="https://tigray.ternafit.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
            >
              Explore Tigray →
            </a>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mt-12 text-center">
          <p className="text-green-800 font-semibold mb-2">Verified Local Implementation</p>
          <p className="text-green-700 text-sm">
            Unlike large international NGOs, ADS is a hyper-local, efficient organization with unparalleled community trust built on shared experience. 
            Your donation doesn't get absorbed by international overhead—it provides essential support today, administered by neighbors who understand the context intimately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
