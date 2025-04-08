
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProgramsSection from '../components/ProgramsSection';
import { useLanguage } from '../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const Programs = () => {
  const { t, language } = useLanguage();

  const programDetails = [
    {
      id: 'food-security',
      title: language === 'en' ? 'Food Security' : 'ውሕስነት ምግቢ',
      description: language === 'en' 
        ? 'Our food security programs aim to ensure that all families in Tigray have reliable access to nutritious food through sustainable agricultural practices, community gardens, improved seed varieties, and training in modern farming techniques.'
        : 'መደባት ውሕስነት ምግቢና ኩለን ስድራቤታት ኣብ ትግራይ ብቐጻሊ ናብ ዘመናዊ ሕርሻዊ ተግባራት፣ ናይ ማሕበረሰብ ጀኔናታት፣ ዝተመሓየሹ ዓይነታት ዘርኢ፣ ከምኡውን ስልጠና ኣብ ዘመናዊ ሜላታት ሕርሻ ብምጥቃም ናብ ዘመናዊ ሕርሻ ክበጽሓ ይሽቶ።',
      image: 'https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80'
    },
    {
      id: 'clean-water',
      title: language === 'en' ? 'Clean Water' : 'ጽሩይ ማይ',
      description: language === 'en'
        ? 'Our clean water projects include well drilling, installation of water purification systems, and education on water sanitation practices to ensure communities have safe, clean drinking water and reduced waterborne illnesses.'
        : 'ፕሮጀክትታት ጽሩይ ማይና ምድርባይ ዒላ፣ ምትካል ሲስተማት ምጽራይ ማይ፣ ከምኡውን ኣብ ናይ ጽሬት ማይ ብዛዕባ ዘለዉ ተግባራት ትምህርቲ ምሃብ ከም ዝመጹ የረጋግጽ ማሕበረሰባት ውሕስነት ንጹህ ዝስተ ማይ ኣለዎም ከምኡውን ብማይ ዝመጹ ሕማማት ከም ዝንከዩ የረጋግጽ።'
    },
    {
      id: 'education',
      title: language === 'en' ? 'Education' : 'ትምህርቲ',
      description: language === 'en'
        ? 'Our education initiatives focus on building and improving schools, providing educational supplies, training teachers, and offering scholarships to ensure quality education for children throughout the Tigray region.'
        : 'ተበግሶታት ትምህርትና ኣብ ምህናጽን ምምሕያሽን ቤት ትምህርትታት፣ ናውቲ ትምህርቲ ምቕራብ፣ መምህራን ምስልጣን፣ ከምኡውን ኣብ መላእ ዞባ ትግራይ ንቆልዑት ናይ ትምህርቲ ጽፈት ውሕስነት መንገዲ ስኮላርሺፕ ምሃብ።'
    },
    {
      id: 'healthcare',
      title: language === 'en' ? 'Healthcare' : 'ክንክን ጥዕና',
      description: language === 'en'
        ? 'Our healthcare programs establish medical clinics, provide essential medications, train community health workers, and conduct health education campaigns to improve access to quality healthcare services.'
        : 'መደባት ክንክን ጥዕናና ናይ ሕክምና ክሊኒካት ክቕውሙ፣ ኣገደስቲ መድሃኒታት ክህቡ፣ ናይ ማሕበረሰብ ሰራሕተኛታት ጥዕና ክስልጥኑ፣ ከምኡውን ናብ ኣገልግሎታት ጽፈት ሕክምና ንምምሕያሽ ናይ ትምህርቲ ጥዕና መደባት ከካይዱ።'
    },
    {
      id: 'economic-empowerment',
      title: language === 'en' ? 'Economic Empowerment' : 'ቁጠባዊ ምብርታዕ',
      description: language === 'en'
        ? 'Our economic empowerment programs provide microloans, business skills training, and market access support to help individuals and families establish sustainable livelihoods and build financial independence.'
        : 'መደባት ቁጠባዊ ምብርታዕና ንውልቀ ሰባትን ስድራቤታትን ቀጻሊ መነባብሮኦም ንምትካልን ናይ ገንዘብ ናጽነት ንምህናጽን ንምሕጋዝ፡ ንኡሳን ልቓሓት፣ ስልጠና ናይ ንግዲ ክእለታት፣ ከምኡውን ናይ ዕዳጋ መእተዊ ሓገዝ ይህቡ።'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <html lang={language} />
        <title>{t('programs')} - ADS</title>
        <meta name="description" content="Creating sustainable solutions for lasting change in Tigray communities." />
      </Helmet>
      <Navbar />
      
      <div className="flex-grow">
        <div className="relative py-24 bg-tigray-dark">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1526732928503-5c58dd0df667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{t('programs.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('programs.subtitle')}
            </p>
          </div>
        </div>

        <ProgramsSection />

        {/* Detailed Programs Section */}
        <div className="py-16 bg-tigray-sand/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {programDetails.map((program, index) => (
                <div id={program.id} key={index} className="scroll-mt-24">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                    <div className="w-full md:w-1/2">
                      <img 
                        src={program.image || `https://images.unsplash.com/photo-${1520052205864 + index * 10000}-92d242b3a76b?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80`} 
                        alt={program.title}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <h2 className="text-3xl font-bold text-tigray-dark mb-4">{program.title}</h2>
                      <p className="text-tigray-dark/80 text-lg mb-6">{program.description}</p>
                      <div className="flex flex-wrap gap-3">
                        <span className="text-sm bg-tigray-terracotta/10 text-tigray-terracotta px-3 py-1 rounded-full">
                          {language === 'en' ? 'Sustainable' : 'ዘላቒ'}
                        </span>
                        <span className="text-sm bg-tigray-terracotta/10 text-tigray-terracotta px-3 py-1 rounded-full">
                          {language === 'en' ? 'Community-led' : 'ብማሕበረሰብ ዝምራሕ'}
                        </span>
                        <span className="text-sm bg-tigray-terracotta/10 text-tigray-terracotta px-3 py-1 rounded-full">
                          {language === 'en' ? 'Impact-driven' : 'ብውጽኢት ዝምራሕ'}
                        </span>
                      </div>
                    </div>
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

export default Programs;
