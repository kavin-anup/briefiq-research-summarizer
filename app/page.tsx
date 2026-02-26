'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SplashPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        router.push('/register');
      }, 300);
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1F44] via-[#112B5E] to-[#1E3A8A] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className={`relative z-10 text-center transition-all duration-1000 ${loading ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="mb-8 relative">
          <div className="w-28 h-28 mx-auto bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl">
            <i className="ri-brain-line text-6xl text-white"></i>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1E3A8A] rounded-full animate-ping"></div>
        </div>

        <h1 className="text-5xl font-bold text-white mb-3 tracking-tight">BriefIQ</h1>
        <p className="text-lg text-white/80 mb-12 font-light">AI Powered Scientific Summarizer</p>

        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}