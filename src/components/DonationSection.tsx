
import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const DonationSection = () => {
  const { t } = useLanguage();
  const [donationType, setDonationType] = useState<'monthly' | 'onetime'>('monthly');
  const [amount, setAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paypalLoaded, setPaypalLoaded] = useState(false);
  const paypalButtonRef = useRef<HTMLDivElement>(null);

  const handleAmountClick = (value: number) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount(null);
  };

  const getDonationImpact = () => {
    if (!amount && !customAmount) return null;
    
    const finalAmount = amount || Number(customAmount);
    
    if (finalAmount < 25) {
      return 'Provides emergency food supplies for a family';
    } else if (finalAmount < 50) {
      return 'Provides clean water for a month to a family';
    } else if (finalAmount < 100) {
      return 'Supports a child\'s education for a month';
    } else if (finalAmount < 250) {
      return 'Helps establish a community garden';
    } else {
      return 'Contributes to building a clean water well';
    }
  };
  
  const getFinalAmount = () => {
    return amount || (customAmount ? Number(customAmount) : 50);
  };
  
  // Load PayPal script
  useEffect(() => {
    // Add PayPal Script
    const script = document.createElement('script');
    // Use a placeholder client ID - replace with your actual PayPal client ID
    const clientId = 'sb'; // 'sb' is PayPal's sandbox test client ID
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&intent=capture${donationType === 'monthly' ? '&vault=true' : ''}`;
    script.async = true;
    script.onload = () => setPaypalLoaded(true);
    document.body.appendChild(script);
    
    return () => {
      // Clean up
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [donationType]);
  
  // Initialize PayPal buttons when script is loaded
  useEffect(() => {
    if (paypalLoaded && paypalButtonRef.current) {
      // Clear any existing buttons
      paypalButtonRef.current.innerHTML = '';
      
      // @ts-ignore - PayPal is loaded via script
      window.paypal.Buttons({
        style: {
          color: 'gold',
          shape: 'rect',
          label: 'pay',
          height: 50
        },
        
        createOrder: (data: any, actions: any) => {
          const finalAmount = getFinalAmount();
          
          if (donationType === 'onetime') {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: finalAmount.toString(),
                  currency_code: 'USD'
                },
                description: 'Donation to Tigray Impact'
              }]
            });
          } else {
            // For subscription/monthly donations
            // Use a placeholder plan ID - replace with your actual PayPal plan ID
            const planId = 'P-PLACEHOLDER';
            return actions.subscription.create({
              plan_id: planId,
              custom_id: `donation_${finalAmount}`
            });
          }
        },
        
        onApprove: (data: any, actions: any) => {
          if (donationType === 'onetime') {
            return actions.order.capture().then(function(details: any) {
              alert('Transaction completed! Thank you for your donation.');
              // Here you would typically send the transaction details to your server
            });
          } else {
            // Subscription was approved
            alert('Subscription activated! Thank you for your monthly support.');
            // Here you would typically send the subscription details to your server
          }
        },
        
        onError: (err: any) => {
          console.error('PayPal Error:', err);
          alert('There was an error processing your payment. Please try again.');
        }
      }).render(paypalButtonRef.current);
    }
  }, [paypalLoaded, amount, customAmount, donationType]);

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
              <p className="text-tigray-dark/80">
                {getDonationImpact() || 'Select an amount to see your impact'}
              </p>
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
              
              <div className="flex border border-tigray-sand rounded-md mb-6 overflow-hidden">
                <button 
                  onClick={() => setDonationType('monthly')} 
                  className={`flex-1 py-3 px-4 text-center font-medium ${donationType === 'monthly' ? 'bg-tigray-terracotta text-white' : 'bg-white text-tigray-dark'}`}
                >
                  {t('donate.monthly')}
                </button>
                <button 
                  onClick={() => setDonationType('onetime')} 
                  className={`flex-1 py-3 px-4 text-center font-medium ${donationType === 'onetime' ? 'bg-tigray-terracotta text-white' : 'bg-white text-tigray-dark'}`}
                >
                  {t('donate.onetime')}
                </button>
              </div>
              
              <div className="mb-6">
                <label className="block mb-3 font-medium text-tigray-dark">{t('donate.amount')}</label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[25, 50, 100, 250, 500, 1000].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleAmountClick(value)}
                      className={`py-3 px-4 border ${
                        amount === value 
                          ? 'border-tigray-terracotta bg-tigray-terracotta/10 text-tigray-terracotta' 
                          : 'border-tigray-sand text-tigray-dark'
                      } rounded-md font-medium hover:bg-tigray-sand/20 transition-colors`}
                    >
                      ${value}
                    </button>
                  ))}
                </div>
                
                <div className="mt-4">
                  <label className="block mb-2 font-medium text-sm text-tigray-dark">{t('donate.custom')}</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tigray-dark">$</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="w-full py-3 pl-7 pr-3 border border-tigray-sand rounded-md focus:ring-2 focus:ring-tigray-terracotta focus:border-transparent"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>
              </div>
              
              {/* PayPal Button Container */}
              <div ref={paypalButtonRef} className="w-full mb-4"></div>
              
              {/* Fallback button in case PayPal doesn't load */}
              {!paypalLoaded && (
                <Button 
                  className="w-full bg-tigray-terracotta hover:bg-opacity-90 py-6 text-lg"
                  onClick={() => alert(`Processing ${donationType} donation of ${getFinalAmount()}`)}
                >
                  {t('donate.button')}
                </Button>
              )}
              
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
