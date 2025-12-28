import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Shield, BookOpen, Utensils, Home, Download, FileText, Presentation, Video } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const IntegratedChildCare = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="relative py-24 bg-tigray-dark">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
            backgroundImage: "url('/images/ads-child-friendly-space-01.jpg')"
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Integrated Child Care Support</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A Lifeline for Tigray's Children - Healing and Hope Through Holistic Care
            </p>
          </div>
        </div>

        {/* Crisis Context */}
        <div className="py-16 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-red-800 mb-6">A Generation at Risk</h2>
              <p className="text-lg text-red-700 mb-8">
                The conflict in Tigray has left a devastating mark on its youngest and most vulnerable residents. 
                An estimated 100,000 people remain internally displaced, living in dire conditions with limited access to basic services.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                  <div className="text-2xl font-bold text-red-600">100K+</div>
                  <div className="text-sm text-red-700">People internally displaced</div>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                  <div className="text-2xl font-bold text-red-600">9,600+</div>
                  <div className="text-sm text-red-700">Schools damaged during conflict</div>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                  <div className="text-2xl font-bold text-red-600">2M</div>
                  <div className="text-sm text-red-700">Children out of school in region</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Response */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-tigray-dark mb-4">Our Response: Holistic Care for Healing and Growth</h2>
              <p className="text-lg text-tigray-dark/80 max-w-3xl mx-auto">
                The Integrated Child Care Support program is ADS's direct response to this crisis. 
                Operating in Mekelle, we provide a sanctuary for conflict-affected children.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-tigray-light p-6 rounded-lg text-center">
                <div className="h-16 w-16 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">🍽️</span>
                </div>
                <h3 className="text-lg font-semibold text-tigray-dark mb-2">Essential Food & Nutrition</h3>
                <p className="text-tigray-dark/70 text-sm">
                  Nutritious meals to combat high rates of food insecurity and malnutrition affecting the region.
                </p>
              </div>

              <div className="bg-tigray-light p-6 rounded-lg text-center">
                <div className="h-16 w-16 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">🧠</span>
                </div>
                <h3 className="text-lg font-semibold text-tigray-dark mb-2">Mental Health & Psychosocial Support</h3>
                <p className="text-tigray-dark/70 text-sm">
                  Child-Friendly Spaces where children can play, learn, and receive professional support to process trauma.
                </p>
              </div>

              <div className="bg-tigray-light p-6 rounded-lg text-center">
                <div className="h-16 w-16 mx-auto bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-tigray-dark mb-2">Educational Aid</h3>
                <p className="text-tigray-dark/70 text-sm">
                  Materials and support to help children re-engage with learning, bridging educational gaps.
                </p>
              </div>

              <div className="bg-tigray-light p-6 rounded-lg text-center">
                <div className="h-16 w-16 mx-auto bg-tigray-terracotta rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-tigray-dark mb-2">Cash Support for Mothers</h3>
                <p className="text-tigray-dark/70 text-sm">
                  Direct cash assistance to mothers, empowering them to meet their family's most pressing needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Story */}
        <div className="py-16 bg-tigray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-tigray-dark mb-8">Our Impact: A Story of Renewed Hope</h2>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-6xl text-tigray-terracotta mb-4">"</div>
                <blockquote className="text-xl text-tigray-dark mb-6 italic">
                  The support ADS provided for my child, including nutritious meals and a safe space to play and learn, 
                  has brought so much joy and stability back to our lives after the conflict.
                </blockquote>
                <div className="text-tigray-dark/70">
                  <strong>— Abrehet Kahsay</strong><br/>
                  Program Beneficiary, Mekelle
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-tigray-terracotta">4,196</div>
                  <div className="text-tigray-dark">Children Reached</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-tigray-terracotta">3,684</div>
                  <div className="text-tigray-dark">Women Supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-tigray-dark mb-4">Program Resources</h2>
              <p className="text-lg text-tigray-dark/80">Download comprehensive materials about our Integrated Child Care Support program</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-tigray-light p-6 rounded-lg text-center">
                <FileText className="h-12 w-12 text-tigray-terracotta mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-tigray-dark mb-2">Fact Sheet</h3>
                <p className="text-tigray-dark/70 text-sm mb-4">
                  Comprehensive overview of our child care program, impact data, and success stories.
                </p>
                <a href="/resources/integrated-childcare-factsheet.pdf" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-tigray-terracotta hover:bg-tigray-terracotta/90 text-white font-semibold border-0">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </a>
              </div>

              <div className="bg-tigray-light p-6 rounded-lg text-center">
                <Presentation className="h-12 w-12 text-tigray-terracotta mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-tigray-dark mb-2">Presentation Slides</h3>
                <p className="text-tigray-dark/70 text-sm mb-4">
                  Ready-to-use presentation materials for partners, donors, and stakeholders.
                </p>
                <a href="/resources/integrated-childcare-presentation.pptx" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-tigray-terracotta hover:bg-tigray-terracotta/90 text-white font-semibold border-0">
                    <Download className="w-4 h-4 mr-2" />
                    Download PPT
                  </Button>
                </a>
              </div>

              <div className="bg-tigray-light p-6 rounded-lg text-center">
                <Video className="h-12 w-12 text-tigray-terracotta mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-tigray-dark mb-2">Video Content</h3>
                <p className="text-tigray-dark/70 text-sm mb-4">
                  Multimedia content showcasing the impact of our child care support program.
                </p>
                <a href="/resources/integrated-childcare-video.mp4" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-tigray-terracotta hover:bg-tigray-terracotta/90 text-white font-semibold border-0">
                    <Video className="w-4 h-4 mr-2" />
                    Watch Video
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 bg-tigray-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Get Involved</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Your support can provide a child with a nutritious meal, a safe space to heal, and the chance to learn again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button size="lg" className="bg-tigray-terracotta hover:bg-tigray-terracotta/90 text-white font-semibold border-0">
                  Donate Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-tigray-dark font-semibold bg-transparent">
                  Become a Partner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default IntegratedChildCare;
