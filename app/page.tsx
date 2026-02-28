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
    <div className="min-h-screen bg-[#F0F4F8] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Futuristic Background Grids/Blobs */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-multiply top-[-20%] left-[-10%] animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] mix-blend-multiply bottom-[-10%] right-[-10%]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,39,88,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,39,88,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className={`relative z-10 flex flex-col items-center justify-center w-full transition-all duration-1000 ${loading ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-95'}`}>
        {/* Sleek Logo Container */}
        <div className="mb-12 relative group">
          <div className="w-32 h-32 mx-auto bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white/80 shadow-[0_20px_40px_-15px_rgba(16,39,88,0.1)] flex items-center justify-center p-6 transform transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-3 relative z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
            <img src="/logo.png" alt="BriefIQ Logo" className="w-full h-full object-contain filter drop-shadow-md" />
          </div>
          {/* Orbiting futuristic dot */}
          <div className="absolute top-0 right-0 w-full h-full animate-[spin_4s_linear_infinite] pointer-events-none">
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full shadow-[0_0_15px_rgba(120,178,145,0.6)] border-2 border-white"></div>
          </div>
        </div>

        <h1 className="text-6xl font-black text-primary mb-4 tracking-tighter shadow-sm" style={{ fontFamily: 'var(--font-geist-sans)' }}>BriefIQ</h1>
        <p className="text-sm sm:text-lg text-primary/60 mb-16 font-semibold tracking-[0.2em] uppercase">AI Summarization Matrix</p>

        {/* Futuristic loader */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-2 rounded-full overflow-hidden relative bg-primary/10" style={{ height: '32px' }}>
            <div className="absolute bottom-0 left-0 w-full bg-primary animate-[bounce_1s_ease-in-out_infinite]" style={{ height: '100%', animationDelay: '0ms' }}></div>
          </div>
          <div className="w-2 rounded-full overflow-hidden relative bg-primary/10" style={{ height: '48px' }}>
            <div className="absolute bottom-0 left-0 w-full bg-secondary animate-[bounce_1s_ease-in-out_infinite]" style={{ height: '100%', animationDelay: '150ms' }}></div>
          </div>
          <div className="w-2 rounded-full overflow-hidden relative bg-primary/10" style={{ height: '32px' }}>
            <div className="absolute bottom-0 left-0 w-full bg-primary animate-[bounce_1s_ease-in-out_infinite]" style={{ height: '100%', animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}