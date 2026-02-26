'use client';

import { useState } from 'react';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

export default function ProfilePage() {
  const [userName] = useState('Dr. Sarah Chen');
  const [userEmail] = useState('sarah.chen@hospital.com');
  const [userSpecialty] = useState('Cardiology');

  const stats = [
    { label: 'Papers Uploaded', value: '24', icon: 'ri-file-upload-line', color: 'from-blue-500 to-blue-600' },
    { label: 'Summaries Generated', value: '24', icon: 'ri-file-text-line', color: 'from-purple-500 to-purple-600' },
    { label: 'Hours Saved', value: '18', icon: 'ri-time-line', color: 'from-green-500 to-green-600' }
  ];

  const menuItems = [
    { icon: 'ri-user-line', label: 'Edit Profile', link: '#' },
    { icon: 'ri-notification-3-line', label: 'Notifications', link: '#' },
    { icon: 'ri-settings-3-line', label: 'Settings', link: '#' },
    { icon: 'ri-question-line', label: 'Help & Support', link: '#' },
    { icon: 'ri-shield-check-line', label: 'Privacy Policy', link: '#' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f6f9] to-[#e8edf5] pb-24">
      <div className="bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] text-white pb-20">
        <div className="px-6 py-8">
          <h1 className="text-2xl font-bold mb-8">Profile</h1>
          
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border-4 border-white/30 shadow-2xl">
              <span className="text-4xl font-bold text-white">SC</span>
            </div>
            <h2 className="text-2xl font-bold mb-1">{userName}</h2>
            <p className="text-white/80 mb-2">{userEmail}</p>
            <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
              <p className="text-sm font-semibold">{userSpecialty}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-12">
        <div className="grid grid-cols-3 gap-3 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 text-center">
              <div className={`w-12 h-12 mx-auto bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-3 shadow-lg`}>
                <i className={`${stat.icon} w-6 h-6 flex items-center justify-center text-white`}></i>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-xs text-gray-600 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-6">
          <div className="p-5 border-b border-gray-100">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              <i className="ri-vip-crown-line w-5 h-5 flex items-center justify-center text-[#1E3A8A]"></i>
              Subscription Plan
            </h3>
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-bold text-gray-900 text-lg">Professional Plan</p>
                <p className="text-sm text-gray-600">Unlimited summaries</p>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] text-white rounded-xl font-semibold text-sm">
                Active
              </div>
            </div>
            <button className="w-full py-3 bg-[#f4f6f9] text-gray-900 rounded-2xl font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap">
              Manage Subscription
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-6">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.link}>
              <div className={`flex items-center justify-between p-5 hover:bg-[#f4f6f9] transition-colors cursor-pointer ${
                index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#f4f6f9] rounded-xl flex items-center justify-center">
                    <i className={`${item.icon} w-5 h-5 flex items-center justify-center text-[#1E3A8A]`}></i>
                  </div>
                  <span className="font-semibold text-gray-900">{item.label}</span>
                </div>
                <i className="ri-arrow-right-s-line w-5 h-5 flex items-center justify-center text-gray-400"></i>
              </div>
            </Link>
          ))}
        </div>

        <button className="w-full bg-white text-red-600 py-4 rounded-2xl font-bold border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg whitespace-nowrap flex items-center justify-center gap-2">
          <i className="ri-logout-box-line w-5 h-5 flex items-center justify-center"></i>
          Logout
        </button>
      </div>

      <BottomNav active="profile" />
    </div>
  );
}