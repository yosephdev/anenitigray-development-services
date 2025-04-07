
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import ProgramsSection from '../components/ProgramsSection';
import StoriesSection from '../components/StoriesSection';
import DonationSection from '../components/DonationSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
