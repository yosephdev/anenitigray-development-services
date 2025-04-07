
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <div className="relative py-24 bg-tigray-dark">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')"
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">About ADS</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We are committed to sustainable development and community empowerment in Tigray.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-1 w-20 bg-tigray-terracotta mb-6"></div>
              <h2 className="text-3xl font-bold text-tigray-dark mb-6">Our Mission</h2>
              <p className="text-tigray-dark/80 mb-6">
                ADS is dedicated to empowering communities in Tigray through sustainable development initiatives. Our focus areas include education, healthcare, economic empowerment, and food security. We believe in building lasting solutions that help communities thrive independently.
              </p>
              <p className="text-tigray-dark/80 mb-6">
                Our approach emphasizes community participation, local leadership, and sustainable practices. By working closely with community members, we ensure that our programs address real needs and create lasting positive change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="bg-tigray-light p-4 rounded-lg flex-1">
                  <h3 className="font-semibold text-lg mb-2">Established</h3>
                  <p className="text-4xl font-bold text-tigray-terracotta">2010</p>
                </div>
                <div className="bg-tigray-light p-4 rounded-lg flex-1">
                  <h3 className="font-semibold text-lg mb-2">Communities Served</h3>
                  <p className="text-4xl font-bold text-tigray-terracotta">120+</p>
                </div>
                <div className="bg-tigray-light p-4 rounded-lg flex-1">
                  <h3 className="font-semibold text-lg mb-2">Team Members</h3>
                  <p className="text-4xl font-bold text-tigray-terracotta">45</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                alt="Team members working in Tigray"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-tigray-terracotta rounded-lg hidden md:flex items-center justify-center">
                <p className="text-white font-bold text-center p-4">Committed to Sustainable Change</p>
              </div>
            </div>
          </div>
          
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-tigray-dark mb-4">Our Values</h2>
              <p className="text-tigray-dark/80 max-w-3xl mx-auto">
                These core principles guide our work and decision-making process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-tigray-terracotta hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-tigray-dark mb-3">Community Ownership</h3>
                <p className="text-tigray-dark/70">
                  We believe that sustainable development must be led by the communities themselves. We facilitate, but communities drive the change.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-tigray-terracotta hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-tigray-dark mb-3">Sustainability</h3>
                <p className="text-tigray-dark/70">
                  Our programs are designed to create lasting impact, with solutions that communities can maintain independently in the long term.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-tigray-terracotta hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-tigray-dark mb-3">Transparency</h3>
                <p className="text-tigray-dark/70">
                  We are committed to clear, open communication with our communities, partners, and supporters about our work and its impact.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-tigray-terracotta hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-tigray-dark mb-3">Innovation</h3>
                <p className="text-tigray-dark/70">
                  We continuously seek better ways to address challenges, embracing new ideas and technologies that can enhance our impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
