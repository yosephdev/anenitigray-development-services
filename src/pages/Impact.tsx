
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const Impact = () => {
  const { t, language } = useLanguage();

  const impactStats = [
    { 
      number: '10,000+', 
      label: language === 'en' ? 'Families Supported' : 'ዝተሓገዛ ስድራቤታት',
      description: language === 'en' 
        ? 'Through our comprehensive support programs, we have helped over 10,000 families achieve greater stability and self-sufficiency.'
        : 'ኣብ መደባት ሓገዝና፡ ልዕሊ 10,000 ስድራቤታት ንዝበለጸ ርግኣትን ውሕስነትን ክበጽሓ ሓጊዝና።'
    },
    { 
      number: '25', 
      label: language === 'en' ? 'Schools Built' : 'ዝተሃነጻ ቤት ትምህርቲ',
      description: language === 'en' 
        ? 'We have constructed 25 schools across the Tigray region, providing educational opportunities for thousands of children.'
        : 'ኣብ መላእ ትግራይ 25 ኣብያተ ትምህርቲ ሃኒጽና፣ ንኣሽሓት ህጻናት ናይ ትምህርቲ ዕድል ኣመቻቺና።'
    },
    { 
      number: '50', 
      label: language === 'en' ? 'Clean Water Wells' : 'ጽሩይ ማይ ዒላታት',
      description: language === 'en'
        ? 'Our clean water initiatives have established 50 wells, bringing safe drinking water to communities and reducing waterborne illnesses.'
        : 'ተበግሶታት ጽሩይ ማይና 50 ዒላታት ጽሩይ ማይ ኣቕሚጠን፣ ንማሕበረሰብ ውሑስ ማይ ብምቕራብ ብማይ ዝመጹ ሕማማት ከነጉድል ክኢልና።'
    },
    { 
      number: '15', 
      label: language === 'en' ? 'Healthcare Clinics' : 'ናይ ጥዕና ክሊኒካት',
      description: language === 'en'
        ? 'We have established 15 healthcare clinics providing essential medical services, vaccinations, and maternal care.'
        : 'ኣገደስቲ ሕክምናዊ ኣገልግሎታት፣ ክታበታትን ናይ ኣደ ክንክንን ዝህባ 15 ክሊኒካት ጥዕና ኣቚምና።'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <html lang={language} />
        <title>{t('impact')} - ADS</title>
        <meta name="description" content="Measuring our impact and achievements in Tigray communities through sustainable development initiatives." />
      </Helmet>
      
      <Navbar />
      
      <div className="flex-grow">
        <div className="relative py-24 bg-tigray-dark">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{language === 'en' ? 'Our Impact' : 'ውጽኢታትና'}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Transforming lives and communities through sustainable development initiatives' 
                : 'ብቀጻሊ ናይ ምዕባለ ስጉምትታት ሂወት ሰባትን ማሕበረሰባትን ምልዋጥ'}
            </p>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tigray-dark mb-4">
                {language === 'en' ? 'Impact in Numbers' : 'ውጽኢት ብቁጽሪ'}
              </h2>
              <p className="text-tigray-dark/80 max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'Measuring our progress and commitment to Tigray\'s sustainable development' 
                  : 'ንቀጻሊ ምዕባለ ትግራይ ዘለና መለክዒ ዕቤትን ቃልን'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="bg-tigray-light p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-tigray-terracotta mb-2">{stat.number}</div>
                  <h3 className="text-xl font-semibold text-tigray-dark mb-2">{stat.label}</h3>
                  <p className="text-tigray-dark/80">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-16 bg-tigray-sand/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tigray-dark mb-4">
                {language === 'en' ? 'Sustainable Development Goals' : 'ዕላማታት ቀጻሊ ምዕባለ'}
              </h2>
              <p className="text-tigray-dark/80 max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'Our work contributes to multiple UN Sustainable Development Goals' 
                  : 'ስራሕና ንብዙሓት ዕላማታት ቀጻሊ ምዕባለ ናይ ሕቡራት መንግስታት የበርክት'}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { number: '1', name: language === 'en' ? 'No Poverty' : 'ድኽነት የለን' },
                { number: '2', name: language === 'en' ? 'Zero Hunger' : 'ጥሜት ዜሮ' },
                { number: '3', name: language === 'en' ? 'Good Health' : 'ጽቡቕ ጥዕና' },
                { number: '4', name: language === 'en' ? 'Quality Education' : 'ጽቡቕ ትምህርቲ' },
                { number: '5', name: language === 'en' ? 'Gender Equality' : 'ማዕርነት ጾታ' },
                { number: '6', name: language === 'en' ? 'Clean Water' : 'ጽሩይ ማይ' },
                { number: '8', name: language === 'en' ? 'Economic Growth' : 'ቁጠባዊ ዕቤት' },
                { number: '10', name: language === 'en' ? 'Reduced Inequalities' : 'ምቕናስ ዘይማዕርነት' }
              ].map((goal, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 rounded-full bg-tigray-terracotta flex items-center justify-center text-white font-bold mr-4">
                    {goal.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-tigray-dark">{goal.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Impact;
