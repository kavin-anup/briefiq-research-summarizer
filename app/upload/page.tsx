
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
    <div className="min-h-screen bg-gradient-to-br from-[#f4f6f9] to-[#e8edf5] pb-24">
      <div className="bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] text-white">
        <div className="px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors border border-white/30">
                <i className="ri-arrow-left-line w-5 h-5 flex items-center justify-center"></i>
              </div>
            </Link>
            <h1 className="text-xl font-bold">Upload Research Paper</h1>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/15 rounded-xl border border-white/20">
            <i className={`${cfg.icon} text-white/90 text-sm`}></i>
            <span className="text-white/90 text-xs font-semibold">{cfg.label}</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        <div
          className={`border-2 border-dashed rounded-3xl p-8 text-center transition-all duration-300 ${
            dragActive
              ? 'border-[#1E3A8A] bg-[#1E3A8A]/10 scale-[1.02]'
              : selectedFile
              ? 'border-green-500 bg-green-50'
              : 'border-gray-300 bg-white'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center">
            <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-4 transition-all duration-300 ${
              selectedFile ? 'bg-gradient-to-br from-green-500 to-green-600 shadow-xl' : 'bg-gradient-to-br from-[#0A1F44] to-[#1E3A8A] shadow-lg'
            }`}>
              <i className={`${selectedFile ? 'ri-check-line' : 'ri-file-pdf-line'} w-12 h-12 flex items-center justify-center text-white`}></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {selectedFile ? selectedFile.name : 'Drop your PDF here'}
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              {selectedFile ? 'File ready to process' : 'or click to browse from your device'}
            </p>
            {!selectedFile && (
              <>
                <input type="file" accept=".pdf" onChange={handleFileChange} className="hidden" id="file-upload" />
                <label htmlFor="file-upload">
                  <div className="bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] text-white px-8 py-3 rounded-2xl font-semibold cursor-pointer hover:shadow-xl transition-all duration-300 whitespace-nowrap inline-flex items-center gap-2">
                    <i className="ri-upload-line w-5 h-5 flex items-center justify-center"></i>
                    Select PDF File
                  </div>
                </label>
              </>
            )}
            {selectedFile && (
              <button onClick={() => setSelectedFile(null)} className="text-red-500 text-sm font-semibold hover:underline flex items-center gap-1 cursor-pointer">
                <i className="ri-close-circle-line w-4 h-4 flex items-center justify-center"></i>
                Remove File
              </button>
            )}
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-bold text-gray-700 mb-3">{cfg.categoryLabel}</label>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#1E3A8A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {isProcessing && (
          <div className="mt-6 bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0A1F44] to-[#1E3A8A] rounded-2xl flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Processing Paper</h3>
                <p className="text-sm text-gray-600">AI is analyzing your document...</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-2">{progress}% Complete</p>
          </div>
        )}

        <button
          onClick={handleGenerate}
          disabled={!selectedFile || isProcessing}
          className="w-full bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] text-white py-5 rounded-3xl font-bold text-lg mt-6 hover:shadow-2xl transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center gap-2"
        >
          {isProcessing ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Processing...
            </>
          ) : (
            <>
              <i className="ri-sparkling-line w-6 h-6 flex items-center justify-center"></i>
              Generate AI Summary
            </>
          )}
        </button>

        <div className="mt-6 bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <i className="ri-information-line w-5 h-5 flex items-center justify-center text-[#1E3A8A]"></i>
            What to Expect
          </h3>
          <ul className="space-y-3">
            {cfg.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className={`${tip.icon} w-4 h-4 flex items-center justify-center text-[#1E3A8A]`}></i>
                </div>
                <span className="text-sm text-gray-700">{tip.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <BottomNav active="upload" />
    </div>
  );
}
