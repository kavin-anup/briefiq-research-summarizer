'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login API call
        setTimeout(() => {
            router.push('/dashboard');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center px-6 py-12 relative overflow-hidden">
            {/* Futuristic Background Grids/Blobs */}
            <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
                <div className="absolute w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-multiply top-[-10%] right-[-10%] animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] mix-blend-multiply bottom-[-10%] left-[-10%]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,39,88,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,39,88,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="w-full max-w-md relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 mb-6 bg-white/60 backdrop-blur-xl rounded-[2rem] shadow-[0_10px_30px_-10px_rgba(16,39,88,0.1)] border border-white/80 flex items-center justify-center p-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-[2rem] pointer-events-none"></div>
                    <img src="/logo.png" alt="BriefIQ" className="w-full h-full object-contain relative z-10" />
                </div>

                <div className="text-center mb-10 w-full">
                    <h1 className="text-4xl font-black text-primary mb-3 tracking-tight">Welcome Back</h1>
                    <p className="text-primary/60 font-medium tracking-wide uppercase text-sm">Access the Matrix</p>
                </div>

                <div className="w-full bg-white/70 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(16,39,88,0.1)] p-8 sm:p-10 border border-white/80 relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>

                    <form onSubmit={handleLogin} className="space-y-6 relative z-10">
                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider ml-1">Email Coordinates</label>
                            <div className="relative group">
                                <i className="ri-mail-line absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors w-5 h-5 flex items-center justify-center"></i>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-14 pr-5 py-4 bg-white/50 border border-white/80 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-primary font-medium text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] placeholder:text-primary/30"
                                    placeholder="researcher@university.edu"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider ml-1">Security Key</label>
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

                        <div className="flex items-center justify-between pt-2">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center justify-center">
                                    <input type="checkbox" className="peer w-5 h-5 rounded-[0.4rem] border-primary/20 text-secondary focus:ring-secondary focus:ring-offset-1 bg-white/50 transition-all cursor-pointer appearance-none checked:bg-secondary checked:border-secondary" />
                                    <i className="ri-check-line absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none text-xs font-bold"></i>
                                </div>
                                <span className="text-sm font-medium text-primary/70 group-hover:text-primary transition-colors">Remember me</span>
                            </label>
                            <button type="button" className="text-sm font-bold text-secondary hover:text-primary transition-colors">
                                Forgot password?
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary text-white py-4.5 rounded-[1.5rem] font-bold text-base hover:bg-primary/95 hover:shadow-[0_10px_20px_-10px_rgba(16,39,88,0.4)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:hover:transform-none disabled:hover:shadow-none whitespace-nowrap flex items-center justify-center gap-3 mt-4 overflow-hidden relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    <span>Authenticating...</span>
                                </>
                            ) : (
                                <>
                                    <span>Initialize Session</span>
                                    <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center relative z-10">
                        <p className="text-primary/60 text-sm font-medium">
                            Don't have access?{' '}
                            <Link href="/register" className="text-secondary font-bold hover:text-primary transition-colors ml-1">Request Entry</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
