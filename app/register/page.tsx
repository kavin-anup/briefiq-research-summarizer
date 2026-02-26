
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState<'mode' | 'form'>('mode');
  const [selectedMode, setSelectedMode] = useState<'general' | 'medical' | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleModeSelect = (mode: 'general' | 'medical') => {
    setSelectedMode(mode);
  };

  const handleContinue = () => {
    if (selectedMode) {
      setStep('form');
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('briefiq_mode', selectedMode || 'general');
    }
    setTimeout(() => {
      router.push('/dashboard');
    }, 1500);
  };

  if (step === 'mode') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f4f6f9] to-[#e8edf5] flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <div className="w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-4">
              <img src="/logo.png" alt="" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to BriefIQ</h1>
            <p className="text-gray-500 text-base">Choose your summarizer mode to get started</p>
          </div>

          <div className="space-y-4 mb-8">
            <button
              onClick={() => handleModeSelect('general')}
              className={`w-full rounded-3xl p-6 border-2 text-left transition-all duration-300 cursor-pointer ${selectedMode === 'general'
                  ? 'border-[#1E3A8A] bg-[#1E3A8A]/5 shadow-xl'
                  : 'border-gray-200 bg-white hover:border-[#1E3A8A]/40 hover:shadow-lg'
                }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md transition-all duration-300 ${selectedMode === 'general' ? 'bg-gradient-to-br from-[#0A1F44] to-[#1E3A8A]' : 'bg-[#f4f6f9]'
                  }`}>
                  <i className={`ri-flask-line text-2xl ${selectedMode === 'general' ? 'text-white' : 'text-[#1E3A8A]'}`}></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-bold text-gray-900">General Research</h3>
                    {selectedMode === 'general' && (
                      <div className="w-6 h-6 bg-[#1E3A8A] rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">For academics, scientists & researchers across all disciplines — physics, biology, social sciences, engineering, and more.</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Physics', 'Biology', 'Social Sciences', 'Engineering'].map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-[#f4f6f9] text-gray-600 text-xs font-medium rounded-lg">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => handleModeSelect('medical')}
              className={`w-full rounded-3xl p-6 border-2 text-left transition-all duration-300 cursor-pointer ${selectedMode === 'medical'
                  ? 'border-[#1E3A8A] bg-[#1E3A8A]/5 shadow-xl'
                  : 'border-gray-200 bg-white hover:border-[#1E3A8A]/40 hover:shadow-lg'
                }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md transition-all duration-300 ${selectedMode === 'medical' ? 'bg-gradient-to-br from-[#0A1F44] to-[#1E3A8A]' : 'bg-[#f4f6f9]'
                  }`}>
                  <i className={`ri-heart-pulse-line text-2xl ${selectedMode === 'medical' ? 'text-white' : 'text-[#1E3A8A]'}`}></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-bold text-gray-900">Medical Research</h3>
                    {selectedMode === 'medical' && (
                      <div className="w-6 h-6 bg-[#1E3A8A] rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">For doctors, clinicians & medical researchers — clinical trials, diagnostics, treatment protocols, and patient outcomes.</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Cardiology', 'Oncology', 'Neurology', 'Pediatrics'].map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-[#f4f6f9] text-gray-600 text-xs font-medium rounded-lg">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          </div>

          <button
            onClick={handleContinue}
            disabled={!selectedMode}
            className="w-full bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center gap-2"
          >
            Continue
            <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center"></i>
          </button>

          <p className="text-center text-sm text-gray-500 mt-5">
            Already have an account?{' '}
            <Link href="/login" className="text-[#1E3A8A] font-semibold hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f6f9] to-[#e8edf5] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-4">
              <img src="/logo.png" alt="" />
            </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1E3A8A]/10 rounded-full mb-3">
            <i className={`${selectedMode === 'medical' ? 'ri-heart-pulse-line' : 'ri-flask-line'} text-[#1E3A8A] text-sm`}></i>
            <span className="text-[#1E3A8A] text-sm font-semibold">{selectedMode === 'medical' ? 'Medical Research Mode' : 'General Research Mode'}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-600">Join BriefIQ and start summarizing</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center"></i>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-[#f4f6f9] border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all text-gray-900 text-sm"
                  placeholder={selectedMode === 'medical' ? 'doctor@hospital.com' : 'researcher@university.edu'}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <i className="ri-lock-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center"></i>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-[#f4f6f9] border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all text-gray-900 text-sm"
                  placeholder="••••••••"
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                  <i className={`${showPassword ? 'ri-eye-off-line' : 'ri-eye-line'} w-5 h-5 flex items-center justify-center`}></i>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <i className="ri-lock-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center"></i>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-[#f4f6f9] border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all text-gray-900 text-sm"
                  placeholder="••••••••"
                  required
                />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                  <i className={`${showConfirmPassword ? 'ri-eye-off-line' : 'ri-eye-line'} w-5 h-5 flex items-center justify-center`}></i>
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 whitespace-nowrap flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Creating Account...
                </>
              ) : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-[#1E3A8A] font-semibold hover:underline">Sign In</Link>
            </p>
          </div>
        </div>

        <button onClick={() => setStep('mode')} className="w-full text-center text-sm text-gray-500 mt-4 hover:text-gray-700 transition-colors flex items-center justify-center gap-1 cursor-pointer">
          <i className="ri-arrow-left-line w-4 h-4 flex items-center justify-center"></i>
          Change mode
        </button>
      </div>
    </div>
  );
}
