import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Integration with authService
        console.log("Login attempt:", { email, password, rememberMe });
    };

    return (
        <div className="w-full bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-2xl transition-all hover:border-border/80">
            <form onSubmit={handleSubmit} className="space-y-5">
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

                <div className="space-y-2">
                    <div className="flex items-center justify-between ml-1">
                        <label htmlFor="password" className="text-sm font-medium text-foreground/90">
                            Password
                        </label>
                        <Link to="/forgot-password" className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                            Forgot password?
                        </Link>
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
                    <label htmlFor="remember" className="text-sm font-medium text-muted-foreground cursor-pointer select-none">
                        Remember me
                    </label>
                </div>

                <Button
                    type="submit"
                    className="w-full h-12 text-base font-bold bg-primary text-primary-foreground rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99] transition-all"
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
                className="w-full h-12 text-base font-semibold border-border/50 bg-background/30 hover:bg-muted/50 rounded-xl transition-all group flex items-center justify-center gap-3"
            >
                <img src="/google_logo-removebg-preview.png" alt="Google" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Continue with Google
            </Button>

            {/* Footer Link inside the card or below? In LoginPage it was below. I'll keep it consistent with the user's request: "Don't have an account? Sign up" should be in LoginPage, but I'll put it here to be encapsulated or let's see. The prompt says "LoginForm should contain: ... Don’t have an account? Sign up". Wait, the prompt says in task 2 "renderizar o LoginForm dentro do AuthShell; manter os campos: ... Don’t have an account? Sign up".
            Usually, these links are part of the form component. I'll add it here. */}
            <p className="mt-8 text-center text-base text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/register" className="font-semibold text-foreground hover:text-primary transition-colors decoration-primary/30 underline-offset-4 hover:underline">
                    Sign up
                </Link>
            </p>
        </div>
    );
};

export default LoginForm;
