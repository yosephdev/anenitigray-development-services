
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DonationSection from '../components/DonationSection';
import BrandedHeader from '../components/BrandedHeader';
import { useLanguage } from '../contexts/LanguageContext';

const Donate = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <BrandedHeader 
          title="Donate"
          subtitle="Your donation helps us create lasting change in Tigray communities."
          backgroundImage="/images/ads-economic-empowerment-01.jpg"
          showLogo={true}
        />

        <DonationSection />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="h-1 w-20 bg-tigray-terracotta mb-6"></div>
              <h2 className="text-3xl font-bold text-tigray-dark mb-6">Where Your Money Goes</h2>
              <p className="text-tigray-dark/80 mb-6">
                We're committed to transparency and ensuring your donations create maximum impact. Here's how your contributions help:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-tigray-terracotta/20 flex items-center justify-center text-tigray-terracotta flex-shrink-0 mt-1">
                    85%
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-tigray-dark">Program Implementation</h3>
                    <p className="text-tigray-dark/70">Directly funds our community projects in education, healthcare, food security, and economic empowerment.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-tigray-terracotta/20 flex items-center justify-center text-tigray-terracotta flex-shrink-0 mt-1">
                    10%
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-tigray-dark">Administration</h3>
                    <p className="text-tigray-dark/70">Covers essential administrative costs to ensure effective program management and oversight.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-tigray-terracotta/20 flex items-center justify-center text-tigray-terracotta flex-shrink-0 mt-1">
                    5%
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-tigray-dark">Fundraising</h3>
                    <p className="text-tigray-dark/70">Helps us reach more donors and grow our impact through expanded support.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-tigray-light p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-tigray-dark mb-6">Other Ways to Support</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-tigray-dark mb-2">Corporate Partnerships</h3>
                  <p className="text-tigray-dark/70 mb-3">
                    Partner with us to create meaningful social impact aligned with your values.
                  </p>
                  <a href="/contact" className="text-tigray-terracotta font-medium hover:underline">Learn more about partnerships</a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-tigray-dark mb-2">Volunteer Opportunities</h3>
                  <p className="text-tigray-dark/70 mb-3">
                    Contribute your skills and time to support our mission and programs.
                  </p>
                  <a href="/volunteer" className="text-tigray-terracotta font-medium hover:underline">Explore volunteer opportunities</a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-tigray-dark mb-2">Legacy Giving</h3>
                  <p className="text-tigray-dark/70 mb-3">
                    Create a lasting impact by including ADS in your estate planning.
                  </p>
                  <a href="/legacy-giving" className="text-tigray-terracotta font-medium hover:underline">Learn about legacy giving</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Donate;
