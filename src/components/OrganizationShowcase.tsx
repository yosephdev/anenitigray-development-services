import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const OrganizationShowcase = () => {
  const { t } = useLanguage();

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="h-1 w-20 bg-tigray-terracotta mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-tigray-dark mb-4">
            Our Organization
          </h2>
          <p className="text-tigray-dark/80 max-w-3xl mx-auto text-lg">
            ADS in action - documenting our work across Tigray's communities through sustainable development programs.
          </p>
        </div>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Main organizational images */}
          <div className="lg:col-span-2">
            <img 
              src="/images/ADS-1.jpg" 
              alt="ADS team in action"
              className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
            />
            <p className="text-sm text-tigray-dark/70 mt-2 text-center">ADS team conducting community outreach programs</p>
          </div>
          
          <div className="space-y-4">
            <img 
              src="/images/ADS-03.jpg" 
              alt="Community engagement"
              className="w-full h-36 lg:h-38 object-cover rounded-lg shadow-lg"
            />
            <img 
              src="/images/ads-04.jpg" 
              alt="Program implementation"
              className="w-full h-36 lg:h-38 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Additional showcase images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <img 
              src="/images/ADS-7.jpg" 
              alt="Community development work"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <p className="text-xs text-tigray-dark/60 text-center">Community Development</p>
          </div>
          
          <div className="space-y-2">
            <img 
              src="/images/ADS-8.jpg" 
              alt="Healthcare initiatives"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <p className="text-xs text-tigray-dark/60 text-center">Healthcare Support</p>
          </div>
          
          <div className="space-y-2">
            <img 
              src="/images/ADS-10.jpg" 
              alt="Educational programs"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <p className="text-xs text-tigray-dark/60 text-center">Education Programs</p>
          </div>
          
          <div className="space-y-2">
            <img 
              src="/images/ADS-12.jpg" 
              alt="Food security programs"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <p className="text-xs text-tigray-dark/60 text-center">Food Security</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-tigray-dark mb-4">
              Join Us in Making a Difference
            </h3>
            <p className="text-tigray-dark/70 mb-6">
              Every program, every initiative, and every life changed is made possible through community support and partnerships. 
              See how your contribution directly impacts Tigray's development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/donate" 
                className="bg-tigray-terracotta text-white px-6 py-3 rounded-lg font-medium hover:bg-tigray-brown transition-colors"
              >
                Support Our Work
              </a>
              <a 
                href="/impact" 
                className="border-2 border-tigray-terracotta text-tigray-terracotta px-6 py-3 rounded-lg font-medium hover:bg-tigray-terracotta hover:text-white transition-colors"
              >
                View Our Impact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationShowcase;
