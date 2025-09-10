
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const DonationSection = () => {
  const { t } = useLanguage();
  // Donation impact information
  const getDonationImpact = (amount: number) => {
    if (amount < 25) {
      return 'Provides emergency food supplies for a family';
    } else if (amount < 50) {
      return 'Provides clean water for a month to a family';
    } else if (amount < 100) {
      return 'Supports a child\'s education for a month';
    } else if (amount < 250) {
      return 'Helps establish a community garden';
    } else {
      return 'Contributes to building a clean water well';
    }
  };
  
  // Load Donorbox widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://donorbox.org/widget.js";
    script.async = true;
    script.setAttribute('paypalExpress', 'true');
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="h-1 w-20 bg-tigray-terracotta mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-tigray-dark mb-4">
              {t('donate.title')}
            </h2>
            <p className="text-tigray-dark/80 mb-8 text-lg">
              With crop production at just 10% of pre-war levels and 9 million people requiring urgent food aid, your support provides life-saving assistance to families facing extreme hunger. Every donation directly reaches those who need it most.
            </p>
            
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-6">
              <p className="font-semibold text-red-800 mb-2">URGENT: Famine Conditions Spreading</p>
              <p className="text-red-700 text-sm">
                International bodies warn of "dire conditions" with widespread malnutrition. ADS is on the front lines providing critical nutrition and emergency relief.
              </p>
            </div>
            
            <div className="bg-tigray-light p-6 rounded-lg border-l-4 border-tigray-terracotta mb-6">
              <p className="font-semibold text-tigray-dark mb-2">Your Impact</p>
              <div className="text-tigray-dark/80 space-y-2">
                <p><strong>$25:</strong> {getDonationImpact(25)}</p>
                <p><strong>$50:</strong> {getDonationImpact(50)}</p>
                <p><strong>$100:</strong> {getDonationImpact(100)}</p>
                <p><strong>$250+:</strong> {getDonationImpact(250)}</p>
              </div>
            </div>

            {/* Major Donor Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
              <p className="font-semibold text-yellow-800 mb-2">Major Donors & Corporate Partners</p>
              <p className="text-yellow-700 text-sm mb-3">
                Ready to fund entire programs? Sponsor a Child-Friendly Space, fund the ASSET program, or support emergency relief for multiple families.
              </p>
              <a 
                href="mailto:contact@anenitigray.org?subject=Major%20Donor%20Partnership%20Inquiry" 
                className="inline-block bg-yellow-600 text-white px-4 py-2 rounded text-sm hover:bg-yellow-700 transition-colors"
              >
                Contact Us for Partnership Opportunities
              </a>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
              <p className="text-green-800 font-semibold mb-2">Verified Trusted Partner</p>
              <p className="text-green-700 text-sm mb-4">
                ADS is a verified implementing partner working within the formal humanitarian response architecture. 
                Your donation reaches communities through trusted, established networks.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-xs text-green-700 font-medium">Trusted by:</span>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://tdrfund.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-1 rounded border hover:shadow-md transition-shadow"
                  >
                    <img 
                      src="/images/logos/Tigray-Disaster-Relief-Fund-preview.png" 
                      alt="TDRF" 
                      className="h-4 w-auto object-contain"
                    />
                  </a>
                  <a 
                    href="https://acsot.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-1 rounded border hover:shadow-md transition-shadow"
                  >
                    <img 
                      src="/images/logos/acsot-logo-preview.png" 
                      alt="ACSOT" 
                      className="h-4 w-auto object-contain"
                    />
                  </a>
                  <a 
                    href="https://tigray.ternafit.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-1 rounded border hover:shadow-md transition-shadow"
                  >
                    <img 
                      src="/images/logos/tigray-knowledge-base.png" 
                      alt="Tigray Knowledge Base" 
                      className="h-4 w-auto object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" alt="PayPal" className="h-8" />
              <div className="h-6 w-px bg-tigray-sand"></div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="American Express" className="h-6" />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white shadow-lg rounded-xl p-8 border border-tigray-sand">
              <h3 className="text-xl font-semibold mb-6 text-tigray-dark">{t('donate.subtitle')}</h3>
              
              {/* Donation options are now handled by Donorbox */}
              
              {/* Donorbox iframe */}
              <div className="w-full flex justify-center">
                <iframe 
                  src="https://donorbox.org/embed/support-ads-tigray?" 
                  name="donorbox" 
                  frameBorder="0" 
                  scrolling="no" 
                  height="900px" 
                  width="100%" 
                  style={{ 
                    maxWidth: '500px', 
                    minWidth: '250px', 
                    maxHeight: 'none !important' 
                  }}
                  allow="payment"
                ></iframe>
              </div>
              
              <p className="text-xs text-center mt-4 text-tigray-dark/60">
                Your donation is tax-deductible. You will receive a receipt by email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
