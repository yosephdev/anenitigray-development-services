import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Heart, Truck, Home, Download, FileText, Presentation, Video, Package, DollarSign } from 'lucide-react';

const RapidRelief = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="relative py-24 bg-tigray-dark">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
            backgroundImage: "url('/images/ADS-7.jpg')"
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Rapid Relief Support</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Dignity and Survival for Displaced Families - Immediate Aid When It Matters Most
            </p>
          </div>
        </div>

        {/* Crisis Context */}
        <div className="py-16 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-red-800 mb-6">The Immense Scale of Displacement</h2>
              <p className="text-lg text-red-700 mb-8">
                The conflict in Tigray has created a massive displacement crisis, with approximately 1 million people 
                still unable to return home. These Internally Displaced Persons (IDPs)—mostly women, children, 
                and individuals with disabilities—are living in temporary sites, having fled with nothing.
              </p>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold text-red-600 mb-2">1M+</div>
                    <div className="text-red-700">People still displaced</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-red-600 mb-2">0</div>
                    <div className="text-red-700">Belongings when they fled</div>
                  </div>
                </div>
                <p className="text-red-600 text-sm mt-4">
                  They face a daily struggle for food, shelter, and basic necessities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Response */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-tigray-dark mb-4">Our Response: Delivering Aid Where It's Needed Most</h2>
              <p className="text-lg text-tigray-dark/80 max-w-3xl mx-auto">
                ADS's Rapid Relief Support program is designed to provide immediate, life-saving aid to the most 
                vulnerable IDPs across Tigray. We distribute essential support through three key channels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-tigray-light p-8 rounded-lg text-center">
                <div className="h-16 w-16 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">🍽️</span>
                </div>
                <h3 className="text-xl font-semibold text-tigray-dark mb-4">Food Items (FI)</h3>
                <p className="text-tigray-dark/70">
                  Emergency food supplies to prevent hunger and malnutrition among displaced families who have 
                  lost access to their traditional food sources.
                </p>
              </div>

              <div className="bg-tigray-light p-8 rounded-lg text-center">
                <Package className="h-16 w-16 mx-auto text-blue-500 mb-6" />
                <h3 className="text-xl font-semibold text-tigray-dark mb-4">Non-Food Items (NFI)</h3>
                <p className="text-tigray-dark/70">
                  Essential household goods such as blankets, cooking materials, and hygiene kits that restore 
                  a measure of dignity and self-sufficiency to displaced families.
                </p>
              </div>

              <div className="bg-tigray-light p-8 rounded-lg text-center">
                <DollarSign className="h-16 w-16 mx-auto text-tigray-terracotta mb-6" />
                <h3 className="text-xl font-semibold text-tigray-dark mb-4">Cash Assistance</h3>
                <p className="text-tigray-dark/70">
                  Direct and flexible cash support that empowers families to purchase what they need most, 
                  from medicine to food staples, giving them agency in their recovery.
                </p>
              </div>
            </div>

            {/* Target Beneficiaries */}
            <div className="mt-16 bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-tigray-dark text-center mb-8">Priority Beneficiaries</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="h-12 w-12 mx-auto bg-pink-500 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-xl">👩</span>
                  </div>
                  <h4 className="font-semibold text-tigray-dark">Women</h4>
                  <p className="text-tigray-dark/70 text-sm">Female-headed households and vulnerable women</p>
                </div>
                <div className="text-center">
                  <div className="h-12 w-12 mx-auto bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-xl">👶</span>
                  </div>
                  <h4 className="font-semibold text-tigray-dark">Children</h4>
                  <p className="text-tigray-dark/70 text-sm">Unaccompanied minors and child-headed households</p>
                </div>
                <div className="text-center">
                  <div className="h-12 w-12 mx-auto bg-purple-500 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-xl">♿</span>
                  </div>
                  <h4 className="font-semibold text-tigray-dark">People with Disabilities</h4>
                  <p className="text-tigray-dark/70 text-sm">Individuals requiring specialized support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Story */}
        <div className="py-16 bg-tigray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-tigray-dark mb-8">Our Impact: A Critical Lifeline</h2>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-6xl text-tigray-terracotta mb-4">"</div>
                <blockquote className="text-xl text-tigray-dark mb-6 italic">
                  When we fled our village with nothing, ADS gave us dignity. The food items and non-food items 
                  helped us survive until we could rebuild. We are one of millions displaced, but we felt seen.
                </blockquote>
                <div className="text-tigray-dark/70">
                  <strong>— Fatima Ali</strong><br/>
                  Program Beneficiary, IDP Camp, Mekelle
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-tigray-terracotta">3,861</div>
                  <div className="text-tigray-dark">IDPs Assisted</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-tigray-terracotta">1,200+</div>
                  <div className="text-tigray-dark">Households Reached</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-tigray-terracotta">15+</div>
                  <div className="text-tigray-dark">Distribution Sites</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Distribution Process */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-tigray-dark mb-4">How We Deliver Aid</h2>
              <p className="text-lg text-tigray-dark/80 max-w-3xl mx-auto">
                Our distribution process ensures aid reaches the most vulnerable families efficiently and with dignity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="h-12 w-12 mx-auto bg-tigray-terracotta rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold text-tigray-dark mb-2">Identify</h3>
                <p className="text-tigray-dark/70 text-sm">Locate vulnerable IDP families through community networks</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 mx-auto bg-tigray-terracotta rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold text-tigray-dark mb-2">Assess</h3>
                <p className="text-tigray-dark/70 text-sm">Evaluate specific needs and prioritize most urgent cases</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 mx-auto bg-tigray-terracotta rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold text-tigray-dark mb-2">Distribute</h3>
                <p className="text-tigray-dark/70 text-sm">Deliver aid packages with respect and cultural sensitivity</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 mx-auto bg-tigray-terracotta rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="font-semibold text-tigray-dark mb-2">Follow-up</h3>
                <p className="text-tigray-dark/70 text-sm">Monitor impact and provide ongoing support as needed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="py-16 bg-tigray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-tigray-dark mb-4">Program Resources</h2>
              <p className="text-lg text-tigray-dark/80">Access comprehensive materials about our Rapid Relief Support program</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg text-center shadow-md">
                <FileText className="h-12 w-12 text-tigray-terracotta mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-tigray-dark mb-2">Relief Program Fact Sheet</h3>
                <p className="text-tigray-dark/70 text-sm mb-4">
                  Comprehensive overview of our emergency response operations and distribution methods.
                </p>
                <Button className="bg-tigray-terracotta hover:bg-tigray-terracotta/90">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg text-center shadow-md">
                <Package className="h-12 w-12 text-tigray-terracotta mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-tigray-dark mb-2">Distribution Guidelines</h3>
                <p className="text-tigray-dark/70 text-sm mb-4">
                  Best practices for emergency aid distribution in displacement settings.
                </p>
                <Button className="bg-tigray-terracotta hover:bg-tigray-terracotta/90">
                  <Download className="w-4 h-4 mr-2" />
                  Access Guide
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg text-center shadow-md">
                <DollarSign className="h-12 w-12 text-tigray-terracotta mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-tigray-dark mb-2">Cash Assistance Protocol</h3>
                <p className="text-tigray-dark/70 text-sm mb-4">
                  Framework for dignified and effective cash transfer programming.
                </p>
                <Button className="bg-tigray-terracotta hover:bg-tigray-terracotta/90">
                  <Download className="w-4 h-4 mr-2" />
                  Download Protocol
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
              Your donation can provide a displaced family with an emergency relief kit containing food and essential supplies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button size="lg" className="bg-tigray-terracotta hover:bg-tigray-terracotta/90 text-white font-semibold border-0">
                  Support Emergency Relief
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-tigray-dark font-semibold bg-transparent">
                  Sponsor a Family Kit
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

export default RapidRelief;
