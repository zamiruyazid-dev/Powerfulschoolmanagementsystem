import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, Book, Users, Phone } from 'lucide-react';

const SupportsPage: React.FC = () => {
  const supports = [
    { icon: HelpCircle, title: 'FAQ', description: 'Frequently asked questions' },
    { icon: Book, title: 'Documentation', description: 'Comprehensive guides and tutorials' },
    { icon: Users, title: 'Community', description: 'Join our support community' },
    { icon: Phone, title: '24/7 Support', description: 'Contact our support team anytime' },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-black mb-4">SUPPORTS</h1>
          <p className="text-xl text-gray-600">We're here to help you succeed</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supports.map((support, index) => (
            <motion.div
              key={support.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow"
            >
              <support.icon className="w-12 h-12 text-[#ADFF2F] mb-4" />
              <h3 className="text-2xl font-bold mb-2">{support.title}</h3>
              <p className="text-gray-600">{support.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportsPage;
