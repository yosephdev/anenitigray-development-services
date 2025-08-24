import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Download, FileText, Users, Award, Target, Presentation, Video } from 'lucide-react';

const CapacityBuilding = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="relative py-24 bg-tigray-dark">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
            backgroundImage: "url('/images/ADS-16.jpg')"
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Capacity Building Program</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Investing in Community-Led Recovery - Training Local Leaders for Sustainable Impact
            </p>
          </div>
        </div>

        {/* Challenge Context */}
        <div className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-yellow-800 mb-6">The Need for Sustainable, Local Solutions</h2>
              <p className="text-lg text-yellow-700 mb-8">
                The scale of the humanitarian crisis in Tigray is immense, and the psychological wounds of the conflict run deep. 
                Large-scale aid is crucial, but long-term recovery must be led by the community itself. There is a critical need 
                for trained, local volunteers who can provide culturally sensitive psychosocial support.
              </p>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-yellow-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">The Challenge</h3>
                    <p className="text-yellow-700 text-sm">
                      Psychological trauma affects entire communities, but international aid workers often lack 
                      the cultural context and language skills needed for effective psychosocial support.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">The Solution</h3>
                    <p className="text-yellow-700 text-sm">
                      Train local community members to become the frontline responders, creating sustainable 
                      support systems that outlast any single intervention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Response */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-tigray-dark mb-4">Our Response: Training a Network of Local Responders</h2>
              <p className="text-lg text-tigray-dark/80 max-w-3xl mx-auto">
                Our Capacity Building program is focused on creating a sustainable, grassroots support system. 
                In partnership with the experts at Merho Training and Consultancy, we empower local community members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Users className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-tigray-dark mb-2">Training Volunteers</h3>
                      <p className="text-tigray-dark/70">
                        We provide comprehensive training on how to establish and manage Child-Friendly Spaces (CFS), 
                        creating safe environments where children can heal and play.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Award className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-tigray-dark mb-2">Psychosocial Support Skills</h3>
                      <p className="text-tigray-dark/70">
                        We equip volunteers with fundamental skills needed to provide first-line psychosocial support 
                        to children affected by conflict, helping them identify signs of trauma and create nurturing environments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-tigray-light p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-tigray-dark mb-4">Partnership</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-tigray-terracotta rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">MTC</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-tigray-dark">Merho Training and Consultancy</h4>
                      <p className="text-tigray-dark/70 text-sm">Expert training partner</p>
                    </div>
                  </div>
                  <p className="text-tigray-dark/70 text-sm">
                    Our collaboration with Merho Training and Consultancy ensures that our volunteers receive 
                    world-class training in psychosocial support methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Training Components */}
        <div className="py-16 bg-tigray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-tigray-dark mb-4">Training Components</h2>
              <p className="text-lg text-tigray-dark/80">Comprehensive curriculum for community volunteer development</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-12 w-12 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🏠</span>
                </div>
                <h3 className="font-semibold text-tigray-dark mb-2">Child-Friendly Spaces</h3>
                <p className="text-tigray-dark/70 text-sm">
                  How to establish and maintain safe spaces for children to play, learn, and heal
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-12 w-12 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🧠</span>
                </div>
                <h3 className="font-semibold text-tigray-dark mb-2">Trauma Recognition</h3>
                <p className="text-tigray-dark/70 text-sm">
                  Identifying signs of trauma and distress in conflict-affected children
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-12 w-12 mx-auto bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl">💬</span>
                </div>
                <h3 className="font-semibold text-tigray-dark mb-2">Communication Skills</h3>
                <p className="text-tigray-dark/70 text-sm">
                  Age-appropriate communication techniques for supporting children's emotional needs
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-12 w-12 mx-auto bg-tigray-terracotta rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🤝</span>
                </div>
                <h3 className="font-semibold text-tigray-dark mb-2">Community Mobilization</h3>
                <p className="text-tigray-dark/70 text-sm">
                  Engaging families and communities in supporting children's recovery
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact: The Multiplier Effect */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-tigray-dark mb-8">Our Impact: The Multiplier Effect</h2>
              
              <div className="bg-green-50 p-8 rounded-lg shadow-lg border-l-4 border-green-500">
                <p className="text-lg text-green-700 mb-6">
                  The impact of this program extends far beyond the individuals we train. Every volunteer who completes 
                  our program becomes a resource for their entire community. They are equipped to support dozens of children, 
                  creating a powerful multiplier effect that builds local resilience from the ground up.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">1</div>
                    <div className="text-green-700 text-sm">Trained Volunteer</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Target className="text-green-500" size={32} />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">50+</div>
                    <div className="text-green-700 text-sm">Children Supported</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8 border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Sustainable Impact</h3>
                <p className="text-blue-700">
                  This approach ensures that the capacity to respond to community needs remains long after 
                  a specific project ends, creating lasting change from within the community itself.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Training Statistics */}
        <div className="py-16 bg-tigray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-tigray-dark mb-4">Training Impact</h2>
              <p className="text-lg text-tigray-dark/80">Building local capacity for sustainable community support</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-tigray-terracotta">45+</div>
                <div className="text-tigray-dark">Volunteers Trained</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-tigray-terracotta">8</div>
                <div className="text-tigray-dark">Child-Friendly Spaces</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-tigray-terracotta">2,200+</div>
                <div className="text-tigray-dark">Children Reached</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-tigray-terracotta">12</div>
                <div className="text-tigray-dark">Communities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-tigray-dark mb-4">Program Resources</h2>
              <p className="text-lg text-tigray-dark/80">Access comprehensive materials about our Capacity Building program</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-tigray-light p-6 rounded-lg text-center">
                <FileText className="h-12 w-12 text-tigray-terracotta mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-tigray-dark mb-2">Training Manual</h3>
                <p className="text-tigray-dark/70 text-sm mb-4">
                  Comprehensive guide for volunteer training in psychosocial support and child-friendly space management.
                </p>
                <Button className="bg-tigray-terracotta hover:bg-tigray-terracotta/90">
                  <Download className="w-4 h-4 mr-2" />
                  Download Manual
                </Button>
              </div>

              <div className="bg-tigray-light p-6 rounded-lg text-center">
                <Users className="h-12 w-12 text-tigray-terracotta mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-tigray-dark mb-2">Volunteer Handbook</h3>
                <p className="text-tigray-dark/70 text-sm mb-4">
                  Essential reference guide for trained volunteers working in Child-Friendly Spaces.
                </p>
                <Button className="bg-tigray-terracotta hover:bg-tigray-terracotta/90">
                  <Download className="w-4 h-4 mr-2" />
                  Access Handbook
                </Button>
              </div>

              <div className="bg-tigray-light p-6 rounded-lg text-center">
                <Award className="h-12 w-12 text-tigray-terracotta mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-tigray-dark mb-2">Best Practices Guide</h3>
                <p className="text-tigray-dark/70 text-sm mb-4">
                  Evidence-based practices for community-led psychosocial support in post-conflict settings.
                </p>
                <Button className="bg-tigray-terracotta hover:bg-tigray-terracotta/90">
                  <Download className="w-4 h-4 mr-2" />
                  Download Guide
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 bg-tigray-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Get Involved</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Your support can fund the training of a local volunteer, empowering them to help heal their own community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button size="lg" className="bg-tigray-terracotta hover:bg-tigray-terracotta/90 text-white font-semibold border-0">
                  Fund Volunteer Training
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-tigray-dark font-semibold bg-transparent">
                  Partner with Training Program
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

export default CapacityBuilding;
