
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ti';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'home': 'Home',
    'about': 'About Us',
    'programs': 'Programs',
    'impact': 'Our Impact',
    'news': 'News',
    'contact': 'Contact',
    'donate': 'Donate Now',
    'hero.title': 'Empowering Tigray Through Sustainable Development',
    'hero.subtitle': 'Together, we can build a brighter future for communities in need',
    'hero.cta': 'Make an Impact Today',
    'impact.families': 'Families Supported',
    'impact.schools': 'Schools Built',
    'impact.wells': 'Clean Water Wells',
    'impact.healthcare': 'Healthcare Clinics',
    'programs.title': 'Our Programs',
    'programs.subtitle': 'Sustainable solutions for lasting change',
    'program.food': 'Food Security',
    'program.water': 'Clean Water',
    'program.education': 'Education',
    'program.healthcare': 'Healthcare',
    'program.economic': 'Economic Empowerment',
    'stories.title': 'Community Stories',
    'stories.subtitle': 'Real people, real impact',
    'donate.title': 'Your Donation Makes a Difference',
    'donate.subtitle': 'Choose how you want to help',
    'donate.monthly': 'Monthly',
    'donate.onetime': 'One-time',
    'donate.amount': 'Select Amount',
    'donate.custom': 'Custom Amount',
    'donate.button': 'Donate Now',
    'footer.rights': 'All Rights Reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'read.more': 'Read More',
    'learn.more': 'Learn More',
    'program.detail.sustainable': 'Sustainable',
    'program.detail.community': 'Community-led',
    'program.detail.impact': 'Impact-driven',
    'contact.send': 'Send Message',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.visit': 'Visit Us',
    'contact.email.us': 'Email Us',
    'contact.call': 'Call Us',
    'contact.hours': 'Office Hours',
  },
  ti: {
    'home': 'መበገሲ',
    'about': 'ብዛዕባና',
    'programs': 'መደባት',
    'impact': 'ውጽኢታትና',
    'news': 'ዜና',
    'contact': 'ርክብ',
    'donate': 'ሕጂ ይወፍዩ',
    'hero.title': 'ትግራይ ብቀጻሊ ምዕባለ ምብርታዕ',
    'hero.subtitle': 'ብሓባር፡ ንሕብረተሰብ ኣብ ድሌት ዘለዎ ዝበለጸ መጻኢ ክንሃንጽ ንኽእል ኢና',
    'hero.cta': 'ሎሚ ለውጢ ግበር',
    'impact.families': 'ዝተሓገዛ ስድራቤታት',
    'impact.schools': 'ዝተሃነጻ ቤት ትምህርቲ',
    'impact.wells': 'ጽሩይ ማይ ዒላታት',
    'impact.healthcare': 'ናይ ጥዕና ክሊኒካት',
    'programs.title': 'መደባትና',
    'programs.subtitle': 'ነባሪ ለውጢ ንምግባር ዘላቕነት ዘለዎም ፍታሓት',
    'program.food': 'ውሕስነት ምግቢ',
    'program.water': 'ጽሩይ ማይ',
    'program.education': 'ትምህርቲ',
    'program.healthcare': 'ክንክን ጥዕና',
    'program.economic': 'ቁጠባዊ ምብርታዕ',
    'stories.title': 'ዛንታታት ማሕበረሰብ',
    'stories.subtitle': 'ሓቀኛ ሰባት፡ ሓቀኛ ጽልዋ',
    'donate.title': 'ወፈያኹም ፍልልይ ይፈጥር',
    'donate.subtitle': 'ከመይ ገይርኩም ክትሕግዙ ከም እትደልዩ ምረጹ',
    'donate.monthly': 'ወርሓዊ',
    'donate.onetime': 'ሓደ ግዜ',
    'donate.amount': 'መጠን ይምረጹ',
    'donate.custom': 'ካልእ መጠን',
    'donate.button': 'ሕጂ ይወፍዩ',
    'footer.rights': 'ኩሎም መሰላት ዝተሓለዉ',
    'footer.privacy': 'ፖሊሲ ምሽጥራውነት',
    'footer.terms': 'ናይ ኣገልግሎት ኩነታት',
    'read.more': 'ዝያዳ ኣንብብ',
    'learn.more': 'ዝያዳ ፍለጥ',
    'program.detail.sustainable': 'ዘላቒ',
    'program.detail.community': 'ብማሕበረሰብ ዝምራሕ',
    'program.detail.impact': 'ብውጽኢት ዝምራሕ',
    'contact.send': 'መልእኽቲ ስደድ',
    'contact.name': 'ስምኩም',
    'contact.email': 'ኢመይልኩም',
    'contact.subject': 'ኣርእስቲ',
    'contact.message': 'መልእኽቲ',
    'contact.visit': 'ብኽብረትኩም ዑደትና',
    'contact.email.us': 'ኢመይል ግበሩልና',
    'contact.call': 'ደውሉልና',
    'contact.hours': 'ናይ ቢሮ ሰዓታት',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
