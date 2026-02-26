
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useBriefIQMode } from '@/components/useBriefIQMode';

interface SummaryDetailProps {
  summaryId: string;
}

export default function SummaryDetail({ summaryId }: SummaryDetailProps) {
  const mode = useBriefIQMode();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'bottom' | 'sample' | 'study'>('bottom');
  const [isSaved, setIsSaved] = useState(false);

  const medicalSummary = {
    title: 'Novel Approaches to Cardiac Arrhythmia Management in Elderly Patients',
    processedDate: 'January 15, 2024',
    duration: '4 min read',
    category: 'Cardiology',
    icon: 'ri-heart-pulse-line',
    bottomLine: 'This groundbreaking study demonstrates that personalized treatment protocols combining advanced electrophysiological mapping with AI-assisted risk stratification significantly improve outcomes in elderly patients with complex cardiac arrhythmias, reducing adverse events by 34% compared to standard care approaches.',
    sampleSize: 'The study enrolled 847 patients across 12 medical centers in North America and Europe. Participants were aged 65–89 years with documented cardiac arrhythmias requiring intervention. The cohort included 52% male and 48% female patients, with diverse ethnic backgrounds representing real-world clinical populations.',
    studyType: 'This was a multicenter, randomized controlled trial with a 24-month follow-up period. Patients were randomly assigned to either the novel personalized treatment protocol group or the standard care control group. The study employed double-blind methodology for outcome assessment and utilized intention-to-treat analysis for primary endpoints.',
    changeInPractice: 'Based on these findings, clinicians should consider implementing personalized risk stratification protocols for elderly patients with cardiac arrhythmias. The integration of AI-assisted decision support tools and advanced mapping techniques should be prioritized in treatment planning.',
    tabs: [
      { id: 'bottom', label: 'Bottom Line', icon: 'ri-lightbulb-line' },
      { id: 'sample', label: 'Sample Size', icon: 'ri-group-line' },
      { id: 'study', label: 'Study Type', icon: 'ri-flask-line' },
    ]
  };

  const generalSummary = {
    title: 'Quantum Entanglement and Its Applications in Secure Communication Networks',
    processedDate: 'January 15, 2024',
    duration: '5 min read',
    category: 'Physics',
    icon: 'ri-atom-line',
    bottomLine: 'This landmark study demonstrates a breakthrough in quantum key distribution (QKD), achieving 99.7% fidelity over 500km fiber optic networks. The novel photon-pair entanglement protocol eliminates the need for trusted relay nodes, enabling truly end-to-end unbreakable encryption at commercially viable speeds of 10 Mbps.',
    sampleSize: 'The research was conducted across 3 independent laboratory environments and 2 real-world fiber optic testbeds spanning urban infrastructure. Over 4.2 million quantum key exchanges were recorded across 18 months of continuous operation, with results validated by 6 independent research teams across Europe and Asia.',
    studyType: 'This was an experimental physics study combining theoretical modeling with empirical validation. The research employed a double-blind peer-review process across 3 independent institutions. Statistical analysis used Bayesian inference models to account for environmental noise variables, with results reproducible across all test environments.',
    changeInPractice: 'Organizations handling sensitive data should begin evaluating quantum-ready infrastructure. The findings suggest that commercial QKD deployment is feasible within 3–5 years. Researchers recommend prioritizing hybrid classical-quantum encryption architectures as a transitional strategy while full quantum networks are developed.',
    tabs: [
      { id: 'bottom', label: 'Key Findings', icon: 'ri-lightbulb-line' },
      { id: 'sample', label: 'Data & Scope', icon: 'ri-bar-chart-line' },
      { id: 'study', label: 'Methodology', icon: 'ri-flask-line' },
    ]
  };

  const summary = mode === 'medical' ? medicalSummary : generalSummary;
  const tabs = summary.tabs;

  const practiceLabel = mode === 'medical' ? 'Change in Practice' : 'Implications & Next Steps';
  const practiceIcon = mode === 'medical' ? 'ri-hospital-line' : 'ri-arrow-right-circle-line';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f6f9] to-[#e8edf5] pb-6">
      <div className="bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] text-white">
        <div className="px-6 py-6 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/dashboard">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors border border-white/30">
                <i className="ri-arrow-left-line w-5 h-5 flex items-center justify-center"></i>
              </div>
            </Link>
            <h1 className="text-lg font-bold ml-4">Summary Details</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/15 rounded-xl border border-white/20">
              <i className={`${summary.icon} text-white/90 text-sm`}></i>
              <span className="text-white/90 text-xs font-semibold">{summary.category}</span>
            </div>
            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors border border-white/30 cursor-pointer">
              <i className="ri-download-line w-5 h-5 flex items-center justify-center"></i>
            </button>
            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors border border-white/30 cursor-pointer">
              <i className="ri-share-line w-5 h-5 flex items-center justify-center"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 mb-6">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-16 h-20 bg-gradient-to-br from-[#0A1F44] to-[#1E3A8A] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <i className={`${summary.icon} w-8 h-8 flex items-center justify-center text-white`}></i>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{summary.title}</h2>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <i className="ri-calendar-line w-4 h-4 flex items-center justify-center"></i>
                  {summary.processedDate}
                </span>
                <span className="flex items-center gap-1">
                  <i className="ri-time-line w-4 h-4 flex items-center justify-center"></i>
                  {summary.duration}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex-1 bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] text-white py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <i className={`${isPlaying ? 'ri-pause-line' : 'ri-play-line'} w-5 h-5 flex items-center justify-center`}></i>
              {isPlaying ? 'Pause Audio' : 'Play Audio'}
            </button>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`px-5 py-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                isSaved ? 'bg-[#1E3A8A] text-white' : 'bg-[#f4f6f9] text-gray-600 hover:bg-gray-200'
              }`}
            >
              <i className={`${isSaved ? 'ri-bookmark-fill' : 'ri-bookmark-line'} w-5 h-5 flex items-center justify-center`}></i>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-6">
          <div className="flex border-b border-gray-200 bg-[#f4f6f9]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'bottom' | 'sample' | 'study')}
                className={`flex-1 py-4 text-xs font-bold transition-all duration-300 flex flex-col items-center gap-1 cursor-pointer ${
                  activeTab === tab.id
                    ? 'text-[#0A1F44] bg-white border-b-4 border-[#0A1F44]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <i className={`${tab.icon} w-4 h-4 flex items-center justify-center`}></i>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'bottom' && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#0A1F44] to-[#1E3A8A] rounded-xl flex items-center justify-center">
                    <i className="ri-lightbulb-line w-5 h-5 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{tabs[0].label}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">{summary.bottomLine}</p>
                <div className="bg-gradient-to-r from-[#1E3A8A]/10 to-[#0A1F44]/10 rounded-2xl p-5 border-l-4 border-[#1E3A8A]">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <i className={`${practiceIcon} w-5 h-5 flex items-center justify-center text-[#1E3A8A]`}></i>
                    {practiceLabel}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{summary.changeInPractice}</p>
                </div>
              </div>
            )}
            {activeTab === 'sample' && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#0A1F44] to-[#1E3A8A] rounded-xl flex items-center justify-center">
                    <i className={`${tabs[1].icon} w-5 h-5 flex items-center justify-center text-white`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{tabs[1].label}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">{summary.sampleSize}</p>
              </div>
            )}
            {activeTab === 'study' && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#0A1F44] to-[#1E3A8A] rounded-xl flex items-center justify-center">
                    <i className={`${tabs[2].icon} w-5 h-5 flex items-center justify-center text-white`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{tabs[2].label}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">{summary.studyType}</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-white text-[#0A1F44] py-4 rounded-2xl font-bold border-2 border-[#0A1F44] hover:bg-[#0A1F44] hover:text-white transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer">
            <i className="ri-save-line w-5 h-5 flex items-center justify-center"></i>
            Save to Library
          </button>
          <button className="flex-1 bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] text-white py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer">
            <i className="ri-download-2-line w-5 h-5 flex items-center justify-center"></i>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
