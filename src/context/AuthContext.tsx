"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  username: string;
  email: string;
  password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  register: (username: string, email: string, password: string) => boolean;
  logout: () => void;
  user: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 簡単な認証用のユーザー情報（本番環境では適切な認証システムを使用してください）
const DEFAULT_USERS: User[] = [
  { username: 'admin', email: 'admin@example.com', password: 'admin123' },
  { username: 'user', email: 'user@example.com', password: 'user123' },
  { username: 'demo', email: 'demo@example.com', password: 'demo123' }
];

// localStorage からユーザー一覧を取得
const getStoredUsers = (): User[] => {
  if (typeof window === 'undefined') return DEFAULT_USERS;
  
  const stored = localStorage.getItem('registeredUsers');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      return [...DEFAULT_USERS, ...parsed];
    } catch {
      return DEFAULT_USERS;
    }
  }
  return DEFAULT_USERS;
};

// localStorage にユーザーを保存
const saveUser = (user: User) => {
  if (typeof window === 'undefined') return;
  
  const currentStored = localStorage.getItem('registeredUsers');
  let storedUsers: User[] = [];
  
  if (currentStored) {
    try {
      storedUsers = JSON.parse(currentStored);
    } catch {
      storedUsers = [];
    }
  }
  
  storedUsers.push(user);
  localStorage.setItem('registeredUsers', JSON.stringify(storedUsers));
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  const login = (username: string, password: string): boolean => {
    const users = getStoredUsers();
    const validUser = users.find(
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

  const register = (username: string, email: string, password: string): boolean => {
    const users = getStoredUsers();
    
    // ユーザー名の重複チェック
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      return false;
    }

    // 新規ユーザーを作成
    const newUser: User = { username, email, password };
    saveUser(newUser);

    // 自動ログイン
    setIsAuthenticated(true);
    setUser(username);
    localStorage.setItem('auth', 'true');
    localStorage.setItem('user', username);

    return true;
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
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout, user }}>
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