import React from 'react';
import { Calendar, CheckCircle2, Circle } from 'lucide-react';
import { projectTimeline } from '../data/projectData';

interface ProjectTimelineProps {
  compact?: boolean;
  highlightMonth?: number;
}

const ProjectTimelineComponent: React.FC<ProjectTimelineProps> = ({ 
  compact = false,
  highlightMonth 
}) => {
  // Project starts January 2026 - all months are upcoming/planned
  const projectStarted = false;
  const currentMonth = 0; // No months completed yet

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-8">
        <Calendar className="text-youth-blue" size={32} />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-tigray-dark">
            12-Month Implementation Timeline
          </h2>
          <p className="text-tigray-dark/70">
            Planned implementation starting January 2026 (if AU EU LAB application is approved)
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {projectTimeline.map((item, index) => {
          const isCompleted = item.month < currentMonth;
          const isCurrent = item.month === currentMonth;
          const isFuture = item.month > currentMonth;

          return (
            <div 
              key={index}
              className={`relative pl-8 pb-6 ${
                index !== projectTimeline.length - 1 ? 'border-l-2' : ''
              } ${
                isCompleted ? 'border-energy-green' : 
                isCurrent ? 'border-solar-yellow' : 
                'border-gray-300'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[9px] top-0 ${
                isCompleted ? 'bg-energy-green' : 
                isCurrent ? 'bg-solar-yellow' : 
                'bg-gray-300'
              } rounded-full p-1`}>
                {isCompleted ? (
                  <CheckCircle2 size={16} className="text-white" />
                ) : (
                  <Circle size={16} className="text-white fill-current" />
                )}
              </div>

              {/* Content */}
              <div className={`${
                isCurrent ? 'bg-solar-yellow/10 border-2 border-solar-yellow' : 'bg-gray-50 border border-gray-200'
              } rounded-lg p-4 md:p-6`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-lg font-bold text-tigray-dark">
                    Month {item.month}: {item.monthName}
                  </h3>
                  {isCurrent && (
                    <span className="inline-block mt-2 md:mt-0 bg-solar-yellow text-tigray-dark text-xs font-semibold px-3 py-1 rounded-full">
                      Current Phase
                    </span>
                  )}
                  {isCompleted && (
                    <span className="inline-block mt-2 md:mt-0 bg-energy-green text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Completed
                    </span>
                  )}
                </div>

                {!compact && (
                  <>
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-tigray-dark/70 mb-2">
                        Activities:
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {item.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="text-sm text-tigray-dark/80">
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {item.milestones.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-tigray-dark/70 mb-2">
                          Key Milestones:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.milestones.map((milestone, milIndex) => (
                            <span 
                              key={milIndex}
                              className="bg-youth-blue/10 text-youth-blue text-xs font-medium px-3 py-1 rounded-full"
                            >
                              {milestone}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Timeline Summary */}
      <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold text-gray-400">0</p>
          <p className="text-sm text-tigray-dark/70">Completed</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-400">0</p>
          <p className="text-sm text-tigray-dark/70">In Progress</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-youth-blue">12</p>
          <p className="text-sm text-tigray-dark/70">Upcoming</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimelineComponent;
