
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProgramsSection from '../components/ProgramsSection';
import { useLanguage } from '../contexts/LanguageContext';

const Programs = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <div className="relative py-24 bg-tigray-dark">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1526732928503-5c58dd0df667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Our Programs</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Creating sustainable solutions for lasting change in Tigray communities.
            </p>
          </div>
        </div>

        <ProgramsSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Programs;
