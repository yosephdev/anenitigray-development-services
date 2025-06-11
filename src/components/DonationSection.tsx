
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
              Your support helps us build sustainable solutions for communities in Tigray. Every donation makes a difference, whether it's providing clean water, education, healthcare, or food security.
            </p>
            
            <div className="bg-tigray-light p-6 rounded-lg border-l-4 border-tigray-terracotta mb-6">
              <p className="font-semibold text-tigray-dark">Your Impact</p>
              <div className="text-tigray-dark/80 space-y-2">
                <p>$25: {getDonationImpact(25)}</p>
                <p>$50: {getDonationImpact(50)}</p>
                <p>$100: {getDonationImpact(100)}</p>
                <p>$250+: {getDonationImpact(250)}</p>
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
                  allowPaymentRequest="allowpaymentrequest" 
                  seamless="seamless" 
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
