
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BottomNav from '@/components/BottomNav';
import { useBriefIQMode } from '@/components/useBriefIQMode';

export default function UploadPage() {
  const router = useRouter();
  const mode = useBriefIQMode();
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const medicalCategories = ['Cardiology', 'Neurology', 'Oncology', 'Pediatrics', 'Radiology', 'Surgery', 'Psychiatry', 'Endocrinology'];
  const generalCategories = ['Physics', 'Biology', 'Chemistry', 'Social Sciences', 'Engineering', 'Psychology', 'Economics', 'Computer Science', 'Environmental Science'];

  const categories = mode === 'medical' ? medicalCategories : generalCategories;
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const modeConfig = {
    medical: {
      icon: 'ri-heart-pulse-line',
      label: 'Medical Research',
      categoryLabel: 'Select Specialty',
      placeholder: 'e.g. Cardiology, Oncology...',
      tips: [
        { icon: 'ri-time-line', text: 'AI clinical analysis completes in 30–60 seconds' },
        { icon: 'ri-file-line', text: 'Supports PDF files up to 50MB' },
        { icon: 'ri-shield-check-line', text: 'HIPAA-compliant encryption for all uploads' }
      ]
    },
    general: {
      icon: 'ri-flask-line',
      label: 'General Research',
      categoryLabel: 'Select Research Field',
      placeholder: 'e.g. Physics, Biology...',
      tips: [
        { icon: 'ri-time-line', text: 'AI analysis completes in 30–60 seconds' },
        { icon: 'ri-file-line', text: 'Supports PDF files up to 50MB' },
        { icon: 'ri-shield-check-line', text: 'Your data is encrypted and secure' }
      ]
    }
  };

  const cfg = modeConfig[mode];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true);
    else if (e.type === 'dragleave') setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) setSelectedFile(e.dataTransfer.files[0]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setSelectedFile(e.target.files[0]);
  };

  const handleGenerate = () => {
    setIsProcessing(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => router.push('/summary/1'), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] pb-24 relative overflow-hidden">
      {/* Futuristic Background Grids/Blobs */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] mix-blend-multiply top-[-10%] right-[-10%] animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] mix-blend-multiply bottom-[10%] left-[-10%]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,39,88,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,39,88,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10">
        <div className="px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <div className="w-12 h-12 bg-white/60 backdrop-blur-xl rounded-[1.2rem] flex items-center justify-center cursor-pointer hover:bg-white/80 transition-all border border-white/80 shadow-[0_5px_15px_-5px_rgba(16,39,88,0.1)] group">
                <i className="ri-arrow-left-line text-lg text-primary/60 group-hover:text-primary transition-colors flex items-center justify-center"></i>
              </div>
            </Link>
            <h1 className="text-2xl font-black text-primary tracking-tight">Data Uplink</h1>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-xl rounded-[1rem] border border-white/80 shadow-sm">
            <i className={`${cfg.icon} text-primary text-sm`}></i>
            <span className="text-primary text-xs font-bold uppercase tracking-wider">{cfg.label}</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 relative z-10 w-full">
        <div
          className={`border-2 border-dashed rounded-[2rem] p-10 text-center transition-all duration-300 relative overflow-hidden group ${dragActive
            ? 'border-primary bg-primary/5 scale-[1.02] shadow-[inset_0_0_30px_rgba(16,39,88,0.1)]'
            : selectedFile
              ? 'border-secondary/50 bg-secondary/5 backdrop-blur-xl shadow-sm'
              : 'border-primary/20 bg-white/60 backdrop-blur-xl hover:border-primary/50 hover:bg-white/80 shadow-[0_10px_30px_-15px_rgba(16,39,88,0.05)]'
            }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {dragActive && <div className="absolute inset-0 bg-primary/5 animate-pulse rounded-[2rem] pointer-events-none"></div>}
          <div className="flex flex-col items-center relative z-10">
            <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center mb-6 transition-all duration-500 ${selectedFile ? 'bg-secondary shadow-[0_10px_30px_-10px_rgba(120,178,145,0.4)] scale-110' : 'bg-primary shadow-[0_10px_30px_-10px_rgba(16,39,88,0.4)] group-hover:-translate-y-2'
              }`}>
              <i className={`${selectedFile ? 'ri-check-line' : 'ri-file-pdf-line'} text-4xl text-white`}></i>
            </div>
            <h3 className="text-xl font-black text-primary mb-2 tracking-tight">
              {selectedFile ? selectedFile.name : 'Drag & Drop PDF Node'}
            </h3>
            <p className="text-sm font-medium text-primary/50 mb-8 uppercase tracking-wider">
              {selectedFile ? 'Data sequence ready for analysis' : 'Or initiate manual selection protocol'}
            </p>
            {!selectedFile && (
              <>
                <input type="file" accept=".pdf" onChange={handleFileChange} className="hidden" id="file-upload" />
                <label htmlFor="file-upload">
                  <div className="bg-white border border-white shadow-sm text-primary px-8 py-4 rounded-[1.5rem] font-bold cursor-pointer hover:shadow-[0_10px_20px_-10px_rgba(16,39,88,0.2)] hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap inline-flex items-center gap-3">
                    <i className="ri-folder-open-line text-lg"></i>
                    Browse Matrix
                  </div>
                </label>
              </>
            )}
            {selectedFile && (
              <button onClick={() => setSelectedFile(null)} className="text-red-500 text-xs uppercase tracking-widest font-black hover:text-red-600 flex items-center gap-2 cursor-pointer bg-red-50 px-4 py-2 rounded-xl transition-colors">
                <i className="ri-close-circle-line text-base"></i>
                Abort Upload
              </button>
            )}
          </div>
        </div>

        <div className="mt-8">
          <label className="block text-xs font-black text-primary/60 uppercase tracking-widest mb-4 pl-1">{cfg.categoryLabel}</label>
          <div className="flex flex-wrap gap-2.5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-[1.2rem] text-xs font-bold transition-all duration-300 whitespace-nowrap cursor-pointer border ${selectedCategory === cat
                  ? 'bg-primary text-white border-primary shadow-[0_10px_20px_-10px_rgba(16,39,88,0.4)] transform -translate-y-0.5'
                  : 'bg-white/60 text-primary/60 border-white/80 hover:bg-white/80 hover:text-primary hover:border-white shadow-sm'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {isProcessing && (
          <div className="mt-8 bg-white/60 backdrop-blur-xl rounded-[2rem] p-6 shadow-[0_10px_30px_-15px_rgba(16,39,88,0.1)] border border-primary/20 relative overflow-hidden group">
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-30"></div>
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 bg-primary text-white rounded-[1.2rem] flex items-center justify-center shadow-[0_10px_20px_-10px_rgba(16,39,88,0.4)] relative">
                <div className="absolute inset-0 border-2 border-white/20 rounded-[1.2rem]"></div>
                <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin relative z-10"></div>
              </div>
              <div>
                <h3 className="font-black text-primary text-lg tracking-tight">Decoupling Sequence</h3>
                <p className="text-xs font-bold text-primary/50 uppercase tracking-widest mt-1">AI Node Analysis in Progress...</p>
              </div>
            </div>
            <div className="w-full bg-primary/5 rounded-full h-3 overflow-hidden border border-primary/10 shadow-inner">
              <div
                className="bg-primary h-full rounded-full transition-all duration-300 relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 w-1/2 -skew-x-12 animate-[shimmer_2s_infinite]"></div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-3">
              <p className="text-xs font-black text-primary/40 uppercase tracking-widest">Processing</p>
              <p className="text-sm font-black text-primary">{progress}%</p>
            </div>
          </div>
        )}

        <button
          onClick={handleGenerate}
          disabled={!selectedFile || isProcessing}
          className="w-full bg-primary text-white py-4.5 rounded-[1.5rem] font-bold text-base mt-8 hover:bg-primary/95 hover:shadow-[0_10px_20px_-10px_rgba(16,39,88,0.4)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:hover:transform-none disabled:hover:shadow-none whitespace-nowrap flex items-center justify-center gap-3 overflow-hidden relative group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:not-disabled:animate-[shimmer_1.5s_infinite]"></div>
          {isProcessing ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <i className="ri-sparkling-line text-xl relative z-10 group-hover:animate-pulse"></i>
              <span className="relative z-10">Initiate AI Summary</span>
              <i className="ri-arrow-right-line relative z-10 group-hover:translate-x-1 transition-transform"></i>
            </>
          )}
        </button>

        <div className="mt-8 bg-white/60 backdrop-blur-xl rounded-[2rem] p-6 border border-white/80 shadow-[0_10px_30px_-15px_rgba(16,39,88,0.05)] relative overflow-hidden group">
          <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none group-hover:bg-primary/10 transition-colors"></div>
          <h3 className="font-black text-primary mb-5 flex items-center gap-3 tracking-tight text-sm uppercase">
            <div className="w-8 h-8 rounded-[0.8rem] bg-white border border-white/80 shadow-sm flex items-center justify-center">
              <i className="ri-information-line text-sm flex items-center justify-center text-primary"></i>
            </div>
            Protocol Guidelines
          </h3>
          <ul className="space-y-4 relative z-10">
            {cfg.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-4 p-3 rounded-[1.2rem] bg-white/40 hover:bg-white/80 transition-colors border border-transparent hover:border-white/80">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-white/80 shadow-sm flex-shrink-0">
                  <i className={`${tip.icon} text-lg flex items-center justify-center text-primary`}></i>
                </div>
                <span className="text-sm font-bold text-primary/70 pt-2 leading-relaxed">{tip.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <BottomNav active="upload" />
    </div>
  );
}
