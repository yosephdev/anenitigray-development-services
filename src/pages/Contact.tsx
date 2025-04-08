
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';

const Contact = () => {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-tigray-terracotta" />,
      title: language === 'en' ? 'Visit Us' : 'ብኽብረትኩም ዑደትና',
      details: language === 'en' 
        ? '123 Development Street, Mekelle, Tigray, Ethiopia' 
        : '123 ጎደና ልምዓት፣ መቐለ፣ ትግራይ፣ ኢትዮጵያ'
    },
    {
      icon: <Mail className="h-6 w-6 text-tigray-terracotta" />,
      title: language === 'en' ? 'Email Us' : 'ኢመይል ግበሩልና',
      details: 'info@ads-tigray.org'
    },
    {
      icon: <Phone className="h-6 w-6 text-tigray-terracotta" />,
      title: language === 'en' ? 'Call Us' : 'ደውሉልና',
      details: '+251 912 345 678'
    },
    {
      icon: <Clock className="h-6 w-6 text-tigray-terracotta" />,
      title: language === 'en' ? 'Office Hours' : 'ናይ ቢሮ ሰዓታት',
      details: language === 'en' 
        ? 'Monday - Friday: 9:00 AM - 5:00 PM' 
        : 'ሰኑይ - ዓርቢ፡ 9፡00 ንግሆ - 5፡00 ድሕሪ ቐትሪ'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <html lang={language} />
        <title>{t('contact')} - ADS</title>
        <meta name="description" content="Contact the Association for Development in Tigray. We'd love to hear from you!" />
      </Helmet>
      
      <Navbar />
      
      <div className="flex-grow">
        <div className="relative py-24 bg-tigray-dark">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{t('contact')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Get in touch with us - we would love to hear from you!' 
                : 'ኣዘራርቡና - ካባኹም ክንሰምዕ ብጣዕሚ ንፈቱ!'}
            </p>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-tigray-dark mb-6">
                  {language === 'en' ? 'Send us a Message' : 'መልእኽቲ ስደዱልና'}
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-tigray-dark mb-1">
                        {language === 'en' ? 'Your Name' : 'ስምኩም'}
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-tigray-sand rounded-md focus:ring-2 focus:ring-tigray-ochre focus:outline-none"
                        placeholder={language === 'en' ? 'Enter your name' : 'ስምኩም ኣእትዉ'}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-tigray-dark mb-1">
                        {language === 'en' ? 'Your Email' : 'ኢመይልኩም'}
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-tigray-sand rounded-md focus:ring-2 focus:ring-tigray-ochre focus:outline-none"
                        placeholder={language === 'en' ? 'Enter your email' : 'ኢመይልኩም ኣእትዉ'}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-tigray-dark mb-1">
                      {language === 'en' ? 'Subject' : 'ኣርእስቲ'}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-tigray-sand rounded-md focus:ring-2 focus:ring-tigray-ochre focus:outline-none"
                      placeholder={language === 'en' ? 'Enter subject' : 'ኣርእስቲ ኣእትዉ'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-tigray-dark mb-1">
                      {language === 'en' ? 'Message' : 'መልእኽቲ'}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-tigray-sand rounded-md focus:ring-2 focus:ring-tigray-ochre focus:outline-none"
                      placeholder={language === 'en' ? 'Enter your message' : 'መልእኽትኹም ኣእትዉ'}
                    ></textarea>
                  </div>
                  
                  <Button className="bg-tigray-terracotta hover:bg-opacity-90 px-6 py-3">
                    {language === 'en' ? 'Send Message' : 'መልእኽቲ ስደድ'}
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-tigray-dark mb-6">
                  {language === 'en' ? 'Contact Information' : 'ናይ ርክብ ሓበሬታ'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="p-5 bg-tigray-light rounded-lg">
                      <div className="flex items-center mb-3">
                        {info.icon}
                        <h3 className="ml-3 font-semibold text-tigray-dark">{info.title}</h3>
                      </div>
                      <p className="text-tigray-dark/80">{info.details}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 rounded-lg overflow-hidden h-64">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62197.92488851917!2d39.44657371840105!3d13.496690602046752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x166ae01975519959%3A0xaca910cfce48dbd5!2sMekelle!5e0!3m2!1sen!2set!4v1650987070288!5m2!1sen!2set" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ADS Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
