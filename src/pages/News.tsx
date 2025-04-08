
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const News = () => {
  const { t, language } = useLanguage();

  const newsItems = [
    {
      title: language === 'en' ? 'New Clean Water Project Launched' : 'ሓዲሽ መደብ ጽሩይ ማይ ተጀሚሩ',
      date: language === 'en' ? 'April 2, 2025' : '2 መጋቢት 2017 ዓ.ም.',
      image: 'https://images.unsplash.com/photo-1581152309586-dfbc42078079?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      summary: language === 'en' 
        ? 'ADS has launched a new initiative to bring clean water to five villages in western Tigray, benefiting over 2,000 residents.' 
        : 'ADS ንልዕሊ 2,000 ነበርቲ ተጠቀምቲ ዝኾኑ ንሓሙሽተ ዓድታት ምዕራብ ትግራይ ጽሩይ ማይ ንምምጻእ ሓዲሽ ተበግሶ ጀሚሩ።',
      category: language === 'en' ? 'Clean Water' : 'ጽሩይ ማይ'
    },
    {
      title: language === 'en' ? 'Annual Fundraising Gala Raises Record Amount' : 'ዓመታዊ ናይ ገንዘብ ምትእኽኻብ መደብ ሪኮርድ ዝሰበረ መጠን ኣዋህሊሉ',
      date: language === 'en' ? 'March 15, 2025' : '15 የካቲት 2017 ዓ.ም.',
      image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      summary: language === 'en' 
        ? 'The annual ADS fundraising gala in Addis Ababa raised over 5 million birr for education and healthcare projects in Tigray.' 
        : 'ኣብ ኣዲስ ኣበባ ዝተኻየደ ዓመታዊ ናይ ADS ፈንድ ምትእኽኻብ ልዕሊ 5 ሚሊዮን ቅርሺ ንትምህርትን ጥዕናን ፕሮጀክትታት ኣብ ትግራይ ኣዋህሊሉ።',
      category: language === 'en' ? 'Fundraising' : 'ገንዘብ ምትእኽኻብ'
    },
    {
      title: language === 'en' ? 'New School Opens in Adwa' : 'ኣብ ዓድዋ ሓዳስ ቤት ትምህርቲ ተኸፊቱ',
      date: language === 'en' ? 'February 20, 2025' : '20 ጥሪ 2017 ዓ.ም.',
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
      summary: language === 'en' 
        ? 'ADS has opened a new primary school in Adwa, equipped with modern facilities and resources for 500 students.' 
        : 'ADS ንዓመታዊ መደባት ናይ 500 ተምሃሮ ዘገልግል ዘመናዊ መሳርሒታትን ንብረትን ዘለዎ ሓዳስ መባእታ ቤት ትምህርቲ ኣብ ዓድዋ ከፊቱ።',
      category: language === 'en' ? 'Education' : 'ትምህርቲ'
    },
    {
      title: language === 'en' ? 'Healthcare Worker Training Program Graduates 50 Nurses' : 'ናይ ሰራሕተኛታት ጥዕና መደብ ስልጠና 50 ነርሳት ኣመሪቁ',
      date: language === 'en' ? 'January 10, 2025' : '10 ታሕሳስ 2017 ዓ.ም.',
      image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      summary: language === 'en' 
        ? 'Our healthcare training program has graduated 50 nurses who will provide essential medical services in rural communities throughout Tigray.' 
        : 'መደብ ስልጠና ናይ ጥዕና 50 ነርሳት ኣመሪቁ፡ ኣብ ገጠራት ትግራይ ኣገደስቲ ሕክምናዊ ኣገልግሎታት ክህቡ እዮም።',
      category: language === 'en' ? 'Healthcare' : 'ሕክምና'
    },
    {
      title: language === 'en' ? 'Microfinance Program Expands to New Areas' : 'ናይ ምክዕባል ልቓሕ መደብ ናብ ሓደሽቲ ቦታታት ይስፋሕፍሕ',
      date: language === 'en' ? 'December 5, 2024' : '5 ሕዳር 2017 ዓ.ም.',
      image: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
      summary: language === 'en' 
        ? 'The ADS microfinance initiative is expanding to three new districts, providing small business loans to empower local entrepreneurs.' 
        : 'ተበግሶ ናይ ምክዕባል ልቓሕ ADS ናብ ሰለስተ ሓደሽቲ ወረዳታት ይስፋሕፋሕ፡ ንከባቢያዊ ነገደኛታት ናይ ንኡስ ንግዲ ልቓሕ ይህብ።',
      category: language === 'en' ? 'Economic Empowerment' : 'ቁጠባዊ ምብርታዕ'
    },
    {
      title: language === 'en' ? 'Partnership with International NGO Announced' : 'ምስ ዓለም ለኻዊ NGO ምትሕብባር ተኣዊጁ',
      date: language === 'en' ? 'November 12, 2024' : '12 ጥቅምቲ 2017 ዓ.ም.',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      summary: language === 'en' 
        ? 'ADS has formed a strategic partnership with Global Development Partners to enhance food security initiatives in the region.' 
        : 'ADS ንተበግሶታት ምግቢ ውሕስነት ኣብቲ ዞባ ንምምሕያሽ ምስ ዓለምለኻዊ መሻርኽቲ ምዕባለ ስትራተጂያዊ ምትሕብባር ፈጢሩ።',
      category: language === 'en' ? 'Partnerships' : 'ምትሕብባራት'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <html lang={language} />
        <title>{t('news')} - ADS</title>
        <meta name="description" content="Latest news, updates, and stories about our development work in Tigray." />
      </Helmet>
      
      <Navbar />
      
      <div className="flex-grow">
        <div className="relative py-24 bg-tigray-dark">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{t('news')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Latest updates and stories from our work in Tigray' 
                : 'ዝሓደሽቲ ዜናታትን ዛንታታትን ካብ ስራሕና ኣብ ትግራይ'}
            </p>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold px-2 py-1 bg-tigray-sand/30 rounded-full text-tigray-terracotta">
                        {item.category}
                      </span>
                      <span className="text-sm text-tigray-dark/60">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-tigray-dark mb-3">{item.title}</h3>
                    <p className="text-tigray-dark/80 mb-4">{item.summary}</p>
                    <button className="text-tigray-terracotta font-semibold hover:text-tigray-dark transition-colors flex items-center">
                      {language === 'en' ? 'Read More' : 'ዝያዳ ኣንብብ'} 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
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

export default News;
