
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Cast the value to the correct type (either 'en' or 'ti')
    setLanguage(e.target.value as 'en' | 'ti');
  };

  return (
    <div className="language-switcher flex items-center relative">
      <Globe className="mr-2 h-4 w-4 text-tigray-brown" />
      <select
        value={language}
        onChange={handleLanguageChange}
        className="appearance-none bg-transparent border border-tigray-sand rounded px-3 py-1 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-tigray-ochre"
        aria-label="Select language"
      >
        <option value="en">English</option>
        <option value="ti">ትግርኛ (Tigrinya)</option>
      </select>
      <div className="pointer-events-none absolute right-0 inset-y-0 flex items-center pr-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
