import React from 'react';
import { Users } from 'lucide-react';

interface YouthLeadershipBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

const YouthLeadershipBadge: React.FC<YouthLeadershipBadgeProps> = ({ 
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

  return (
    <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-youth-blue to-youth-purple text-white rounded-full font-semibold ${sizeClasses[size]} ${className}`}>
      {showIcon && <Users size={iconSizes[size]} />}
      <span>Youth-Led (18-35)</span>
    </div>
  );
};

export default YouthLeadershipBadge;
