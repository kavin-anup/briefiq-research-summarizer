
'use client';

import { useState } from 'react';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';
import { useBriefIQMode } from '@/components/useBriefIQMode';

export default function LibraryPage() {
  const mode = useBriefIQMode();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const medicalFilters = ['All', 'Cardiology', 'Neurology', 'Oncology', 'Pediatrics', 'Radiology'];
  const generalFilters = ['All', 'Physics', 'Biology', 'Social Sciences', 'Engineering', 'Psychology'];

  const filters = mode === 'medical' ? medicalFilters : generalFilters;

  const medicalSummaries = [
    { id: 1, title: 'Novel Approaches to Cardiac Arrhythmia Management', preview: 'Personalized treatment protocols combining advanced electrophysiological mapping with AI-assisted risk stratification...', date: '2024-01-15', category: 'Cardiology', duration: '4 min read', icon: 'ri-heart-pulse-line' },
    { id: 2, title: 'Advances in Minimally Invasive Cardiac Surgery', preview: 'Robotic-assisted cardiac procedures have shown promising results in reducing recovery time and improving patient outcomes...', date: '2024-01-14', category: 'Cardiology', duration: '5 min read', icon: 'ri-surgical-mask-line' },
    { id: 3, title: 'Biomarkers in Heart Failure Diagnosis', preview: 'Emerging biomarkers provide new insights into early detection and prognosis of heart failure in high-risk populations...', date: '2024-01-13', category: 'Cardiology', duration: '3 min read', icon: 'ri-test-tube-line' },
    { id: 4, title: 'Neuroplasticity in Stroke Recovery', preview: 'Understanding brain adaptation mechanisms following stroke events reveals new rehabilitation pathways...', date: '2024-01-12', category: 'Neurology', duration: '6 min read', icon: 'ri-brain-line' },
    { id: 5, title: 'Immunotherapy Advances in Lung Cancer', preview: 'Novel checkpoint inhibitors show promising results in treatment of advanced non-small cell lung cancer...', date: '2024-01-11', category: 'Oncology', duration: '5 min read', icon: 'ri-microscope-line' },
    { id: 6, title: 'Pediatric Vaccine Efficacy in Low-Income Settings', preview: 'Multi-country study evaluates immunization coverage and efficacy across 12 low-income nations...', date: '2024-01-10', category: 'Pediatrics', duration: '4 min read', icon: 'ri-shield-check-line' },
  ];

  const generalSummaries = [
    { id: 1, title: 'Quantum Entanglement and Its Applications in Secure Communication', preview: 'Breakthrough in quantum key distribution achieving 99.7% fidelity over 500km fiber optic networks...', date: '2024-01-15', category: 'Physics', duration: '5 min read', icon: 'ri-atom-line' },
    { id: 2, title: 'CRISPR-Cas9 Gene Editing in Drought-Resistant Crop Development', preview: 'Targeted gene modifications in wheat and maize genomes yield 40% improvement in drought tolerance...', date: '2024-01-14', category: 'Biology', duration: '4 min read', icon: 'ri-plant-line' },
    { id: 3, title: 'Social Media Algorithms and Political Polarization: A Meta-Analysis', preview: 'Analysis of 47 studies across 18 countries reveals consistent correlation between algorithmic curation and polarization...', date: '2024-01-13', category: 'Social Sciences', duration: '6 min read', icon: 'ri-group-line' },
    { id: 4, title: 'Large Language Models in Scientific Literature Review', preview: 'Comparative study of GPT-4 and domain-specific models for automated systematic review generation...', date: '2024-01-12', category: 'Engineering', duration: '5 min read', icon: 'ri-cpu-line' },
    { id: 5, title: 'Cognitive Biases in Financial Decision-Making Under Uncertainty', preview: 'Behavioral economics study of 2,400 participants reveals systematic loss-aversion patterns in volatile markets...', date: '2024-01-11', category: 'Psychology', duration: '4 min read', icon: 'ri-mental-health-line' },
    { id: 6, title: 'Carbon Capture Efficiency in Direct Air Capture Systems', preview: 'Novel sorbent materials achieve 3x improvement in CO₂ capture efficiency at ambient temperature...', date: '2024-01-10', category: 'Engineering', duration: '5 min read', icon: 'ri-leaf-line' },
  ];

  const allSummaries = mode === 'medical' ? medicalSummaries : generalSummaries;

  const filteredSummaries = allSummaries.filter(s => {
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.preview.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || s.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const modeConfig = {
    medical: { icon: 'ri-heart-pulse-line', label: 'Medical Research', categoryLabel: 'Specialty' },
    general: { icon: 'ri-flask-line', label: 'General Research', categoryLabel: 'Field' }
  };
  const cfg = modeConfig[mode];

  return (
    <div className="min-h-screen bg-[#F0F4F8] pb-24 relative overflow-hidden">
      {/* Futuristic Background Grids/Blobs */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] mix-blend-multiply top-[-10%] left-[-10%] animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] mix-blend-multiply bottom-[10%] right-[-10%]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,39,88,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,39,88,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10">
        <div className="px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-black tracking-tight text-primary">My Library</h1>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 backdrop-blur-md rounded-[1rem] border border-primary/10 shadow-sm">
              <i className={`${cfg.icon} text-primary text-sm`}></i>
              <span className="text-primary text-xs font-bold uppercase tracking-wider">{cfg.label}</span>
            </div>
          </div>

          <div className="relative group">
            <i className="ri-search-line absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors w-5 h-5 flex items-center justify-center"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search data nodes..."
              className="w-full pl-14 pr-5 py-4 bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
            />
          </div>
        </div>
      </div>

      <div className="px-6 py-6 relative z-10 w-full">
        <div className="flex gap-3 overflow-x-auto pb-2 mb-6 scrollbar-hide snap-x">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2.5 rounded-[1.2rem] font-bold text-xs whitespace-nowrap transition-all duration-300 snap-start border cursor-pointer ${selectedFilter === filter
                ? 'bg-primary text-white border-primary shadow-[0_10px_20px_-10px_rgba(16,39,88,0.4)] transform -translate-y-0.5'
                : 'bg-white/50 text-primary/60 border-white/80 hover:bg-white/80 hover:text-primary hover:border-white shadow-sm'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {filteredSummaries.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white/40 backdrop-blur-xl rounded-[2rem] border border-white/80 shadow-[0_10px_30px_-15px_rgba(16,39,88,0.05)] mt-4">
            <div className="w-24 h-24 mx-auto bg-white rounded-[2rem] border border-white/80 flex items-center justify-center mb-6 shadow-sm">
              <i className="ri-file-search-line w-10 h-10 flex items-center justify-center text-primary/30 text-4xl"></i>
            </div>
            <h3 className="text-2xl font-black text-primary mb-2 tracking-tight">No Results Found</h3>
            <p className="text-primary/60 mb-8 font-medium">Matrix query returned empty. Adjust parameters.</p>
            <Link href="/upload" className="inline-block group">
              <button className="bg-primary text-white px-8 py-4 rounded-[1.5rem] font-bold hover:shadow-[0_10px_20px_-10px_rgba(16,39,88,0.4)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-3">
                <i className="ri-upload-cloud-line text-lg"></i>
                Upload Paper
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
              </button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredSummaries.map((summary) => (
              <Link key={summary.id} href={`/summary/${summary.id}`} className="block">
                <div className="bg-white/50 backdrop-blur-md rounded-[2rem] p-5 shadow-[0_10px_30px_-15px_rgba(16,39,88,0.05)] border border-white/80 hover:border-primary/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 relative group overflow-hidden mb-4">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white border border-white shadow-sm rounded-[1.2rem] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 relative z-10">
                      <i className={`${summary.icon} text-2xl text-primary`}></i>
                    </div>
                    <div className="flex-1 min-w-0 relative z-10">
                      <div className="flex items-start justify-between mb-2 gap-3">
                        <h3 className="font-bold text-primary line-clamp-2 flex-1 text-sm leading-snug">{summary.title}</h3>
                        <span className="ml-2 px-2.5 py-1 bg-white shadow-sm text-secondary text-[9px] uppercase tracking-wider font-extrabold rounded-lg whitespace-nowrap flex-shrink-0 border border-secondary/20">
                          {summary.category}
                        </span>
                      </div>
                      <p className="text-xs text-primary/60 line-clamp-2 mb-4 leading-relaxed font-medium">{summary.preview}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-[10px] text-primary/40 font-bold uppercase tracking-wider">
                          <span className="flex items-center gap-1">
                            <i className="ri-calendar-line text-sm"></i>
                            {summary.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <i className="ri-time-line text-sm"></i>
                            {summary.duration}
                          </span>
                        </div>
                        <button className="w-8 h-8 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer shadow-sm group-hover:animate-pulse">
                          <i className="ri-arrow-right-line text-sm"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <BottomNav active="library" />
    </div>
  );
}
