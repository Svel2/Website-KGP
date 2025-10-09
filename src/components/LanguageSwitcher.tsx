import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('id');
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const languages = [
    {
      code: 'id',
      name: 'Indonesia',
      flag: (
        <svg className="shrink-0 size-3 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="#ff0000" d="M0 0h512v256H0z"/>
          <path fill="#ffffff" d="M0 256h512v256H0z"/>
        </svg>
      )
    },
    {
      code: 'en',
      name: 'English',
      flag: (
        <svg className="shrink-0 size-3 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <g fillRule="evenodd">
            <g strokeWidth="1pt">
              <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/>
              <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/>
            </g>
            <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"/>
            <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"/>
          </g>
        </svg>
      )
    },
  ];

  useEffect(() => {
    setIsMounted(true);
    const savedLanguage = localStorage.getItem('language') || 'id';
    setSelectedLanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const handleChangeLanguage = (langCode: string) => {
    setSelectedLanguage(langCode);
    i18n.changeLanguage(langCode);
    localStorage.setItem('language', langCode);
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === selectedLanguage) || languages[0];
  };

  // Hanya tampilkan UI saat komponen sudah terpasang di klien
  if (!isMounted) {
    return (
      <div className="w-16 h-8 bg-gray-200 rounded-md animate-pulse"></div>
    );
  }

  return (
    <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
      <button
        id="hs-language-dropdown"
        type="button"
        className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Language dropdown"
      >
        {getCurrentLanguage().flag}
        <span>{getCurrentLanguage().name}</span>
        <svg className="hs-dropdown-open:rotate-180 shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>

      <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 min-w-40 bg-white shadow-md rounded-lg p-2" role="menu" aria-orientation="vertical" aria-labelledby="hs-language-dropdown">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleChangeLanguage(lang.code)}
            className={`w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 ${selectedLanguage === lang.code ? 'bg-gray-100' : ''}`}
            role="menuitem"
          >
            {lang.flag}
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
