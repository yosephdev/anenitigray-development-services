import React from 'react';
import { Building2 } from 'lucide-react';

interface SocialEnterprisePillProps {
  variant?: 'dungo' | 'generic';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

const SocialEnterprisePill: React.FC<SocialEnterprisePillProps> = ({ 
  variant = 'dungo',
  size = 'md', 
  showIcon = true,
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };

  const iconSizes = {
    sm: 12,
    md: 16,
    lg: 20
  };

  const variantClasses = {
    dungo: 'bg-gradient-to-r from-solar-yellow to-energy-green text-tigray-dark',
    generic: 'bg-gradient-to-r from-energy-green to-energy-dark text-white'
  };

  const text = variant === 'dungo' ? 'Dungo Energy Solutions' : 'Social Enterprise';

  return (
    <div className={`inline-flex items-center gap-2 rounded-full font-semibold ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {showIcon && <Building2 size={iconSizes[size]} />}
      <span>{text}</span>
    </div>
  );
};

export default SocialEnterprisePill;
