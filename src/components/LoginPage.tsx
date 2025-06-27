"use client";

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import RegisterPage from './RegisterPage';

export default function LoginPage() {
  const [showRegister, setShowRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  if (showRegister) {
    return <RegisterPage onBackToLogin={() => setShowRegister(false)} />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // 簡単な入力検証
    if (!username || !password) {
      setError('ユーザー名とパスワードを入力してください');
      setIsLoading(false);
      return;
    }

    // ログイン試行
    const success = login(username, password);
    
    if (!success) {
      setError('ユーザー名またはパスワードが正しくありません');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="mx-auto h-12 w-12 flex items-center justify-center text-4xl">
            🚀
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            AIローンチくん
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            ログインしてご利用ください
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                ユーザー名
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="ユーザー名を入力"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                パスワード
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none relative block w-full px-3 py-2 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="パスワードを入力"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer z-20"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <div className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700 bg-white rounded border border-gray-300">
                    {showPassword ? "🙈" : "👁️"}
                  </div>
                </button>
              </div>
            </div>
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="text-sm text-red-800">{error}</div>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  ログイン中...
                </div>
              ) : (
                'ログイン'
              )}
            </button>
          </div>

          <div className="text-center">
            <span className="text-sm text-gray-600">アカウントをお持ちでない方は </span>
            <button
              type="button"
              onClick={() => setShowRegister(true)}
              className="text-sm text-green-600 hover:text-green-500 font-medium"
            >
              新規登録
            </button>
          </div>

          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-blue-900 mb-2">🔓 誰でも使えるログイン情報:</h3>
            <div className="text-sm text-blue-800 space-y-2">
              <div className="bg-white p-2 rounded border">
                <div className="font-medium">管理者アカウント</div>
                <div>ユーザー名: <span className="font-mono bg-gray-100 px-1 rounded">admin</span></div>
                <div>パスワード: <span className="font-mono bg-gray-100 px-1 rounded">admin123</span></div>
              </div>
              <div className="bg-white p-2 rounded border">
                <div className="font-medium">一般ユーザー</div>
                <div>ユーザー名: <span className="font-mono bg-gray-100 px-1 rounded">user</span></div>
                <div>パスワード: <span className="font-mono bg-gray-100 px-1 rounded">user123</span></div>
              </div>
              <div className="bg-white p-2 rounded border">
                <div className="font-medium">デモアカウント</div>
                <div>ユーザー名: <span className="font-mono bg-gray-100 px-1 rounded">demo</span></div>
                <div>パスワード: <span className="font-mono bg-gray-100 px-1 rounded">demo123</span></div>
              </div>
            </div>
            <div className="mt-2 text-xs text-blue-600">
              ↑ 上記のどれでもコピー&ペーストしてお使いください
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}