import React from 'react';

interface BrandedHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  showLogo?: boolean;
}

const BrandedHeader: React.FC<BrandedHeaderProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = '/images/ads-community-service-02.jpg',
  showLogo = false 
}) => {
  return (
    <div className="relative py-24 bg-tigray-dark">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
        backgroundImage: `url('${backgroundImage}')`
      }}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {showLogo && (
          <div className="flex justify-center mb-6">
            <div className="flex items-center">
              <img 
                src="/images/logos/AneniTigray-Development-Services-logo.png" 
                alt="ADS Logo"
                className="h-16 w-auto object-contain mr-4"
              />
              <div className="flex flex-col text-left">
                <span className="text-2xl font-bold text-white leading-tight">Anenitigray</span>
                <span className="text-sm text-white/70 leading-tight">Development Services</span>
              </div>
            </div>
          </div>
        )}
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default BrandedHeader;
