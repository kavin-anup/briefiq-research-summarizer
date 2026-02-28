
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
    <div className="min-h-screen bg-[#F0F4F8] pb-6 relative overflow-hidden">
      {/* Futuristic Background Grids/Blobs */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] mix-blend-multiply top-[-10%] right-[-10%] animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] mix-blend-multiply bottom-[10%] left-[-10%]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,39,88,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,39,88,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <div className="w-12 h-12 bg-white/60 backdrop-blur-xl rounded-[1.2rem] flex items-center justify-center cursor-pointer hover:bg-white/80 transition-all border border-white/80 shadow-[0_5px_15px_-5px_rgba(16,39,88,0.1)] group">
                <i className="ri-arrow-left-line text-lg text-primary/60 group-hover:text-primary transition-colors flex items-center justify-center"></i>
              </div>
            </Link>
            <h1 className="text-2xl font-black text-primary tracking-tight">Node Details</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-xl rounded-[1rem] border border-white/80 shadow-sm">
              <i className={`${summary.icon} text-primary text-sm`}></i>
              <span className="text-primary text-xs font-bold uppercase tracking-wider">{summary.category}</span>
            </div>
            <button className="w-12 h-12 bg-white/60 backdrop-blur-xl rounded-[1.2rem] flex items-center justify-center border border-white/80 shadow-[0_5px_15px_-5px_rgba(16,39,88,0.1)] text-primary/60 hover:text-primary hover:bg-white/80 transition-all cursor-pointer group">
              <i className="ri-download-line text-lg flex items-center justify-center group-hover:-translate-y-0.5 transition-transform"></i>
            </button>
            <button className="w-12 h-12 bg-white/60 backdrop-blur-xl rounded-[1.2rem] flex items-center justify-center border border-white/80 shadow-[0_5px_15px_-5px_rgba(16,39,88,0.1)] text-primary/60 hover:text-primary hover:bg-white/80 transition-all cursor-pointer group">
              <i className="ri-share-line text-lg flex items-center justify-center group-hover:-translate-y-0.5 transition-transform"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 relative z-10 w-full">
        <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-[0_20px_40px_-15px_rgba(16,39,88,0.1)] border border-white/80 mb-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none group-hover:bg-primary/10 transition-colors duration-500"></div>

          <div className="flex items-start gap-5 mb-8 relative z-10">
            <div className="w-16 h-16 bg-white border border-white shadow-sm rounded-[1.5rem] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
              <i className={`${summary.icon} text-3xl text-primary`}></i>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-black text-primary mb-3 leading-snug tracking-tight">{summary.title}</h2>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-primary/50 uppercase tracking-wider">
                <span className="flex items-center gap-1.5 bg-white/80 px-4 py-2 rounded-[1rem] border border-white/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                  <i className="ri-calendar-line text-sm text-primary"></i>
                  {summary.processedDate}
                </span>
                <span className="flex items-center gap-1.5 bg-white/80 px-4 py-2 rounded-[1rem] border border-white/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                  <i className="ri-time-line text-sm text-primary"></i>
                  {summary.duration}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex-[2] bg-primary text-white py-4.5 rounded-[1.5rem] font-bold shadow-[0_10px_20px_-10px_rgba(16,39,88,0.4)] hover:bg-primary/95 transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap cursor-pointer transform hover:-translate-y-1 relative overflow-hidden group/btn"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
              <i className={`${isPlaying ? 'ri-pause-line' : 'ri-play-line'} text-xl relative z-10 ${isPlaying ? 'animate-pulse' : ''}`}></i>
              <span className="relative z-10">{isPlaying ? 'Pause Audio' : 'Play Audio'}</span>
            </button>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`flex-1 py-4.5 rounded-[1.5rem] border transition-all duration-300 cursor-pointer shadow-sm text-center flex items-center justify-center gap-2 ${isSaved ? 'bg-secondary text-white border-secondary' : 'bg-white/80 text-primary/60 border-white/80 hover:border-primary/30 hover:bg-white hover:text-primary'
                }`}
            >
              <i className={`${isSaved ? 'ri-bookmark-fill' : 'ri-bookmark-line'} text-xl`}></i>
              <span className="font-bold text-sm">{isSaved ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(16,39,88,0.1)] border border-white/80 overflow-hidden mb-8 relative">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>
          <div className="flex border-b border-white/80 bg-white/40">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'bottom' | 'sample' | 'study')}
                className={`flex-1 py-5 text-xs font-black uppercase tracking-widest transition-all duration-300 flex flex-col items-center gap-2 cursor-pointer relative ${activeTab === tab.id
                  ? 'text-primary bg-white'
                  : 'text-primary/40 hover:text-primary/80 hover:bg-white/50'
                  }`}
              >
                <i className={`${tab.icon} text-xl`}></i>
                {tab.label}
                {activeTab === tab.id && <div className="absolute bottom-0 inset-x-0 h-1 bg-primary"></div>}
              </button>
            ))}
          </div>

          <div className="p-8">
            {activeTab === 'bottom' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-[1.2rem] border border-white/80 shadow-[0_5px_15px_-5px_rgba(16,39,88,0.1)] flex items-center justify-center">
                    <i className="ri-lightbulb-line text-xl text-secondary"></i>
                  </div>
                  <h3 className="text-xl font-black text-primary tracking-tight">{tabs[0].label}</h3>
                </div>
                <p className="text-primary/80 leading-loose mb-8 text-base font-medium">{summary.bottomLine}</p>
                <div className="bg-primary/5 rounded-[2rem] p-8 border border-primary/10 relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-primary to-secondary"></div>
                  <h4 className="font-black text-primary mb-4 flex items-center gap-3 tracking-tight text-lg">
                    <div className="w-10 h-10 rounded-[1rem] bg-white border border-white/80 flex items-center justify-center shadow-sm">
                      <i className={`${practiceIcon} text-lg text-secondary`}></i>
                    </div>
                    {practiceLabel}
                  </h4>
                  <p className="text-base text-primary/70 leading-relaxed font-bold">{summary.changeInPractice}</p>
                </div>
              </div>
            )}
            {activeTab === 'sample' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-[1.2rem] border border-white/80 shadow-[0_5px_15px_-5px_rgba(16,39,88,0.1)] flex items-center justify-center">
                    <i className={`${tabs[1].icon} text-xl text-secondary`}></i>
                  </div>
                  <h3 className="text-xl font-black text-primary tracking-tight">{tabs[1].label}</h3>
                </div>
                <p className="text-primary/80 leading-loose text-base font-medium">{summary.sampleSize}</p>
              </div>
            )}
            {activeTab === 'study' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-[1.2rem] border border-white/80 shadow-[0_5px_15px_-5px_rgba(16,39,88,0.1)] flex items-center justify-center">
                    <i className={`${tabs[2].icon} text-xl text-secondary`}></i>
                  </div>
                  <h3 className="text-xl font-black text-primary tracking-tight">{tabs[2].label}</h3>
                </div>
                <p className="text-primary/80 leading-loose text-base font-medium">{summary.studyType}</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <button className="flex-[0.8] bg-white/60 backdrop-blur-xl text-primary py-4.5 rounded-[1.5rem] font-bold border border-white/80 hover:bg-white hover:border-primary/20 transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer shadow-[0_5px_15px_-5px_rgba(16,39,88,0.1)]">
            <i className="ri-save-line text-lg"></i>
            Store Node
          </button>
          <button className="flex-1 bg-primary text-white py-4.5 rounded-[1.5rem] font-bold shadow-[0_10px_20px_-10px_rgba(16,39,88,0.4)] hover:bg-primary/95 transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <i className="ri-download-2-line text-lg relative z-10 group-hover:animate-bounce"></i>
            <span className="relative z-10">Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
