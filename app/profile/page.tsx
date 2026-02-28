'use client';

import { useState } from 'react';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

export default function ProfilePage() {
  const [userName] = useState('Dr. Sarah Chen');
  const [userEmail] = useState('sarah.chen@hospital.com');
  const [userSpecialty] = useState('Cardiology');

  const stats = [
    { label: 'Papers Uploaded', value: '24', icon: 'ri-file-upload-line', color: 'bg-[#F1F5F9] text-gray-700' },
    { label: 'Summaries Generated', value: '24', icon: 'ri-file-text-line', color: 'bg-primary/5 text-primary' },
    { label: 'Hours Saved', value: '18', icon: 'ri-time-line', color: 'bg-secondary/10 text-secondary' }
  ];

  const menuItems = [
    { icon: 'ri-user-line', label: 'Edit Profile', link: '#' },
    { icon: 'ri-notification-3-line', label: 'Notifications', link: '#' },
    { icon: 'ri-settings-3-line', label: 'Settings', link: '#' },
    { icon: 'ri-question-line', label: 'Help & Support', link: '#' },
    { icon: 'ri-shield-check-line', label: 'Privacy Policy', link: '#' }
  ];

  return (
    <div className="min-h-screen bg-[#F0F4F8] pb-36 relative overflow-hidden">
      {/* Futuristic Background Grids/Blobs */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] mix-blend-multiply top-[-10%] left-[-10%] animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] mix-blend-multiply bottom-[10%] right-[-10%]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,39,88,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,39,88,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10">
        <div className="px-6 py-8">
          <h1 className="text-4xl font-black mb-10 tracking-tight text-primary">Identity Profile</h1>

          <div className="flex flex-col items-center bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-[0_20px_40px_-15px_rgba(16,39,88,0.1)] border border-white/80 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none group-hover:bg-primary/10 transition-colors duration-500"></div>

            <div className="w-28 h-28 bg-white rounded-[2rem] flex items-center justify-center mb-6 shadow-[0_10px_30px_-10px_rgba(16,39,88,0.15)] border border-white relative z-10 group-hover:scale-105 transition-transform duration-500">
              <span className="text-4xl font-black text-primary tracking-tighter">SC</span>
            </div>

            <h2 className="text-2xl font-black mb-1 tracking-tight text-primary relative z-10">{userName}</h2>
            <p className="text-primary/60 mb-5 text-sm font-medium relative z-10">{userEmail}</p>

            <div className="px-6 py-2 bg-primary/5 backdrop-blur-md rounded-full border border-primary/10 shadow-sm relative z-10">
              <p className="text-xs font-black text-primary uppercase tracking-widest">{userSpecialty}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 relative z-20 w-full mt-2">
        <div className="grid grid-cols-3 gap-3 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-xl rounded-[1.5rem] p-4 shadow-[0_10px_20px_-10px_rgba(16,39,88,0.05)] border border-white/80 text-center transform hover:-translate-y-1 transition-all duration-300">
              <div className={`w-12 h-12 mx-auto ${index === 0 ? 'bg-primary/5 text-primary' : index === 1 ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'} border border-white shadow-sm rounded-[1rem] flex items-center justify-center mb-3`}>
                <i className={`${stat.icon} text-xl flex items-center justify-center text-inherit`}></i>
              </div>
              <p className="text-2xl font-black text-primary mb-1">{stat.value}</p>
              <p className="text-[9px] text-primary/50 font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/60 backdrop-blur-xl rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(16,39,88,0.1)] border border-white/80 overflow-hidden mb-6 group relative">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>
          <div className="p-5 border-b border-white/80 bg-white/40">
            <h3 className="font-black text-primary flex items-center gap-3 text-sm uppercase tracking-wide">
              <div className="w-8 h-8 rounded-[0.8rem] bg-secondary/20 border border-secondary/30 flex items-center justify-center shadow-sm">
                <i className="ri-vip-crown-line text-sm flex items-center justify-center text-secondary"></i>
              </div>
              Matrix Access Level
            </h3>
          </div>
          <div className="p-5 relative z-10">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="font-black text-primary text-lg tracking-tight">Professional Sync</p>
                <p className="text-xs font-medium text-primary/60 uppercase tracking-widest mt-1">Unlimited Query Capacity</p>
              </div>
              <div className="px-4 py-2 bg-secondary/10 border border-secondary/20 text-secondary rounded-[1rem] font-medium text-xs shadow-sm shadow-secondary/5">
                Active
              </div>
            </div>
            <button className="w-full py-4 bg-white border border-white shadow-sm text-primary rounded-[1.5rem] font-medium hover:bg-primary/5 transition-colors whitespace-nowrap cursor-pointer">
              Modify Protocol
            </button>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-xl rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(16,39,88,0.1)] border border-white/80 overflow-hidden mb-6">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.link}>
              <div className={`flex items-center justify-between p-5 hover:bg-white/80 transition-colors cursor-pointer group ${index !== menuItems.length - 1 ? 'border-b border-white/80' : ''
                }`}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white shadow-sm rounded-[1rem] flex items-center justify-center border border-white group-hover:scale-105 transition-transform duration-300">
                    <i className={`${item.icon} text-lg flex items-center justify-center text-primary`}></i>
                  </div>
                  <span className="font-medium text-primary text-sm">{item.label}</span>
                </div>
                <i className="ri-arrow-right-s-line text-xl flex items-center justify-center text-primary/30 group-hover:text-primary transition-colors group-hover:translate-x-1"></i>
              </div>
            </Link>
          ))}
        </div>

        <button className="w-full bg-red-500/5 backdrop-blur-xl text-red-500 !py-3 rounded-[1.5rem] font-medium border border-red-500/10 hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-300 shadow-sm whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer group">
          <i className="ri-logout-box-line text-lg flex items-center justify-center group-hover:-translate-x-1 transition-transform"></i>
          Disconnect Session
        </button>
      </div>

      <BottomNav active="profile" />
    </div>
  );
}