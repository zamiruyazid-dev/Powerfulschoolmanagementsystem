import React, { useState } from 'react';
import { Search, Menu, X, Globe } from 'lucide-react';
import { useLanguage, Language } from '@/app/contexts/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onSearch: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onSearch }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navItems = ['home', 'sports', 'services', 'trades', 'contactUs', 'supports', 'login', 'register'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#ADFF2F]/90 via-teal-500/90 to-blue-600/90 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
              <div className="flex flex-col items-center">
                <span className="text-white font-black text-xl leading-tight">GARDEN</span>
                <span className="text-white font-black text-xl leading-tight">TVET</span>
                <span className="text-white font-bold text-sm leading-tight">SCHOOL</span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate(item)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                  currentPage === item
                    ? 'bg-white/30 text-white shadow-lg'
                    : 'text-white/90 hover:bg-white/20'
                }`}
              >
                {t(item)}
              </motion.button>
            ))}
          </nav>

          {/* Search & Language */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                onClick={onSearch}
                className="w-64 px-4 py-2 pl-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70" />
            </div>

            {/* Language Selector */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
              >
                <Globe className="w-5 h-5 text-white" />
              </motion.button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden"
                  >
                    {(['en', 'fr', 'rw', 'sw'] as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setIsLangOpen(false);
                        }}
                        className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${
                          language === lang ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                        }`}
                      >
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white/10 backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    onNavigate(item);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg font-semibold ${
                    currentPage === item
                      ? 'bg-white/30 text-white'
                      : 'text-white/90 hover:bg-white/20'
                  }`}
                >
                  {t(item)}
                </button>
              ))}
              <div className="pt-2">
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  onClick={() => {
                    onSearch();
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
