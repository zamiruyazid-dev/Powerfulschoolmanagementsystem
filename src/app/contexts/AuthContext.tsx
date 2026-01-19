import React, { createContext, useContext, useState } from 'react';

export type UserRole = 
  | 'student' 
  | 'parent' 
  | 'director_of_study' 
  | 'director_of_discipline' 
  | 'head_master' 
  | 'teacher' 
  | 'accountant' 
  | 'stock_manager' 
  | 'admin';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role?: UserRole) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string, role: 'student' | 'parent') => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, role?: UserRole) => {
    // Simulated login
    setTimeout(() => {
      setUser({
        id: '1',
        name: 'John Doe',
        email,
        role: role || 'student',
      });
    }, 500);
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (name: string, email: string, password: string, role: 'student' | 'parent') => {
    // Simulated registration
    setTimeout(() => {
      setUser({
        id: '1',
        name,
        email,
        role,
      });
    }, 500);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
