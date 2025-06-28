"use client";

import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '@/context/AuthContext';

interface GoogleUserInfo {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name?: string;
  given_name?: string;
  iat: number;
  iss: string;
  jti: string;
  name: string;
  nbf: number;
  picture: string;
  sub: string;
}

export default function LoginPage() {
  const { login } = useAuth();

  const handleGoogleSuccess = (response: CredentialResponse) => {
    if (response.credential) {
      const userInfo = jwtDecode<GoogleUserInfo>(response.credential);
      login({
        id: userInfo.sub,
        name: userInfo.name,
        email: userInfo.email,
        picture: userInfo.picture
      });
    }
  };

  const handleGoogleError = () => {
    console.error('Google login failed');
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
            Googleアカウントでログインしてください
          </p>
        </div>
        
        <div className="mt-8 space-y-6">
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}

              theme="outline"
              size="large"
              text="signin_with"
              shape="rectangular"
              locale="ja"
            />
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Googleアカウントでログインすることで、利用規約とプライバシーポリシーに同意したものとみなされます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}