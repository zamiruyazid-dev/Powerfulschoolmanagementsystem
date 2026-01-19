import React from 'react';
import { Button } from '@/app/components/ui/button';
import { LogOut, Users, FileText, Calendar } from 'lucide-react';
import { useAuth } from '@/app/contexts/AuthContext';

const createDashboard = (title: string, role: string) => {
  const Component: React.FC<{ onNavigate: (page: string) => void; onLogout: () => void }> = ({ onLogout }) => {
    const { user } = useAuth();
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="bg-gradient-to-r from-[#ADFF2F] to-blue-600 text-white shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-black">{title}</h1>
                <p className="text-white/80">Welcome, {user?.name}</p>
              </div>
              <Button onClick={onLogout} variant="ghost" className="text-white">
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Overview', icon: Users },
              { title: 'Reports', icon: FileText },
              { title: 'Schedule', icon: Calendar },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-lg p-6">
                <item.icon className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm">Manage your {item.title.toLowerCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return Component;
};

export const ParentDashboard = createDashboard('PARENT DASHBOARD', 'parent');
export const DirectorStudyDashboard = createDashboard('DIRECTOR OF STUDY DASHBOARD', 'director_of_study');
export const DirectorDisciplineDashboard = createDashboard('DIRECTOR OF DISCIPLINE DASHBOARD', 'director_of_discipline');
export const HeadMasterDashboard = createDashboard('HEAD MASTER DASHBOARD', 'head_master');
export const TeacherDashboard = createDashboard('TEACHER DASHBOARD', 'teacher');
export const AccountantDashboard = createDashboard('ACCOUNTANT DASHBOARD', 'accountant');
export const StockManagerDashboard = createDashboard('STOCK MANAGER DASHBOARD', 'stock_manager');

export default ParentDashboard;
