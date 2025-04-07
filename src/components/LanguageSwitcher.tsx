
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher flex items-center">
      <Globe className="mr-2 h-4 w-4 text-tigray-brown" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="appearance-none bg-transparent border border-tigray-sand rounded px-3 py-1 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-tigray-ochre"
      >
        <option value="en">English</option>
        <option value="ti">ትግርኛ (Tigrinya)</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
