import React from 'react';
import { Users, Home, Leaf, DollarSign, Clock, Award, Zap, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { impactMetrics } from '../data/productsAndImpact';

interface ImpactMetricsDashboardProps {
  layout?: 'grid' | 'list';
  showTrends?: boolean;
  className?: string;
}

const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  Users,
  Home,
  Leaf,
  DollarSign,
  Clock,
  Award,
  Zap
};

const ImpactMetricsDashboard: React.FC<ImpactMetricsDashboardProps> = ({ 
  layout = 'grid',
  showTrends = true,
  className = '' 
}) => {
  const getTrendIcon = (trend?: 'up' | 'down' | 'stable') => {
    if (!trend || !showTrends) return null;
    
    switch (trend) {
      case 'up':
        return <TrendingUp className="text-energy-green" size={16} />;
      case 'down':
        return <TrendingDown className="text-tigray-terracotta" size={16} />;
      case 'stable':
        return <Minus className="text-solar-gold" size={16} />;
    }
  };

  const containerClasses = layout === 'grid' 
    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
    : 'space-y-4';

  return (
    <div className={`${containerClasses} ${className}`}>
      {impactMetrics.map((metric, index) => {
        const IconComponent = iconMap[metric.icon] || Users;
        
        return (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="bg-gradient-to-br from-solar-yellow/20 to-energy-green/20 p-3 rounded-lg">
                <IconComponent className="text-energy-green" size={24} />
              </div>
              {getTrendIcon(metric.trend)}
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-tigray-dark/70">
                {metric.label}
              </h4>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold text-tigray-dark">
                  {metric.value}
                </p>
                <span className="text-sm text-tigray-dark/60">
                  {metric.unit}
                </span>
              </div>
              <p className="text-xs text-tigray-dark/60 leading-relaxed">
                {metric.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImpactMetricsDashboard;
