import React from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-black mb-4 text-[#ADFF2F]">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {['home', 'sports', 'services', 'trades', 'contactUs', 'supports'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => onNavigate(link)}
                    className="hover:text-[#ADFF2F] transition-colors"
                  >
                    {t(link)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-black mb-4 text-[#ADFF2F]">{t('contactInfo')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-[#ADFF2F] flex-shrink-0 mt-0.5" />
                <span>+250 788 987 830</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-[#ADFF2F] flex-shrink-0 mt-0.5" />
                <span>info@gardentvet.rw</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-[#ADFF2F] flex-shrink-0 mt-0.5" />
                <span>Kigali, Rwanda</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-black mb-4 text-[#ADFF2F]">{t('newsletter')}</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder={t('email')}
                className="bg-white/10 border-white/20 text-white placeholder-white/50"
              />
              <Button className="bg-[#ADFF2F] hover:bg-[#9FEF1F] text-gray-900">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#ADFF2F] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#ADFF2F] rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#ADFF2F] rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#ADFF2F] rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>

            <p className="text-gray-400">
              © 2026 Garden TVET School. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
