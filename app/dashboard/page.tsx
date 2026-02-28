
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
    <div className="min-h-screen bg-[#F0F4F8] pb-24 relative overflow-hidden">
      {/* Futuristic Background Grids/Blobs */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] mix-blend-multiply top-[-10%] right-[-10%] animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] mix-blend-multiply bottom-[10%] left-[-10%]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,39,88,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,39,88,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10">
        <div className="px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/60 backdrop-blur-xl rounded-[1.2rem] shadow-[0_5px_15px_-5px_rgba(16,39,88,0.1)] border border-white/80 flex items-center justify-center p-2">
                <img src="/logo.png" alt="BriefIQ" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-primary">BriefIQ</span>
            </div>
            <button className="w-12 h-12 bg-white/60 backdrop-blur-xl rounded-[1.2rem] flex items-center justify-center border border-white/80 shadow-[0_5px_15px_-5px_rgba(16,39,88,0.1)] text-primary/60 hover:text-primary hover:bg-white/80 transition-all cursor-pointer">
              <i className="ri-notification-3-line text-lg flex items-center justify-center"></i>
            </button>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-secondary font-medium text-xs uppercase tracking-wider mb-1">Welcome back</p>
              <h1 className="text-3xl font-black tracking-tight text-primary leading-none">{cfg.greeting} {userName}</h1>
            </div>
            <div className="px-4 py-2 bg-primary/5 backdrop-blur-md rounded-[1rem] border border-primary/10 flex items-center gap-2 shadow-sm">
              <i className={`${cfg.icon} text-primary text-sm`}></i>
              <span className="text-primary text-xs font-medium uppercase tracking-wider">{cfg.label}</span>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-primary/50 text-[10px] font-black uppercase tracking-widest mb-3 pl-1">{cfg.categoryLabel}</p>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-[1.2rem] text-xs font-medium whitespace-nowrap transition-all duration-300 snap-start border ${selectedCategory === cat
                    ? 'bg-primary text-white border-primary shadow-[0_10px_20px_-10px_rgba(16,39,88,0.4)] transform -translate-y-0.5'
                    : 'bg-white/50 text-primary/60 border-white/80 hover:bg-white/80 hover:text-primary hover:border-white shadow-sm'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 relative z-10 w-full mb-6 mt-2">
        <Link href="/upload" className="block transition-all duration-300 hover:-translate-y-1 hover:!z-10 group relative">
          <div className="absolute inset-0 bg-secondary/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <button className="w-full bg-white/60 backdrop-blur-xl text-primary py-5 rounded-[2rem] font-medium text-lg shadow-[0_10px_30px_-10px_rgba(16,39,88,0.1)] border border-white/80 hover:bg-white/80 whitespace-nowrap flex items-center justify-center gap-3 relative z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <i className="ri-upload-cloud-line w-5 h-5 flex items-center justify-center text-primary"></i>
            </div>
            Initialize Matrix Uplink
          </button>
        </Link>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-5 px-1">
            <h2 className="text-xl font-black text-primary tracking-tight">Recent Nodes</h2>
            <Link href="/library" className="text-secondary text-xs uppercase tracking-wider font-medium hover:text-primary transition-colors flex items-center gap-1">
              View All <i className="ri-arrow-right-line"></i>
            </Link>
          </div>

          <div className="space-y-4">
            {summaries.map((summary) => (
              <Link key={summary.id} href={`/summary/${summary.id}`} className="block">
                <div className="bg-white/50 backdrop-blur-md rounded-[2rem] p-5 shadow-[0_10px_30px_-15px_rgba(16,39,88,0.05)] border border-white/80 hover:border-primary/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 group relative overflow-hidden mb-4">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white border border-white shadow-sm rounded-[1.2rem] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 relative z-10">
                      <i className={`${summary.icon} text-2xl text-primary`}></i>
                    </div>
                    <div className="flex-1 min-w-0 relative z-10">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-medium text-primary line-clamp-2 flex-1 text-sm leading-snug">{summary.title}</h3>
                        <span className="px-2.5 py-1 bg-white border border-secondary/20 shadow-sm text-secondary text-[9px] uppercase tracking-wider font-semibold rounded-lg whitespace-nowrap flex-shrink-0">{summary.category}</span>
                      </div>
                      <p className="text-xs text-primary/60 line-clamp-2 mb-4 leading-relaxed font-medium">{summary.preview}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-[10px] text-primary/40 font-medium uppercase tracking-wider">
                          <span className="flex items-center gap-1">
                            <i className="ri-calendar-line text-sm"></i>
                            {summary.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <i className="ri-time-line text-sm"></i>
                            {summary.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="w-8 h-8 bg-white border border-white/80 shadow-sm rounded-xl flex items-center justify-center text-primary/40 hover:text-primary hover:border-primary/20 transition-all cursor-pointer">
                            <i className="ri-volume-up-line text-sm"></i>
                          </button>
                          <button className="w-8 h-8 bg-primary text-white shadow-sm rounded-xl flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer group-hover:animate-pulse">
                            <i className="ri-arrow-right-line text-sm"></i>
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

        <div className="mt-6 bg-white/60 backdrop-blur-xl rounded-[2rem] p-6 shadow-[0_10px_40px_-10px_rgba(16,39,88,0.1)] border border-primary/10 relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors"></div>
          <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          <div className="flex items-center gap-4 mb-3 relative z-10">
            <div className="w-12 h-12 bg-white rounded-[1.2rem] shadow-[0_5px_15px_-5px_rgba(16,39,88,0.1)] border border-white flex items-center justify-center">
              <i className="ri-lightbulb-line text-xl text-secondary"></i>
            </div>
            <div>
              <h3 className="font-black text-primary tracking-tight text-base uppercase">{cfg.tipTitle}</h3>
              <p className="text-xs font-medium text-primary/50 uppercase tracking-widest">Protocol Recommendation</p>
            </div>
          </div>
          <p className="text-sm text-primary/80 leading-relaxed font-medium relative z-10 mt-3">{cfg.tip}</p>
        </div>
      </div>

      <BottomNav active="home" />
    </div>
  );
}
