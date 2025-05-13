
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import ProgramsSection from '../components/ProgramsSection';
import StoriesSection from '../components/StoriesSection';
import DonationSection from '../components/DonationSection';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <html lang={language} />
        <title>ADS - Anenitigray Development Services</title>
        <meta name="description" content="ADS is an NGO empowering Tigray through sustainable development in education, healthcare, economic empowerment, and food security." />
      </Helmet>
      <Navbar />
      <Hero />
      <ImpactStats />
      <ProgramsSection />
      <StoriesSection />
      <DonationSection />
      <Footer />
    </div>
  );
};

export default Index;
