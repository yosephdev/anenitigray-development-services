import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Download, FileText, Users, BookOpen, Presentation, Video } from 'lucide-react';

const AssetProgram = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="relative py-24 bg-tigray-dark">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
            backgroundImage: "url('/images/ADS-12.jpg')"
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">ASSET Program</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Aspiring School Society Empowerment in Tigray - Empowering Educators, Rebuilding the Future
            </p>
          </div>
        </div>

        {/* Crisis Context */}
        <div className="py-16 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-red-800 mb-6">An Education System in Crisis</h2>
              <p className="text-lg text-red-700 mb-8">
                The future of Tigray is in its classrooms. But with over 9,600 schools damaged during the conflict, 
                the education system is facing a monumental challenge. At the heart of this challenge are the teachers—dedicated 
                professionals who have endured immense hardship.
              </p>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
                <div className="text-4xl font-bold text-red-600 mb-2">9,600+</div>
                <div className="text-red-700">Schools damaged during the conflict</div>
                <p className="text-red-600 text-sm mt-2">
                  Without support for teachers, the recovery of an entire generation of students is at risk.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Response */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-tigray-dark mb-4">Our Response: Investing in the Foundation of Education</h2>
              <p className="text-lg text-tigray-dark/80 max-w-3xl mx-auto">
                The ASSET program is built on a simple but powerful premise: to rebuild education, we must first support our educators. 
                At Atse-Yohannes Primary School, we provide comprehensive support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white text-xl">🍞</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-tigray-dark mb-2">Essential Meal Support</h3>
                      <p className="text-tigray-dark/70">
                        We provide teachers with daily meals (bread and tea), a simple but critical intervention that offers 
                        sustenance and respects their dignity, allowing them to focus their energy on their students.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <BookOpen className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-tigray-dark mb-2">Vital Skills Training</h3>
                      <p className="text-tigray-dark/70">
                        We offer professional development and training to enhance their skills, equipping them with the tools 
                        they need to manage classrooms affected by trauma and educational disruption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-tigray-light p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-tigray-dark mb-4">Program Location</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-tigray-dark mb-2">Atse-Yohannes Primary School</h4>
                  <p className="text-tigray-dark/70 text-sm mb-4">Mekelle, Tigray</p>
                  <div className="border-t pt-4">
                    <div className="text-2xl font-bold text-tigray-terracotta">25+</div>
                    <div className="text-tigray-dark text-sm">Teachers supported daily</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Story */}
        <div className="py-16 bg-tigray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-tigray-dark mb-8">Our Impact: A Teacher's Perspective</h2>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-6xl text-tigray-terracotta mb-4">"</div>
                <blockquote className="text-xl text-tigray-dark mb-6 italic">
                  Receiving daily meals and training through the ASSET program has been a lifeline. 
                  It allows us to focus on teaching and supporting our students effectively.
                </blockquote>
                <div className="text-tigray-dark/70">
                  <strong>— Teacher Berhane Woldu</strong><br/>
                  Program Beneficiary, Mekelle
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mt-8 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Strategic Investment</h3>
                <p className="text-green-700">
                  The ASSET program is more than just aid; it is a strategic investment in the human infrastructure 
                  of Tigray's education system. By ensuring teachers are supported, we create a ripple effect that 
                  benefits hundreds of students and the wider community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-tigray-dark mb-4">Program Resources</h2>
              <p className="text-lg text-tigray-dark/80">Access comprehensive materials about the ASSET teacher support program</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-tigray-light p-6 rounded-lg text-center">
                <FileText className="h-12 w-12 text-tigray-terracotta mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-tigray-dark mb-2">Program Fact Sheet</h3>
                <p className="text-tigray-dark/70 text-sm mb-4">
                  Detailed information about ASSET program implementation, impact metrics, and teacher testimonials.
                </p>
                <Button className="bg-tigray-terracotta hover:bg-tigray-terracotta/90">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>

              <div className="bg-tigray-light p-6 rounded-lg text-center">
                <Users className="h-12 w-12 text-tigray-terracotta mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-tigray-dark mb-2">Training Materials</h3>
                <p className="text-tigray-dark/70 text-sm mb-4">
                  Professional development resources and training modules for educator empowerment.
                </p>
                <Button className="bg-tigray-terracotta hover:bg-tigray-terracotta/90">
                  <Download className="w-4 h-4 mr-2" />
                  Access Materials
                </Button>
              </div>

              <div className="bg-tigray-light p-6 rounded-lg text-center">
                <BookOpen className="h-12 w-12 text-tigray-terracotta mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-tigray-dark mb-2">Implementation Guide</h3>
                <p className="text-tigray-dark/70 text-sm mb-4">
                  Step-by-step guide for implementing teacher support programs in crisis-affected areas.
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
              Your support can provide a teacher with a daily meal and the training they need to guide their students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button size="lg" className="bg-tigray-terracotta hover:bg-tigray-terracotta/90 text-white font-semibold border-0">
                  Support Teachers
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-tigray-dark font-semibold bg-transparent">
                  Partner with Us
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

export default AssetProgram;
