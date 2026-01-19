import React from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, Users, BookOpen, DollarSign, Package, TrendingUp, LogOut, Settings } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { useAuth } from '@/app/contexts/AuthContext';

interface AdminDashboardProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate, onLogout }) => {
  const { user } = useAuth();

  const stats = [
    { title: 'Total Students', value: '1,234', icon: Users, color: 'from-blue-500 to-blue-600' },
    { title: 'Total Staff', value: '89', icon: Users, color: 'from-green-500 to-green-600' },
    { title: 'Active Courses', value: '24', icon: BookOpen, color: 'from-purple-500 to-purple-600' },
    { title: 'Revenue', value: '$125,430', icon: DollarSign, color: 'from-yellow-500 to-yellow-600' },
    { title: 'Stock Items', value: '456', icon: Package, color: 'from-pink-500 to-pink-600' },
    { title: 'Performance', value: '94%', icon: TrendingUp, color: 'from-teal-500 to-teal-600' },
  ];

  const managementSections = [
    { title: 'Student Management', description: 'Manage students, enrollments, and records', icon: Users },
    { title: 'Staff Management', description: 'Manage teachers, directors, and staff', icon: Users },
    { title: 'Course Management', description: 'Manage courses, schedules, and curriculum', icon: BookOpen },
    { title: 'Financial Management', description: 'Manage fees, payments, and budgets', icon: DollarSign },
    { title: 'Stock Management', description: 'Manage inventory and supplies', icon: Package },
    { title: 'Reports & Analytics', description: 'View comprehensive reports and statistics', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#ADFF2F] via-teal-500 to-blue-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <LayoutDashboard className="w-8 h-8" />
              <div>
                <h1 className="text-2xl font-black">ADMIN DASHBOARD</h1>
                <p className="text-white/80">Welcome, {user?.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <Settings className="w-5 h-5 mr-2" />
                Settings
              </Button>
              <Button onClick={onLogout} variant="ghost" className="text-white hover:bg-white/20">
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${stat.color} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/80 text-sm mb-1">{stat.title}</p>
                        <p className="text-3xl font-black">{stat.value}</p>
                      </div>
                      <stat.icon className="w-12 h-12 opacity-80" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Management Sections */}
        <h2 className="text-2xl font-black mb-6">Management Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {managementSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-[#ADFF2F] to-teal-500 p-3 rounded-lg">
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

        {/* Recent Activity */}
        <div className="mt-8">
          <h2 className="text-2xl font-black mb-6">Recent Activity</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b last:border-0">
                    <div>
                      <p className="font-semibold">New student enrolled</p>
                      <p className="text-sm text-gray-600">2 hours ago</p>
                    </div>
                    <span className="text-[#ADFF2F] font-semibold">View</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
