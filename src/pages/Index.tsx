
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutADSSection from '../components/AboutADSSection';
import ImpactStats from '../components/ImpactStats';
import ProgramsSection from '../components/ProgramsSection';
import PartnersSection from '../components/PartnersSection';
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
        <title>ADS - Emergency Response in Tigray | Urgent Humanitarian Aid</title>
        <meta name="description" content="With 9 million people requiring urgent food aid and famine conditions spreading, ADS provides life-saving support to vulnerable families in Tigray. Your donation is a direct defense against hunger." />
      </Helmet>
      <Navbar />
      <Hero />
      <AboutADSSection />
      <ImpactStats />
      <ProgramsSection />
      <PartnersSection />
      <StoriesSection />
      <DonationSection />
      <Footer />
    </div>
  );
};

export default Index;
