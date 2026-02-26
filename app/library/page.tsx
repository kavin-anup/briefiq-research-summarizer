
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
    <div className="min-h-screen bg-gradient-to-br from-[#f4f6f9] to-[#e8edf5] pb-24">
      <div className="bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] text-white">
        <div className="px-6 py-8">
          <div className="flex items-center justify-between mb-5">
            <h1 className="text-2xl font-bold">My Library</h1>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/15 rounded-xl border border-white/20">
              <i className={`${cfg.icon} text-white/90 text-sm`}></i>
              <span className="text-white/90 text-xs font-semibold">{cfg.label}</span>
            </div>
          </div>

          <div className="relative">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5 flex items-center justify-center"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search summaries..."
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30 focus:bg-white/15 transition-all text-sm shadow-inner"
            />
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 cursor-pointer ${selectedFilter === filter
                ? 'bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] text-white shadow-[0_4px_15px_rgb(0,0,0,0.12)]'
                : 'bg-white/80 backdrop-blur-md text-gray-600 border border-white/50 hover:border-[#1E3A8A]/20 hover:shadow-[0_4px_15px_rgb(0,0,0,0.04)]'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {filteredSummaries.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#0A1F44] to-[#1E3A8A] rounded-3xl flex items-center justify-center mb-6 shadow-xl">
              <i className="ri-file-search-line w-12 h-12 flex items-center justify-center text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No summaries found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
            <Link href="/upload">
              <button className="bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer">
                Upload New Paper
              </button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredSummaries.map((summary) => (
              <Link key={summary.id} href={`/summary/${summary.id}`}>
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 cursor-pointer transform hover:-translate-y-1 relative overflow-hidden mb-4">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0A1F44] to-[#1E3A8A] opacity-80"></div>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0A1F44] to-[#1E3A8A] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <i className={`${summary.icon} w-7 h-7 flex items-center justify-center text-white`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2 gap-3">
                        <h3 className="font-bold text-gray-900 line-clamp-2 flex-1 text-sm leading-relaxed">{summary.title}</h3>
                        <span className="ml-2 px-3 py-1 bg-[#1E3A8A]/5 text-[#1E3A8A] text-[10px] uppercase tracking-wider font-bold rounded-lg whitespace-nowrap flex-shrink-0 border border-[#1E3A8A]/10">
                          {summary.category}
                        </span>
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
                        <button className="w-8 h-8 bg-[#1E3A8A] text-white rounded-xl flex items-center justify-center hover:bg-[#0A1F44] transition-colors cursor-pointer">
                          <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
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
