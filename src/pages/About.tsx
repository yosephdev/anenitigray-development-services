
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OrganizationShowcase from '../components/OrganizationShowcase';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <div className="relative py-24 bg-tigray-dark">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
            backgroundImage: "url('/images/ADS-14.jpg')" // TODO: Replace with relevant image (e.g., Tigray landscape, community meeting)
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">About ADS</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Anenitigray Development Services (ADS) is a young Non-Governmental Organization (NGO) committed to fostering sustainable development and providing humanitarian support in Tigray through community-driven initiatives.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-1 w-20 bg-tigray-terracotta mb-6"></div>
              <h2 className="text-3xl font-bold text-tigray-dark mb-6">Our Mission</h2>
              <p className="text-lg text-tigray-dark/80 mb-6">
                {t('about.mission.paragraph1')}
              </p>
              <p className="text-lg text-tigray-dark/80 mb-6">
                {t('about.mission.paragraph2')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <dt className="text-2xl font-bold text-tigray-terracotta">{t('about.stat.established.value')}</dt>
                  <dd className="mt-1 text-md text-tigray-dark/80">{t('about.stat.established.title')}</dd>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <dt className="text-2xl font-bold text-tigray-terracotta">{t('about.stat.communities.value')}</dt>
                  <dd className="mt-1 text-md text-tigray-dark/80">{t('about.stat.communities.title')}</dd>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <dt className="text-2xl font-bold text-tigray-terracotta">{t('about.stat.team.value')}</dt>
                  <dd className="mt-1 text-md text-tigray-dark/80">{t('about.stat.team.title')}</dd>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/ads-04.jpg" // TODO: Replace with relevant photo (e.g., ADS team or beneficiaries) 
                alt="Team members working in Tigray"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-tigray-terracotta rounded-lg hidden md:flex items-center justify-center">
                <p className="text-white font-bold text-center p-4">Committed to Sustainable Change</p>
              </div>
            </div>
          </div>
          
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-tigray-dark mb-4">Our Values</h2>
              <p className="text-tigray-dark/80 max-w-3xl mx-auto">
                These core principles guide our work and decision-making process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-tigray-terracotta hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-tigray-dark mb-3">Community Ownership</h3>
                <p className="text-tigray-dark/70">
                  We believe that sustainable development must be led by the communities themselves. We facilitate, but communities drive the change.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-tigray-terracotta hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-tigray-dark mb-3">Sustainability</h3>
                <p className="text-tigray-dark/70">
                  Our programs are designed to create lasting impact, with solutions that communities can maintain independently in the long term.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-tigray-terracotta hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-tigray-dark mb-3">Transparency</h3>
                <p className="text-tigray-dark/70">
                  We are committed to clear, open communication with our communities, partners, and supporters about our work and its impact.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-tigray-terracotta hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-tigray-dark mb-3">Innovation</h3>
                <p className="text-tigray-dark/70">
                  We continuously seek better ways to address challenges, embracing new ideas and technologies that can enhance our impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Understanding Tigray Section */}
        <div className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
              <h2 className="text-3xl font-bold text-tigray-dark mb-6">Understanding Tigray's Rich Heritage</h2>
              <p className="text-lg text-tigray-dark/80 mb-8">
                To truly appreciate the importance of our humanitarian work, it's essential to understand Tigray's remarkable history, 
                culture, and the context of the current crisis. Our partner Ternafit has created the world's most comprehensive 
                resource on this historic region.
              </p>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-600">
                <div className="flex items-center justify-center mb-4">
                  <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mr-4 border border-blue-200">
                    <img 
                      src="/images/logos/logo-tigray-knowledge-base.svg" 
                      alt="Tigray Knowledge Base Logo"
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-tigray-dark">Tigray Knowledge Base</h3>
                    <p className="text-blue-600 font-medium">The World's Most Comprehensive Resource on Tigray</p>
                  </div>
                </div>
                
                <p className="text-tigray-dark/70 mb-6">
                  From ancient civilizations to modern challenges, this multimedia-rich knowledge base covers every aspect of Tigray. 
                  Built for students, journalists, researchers, policymakers, and anyone seeking authoritative information about this historic region.
                </p>
                
                <a 
                  href="https://tigray.ternafit.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Explore Tigray's Heritage
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <OrganizationShowcase />
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
