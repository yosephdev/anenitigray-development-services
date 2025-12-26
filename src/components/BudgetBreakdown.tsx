import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { budgetBreakdown } from '../data/projectData';

const COLORS = ['#FDB813', '#27AE60', '#3498DB', '#9B59B6'];

const BudgetBreakdownComponent: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const chartData = budgetBreakdown.map(item => ({
    name: item.category,
    value: item.amount,
    percentage: item.percentage
  }));

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-tigray-dark mb-6">
        Operational Budget Overview
      </h2>
      <p className="text-tigray-dark/70 mb-8">
        Projected Annual Budget: <span className="text-2xl font-bold text-energy-green">Self-Funded</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart */}
        <div className="flex items-center justify-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ percentage }) => `${percentage.toFixed(1)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `€${value.toLocaleString()}`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Budget Items */}
        <div className="space-y-4">
          {budgetBreakdown.map((item, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(item.category)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <div className="text-left">
                    <h3 className="font-semibold text-tigray-dark">
                      {item.category}
                    </h3>
                    <p className="text-sm text-tigray-dark/60">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="font-bold text-tigray-dark">
                      €{item.amount.toLocaleString()}
                    </p>
                    <p className="text-sm text-tigray-dark/60">
                      {item.percentage}%
                    </p>
                  </div>
                  {expandedCategories.includes(item.category) ? (
                    <ChevronUp size={20} className="text-tigray-dark/40" />
                  ) : (
                    <ChevronDown size={20} className="text-tigray-dark/40" />
                  )}
                </div>
              </button>

              {/* Expanded Details */}
              {expandedCategories.includes(item.category) && item.items && (
                <div className="px-4 pb-4 bg-gray-50 space-y-2">
                  {item.items.map((subItem, subIndex) => (
                    <div 
                      key={subIndex}
                      className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0"
                    >
                      <span className="text-sm text-tigray-dark/70">
                        {subItem.name}
                      </span>
                      <span className="text-sm font-semibold text-tigray-dark">
                        €{subItem.cost.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetBreakdownComponent;
