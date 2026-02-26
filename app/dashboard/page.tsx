
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';
import { useBriefIQMode } from '@/components/useBriefIQMode';

export default function DashboardPage() {
  const mode = useBriefIQMode();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [userName] = useState(mode === 'medical' ? 'Dr. Sarah Chen' : 'Alex Rivera');

  const medicalCategories = ['Cardiology', 'Neurology', 'Oncology', 'Pediatrics', 'Radiology'];
  const generalCategories = ['Physics', 'Biology', 'Social Sciences', 'Engineering', 'Psychology'];

  const categories = mode === 'medical' ? medicalCategories : generalCategories;

  useEffect(() => {
    setSelectedCategory(categories[0]);
  }, [mode]);

  const medicalSummaries = [
    {
      id: 1,
      title: 'Novel Approaches to Cardiac Arrhythmia Management',
      preview: 'Personalized treatment protocols combining advanced electrophysiological mapping with AI-assisted risk stratification significantly improve outcomes in elderly patients...',
      date: '2024-01-15',
      category: 'Cardiology',
      duration: '4 min read',
      icon: 'ri-heart-pulse-line'
    },
    {
      id: 2,
      title: 'Advances in Minimally Invasive Cardiac Surgery',
      preview: 'Robotic-assisted cardiac procedures have shown promising results in reducing recovery time and improving patient outcomes across multiple centers...',
      date: '2024-01-14',
      category: 'Cardiology',
      duration: '5 min read',
      icon: 'ri-surgical-mask-line'
    },
    {
      id: 3,
      title: 'Biomarkers in Heart Failure Diagnosis',
      preview: 'Emerging biomarkers provide new insights into early detection and prognosis of heart failure in high-risk populations with significant clinical implications...',
      date: '2024-01-13',
      category: 'Cardiology',
      duration: '3 min read',
      icon: 'ri-test-tube-line'
    }
  ];

  const generalSummaries = [
    {
      id: 1,
      title: 'Quantum Entanglement and Its Applications in Secure Communication',
      preview: 'This study demonstrates a breakthrough in quantum key distribution achieving 99.7% fidelity over 500km fiber optic networks, enabling truly unbreakable encryption...',
      date: '2024-01-15',
      category: 'Physics',
      duration: '5 min read',
      icon: 'ri-atom-line'
    },
    {
      id: 2,
      title: 'CRISPR-Cas9 Gene Editing in Drought-Resistant Crop Development',
      preview: 'Targeted gene modifications in wheat and maize genomes yield 40% improvement in drought tolerance without compromising yield, offering solutions to food security...',
      date: '2024-01-14',
      category: 'Biology',
      duration: '4 min read',
      icon: 'ri-plant-line'
    },
    {
      id: 3,
      title: 'Social Media Algorithms and Political Polarization: A Meta-Analysis',
      preview: 'Analysis of 47 studies across 18 countries reveals consistent correlation between algorithmic content curation and increased ideological polarization in democratic societies...',
      date: '2024-01-13',
      category: 'Social Sciences',
      duration: '6 min read',
      icon: 'ri-group-line'
    }
  ];

  const summaries = mode === 'medical' ? medicalSummaries : generalSummaries;

  const modeConfig = {
    medical: {
      greeting: 'Dr.',
      label: 'Medical Research',
      icon: 'ri-heart-pulse-line',
      tip: 'Listen to your summaries while commuting or between appointments. Perfect for busy medical professionals.',
      tipTitle: 'Clinical Tip',
      categoryLabel: 'Specialty'
    },
    general: {
      greeting: '',
      label: 'General Research',
      icon: 'ri-flask-line',
      tip: 'Use audio playback to absorb research findings while multitasking. Ideal for researchers on the go.',
      tipTitle: 'Research Tip',
      categoryLabel: 'Field'
    }
  };

  const cfg = modeConfig[mode];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f6f9] to-[#e8edf5] pb-24">
      <div className="bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] text-white">
        <div className="px-6 py-8">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-white/70 text-sm mb-1">Welcome back</p>
              <h1 className="text-2xl font-bold">{cfg.greeting} {userName}</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-xl border border-white/20 flex items-center gap-1.5">
                <i className={`${cfg.icon} text-white/90 text-sm`}></i>
                <span className="text-white/90 text-xs font-semibold">{cfg.label}</span>
              </div>
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                <i className="ri-notification-3-line w-5 h-5 flex items-center justify-center"></i>
              </div>
            </div>
          </div>

          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">{cfg.categoryLabel}</p>
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-white text-[#0A1F44] shadow-lg'
                      : 'bg-white/15 text-white/80 border border-white/20 hover:bg-white/25'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-4">
        <Link href="/upload">
          <button className="w-full bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] text-white py-5 rounded-3xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 shadow-xl whitespace-nowrap flex items-center justify-center gap-3 transform hover:scale-[1.02]">
            <i className="ri-upload-cloud-line w-6 h-6 flex items-center justify-center"></i>
            Upload New Paper
          </button>
        </Link>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-gray-900">Recent Summaries</h2>
            <Link href="/library" className="text-[#1E3A8A] text-sm font-semibold hover:underline">
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {summaries.map((summary) => (
              <Link key={summary.id} href={`/summary/${summary.id}`}>
                <div className="bg-white rounded-3xl p-5 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] relative overflow-hidden mb-4">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0A1F44] to-[#1E3A8A]"></div>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0A1F44] to-[#1E3A8A] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <i className={`${summary.icon} w-7 h-7 flex items-center justify-center text-white`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-bold text-gray-900 line-clamp-2 flex-1 text-sm leading-snug">{summary.title}</h3>
                        <span className="px-2.5 py-1 bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs font-semibold rounded-xl whitespace-nowrap flex-shrink-0">{summary.category}</span>
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed">{summary.preview}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <i className="ri-calendar-line w-3.5 h-3.5 flex items-center justify-center"></i>
                            {summary.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <i className="ri-time-line w-3.5 h-3.5 flex items-center justify-center"></i>
                            {summary.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="w-8 h-8 bg-[#f4f6f9] rounded-xl flex items-center justify-center hover:bg-[#1E3A8A] hover:text-white transition-colors">
                            <i className="ri-volume-up-line w-4 h-4 flex items-center justify-center"></i>
                          </button>
                          <button className="w-8 h-8 bg-[#1E3A8A] text-white rounded-xl flex items-center justify-center hover:bg-[#0A1F44] transition-colors">
                            <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-4 bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0A1F44] to-[#1E3A8A] rounded-2xl flex items-center justify-center">
              <i className="ri-lightbulb-line w-6 h-6 flex items-center justify-center text-white"></i>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">{cfg.tipTitle}</h3>
              <p className="text-xs text-gray-500">Save time with audio summaries</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">{cfg.tip}</p>
        </div>
      </div>

      <BottomNav active="home" />
    </div>
  );
}
