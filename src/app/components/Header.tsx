import React, { useState } from 'react';
import { Search, Menu, X, Globe, Bell, User } from 'lucide-react';
import { useLanguage, Language } from '@/app/contexts/LanguageContext';
import { useAuth } from '@/app/contexts/AuthContext';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/app/components/ui/dropdown-menu';
import { Badge } from '@/app/components/ui/badge';
import { Avatar, AvatarFallback } from '@/app/components/ui/avatar';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onSearch: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onSearch }) => {
  const { language, setLanguage, t } = useLanguage();
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['home', 'sports', 'services', 'trades', 'contactUs', 'supports'];
  const authItems = user ? [] : ['login', 'register'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2.5 rounded-lg shadow-lg">
              <div className="flex flex-col items-center">
                <span className="text-white font-black text-sm leading-tight">GARDEN</span>
                <span className="text-white font-black text-sm leading-tight">TVET</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="text-xl font-black text-gray-900">Garden TVET</p>
              <p className="text-xs text-gray-600">Excellence in Education</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item}
                variant={currentPage === item ? 'default' : 'ghost'}
                onClick={() => onNavigate(item)}
                className={`font-semibold text-sm ${
                  currentPage === item
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {t(item)}
              </Button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Search */}
            <Button
              variant="outline"
              size="icon"
              onClick={onSearch}
              className="rounded-full"
            >
              <Search className="w-4 h-4" />
            </Button>

            {/* Notifications */}
            {user && (
              <Button
                variant="outline"
                size="icon"
                className="rounded-full relative"
              >
                <Bell className="w-4 h-4" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500">
                  3
                </Badge>
              </Button>
            )}

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Globe className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {(['en', 'fr', 'rw', 'sw'] as Language[]).map((lang) => (
                  <DropdownMenuItem
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={language === lang ? 'bg-blue-50 text-blue-600' : ''}
                  >
                    {lang.toUpperCase()}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu or Auth Buttons */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="rounded-full p-1">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-blue-600 text-white">
                        {user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem className="flex flex-col items-start">
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.role}</p>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onNavigate('home')}>
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  onClick={() => onNavigate('login')}
                  className="rounded-full"
                >
                  {t('login')}
                </Button>
                <Button
                  onClick={() => onNavigate('register')}
                  className="rounded-full bg-blue-600 hover:bg-blue-700"
                >
                  {t('register')}
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-2">
              {[...navItems, ...authItems].map((item) => (
                <Button
                  key={item}
                  variant={currentPage === item ? 'default' : 'ghost'}
                  onClick={() => {
                    onNavigate(item);
                    setIsMenuOpen(false);
                  }}
                  className="w-full justify-start"
                >
                  {t(item)}
                </Button>
              ))}
              <Button
                variant="outline"
                onClick={() => {
                  onSearch();
                  setIsMenuOpen(false);
                }}
                className="w-full justify-start"
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
