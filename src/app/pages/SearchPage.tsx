import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Input } from '@/app/components/ui/input';

interface SearchPageProps {
  onNavigate: (page: string) => void;
}

const SearchPage: React.FC<SearchPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = searchQuery ? [
    { title: 'Software Development Program', type: 'Trade', description: 'Learn coding and software engineering' },
    { title: 'Building Construction Course', type: 'Trade', description: 'Master construction techniques' },
    { title: 'Sports Activities', type: 'Activity', description: 'Join our sports programs' },
    { title: 'Student Services', type: 'Service', description: 'Support services for students' },
  ].filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <Search className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-black">Search</h1>
            </div>

            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="pl-12 pr-12 h-14 text-lg"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Search Results */}
        <div className="space-y-4">
          {searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{result.title}</h3>
                    <p className="text-gray-600 mb-2">{result.description}</p>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                      {result.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))
          ) : searchQuery ? (
            <div className="bg-white rounded-xl shadow-md p-12 text-center">
              <p className="text-gray-500">No results found for "{searchQuery}"</p>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-12 text-center">
              <p className="text-gray-500">Start typing to search...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
