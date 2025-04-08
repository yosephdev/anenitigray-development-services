
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const StoriesSection = () => {
  const { t, language } = useLanguage();

  const stories = [
    {
      name: 'Alemtsehay Tewolde',
      location: language === 'en' ? 'Mekelle, Tigray' : 'መቐለ፣ ትግራይ',
      image: 'https://images.unsplash.com/photo-1613205085584-bcbef193dc4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote: language === 'en' ? 
        '"Thanks to the clean water well built in our village, my children no longer get sick from waterborne diseases. This has changed our lives."' : 
        '"ኣብ ዓድና ብምኽንያት ዝተሰርሐ ናይ ጽሩይ ማይ ዒላ፡ ደቀይ ብማይ ዝመጹ ሕማማት ኣይሓሙን ኣለዉ። እዚ ኣብ ሂወትና ለውጢ ፈጢሩ።"',
      program: language === 'en' ? 'Clean Water Program' : 'መደብ ጽሩይ ማይ'
    },
    {
      name: 'Gebre Hagos',
      location: language === 'en' ? 'Adwa, Tigray' : 'ዓድዋ፣ ትግራይ',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote: language === 'en' ? 
        '"The microfinance loan helped me start my small business. Now I can provide for my family and send my children to school."' : 
        // Using template literals to avoid escaping issues with the Tigrinya text
        `"እቲ ምክዕባል ልቓሕ ንናይ ንኡስ ንግዲ ንኽጅምር ሓጊዙኒ። ሕጂ ንስድራይ ክኣሊ ከምኡ'ውን ደቀይ ናብ ቤት ትምህርቲ ክሰዶም ይኽእል።"`,
      program: language === 'en' ? 'Economic Empowerment' : 'ቁጠባዊ ምብርታዕ'
    },
    {
      name: 'Selam Berhe',
      location: language === 'en' ? 'Shire, Tigray' : 'ሽረ፣ ትግራይ',
      image: 'https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=719&q=80',
      quote: language === 'en' ? 
        '"The new school in our community has given our children hope for a better future through education."' : 
        '"እታ ሓዳስ ኣብ ማሕበረሰብና ዝተሃነጸት ቤት ትምህርቲ፡ ንደቅና ብመገዲ ትምህርቲ ንዝበለጸ መጻኢ ተስፋ ሂባቶም።"',
      program: language === 'en' ? 'Education Program' : 'መደብ ትምህርቲ'
    }
  ];

  return (
    <div className="py-16 bg-tigray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tigray-dark mb-4">{t('stories.title')}</h2>
          <p className="text-tigray-dark/80 max-w-2xl mx-auto">{t('stories.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-64">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white">{story.name}</h3>
                  <p className="text-white/80 text-sm">{story.location}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-tigray-terracotta text-4xl font-serif mb-2">"</div>
                <blockquote className="text-tigray-dark mb-4 italic">
                  {story.quote}
                </blockquote>
                <div className="mt-4 pt-4 border-t border-tigray-sand flex justify-between items-center">
                  <span className="text-sm text-tigray-dark/70">{story.program}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoriesSection;
