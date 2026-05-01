import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Integration with authService
        console.log("Password recovery attempt:", { email });
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="w-full bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-2xl text-center space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">Check your email</h3>
                    <p className="text-muted-foreground text-base">
                        If an account exists for {email}, we have sent instructions to reset your password.
                    </p>
                </div>
                <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="w-full h-11 rounded-xl border-border/50 bg-background/30 hover:bg-muted/50 transition-all"
                >
                    Try another email
                </Button>
                <p className="text-base text-muted-foreground">
                    <Link to="/login" className="font-semibold text-foreground hover:text-primary transition-colors">
                        Back to sign in
                    </Link>
                </p>
            </div>
        );
    }

    return (
        <div className="w-full bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-2xl transition-all hover:border-border/80">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-base font-medium text-foreground/90 ml-1">
                        Email Address
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

                <Button
                    type="submit"
                    className="w-full h-12 text-base font-bold bg-primary text-primary-foreground rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                    Send recovery link
                </Button>
            </form>

            <p className="mt-8 text-center text-base text-muted-foreground">
                Remember your password?{' '}
                <Link to="/login" className="font-semibold text-foreground hover:text-primary transition-colors decoration-primary/30 underline-offset-4 hover:underline">
                    Back to sign in
                </Link>
            </p>
        </div>
    );
};

export default ForgotPasswordForm;
