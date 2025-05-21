
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const StoriesSection = () => {
  const { t, language } = useLanguage();

  const stories = [
  {
    name: 'Abrehet Kahsay', // Representing a mother from Integrated Child Care
    location: language === 'en' ? 'Mekelle, Tigray' : 'መቐለ፣ ትግራይ',
    image: '/images/ADS-CFS.jpg', // Used CFS image, often related to child support
    quote: language === 'en' ?
      '"The support ADS provided for my child, including nutritious meals and a safe space to play and learn, has brought so much joy and stability back to our lives after the conflict."' :
      `"ኤድኤስ ንደቀይ ዝሃቦም ደገፍ፡ ማለት እቲ ምቁር መግቢን ውሑስ ናይ መጻወቲን መምሃሪ ቦታን፡ ድሕሪ እቲ ኩናት ብዙሕ ሓጎስን ምርግጋእን ኣብ ሂወትና ኣምጺኡ።"`,
    program: language === 'en' ? 'Integrated Child Care' : 'ኩለመዳይ ናይ ህጻናት ክንክን'
  },
  {
    name: 'Teacher Berhane Woldu', // Representing a teacher from ASSET program
    location: language === 'en' ? 'Mekelle, Tigray' : 'መቐለ፣ ትግራይ', // Atse-Yohannes Primary School
    image: '/images/ADS-12.jpg', // Generic community/support image
    quote: language === 'en' ?
      '"Receiving daily meals and training through the ASSET program has been a lifeline. It allows us to focus on teaching and supporting our students effectively."' :
      `"ብመደብ ኣሴት መዓልታዊ ምግቢን ስልጠናን ምርካብና ከም ህይወት ኣድሕን ኮይኑና። እዚ ንትምህርትና ኣድሂብና ንተማሃሮና ብግቡእ ክንድግፍ ኣኽኢሉና።"`,
    program: language === 'en' ? 'Teacher Support (ASSET)' : 'ደገፍ መምህራን (ኣሴት)'
  },
  {
    name: 'Fatima Ali', // Representing an IDP from Rapid Relief Support
    location: language === 'en' ? 'Adwa, Tigray' : 'ዓድዋ፣ ትግራይ',
    image: '/images/ADS-7.jpg', // Could represent relief distribution
    quote: language === 'en' ?
      '"When we were displaced and had nothing, ADS provided us with essential food and non-food items. It was a critical help during our most difficult time."' :
      `"ምስተመዛበልና ዋላ ሓንቲ ኣብ ዘይነበረና፡ ኤድኤስ ኣገደስቲ መግቢን ዘይመግቢ ኣቅሑትን ሂቡና። ኣብቲ ኣዝዩ ከቢድ ግዜና ወሳኒ ሓገዝ እዩ ነይሩ።"`,
    program: language === 'en' ? 'Rapid Relief Support' : 'ቀጥታዊ ናይ ድንገተኛ ረድኤት'
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
