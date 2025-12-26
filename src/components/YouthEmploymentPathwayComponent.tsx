import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { youthEmploymentPathway } from '../data/productsAndImpact';

const YouthEmploymentPathwayComponent: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-tigray-dark mb-3">
          Youth Employment Pathway
        </h2>
        <p className="text-tigray-dark/70 max-w-2xl mx-auto">
          Your journey from applicant to certified solar technician and employed team member
        </p>
      </div>

      {/* Pathway Steps */}
      <div className="space-y-6">
        {youthEmploymentPathway.map((step, index) => {
          const isLast = index === youthEmploymentPathway.length - 1;
          
          return (
            <div key={index} className="relative">
              {/* Connector Line */}
              {!isLast && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-youth-blue to-energy-green md:hidden" />
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-youth-blue to-youth-purple flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-tigray-dark mb-2 md:mb-0">
                      {step.title}
                    </h3>
                    <span className="inline-block bg-solar-yellow/20 text-solar-dark text-sm font-semibold px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>

                  <p className="text-tigray-dark/70 mb-4">
                    {step.description}
                  </p>

                  {/* Activities */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-tigray-dark/70 mb-3">
                      Key Activities:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {step.activities.map((activity, actIndex) => (
                        <div 
                          key={actIndex}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 size={16} className="text-energy-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-tigray-dark/80">
                            {activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow for desktop */}
                {!isLast && (
                  <div className="hidden md:flex items-center">
                    <ArrowRight className="text-youth-blue" size={32} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="mt-12 bg-gradient-to-r from-youth-blue/10 to-youth-purple/10 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-tigray-dark mb-3">
          Ready to Start Your Journey?
        </h3>
        <p className="text-tigray-dark/70 mb-6 max-w-2xl mx-auto">
          Join our next cohort of young solar technicians. Applications are now open for youth aged 18-35 from Mekelle and surrounding areas.
        </p>
        <button className="bg-gradient-to-r from-youth-blue to-youth-purple text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-shadow">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default YouthEmploymentPathwayComponent;
