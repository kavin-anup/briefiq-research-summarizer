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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 rounded-t-3xl shadow-2xl z-50">
      <div className="flex items-center justify-around px-4 py-3">
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <Link key={item.id} href={item.href}>
              <div className={`flex flex-col items-center gap-1 px-6 py-2 rounded-2xl transition-all duration-300 cursor-pointer ${
                isActive ? 'bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] shadow-lg' : 'hover:bg-[#f4f6f9]'
              }`}>
                <i className={`${isActive ? item.activeIcon : item.icon} w-6 h-6 flex items-center justify-center ${
                  isActive ? 'text-white' : 'text-gray-600'
                }`}></i>
                <span className={`text-xs font-semibold ${
                  isActive ? 'text-white' : 'text-gray-600'
                }`}>
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}