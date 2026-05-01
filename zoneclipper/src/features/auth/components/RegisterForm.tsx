import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // TODO: Integration with authService
        console.log("Registration attempt:", { name, email, password });
    };

    return (
        <div className="w-full bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-2xl transition-all hover:border-border/80">
            <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium animate-in fade-in slide-in-from-top-2">
                        {error}
                    </div>
                )}

                <div className="space-y-2">
                    <label htmlFor="name" className="text-base font-medium text-foreground/90 ml-1">
                        Name
                    </label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <User className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            id="name"
                            type="text"
                            required
                            placeholder="John Doe"
                            className="block w-full bg-background/50 border border-border/50 rounded-xl py-3 pl-11 pr-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all text-base"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-base font-medium text-foreground/90 ml-1">
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
                            className="block w-full bg-background/50 border border-border/50 rounded-xl py-3 pl-11 pr-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all text-base"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="password" className="text-base font-medium text-foreground/90 ml-1">
                            Password
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                <Lock className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            </div>
                            <input
                                id="password"
                                type="password"
                                required
                                placeholder="••••••••"
                                className="block w-full bg-background/50 border border-border/50 rounded-xl py-3 pl-11 pr-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all text-base"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="confirmPassword" className="text-base font-medium text-foreground/90 ml-1">
                            Confirm Password
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
                                className="block w-full bg-background/50 border border-border/50 rounded-xl py-3 pl-11 pr-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all text-base"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full h-12 text-base font-bold bg-primary text-primary-foreground rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99] transition-all mt-2"
                >
                    Create account
                </Button>
            </form>

            <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border/50"></span>
                </div>
                <div className="relative flex justify-center text-sm font-semibold">
                    <span className="bg-card px-4 text-muted-foreground/60">or continue with</span>
                </div>
            </div>

            <Button
                variant="outline"
                type="button"
                className="w-full h-12 text-base font-semibold border-border/50 bg-background/30 hover:bg-muted/50 rounded-xl transition-all group flex items-center justify-center gap-3"
            >
                <img src="/google_logo-removebg-preview.png" alt="Google" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Continue with Google
            </Button>

            <p className="mt-8 text-center text-base text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="font-semibold text-foreground hover:text-primary transition-colors decoration-primary/30 underline-offset-4 hover:underline">
                    Sign in
                </Link>
            </p>
        </div>
    );
};

export default RegisterForm;
