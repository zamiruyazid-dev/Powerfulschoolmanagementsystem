import React from 'react';
import { motion } from 'motion/react';
import { Code, HardHat, Wrench } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const TradesPage: React.FC = () => {
  const trades = [
    {
      title: 'Software Development (SOD)',
      icon: Code,
      image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2ODcxODI3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Learn programming, web development, and software engineering',
    },
    {
      title: 'Building Construction (BDC)',
      icon: HardHat,
      image: 'https://images.unsplash.com/photo-1672072830247-85ac23671e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHNpdGV8ZW58MXx8fHwxNzY4NzMwNzQ0fDA',
      description: 'Master construction techniques, architecture, and project management',
    },
    {
      title: 'Automobile Technology',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1636761358757-0a616eb9e17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW9iaWxlJTIwbWVjaGFuaWMlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3Njg4MDYyMTl8MA',
      description: 'Automotive repair, maintenance, and diagnostic skills',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-black mb-4">TRADES OFFERED</h1>
          <p className="text-xl text-gray-600">Professional technical education programs</p>
        </motion.div>

        <div className="space-y-12">
          {trades.map((trade, index) => (
            <motion.div
              key={trade.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback src={trade.image} alt={trade.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <trade.icon className="w-16 h-16 text-[#ADFF2F] mb-4" />
                  <h3 className="text-3xl font-black mb-4">{trade.title}</h3>
                  <p className="text-gray-600 text-lg">{trade.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradesPage;
