import React, { useState } from 'react';
import PriceTable from './components/PriceTable';
import NotesSection from './components/NotesSection';
import RarityAlert from './components/RarityAlert';
import PriceEstimator from './components/PriceEstimator';
import { translations } from './translations';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const content = translations[language];

  const LanguageButton: React.FC<{
    lang: 'en' | 'es';
    label: string;
  }> = ({ lang, label }) => (
    <button
      onClick={() => setLanguage(lang)}
      aria-pressed={language === lang}
      className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
        language === lang
          ? 'bg-amber-800 text-white shadow-md'
          : 'bg-white text-amber-800 hover:bg-amber-100/60 border border-amber-200'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans antialiased">
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex justify-end mb-6 print:hidden" role="toolbar" aria-label="Language selection">
          <div className="flex space-x-2 p-1 bg-white/60 rounded-lg border border-amber-200/50">
            <LanguageButton lang="en" label="English" />
            <LanguageButton lang="es" label="Español" />
          </div>
        </div>
      
        <header className="text-center mb-10 print:hidden">
          <div className="flex justify-center items-center gap-4 md:gap-6 mb-4">
            <img
              src="https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/vicky-burmese-amber-logo.jpg"
              alt="Vicky Lux Gems Logo"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-amber-200 shadow-md"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 tracking-tight">
              {content.title}
            </h1>
          </div>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </header>

        <RarityAlert note={content.specialNote} />

        <div className="my-12 print:hidden">
            <h2 className="text-3xl font-bold text-amber-900 text-center mb-6">Full Price List</h2>
        </div>
        <div className="print:hidden">
          <PriceTable data={content.tableData} headers={content.tableHeaders} />
        </div>
        
        <PriceEstimator content={content} />

        <div className="print:hidden">
          <NotesSection notes={content.notesData} title={content.notesTitle} />
        </div>
        
        <footer className="text-center mt-12 text-stone-500 print:hidden">
            <p>&copy; {new Date().getFullYear()} {content.footerText}</p>
        </footer>
      </main>
    </div>
  );
};

export default App;