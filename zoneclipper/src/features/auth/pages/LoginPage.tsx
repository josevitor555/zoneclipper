import React, { useState } from 'react';
import { Mail, Lock, PlayCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // No behavior yet, just printing to console
        console.log("Login attempt:", { email, password, confirmPassword, rememberMe });
    };

    return (
        <div className="dark min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-background relative overflow-hidden selection:bg-primary/30">
            {/* Background soft gradients for depth - Global */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

            {/* Left Column - Login Form */}
            <div className="flex items-center justify-center p-8 relative z-10 lg:border-r lg:border-border/10">
                <div className="w-full max-w-md flex flex-col items-center lg:items-start">
                    {/* Logo Section (Mobile Only or keep consistent) */}
                    <div className="mb-10 text-center lg:text-left w-full">
                        <div className="inline-flex items-center justify-center mb-6">
                            <span className="text-3xl font-bold text-foreground">
                                ZoneClipper<span className="text-primary">.ai</span>
                            </span>
                        </div>
                        <h1 className="text-3xl font-semibold text-foreground tracking-tight mb-2">Welcome back</h1>
                        <p className="text-muted-foreground max-w-[280px] lg:max-w-none text-base">
                            Sign in to your account to continue creating viral clips.
                        </p>
                    </div>

                    {/* Login Card */}
                    <div className="w-full bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-2xl transition-all hover:border-border/80">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground/90 ml-1">
                                    Email
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                        <Mail className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                    </div>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        placeholder="name@example.com"
                                        className="block w-full bg-background/50 border border-border/50 rounded-xl py-3 pl-11 pr-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all text-sm"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between ml-1">
                                    <label htmlFor="password" className="text-sm font-medium text-foreground/90">
                                        Password
                                    </label>
                                    <a href="#" className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                        <Lock className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                    </div>
                                    <input
                                        id="password"
                                        type="password"
                                        required
                                        placeholder="••••••••"
                                        className="block w-full bg-background/50 border border-border/50 rounded-xl py-3 pl-11 pr-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all text-sm"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="confirmPassword" className="text-sm font-medium text-foreground/90 ml-1">
                                    Repetir Senha
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                        <Lock className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                    </div>
                                    <input
                                        id="confirmPassword"
                                        type="password"
                                        required
                                        placeholder="••••••••"
                                        className="block w-full bg-background/50 border border-border/50 rounded-xl py-3 pl-11 pr-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all text-sm"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center space-x-2 pt-1 ml-1">
                                <div className="relative flex items-center">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-border/50 bg-background/50 text-primary focus:ring-primary/20 focus:ring-offset-0 cursor-pointer accent-primary"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                    />
                                </div>
                                <label htmlFor="remember" className="text-xs font-medium text-muted-foreground cursor-pointer select-none">
                                    Remember me
                                </label>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 text-sm font-bold bg-primary text-primary-foreground rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99] transition-all"
                            >
                                Sign in
                            </Button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-border/50"></span>
                            </div>
                            <div className="relative flex justify-center text-sm font-semibold">
                                <span className="bg-card px-4 text-muted-foreground/60">or continue with</span>
                            </div>
                        </div>

                        {/* Social Login */}
                        <Button
                            variant="outline"
                            type="button"
                            className="w-full h-12 text-sm font-semibold border-border/50 bg-background/30 hover:bg-muted/50 rounded-xl transition-all group"
                        >
                            {/* <Chrome className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" /> */}
                            Continue with Google
                        </Button>
                    </div>

                    {/* Footer Link */}
                    <p className="mt-10 text-center lg:text-left text-sm text-muted-foreground w-full">
                        Don't have an account?{' '}
                        <a href="#" className="font-semibold text-foreground hover:text-primary transition-colors decoration-primary/30 underline-offset-4 hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>

            {/* Right Column - Branding & Info */}
            <div className="hidden lg:flex flex-col items-center justify-center p-12 bg-muted/10 relative overflow-hidden">
                {/* Background visual effects for right column */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />

                <div className="relative z-10 max-w-lg text-center space-y-10">
                    <div className="space-y-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-[10px] font-bold text-primary tracking-widest uppercase mb-4">
                            Premium Video AI
                        </div>
                        <h2 className="text-6xl font-semibold text-foreground leading-[0.9]">
                            ZONE <br />
                            <span className="text-primary">CLIPPER.</span>
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-sm mx-auto">
                            The ultimate tool for creators to turn long videos into viral social clips effortlessly.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="h-20 rounded-2xl border-border/50 bg-background/40 hover:bg-muted transition-all flex flex-col items-center justify-center gap-1 group">
                            <PlayCircle className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                            <span className="text-base font-semibold text-muted-foreground">Tutorials</span>
                        </Button>
                        <Button variant="outline" className="h-20 rounded-2xl border-border/50 bg-background/40 hover:bg-muted transition-all flex flex-col items-center justify-center gap-1 group">
                            {/* <Github className="w-5 h-5 group-hover:scale-110 transition-transform" /> */}
                            <span className="text-base font-semibold text-muted-foreground">Community</span>
                        </Button>
                    </div>

                    <div className="pt-10 border-t border-border/20">
                        <p className="text-base font-semibold text-muted-foreground/60 flex items-center justify-center gap-2">
                            Developed for
                            <span className="text-foreground border-b border-primary/50">DevZoneAI</span>
                            YouTube Channel
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { LoginPage };