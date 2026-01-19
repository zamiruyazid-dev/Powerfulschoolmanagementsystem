import React from 'react';
import Hero from '@/app/components/Hero';
import { motion } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { ArrowRight, BookOpen, Users } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const trades = [
  {
    titleKey: 'softwareDevelopment',
    image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2ODcxODI3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    code: 'SOD',
  },
  {
    titleKey: 'buildingConstruction',
    image: 'https://images.unsplash.com/photo-1672072830247-85ac23671e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHNpdGV8ZW58MXx8fHwxNzY4NzMwNzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    code: 'BDC',
  },
  {
    titleKey: 'automobileTechnology',
    image: 'https://images.unsplash.com/photo-1636761358757-0a616eb9e17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW9iaWxlJTIwbWVjaGFuaWMlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3Njg4MDYyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    code: 'AUTO',
  },
];

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <div>
      <Hero />

      {/* Trades Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-center mb-12 bg-gradient-to-r from-[#ADFF2F] via-teal-600 to-blue-600 bg-clip-text text-transparent"
          >
            {t('tradesOffered')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trades.map((trade, index) => (
              <motion.div
                key={trade.code}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                onClick={() => onNavigate('trades')}
              >
                <div className="aspect-[4/3] relative">
                  <ImageWithFallback
                    src={trade.image}
                    alt={t(trade.titleKey)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{t(trade.titleKey)}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[#ADFF2F] font-bold text-lg">{trade.code}</span>
                    <ArrowRight className="w-6 h-6 text-white transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Portal Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-black text-gray-900 mb-6">{t('upcomingEvents')}</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-[#ADFF2F]/10 to-blue-50 rounded-lg">
                    <div className="bg-gradient-to-br from-[#ADFF2F] to-teal-500 text-white rounded-lg p-3 flex-shrink-0">
                      <div className="text-center">
                        <div className="text-2xl font-black">{20 + i}</div>
                        <div className="text-xs">JAN</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">Event Title {i}</h4>
                      <p className="text-sm text-gray-600">Event description goes here</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Student & Parent Portal */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#ADFF2F] via-teal-500 to-blue-600 rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-black text-white mb-6">{t('studentParentPortal')}</h3>
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate('login')}
                  className="w-full flex items-center justify-between bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-6 rounded-xl transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <BookOpen className="w-8 h-8" />
                    <span className="font-bold text-lg">{t('studentPortal')}</span>
                  </div>
                  <ArrowRight className="w-6 h-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate('register')}
                  className="w-full flex items-center justify-between bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-6 rounded-xl transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <Users className="w-8 h-8" />
                    <span className="font-bold text-lg">{t('studentAndParent')}</span>
                  </div>
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
