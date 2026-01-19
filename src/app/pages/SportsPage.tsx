import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Users, Calendar } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const SportsPage: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Trophy className="w-16 h-16 text-[#ADFF2F] mx-auto mb-4" />
          <h1 className="text-5xl font-black mb-4">SPORTS</h1>
          <p className="text-xl text-gray-600">Building character through athletics</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Football', 'Basketball', 'Volleyball', 'Athletics', 'Tennis', 'Swimming'].map((sport, index) => (
            <motion.div
              key={sport}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2">{sport}</h3>
              <p className="text-gray-600">Join our {sport.toLowerCase()} team</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsPage;
