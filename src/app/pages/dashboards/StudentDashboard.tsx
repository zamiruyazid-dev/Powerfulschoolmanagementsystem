import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calendar, Award, FileText, LogOut } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { useAuth } from '@/app/contexts/AuthContext';

interface StudentDashboardProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ onNavigate, onLogout }) => {
  const { user } = useAuth();

  const sections = [
    { title: 'My Courses', icon: BookOpen, description: 'View your enrolled courses' },
    { title: 'Schedule', icon: Calendar, description: 'Check your class schedule' },
    { title: 'Grades', icon: Award, description: 'View your academic performance' },
    { title: 'Assignments', icon: FileText, description: 'Manage your assignments' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black">STUDENT DASHBOARD</h1>
              <p className="text-white/80">Welcome, {user?.name}</p>
            </div>
            <Button onClick={onLogout} variant="ghost" className="text-white">
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="mb-2">{section.title}</CardTitle>
                      <p className="text-gray-600 text-sm">{section.description}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
