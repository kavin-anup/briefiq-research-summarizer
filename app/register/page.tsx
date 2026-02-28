
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
      <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center px-6 py-12 relative overflow-hidden">
        {/* Futuristic Background Grids/Blobs */}
        <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
          <div className="absolute w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-multiply top-[-10%] left-[-10%] animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] mix-blend-multiply bottom-[-10%] right-[-10%]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,39,88,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,39,88,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        <div className="w-full max-w-md relative z-10 flex flex-col items-center">
          <div className="w-24 h-24 mb-6 bg-white/60 backdrop-blur-xl rounded-[2rem] shadow-[0_10px_30px_-10px_rgba(16,39,88,0.1)] border border-white/80 flex items-center justify-center p-4 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-[2rem] pointer-events-none"></div>
            <img src="/logo.png" alt="BriefIQ" className="w-full h-full object-contain relative z-10" />
          </div>
          <div className="text-center mb-10 w-full">
            <h1 className="text-4xl font-black text-primary mb-3 tracking-tight">Join BriefIQ</h1>
            <p className="text-primary/60 font-medium tracking-wide uppercase text-sm">Select Operating Mode</p>
          </div>

          <div className="space-y-4 mb-8 w-full">
            <button
              onClick={() => handleModeSelect('general')}
              className={`w-full rounded-[2rem] p-6 border-2 text-left transition-all duration-300 cursor-pointer relative overflow-hidden group ${selectedMode === 'general'
                ? 'border-primary bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(16,39,88,0.15)] transform -translate-y-1'
                : 'border-white/50 bg-white/40 backdrop-blur-md hover:border-primary/40 hover:bg-white/60'
                }`}
            >
              {selectedMode === 'general' && <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>}
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 relative z-10 ${selectedMode === 'general' ? 'bg-primary shadow-[0_10px_20px_-5px_rgba(16,39,88,0.4)]' : 'bg-white/80 border border-white'
                  }`}>
                  <i className={`ri-flask-line text-2xl ${selectedMode === 'general' ? 'text-white' : 'text-primary/60'}`}></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className={`text-xl font-black ${selectedMode === 'general' ? 'text-primary' : 'text-primary/70'}`}>General Research</h3>
                    {selectedMode === 'general' && (
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-sm">
                        <i className="ri-check-line text-white text-sm font-medium"></i>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-primary/60 leading-relaxed font-medium">For academics, scientists & researchers across all disciplines — physics, biology, social sciences, engineering, and more.</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Physics', 'Biology', 'Social Sciences', 'Engineering'].map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-white/60 border border-white/80 text-primary/70 text-[10px] font-medium tracking-wider uppercase rounded-lg shadow-sm">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => handleModeSelect('medical')}
              className={`w-full rounded-[2rem] p-6 border-2 text-left transition-all duration-300 cursor-pointer relative overflow-hidden group ${selectedMode === 'medical'
                ? 'border-primary bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(16,39,88,0.15)] transform -translate-y-1'
                : 'border-white/50 bg-white/40 backdrop-blur-md hover:border-primary/40 hover:bg-white/60'
                }`}
            >
              {selectedMode === 'medical' && <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>}
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 relative z-10 ${selectedMode === 'medical' ? 'bg-primary shadow-[0_10px_20px_-5px_rgba(16,39,88,0.4)]' : 'bg-white/80 border border-white'
                  }`}>
                  <i className={`ri-heart-pulse-line text-2xl ${selectedMode === 'medical' ? 'text-white' : 'text-primary/60'}`}></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className={`text-xl font-black ${selectedMode === 'medical' ? 'text-primary' : 'text-primary/70'}`}>Medical Research</h3>
                    {selectedMode === 'medical' && (
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-sm">
                        <i className="ri-check-line text-white text-sm font-medium"></i>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-primary/60 leading-relaxed font-medium">For doctors, clinicians & medical researchers — clinical trials, diagnostics, treatment protocols, and patient outcomes.</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Cardiology', 'Oncology', 'Neurology', 'Pediatrics'].map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-white/60 border border-white/80 text-primary/70 text-[10px] font-medium tracking-wider uppercase rounded-lg shadow-sm">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          </div>

          <button
            onClick={handleContinue}
            disabled={!selectedMode}
            className="w-full bg-primary text-white py-4.5 rounded-[1.5rem] font-medium text-base hover:bg-primary/95 hover:shadow-[0_10px_20px_-10px_rgba(16,39,88,0.4)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:hover:transform-none disabled:hover:shadow-none whitespace-nowrap flex items-center justify-center gap-3 mt-4 overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <span className="relative z-10">Initialize Mode</span>
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform relative z-10"></i>
          </button>

          <div className="mt-8 text-center relative z-10">
            <p className="text-primary/60 text-sm font-medium">
              Already have access?{' '}
              <Link href="/login" className="text-secondary font-medium hover:text-primary transition-colors ml-1">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Futuristic Background Grids/Blobs */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-multiply top-[-10%] left-[-10%] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] mix-blend-multiply bottom-[-10%] right-[-10%]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,39,88,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,39,88,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="w-full max-w-md relative z-10 flex flex-col items-center">
        <div className="text-center mb-8 w-full flex flex-col items-center">
          <div className="w-24 h-24 mb-6 bg-white/60 backdrop-blur-xl rounded-[2rem] shadow-[0_10px_30px_-10px_rgba(16,39,88,0.1)] border border-white/80 flex items-center justify-center p-4 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-[2rem] pointer-events-none"></div>
            <img src="/logo.png" alt="BriefIQ" className="w-full h-full object-contain relative z-10" />
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-md border border-white/80 shadow-sm rounded-full mb-6">
            <i className={`${selectedMode === 'medical' ? 'ri-heart-pulse-line' : 'ri-flask-line'} text-primary text-sm`}></i>
            <span className="text-primary text-xs tracking-wider uppercase font-medium">{selectedMode === 'medical' ? 'Medical Mode Active' : 'General Mode Active'}</span>
          </div>
          <h1 className="text-4xl font-black text-primary mb-3 tracking-tight">Create Profile</h1>
          <p className="text-primary/60 font-medium tracking-wide uppercase text-sm">Join the Matrix</p>
        </div>

        <div className="w-full bg-white/70 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(16,39,88,0.1)] p-8 sm:p-10 border border-white/80 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>
          <form onSubmit={handleRegister} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="block text-xs font-medium text-primary/70 uppercase tracking-wider ml-1">Email Coordinates</label>
              <div className="relative group">
                <i className="ri-mail-line absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors w-5 h-5 flex items-center justify-center"></i>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-14 pr-5 py-4 bg-white/50 border border-white/80 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-primary font-medium text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] placeholder:text-primary/30"
                  placeholder={selectedMode === 'medical' ? 'doctor@hospital.com' : 'researcher@university.edu'}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-medium text-primary/70 uppercase tracking-wider ml-1">Security Key (Password)</label>
              <div className="relative group">
                <i className="ri-lock-line absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors w-5 h-5 flex items-center justify-center"></i>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-14 pr-12 py-4 bg-white/50 border border-white/80 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-primary font-medium text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] placeholder:text-primary/30"
                  placeholder="••••••••"
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-1/2 -translate-y-1/2 text-primary/40 hover:text-primary transition-colors">
                  <i className={`${showPassword ? 'ri-eye-off-line' : 'ri-eye-line'} w-5 h-5 flex items-center justify-center`}></i>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-medium text-primary/70 uppercase tracking-wider ml-1">Confirm Security Key</label>
              <div className="relative group">
                <i className="ri-lock-line absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors w-5 h-5 flex items-center justify-center"></i>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-14 pr-12 py-4 bg-white/50 border border-white/80 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-primary font-medium text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] placeholder:text-primary/30"
                  placeholder="••••••••"
                  required
                />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-5 top-1/2 -translate-y-1/2 text-primary/40 hover:text-primary transition-colors">
                  <i className={`${showConfirmPassword ? 'ri-eye-off-line' : 'ri-eye-line'} w-5 h-5 flex items-center justify-center`}></i>
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-white py-4.5 rounded-[1.5rem] font-medium text-base hover:bg-primary/95 hover:shadow-[0_10px_20px_-10px_rgba(16,39,88,0.4)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:hover:transform-none disabled:hover:shadow-none whitespace-nowrap flex items-center justify-center gap-3 mt-4 overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Generating Profile...</span>
                </>
              ) : (
                <>
                  <span>Create Profile</span>
                  <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center relative z-10">
            <p className="text-primary/60 text-sm font-medium">
              Already have access?{' '}
              <Link href="/login" className="text-secondary font-medium hover:text-primary transition-colors ml-1">Sign In</Link>
            </p>
          </div>
        </div>

        <button onClick={() => setStep('mode')} className="w-full mt-6 text-center text-xs font-medium uppercase tracking-wider text-primary/50 hover:text-primary transition-colors flex items-center justify-center gap-2 cursor-pointer group">
          <i className="ri-arrow-left-line w-4 h-4 flex items-center justify-center group-hover:-translate-x-1 transition-transform"></i>
          Reconfigure Matrix Mode
        </button>
      </div>
    </div>
  );
}
