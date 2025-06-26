"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  user: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 簡単な認証用のユーザー情報（本番環境では適切な認証システムを使用してください）
const USERS = [
  { username: 'admin', password: 'admin123' },
  { username: 'user', password: 'user123' },
  { username: 'demo', password: 'demo123' }
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  const login = (username: string, password: string): boolean => {
    const validUser = USERS.find(
      u => u.username === username && u.password === password
    );
    
    if (validUser) {
      setIsAuthenticated(true);
      setUser(username);
      localStorage.setItem('auth', 'true');
      localStorage.setItem('user', username);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('auth');
    localStorage.removeItem('user');
  };

  // ページ読み込み時に認証状態を復元
  useState(() => {
    if (typeof window !== 'undefined') {
      const savedAuth = localStorage.getItem('auth');
      const savedUser = localStorage.getItem('user');
      if (savedAuth === 'true' && savedUser) {
        setIsAuthenticated(true);
        setUser(savedUser);
      }
    }
  });

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}