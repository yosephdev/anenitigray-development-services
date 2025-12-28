import React from 'react';
import { Calendar, Users, Award, ExternalLink } from 'lucide-react';

const RecentTrainingShowcase = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="h-1 w-20 bg-tigray-terracotta mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-tigray-dark mb-4">
            Latest Training Initiative
          </h2>
          <p className="text-tigray-dark/80 max-w-3xl mx-auto text-lg">
            Strengthening civil society leadership through collaborative capacity building
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="h-12 w-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Award className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-tigray-dark mb-2">
                Leadership in Crisis Training for CSO Leaders
              </h3>
              <div className="flex items-center gap-4 text-sm text-tigray-dark/70 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>September 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>20 CSO Leaders</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>📍 Mekelle, Tigray</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-tigray-dark/80 mb-6 leading-relaxed">
            Anenitigray Development Services (ADS)—in partnership with the Tigray Disaster Relief Fund (TDRF) 
            and the Association of Civil Society Organizations in Tigray (ACSOT)—successfully hosted the 
            Leadership in Crisis: Capacity Building and Leadership Development Training for Civil Society 
            Organizations in Tigray.
          </p>

          {/* Training Video */}
          <div className="mb-8">
            <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-xl">
              <video 
                controls 
                poster="/images/PHOTO-2025-09-15-17-43-54.jpg"
                className="w-full h-auto max-h-96 object-cover"
              >
                <source src="/images/ads-emergency-response-overview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-sm text-tigray-dark/60 mt-2 text-center">
              Training highlights: Building leadership capacity for post-conflict recovery
            </p>
          </div>

          {/* Training Photos Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="relative group">
              <img 
                src="/images/PHOTO-2025-09-15-17-43-54.jpg" 
                alt="Training session participants"
                className="w-full h-32 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
            </div>
            <div className="relative group">
              <img 
                src="/images/PHOTO-2025-09-15-17-43-57.jpg" 
                alt="Leadership training in progress"
                className="w-full h-32 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
            </div>
            <div className="relative group">
              <img 
                src="/images/PHOTO-2025-09-15-17-43-57_1.jpg" 
                alt="CSO leaders collaboration"
                className="w-full h-32 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
            </div>
            <div className="relative group">
              <img 
                src="/images/PHOTO-2025-09-15-17-43-58.jpg" 
                alt="Training workshop activities"
                className="w-full h-32 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <h4 className="font-semibold text-tigray-dark mb-2">20 CSO Leaders</h4>
              <p className="text-sm text-tigray-dark/70">
                Capacity building for civil society organization leaders across Tigray
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-5 w-5 text-green-600" />
              </div>
              <h4 className="font-semibold text-tigray-dark mb-2">Crisis Leadership</h4>
              <p className="text-sm text-tigray-dark/70">
                Strengthening leadership, crisis management, and organizational resilience
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="h-10 w-10 bg-tigray-terracotta/10 rounded-lg flex items-center justify-center mb-4">
                <ExternalLink className="h-5 w-5 text-tigray-terracotta" />
              </div>
              <h4 className="font-semibold text-tigray-dark mb-2">Partnership Model</h4>
              <p className="text-sm text-tigray-dark/70">
                Collaborative approach with TDRF and ACSOT for maximum impact
              </p>
            </div>
          </div>

          {/* Partnership Credits */}
          <div className="bg-white p-6 rounded-xl border-l-4 border-blue-500">
            <h4 className="font-semibold text-tigray-dark mb-3">Training Partners & Acknowledgments</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-tigray-dark/80 mb-2">
                  <strong>Facilitated by:</strong> Merho Training and Consultancy Services
                </p>
                <p className="text-sm text-tigray-dark/80 mb-2">
                  <strong>Generous Support:</strong> Tigray Disaster Relief Fund (TDRF)
                </p>
              </div>
              <div>
                <p className="text-sm text-tigray-dark/80 mb-2">
                  <strong>Participant Selection:</strong> Association of Civil Society Organizations in Tigray (ACSOT)
                </p>
                <p className="text-sm text-tigray-dark/80">
                  <strong>Focus:</strong> Post-conflict recovery and organizational resilience
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-tigray-terracotta text-white px-6 py-3 rounded-lg font-medium hover:bg-tigray-brown transition-colors">
              <span>Learn More About Our Capacity Building</span>
              <ExternalLink className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTrainingShowcase;
