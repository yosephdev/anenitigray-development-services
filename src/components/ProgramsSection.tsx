
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProgramsSection = () => {
  const { t, language } = useLanguage();
  
  const programs = [
    {
      title: t('program.food'),
      description: language === 'en' 
        ? 'Sustainable agriculture initiatives to ensure lasting food security for vulnerable communities.' 
        : 'ዘላቒ ናይ ሕርሻ ተበግሶታት ንተጋለጽቲ ማሕበረሰባት ዘላቒ ውሕስነት ምግቢ ንምርግጋጽ።',
      image: 'https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
      link: '/programs#food-security'
    },
    {
      title: t('program.water'),
      description: language === 'en'
        ? 'Providing access to clean water through well construction and water purification systems.'
        : 'ብምህናጽ ዒላታትን ሲስተማት ምጽራይ ማይን ንጽሩይ ማይ መእተዊ ምቕራብ።',
      image: 'https://images.unsplash.com/photo-1581314484893-364020df9d49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
      link: '/programs#clean-water'
    },
    {
      title: t('program.education'),
      description: language === 'en'
        ? 'Building schools, training teachers, and providing educational materials for children.'
        : 'ቤት ትምህርቲ ምህናጽ፣ መምህራን ምስልጣን፣ ከምኡውን ንህጻናት ናይ ትምህርቲ ንዋት ምቕራብ።',
      image: 'https://images.unsplash.com/photo-1520052205864-92d242b3a76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      link: '/programs#education'
    },
    {
      title: t('program.healthcare'),
      description: language === 'en'
        ? 'Establishing healthcare clinics and training local healthcare professionals.'
        : 'ናይ ሕክምና ክሊኒካታት ምትካልን ናይ ከባቢ ሰራሕተኛታት ሕክምና ምስልጣንን።',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      link: '/programs#healthcare'
    },
    {
      title: t('program.economic'),
      description: language === 'en'
        ? 'Microfinance loans and business training to foster economic independence.'
        : 'ምክዓብ ቁጠባዊ ናጽነት ንምድጋፍ ላዑላዊ ልቓሕን ናይ ንግዲ ስልጠናን።',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      link: '/programs#economic-empowerment'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tigray-dark mb-4">{t('programs.title')}</h2>
          <p className="text-tigray-dark/80 max-w-2xl mx-auto">{t('programs.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Link to={program.link} key={index} className="program-card group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-tigray-dark mb-2">{program.title}</h3>
                <p className="text-tigray-dark/70 mb-4">{program.description}</p>
                <div className="flex items-center text-tigray-terracotta font-medium group-hover:translate-x-1 transition-transform">
                  {language === 'en' ? 'Learn More' : 'ዝያዳ ኣንብብ'} <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsSection;
