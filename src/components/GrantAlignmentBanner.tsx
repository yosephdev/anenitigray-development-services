import React from 'react';
import { Award, CheckCircle2, Clock } from 'lucide-react';
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
      <div className={`bg-gradient-to-r from-energy-green/10 to-youth-blue/10 border-l-4 border-energy-green rounded-lg p-4 ${className}`}>
        <div className="flex items-center gap-3">
          <Clock className="text-energy-green flex-shrink-0" size={24} />
          <div>
            <p className="font-semibold text-tigray-dark">
              Applying: {grantInformation.program}
            </p>
            <p className="text-sm text-tigray-dark/70">
              {grantInformation.currency} {grantInformation.amount.toLocaleString()} • Deadline: Jan 7, 2026
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-energy-green/5 via-youth-blue/5 to-youth-purple/5 border border-energy-green/30 rounded-xl p-6 md:p-8 ${className}`}>
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-gradient-to-br from-energy-green to-youth-blue p-3 rounded-xl">
          <Clock className="text-white" size={32} />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-tigray-dark mb-2">
            YAL Entrepreneurship Grant Application
          </h3>
          <p className="text-lg font-semibold text-energy-green mb-1">
            {grantInformation.program}
          </p>
          <p className="text-tigray-dark/70">
            Applying to {grantInformation.grantor} • {grantInformation.currency} {grantInformation.amount.toLocaleString()} requested • Deadline: January 7, 2026
          </p>
          <p className="text-sm text-tigray-dark/60 mt-2 italic">
            Application submitted December 30, 2025. If approved, project implementation runs May 2026 – April 2027.
          </p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <p className="font-semibold text-tigray-dark">Key Dates:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white/50 rounded-lg p-3 border border-energy-green/20">
            <p className="text-sm font-semibold text-tigray-dark">Call Launch</p>
            <p className="text-xs text-tigray-dark/70">November 12, 2025</p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border border-energy-green/20">
            <p className="text-sm font-semibold text-tigray-dark">Application Deadline</p>
            <p className="text-xs text-tigray-dark/70">January 7, 2026</p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border border-energy-green/20">
            <p className="text-sm font-semibold text-tigray-dark">Review & Due Diligence</p>
            <p className="text-xs text-tigray-dark/70">January – April 2026</p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border border-energy-green/20">
            <p className="text-sm font-semibold text-tigray-dark">Implementation Period</p>
            <p className="text-xs text-tigray-dark/70">May 2026 – April 2027</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <p className="font-semibold text-tigray-dark">Project Alignment with Grant Priorities:</p>
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
