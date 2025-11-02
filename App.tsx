import React, { useState, useEffect, useRef } from 'react';
import PriceTable from './components/PriceTable';
import NotesSection from './components/NotesSection';
import RarityAlert from './components/RarityAlert';
import PriceEstimator from './components/PriceEstimator';
import InfoBox from './components/InfoBox';
import ImageGallery from './components/ImageGallery';
import { translations } from './translations';

type TabKey = 'overview' | 'pricing' | 'notes' | 'gallery';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'es' | 'ar' | 'hi' | 'th'>('en');
  const [activeTab, setActiveTab] = useState<TabKey>('overview');
  const content = translations[language];

  const sectionRefs = {
    overview: useRef<HTMLElement>(null),
    pricing: useRef<HTMLElement>(null),
    notes: useRef<HTMLElement>(null),
    gallery: useRef<HTMLElement>(null),
  };
  
  const galleryImages = [
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-cover-1.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-cover-2.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-cover-3.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-cover-4.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-cover-5.webp'
  ];

  const mainGalleryImages = [
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-1.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-2.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-3.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-4.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-5.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-6.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-7.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-8.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-9.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-10.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-11.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-12.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-13.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-14.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-15.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-16.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-17.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-18.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-19.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-20.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-21.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-22.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-23.webp',
    'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-burmese-amber-24.webp'
  ];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

    document.title = content.metaTitle;

    const setMetaTag = (name: string, value: string) => {
        let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
        if (!element) {
            element = document.createElement('meta');
            element.name = name;
            document.head.appendChild(element);
        }
        element.content = value;
    };

    setMetaTag('description', content.metaDescription);
    setMetaTag('keywords', content.metaKeywords);
    
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', content.metaTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', content.metaDescription);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', content.metaTitle);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', content.metaDescription);

    const existingScript = document.getElementById('json-ld-structured-data');
    if (existingScript) {
        existingScript.remove();
    }

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Vicky Burmese Amber & Gems Co., Ltd.",
        "url": "https://www.vickyamber.com",
        "logo": "https://www.vickyamber.com/logo.png",
        "description": content.metaDescription,
        "sameAs": [
          "https://www.facebook.com/vkmmamber", "https://www.instagram.com/vkmmamber",
          "https://x.com/vkmmamber", "https://www.pinterest.com/vkmmamber"
        ],
        "contactPoint": {
          "@type": "ContactPoint", "telephone": "+66-81-851-9922", "contactType": "Customer Service",
          "areaServed": ["TH", "IN", "AE", "ES", "US"], "availableLanguage": ["English", "Spanish", "Arabic", "Hindi", "Thai"]
        }
    };
    
    const script = document.createElement("script");
    script.id = "json-ld-structured-data";
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

  }, [language, content]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -59% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id as TabKey);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const refs = Object.values(sectionRefs);

    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sectionRefs]);


  const handleTabClick = (tabKey: TabKey) => {
    sectionRefs[tabKey].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const LanguageButton: React.FC<{ lang: 'en' | 'es' | 'ar' | 'hi' | 'th'; label: string; }> = ({ lang, label }) => (
    <button
      onClick={() => setLanguage(lang)}
      aria-pressed={language === lang}
      className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
        language === lang ? 'bg-amber-800 text-white shadow-md' : 'bg-white text-amber-800 hover:bg-amber-100/60 border border-amber-200'
      }`}
    >
      {label}
    </button>
  );

  const TabMenu: React.FC = () => (
    <nav className="sticky top-0 z-30 bg-stone-100/80 backdrop-blur-md shadow-sm mb-8 md:mb-12 print:hidden">
      <div className="container mx-auto">
        <div className="flex justify-center items-center border-b border-amber-200/70" role="tablist" aria-label="Content sections">
          {Object.entries(content.tabLabels).map(([key, label]) => (
            <button
              key={key}
              id={`tab-${key}`}
              role="tab"
              aria-selected={activeTab === key}
              aria-controls={`${key}-section`}
              onClick={() => handleTabClick(key as TabKey)}
              className={`px-4 py-3 md:px-6 md:py-4 text-sm md:text-base font-semibold border-b-2 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-opacity-50 ${
                activeTab === key
                  ? 'border-amber-700 text-amber-900'
                  : 'border-transparent text-stone-600 hover:text-amber-800 hover:border-amber-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  return (
    <div
      className="min-h-screen text-stone-800 font-sans antialiased"
      style={{
        backgroundImage: `url('https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/roughamber/rough-amber-bg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex justify-end mb-6 print:hidden" role="toolbar" aria-label="Language selection">
          <div className="flex space-x-2 rtl:space-x-reverse p-1 bg-white/60 rounded-lg border border-amber-200/50">
            <LanguageButton lang="en" label="English" />
            <LanguageButton lang="th" label="ไทย" />
            <LanguageButton lang="es" label="Español" />
            <LanguageButton lang="ar" label="العربية" />
            <LanguageButton lang="hi" label="हिन्दी" />
          </div>
        </div>
      
        <header className="text-center mb-10 print:hidden">
          <div className="flex justify-center items-center gap-4 md:gap-6 mb-4 flex-row rtl:flex-row-reverse">
            <img src="https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/vicky-burmese-amber-logo.jpg" alt="Vicky Lux Gems Logo" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-amber-200 shadow-md" />
            <div className="text-left rtl:text-right">
                <h1 className="text-4xl md:text-5xl font-bold text-amber-900 tracking-tight">{content.title}</h1>
                <p className="text-base text-stone-700 font-normal tracking-wide mt-1">{content.byline}</p>
            </div>
          </div>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto font-bold">{content.subtitle}</p>
        </header>

        <TabMenu />

        <ImageGallery images={galleryImages} />

        <section id="overview" ref={sectionRefs.overview} className="mb-16 scroll-mt-20" role="tabpanel" aria-labelledby="tab-overview">
          <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-amber-200/50">
            <h2 id="introduction-heading" className="sr-only">Introduction to Burmese Amber</h2>
            <p className="text-stone-700 leading-relaxed text-base md:text-lg whitespace-pre-line">{content.introduction}</p>
          </div>
        </section>

        <section id="pricing" ref={sectionRefs.pricing} className="mb-16 scroll-mt-20" role="tabpanel" aria-labelledby="tab-pricing">
            <div className="my-8 print:hidden">
                <h2 className="text-3xl font-bold text-amber-900 text-center mb-6">{content.fullPriceListTitle}</h2>
                <InfoBox note={content.priceListInfo} />
            </div>
            <div className="print:hidden">
              <PriceTable data={content.tableData} headers={content.tableHeaders} />
            </div>
            <PriceEstimator content={content} language={language} />
        </section>

        <section id="notes" ref={sectionRefs.notes} className="mb-16 scroll-mt-20" role="tabpanel" aria-labelledby="tab-notes">
          <RarityAlert note={content.specialNote} />
          <NotesSection notes={content.notesData} title={content.notesTitle} />
        </section>

        <section id="gallery" ref={sectionRefs.gallery} className="mb-16 scroll-mt-20" role="tabpanel" aria-labelledby="tab-gallery">
          <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-amber-200/50">
            <h2 className="text-3xl font-bold text-amber-900 text-center mb-8">{content.tabLabels.gallery}</h2>
            <ImageGallery images={mainGalleryImages} isMainGallery={true} />
          </div>
        </section>
        
        <footer className="text-center mt-12 p-6 border-t border-amber-200/50 text-stone-600 text-sm print:hidden leading-relaxed bg-white/70 backdrop-blur-sm rounded-2xl">
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex justify-center">
                <img 
                  src="https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/vicky-burmese-amber-logo.jpg" 
                  alt="Vicky Burmese Amber & Gems Co., Ltd. Logo" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-200 shadow-md"
                />
              </div>
              <p>
                <strong className="text-stone-800">VICKY BURMESE AMBER & GEMS CO., LTD.</strong><br />
                <span className="text-xs">919/1 JEWELRY TRADE CENTER BUILDING, SILOM 19, SILOM RD., BANGRAK, BANGKOK 10500, THAILAND</span><br />
                📞 WhatsApp/Tel: <a href="https://wa.me/66818519922" target="_blank" rel="noopener noreferrer" className="hover:text-amber-700">+66(0)81 851 9922</a>, <a href="https://wa.me/66631959922" target="_blank" rel="noopener noreferrer" className="hover:text-amber-700">+66(0)63 195 9922</a><br />
                📧 Email: <a href="mailto:info.vkamber@gmail.com" className="text-amber-800 hover:underline">info.vkamber@gmail.com</a><br />
                🌐 Official Website: <a href="https://www.vickyamber.com" target="_blank" rel="noopener noreferrer" className="text-amber-800 hover:underline">www.vickyamber.com</a>
              </p>
              <div>
                <p className="mb-2">Follow us:</p>
                <div className="flex justify-center items-center space-x-6">
                    <a href="https://www.facebook.com/vkmmamber" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-transform duration-200 hover:scale-110">
                        <img src="https://i.postimg.cc/YCMfNbVb/facebook.webp" alt="Facebook" className="w-8 h-8 rounded-full" />
                    </a>
                    <a href="https://www.instagram.com/vkmmamber" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-transform duration-200 hover:scale-110">
                         <img src="https://i.postimg.cc/P5ybS1nh/instagram.webp" alt="Instagram" className="w-8 h-8 rounded-full" />
                    </a>
                    <a href="https://x.com/vkmmamber" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" className="transition-transform duration-200 hover:scale-110">
                        <img src="https://i.postimg.cc/632d6S25/twitter.webp" alt="X (Twitter)" className="w-8 h-8 rounded-full" />
                    </a>
                    <a href="https://www.pinterest.com/vkmmamber" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="transition-transform duration-200 hover:scale-110">
                        <img src="https://i.postimg.cc/JnfjsqZ3/pinterest.webp" alt="Pinterest" className="w-8 h-8 rounded-full" />
                    </a>
                </div>
              </div>
            </div>
            <p className="mt-8 text-xs text-stone-500">&copy; {new Date().getFullYear()} VICKY BURMESE AMBER & GEMS CO., LTD. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;