import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { grantInformation } from '../data/projectData';

interface GrantAlignmentBannerProps {
  compact?: boolean;
  className?: string;
}

const GrantAlignmentBanner: React.FC<GrantAlignmentBannerProps> = ({ 
  compact = false,
  className = '' 
}) => {
  if (compact) {
    return (
      <div className={`bg-gradient-to-r from-youth-blue/10 to-youth-purple/10 border-l-4 border-youth-blue rounded-lg p-4 ${className}`}>
        <div className="flex items-center gap-3">
          <Award className="text-youth-blue flex-shrink-0" size={24} />
          <div>
            <p className="font-semibold text-tigray-dark">
              {grantInformation.program}
            </p>
            <p className="text-sm text-tigray-dark/70">
              {grantInformation.currency} {grantInformation.amount.toLocaleString()} • {grantInformation.duration} months
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-youth-blue/5 via-youth-purple/5 to-energy-green/5 border border-youth-blue/20 rounded-xl p-6 md:p-8 ${className}`}>
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-gradient-to-br from-youth-blue to-youth-purple p-3 rounded-xl">
          <Award className="text-white" size={32} />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-tigray-dark mb-2">
            Grant-Funded Initiative
          </h3>
          <p className="text-lg font-semibold text-youth-blue mb-1">
            {grantInformation.program}
          </p>
          <p className="text-tigray-dark/70">
            Funded by {grantInformation.grantor} • {grantInformation.currency} {grantInformation.amount.toLocaleString()} • {grantInformation.duration}-month project
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <p className="font-semibold text-tigray-dark">Project Alignment:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {grantInformation.alignment.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle2 className="text-energy-green flex-shrink-0" size={18} />
              <span className="text-sm text-tigray-dark/80">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrantAlignmentBanner;
