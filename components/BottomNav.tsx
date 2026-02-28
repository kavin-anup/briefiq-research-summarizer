'use client';

import Link from 'next/link';

interface BottomNavProps {
  active: 'home' | 'upload' | 'library' | 'profile';
}

export default function BottomNav({ active }: BottomNavProps) {
  const navItems = [
    { id: 'home', icon: 'ri-home-5-line', activeIcon: 'ri-home-5-fill', label: 'Home', href: '/dashboard' },
    { id: 'upload', icon: 'ri-upload-cloud-line', activeIcon: 'ri-upload-cloud-fill', label: 'Upload', href: '/upload' },
    { id: 'library', icon: 'ri-book-line', activeIcon: 'ri-book-fill', label: 'Library', href: '/library' },
    { id: 'profile', icon: 'ri-user-line', activeIcon: 'ri-user-fill', label: 'Profile', href: '/profile' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-4 pointer-events-none">
      <div className="bg-white/70 backdrop-blur-2xl border border-white/80 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(16,39,88,0.15)] pointer-events-auto mx-auto max-w-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-50 pointer-events-none"></div>
        <div className="flex items-center justify-around px-2 py-3 relative z-10">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <Link key={item.id} href={item.href}>
                <div className="relative group px-4 py-2 flex flex-col items-center">
                  <div className={`absolute inset-0 rounded-[1.2rem] transition-all duration-300 ${isActive ? 'bg-primary shadow-[0_5px_15px_-5px_rgba(16,39,88,0.3)] scale-100 opacity-100' : 'bg-primary/5 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100'} -z-10`}></div>
                  <i className={`${isActive ? item.activeIcon : item.icon} text-[1.4rem] transition-all duration-300 ${isActive ? 'text-white translate-y-[-2px]' : 'text-primary/40 group-hover:text-primary group-hover:translate-y-[-2px]'
                    }`}></i>
                  <span className={`text-[9px] font-black uppercase tracking-widest mt-1 transition-all duration-300 ${isActive ? 'text-white' : 'text-primary/40 group-hover:text-primary'
                    }`}>
                    {item.label}
                  </span>

                  {isActive && (
                    <div className="absolute -top-1 w-1 h-1 bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,0.8)]"></div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}