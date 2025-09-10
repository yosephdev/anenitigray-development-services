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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {/* TDRF Partnership */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center border border-tigray-sand/20">
            <div className="mb-6">
              <a 
                href="https://tdrfund.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-20 w-20 mx-auto bg-white rounded-xl flex items-center justify-center shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img 
                  src="/images/logos/Tigray-Disaster-Relief-Fund-preview.png" 
                  alt="Tigray Disaster Relief Fund Logo"
                  className="h-16 w-16 object-contain"
                />
              </a>
            </div>
            <h3 className="text-lg font-semibold text-tigray-dark mb-3">
              <a 
                href="https://tdrfund.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-tigray-terracotta transition-colors"
              >
                Tigray Disaster Relief Fund
              </a>
            </h3>
            <div className="mb-3">
              <span className="inline-block bg-tigray-terracotta/10 text-tigray-terracotta px-3 py-1 rounded-full text-xs font-semibold">
                Trusted Implementing Partner
              </span>
            </div>
            <p className="text-tigray-dark/70 text-sm">
              International 501(c)(3) organization founded by diaspora professionals channeling funds to verified local partners.
            </p>
          </div>

          {/* ACSOT Partnership */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center border border-tigray-sand/20">
            <div className="mb-6">
              <a 
                href="https://acsot.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-20 w-20 mx-auto bg-white rounded-xl flex items-center justify-center shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img 
                  src="/images/logos/acsot-logo-preview.png" 
                  alt="Alliance of Civil Society Organizations of Tigray Logo"
                  className="h-16 w-16 object-contain"
                />
              </a>
            </div>
            <h3 className="text-lg font-semibold text-tigray-dark mb-3">
              <a 
                href="https://acsot.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-tigray-terracotta transition-colors"
              >
                Alliance of Civil Society Organizations of Tigray
              </a>
            </h3>
            <div className="mb-3">
              <span className="inline-block bg-tigray-ochre/20 text-tigray-brown px-3 py-1 rounded-full text-xs font-semibold">
                Member Organization
              </span>
            </div>
            <p className="text-tigray-dark/70 text-sm">
              Consortium of 124 local and national CSOs focusing on coordination, capacity building, and advocacy.
            </p>
          </div>

          {/* Ternafit Partnership */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center border border-tigray-sand/20">
            <div className="mb-6">
              <a 
                href="https://ternafit.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-20 w-20 mx-auto bg-white rounded-xl flex items-center justify-center shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img 
                  src="/images/logos/ternafit-logo-nobg.png" 
                  alt="Ternafit.org Logo"
                  className="h-16 w-16 object-contain"
                />
              </a>
            </div>
            <h3 className="text-lg font-semibold text-tigray-dark mb-3">
              <a 
                href="https://ternafit.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-tigray-terracotta transition-colors"
              >
                Ternafit.org
              </a>
            </h3>
            <div className="mb-3">
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                Digital Partner
              </span>
            </div>
            <p className="text-tigray-dark/70 text-sm mb-3">
              Award-winning digital strategy partner providing expert web development and community support initiatives.
            </p>
            <div className="text-xs text-green-600 font-medium">
              🏆 Best Tigrean Community Support Initiative 2025
            </div>
          </div>

          {/* Tigray Knowledge Resource */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center border border-tigray-sand/20">
            <div className="mb-6">
              <div className="h-20 w-20 mx-auto bg-white rounded-xl flex items-center justify-center shadow-md overflow-hidden">
                <img 
                  src="/images/logos/tigray-knowledge-base.png" 
                  alt="Tigray Knowledge Base Logo"
                  className="h-16 w-16 object-contain"
                />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-tigray-dark mb-3">
              <a href="https://tigray.ternafit.org" target="_blank" rel="noopener noreferrer" className="hover:text-tigray-terracotta transition-colors">
                Tigray Knowledge Base
              </a>
            </h3>
            <div className="mb-3">
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                Educational Resource
              </span>
            </div>
            <p className="text-tigray-dark/70 text-sm mb-4">
              World's most comprehensive multimedia resource on Tigray's history, culture, and current situation.
            </p>
            <a 
              href="https://tigray.ternafit.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors font-medium"
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

        {/* Partnership Network Showcase */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-tigray-dark mb-6">Our Partnership Network</h3>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <img 
              src="/images/logos/ads-partners-preview.png" 
              alt="ADS Partnership Network Overview"
              className="w-full max-w-4xl mx-auto h-auto object-contain rounded-lg"
            />
            <p className="text-tigray-dark/70 text-sm mt-4">
              ADS collaborates with trusted partners to maximize impact and ensure effective program delivery across Tigray.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
