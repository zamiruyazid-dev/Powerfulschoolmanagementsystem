import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, BookOpen, Users, Laptop } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    { icon: BookOpen, title: 'Academic Support', description: 'Tutoring and mentorship programs' },
    { icon: Users, title: 'Career Guidance', description: 'Professional career counseling' },
    { icon: Laptop, title: 'Digital Resources', description: 'Online learning materials' },
    { icon: Briefcase, title: 'Job Placement', description: 'Connect with employers' },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-black mb-4">SERVICES</h1>
          <p className="text-xl text-gray-600">Comprehensive student support</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all"
            >
              <service.icon className="w-12 h-12 text-[#ADFF2F] mb-4" />
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
