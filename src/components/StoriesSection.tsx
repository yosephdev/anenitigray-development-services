
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
    program: language === 'en' ? 'Integrated Child Care' : 'ኩለመዳይ ናይ ህጻናት ክንክን',
    context: language === 'en' ? 
      'With widespread malnutrition affecting children across Tigray and 8 million children out of school, our Child-Friendly Spaces provide critical nutrition and psychosocial support for conflict-affected families.' :
      'ብፍላይ ኣብ ተጻባእቲ ቆልዑ ዝተስፋሕፋሕ ሳዕቤን ወሲኹ 8 ሚልዮን ቆልዑ ካብ ቤት ትምህርቲ ወጺኦም እንክሎ፡ ናይ ህጻናት ዝምድናዊ ቦታታትና ንተጻባኢ ስድራቤት ወሳኒ ምግቢን ስነ-ምኽንያዊ ደገፍን ይህቡ።'
  },
  {
    name: 'Teacher Berhane Woldu', // Representing a teacher from ASSET program
    location: language === 'en' ? 'Atse-Yohannes Primary School, Mekelle' : 'ኣጼ ዮሃንስ ኣቡነት ቤት ትምህርቲ፣ መቐለ',
    image: '/images/ADS-12.jpg', // Generic community/support image
    quote: language === 'en' ?
      '"With our own families struggling and schools lacking resources, the ASSET program\'s daily meals and training keep us going. We can focus on educating the next generation despite the crisis."' :
      `"ናይ ገዛእ ርእስና ስድራቤት ብዝተቓለሰሉን ቤት ትምህርቲ ጸጋታት ብዝጎደለሉን እዋን፡ ናይ ኣሴት ፕሮግራም መዓልታዊ ምግቢን ስልጠናን ክንቅጽል ኣኽኢሉና። ቀውዒ እዚ ኣብ ዘሎ፡ ኣብ ምትምሃር ዝቕጽል ወለዶ ክንረኽብ ንኽእል።"`,
    program: language === 'en' ? 'Teacher Support (ASSET)' : 'ደገፍ መምህራን (ኣሴት)',
    context: language === 'en' ? 
      'Over 9,600 schools were damaged during the conflict. ASSET supports teachers who are themselves affected by the crisis, ensuring education continues despite overwhelming challenges.' :
      'ኣብ እዋን ኩናት ልዕሊ 9,600 ቤት ትምህርቲ ተጎዲኦም። ኣሴት ንዓኦም ባዕሎም በዚ ቀውዒ ዝተጸለዉ መማህራን ደጊፉ፡ ዓቢ ብድሆታት እኳ እንተሃለዉ ትምህርቲ ክቕጽል ይገብር።'
  },
  {
    name: 'Fatima Ali', // Representing an IDP from Rapid Relief Support
    location: language === 'en' ? 'IDP Camp, Mekelle' : 'ናይ ተመዛበልቲ ካምፕ፣ መቐለ',
    image: '/images/ADS-7.jpg', // Could represent relief distribution
    quote: language === 'en' ?
      '"When we fled our village with nothing, ADS gave us dignity. The food items and non-food items helped us survive until we could rebuild. We are one of millions displaced, but we felt seen."' :
      `"ካብ ዓድና ዋላ ሓንቲ ብዘይሒዝና ምስ ሃደምና፡ ኤድኤስ ክብረትና ሂቡና። እቶም ናይ መግቢን ዘይመግቢ ኣቅሑትን ክሳብ ንውድኣት ክንመልስ ክንቅይር ሓገዙና። ካብ ሚልዮናት ተመዛበልቲ ሓደ ኢና፡ ግን ዝተራእናዮ ስምዒት ነበረና።"`,
    program: language === 'en' ? 'Rapid Relief Support' : 'ቀጥታዊ ናይ ድንገተኛ ረድኤት',
    context: language === 'en' ? 
      'Tigray hosts the highest number of conflict-induced IDPs in Ethiopia. With 1 million people still displaced and living in dire conditions, our relief support provides essential dignity and survival items.' :
      'ትግራይ ኣብ ኢትዮጵያ ዝለዓለ ቑጽሪ ብኩናት ተመዛበልቲ ትጸንሕ። 1 ሚልዮን ሰባት ገና ተመዛቢሎም ኣብ ከቢድ ኩነታት ክነብሩ እንከለዉ፡ ናይ ድንገተኛ ረድኤት ደገፍና ኣገደስቲ ክብረትን ምህላው ኣቅሑትን ይህብ።'
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
                
                {/* Crisis Context */}
                <div className="bg-red-50 p-3 rounded border-l-4 border-red-400 mb-4">
                  <p className="text-xs text-red-700 leading-relaxed">
                    <strong>Crisis Context:</strong> {story.context}
                  </p>
                </div>
                
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
