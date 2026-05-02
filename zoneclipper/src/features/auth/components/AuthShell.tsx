import React from 'react';
import { PlayCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface AuthShellProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

const AuthShell: React.FC<AuthShellProps> = ({ title, description, children }) => {
    return (
        <div className="dark min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-background relative overflow-hidden selection:bg-primary/30">
            {/* Background soft gradients for depth - Global */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

            {/* Left Column - Form Content */}
            <div className="flex items-center justify-center p-8 relative z-10 lg:border-r lg:border-border/10">
                <div className="w-full max-w-md flex flex-col items-center lg:items-start">
                    {/* Logo Section */}
                    <div className="mb-10 text-center lg:text-left w-full">
                        <div className="inline-flex items-center justify-center mb-6">
                            <span className="text-3xl font-bold text-foreground">
                                ZoneClipper<span className="text-primary">.ai</span>
                            </span>
                        </div>
                        <h1 className="text-3xl font-semibold text-foreground tracking-tight mb-2">{title}</h1>
                        <p className="text-muted-foreground max-w-[280px] lg:max-w-none text-base">
                            {description}
                        </p>
                    </div>

                    {/* Form Content */}
                    <div className="w-full">
                        {children}
                    </div>
                </div>
            </div>

            {/* Right Column - Branding & Info */}
            <div className="hidden lg:flex flex-col items-center justify-center p-12 bg-muted/10 relative overflow-hidden">
                {/* Background visual effects for right column */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />

                <div className="relative z-10 max-w-lg text-center space-y-10">
                    <div className="space-y-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-sm font-bold text-primary mb-4">
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
                            <span className="text-base font-semibold text-muted-foreground">Community</span>
                        </Button>
                    </div>

                    <div className="pt-10 border-t border-border/20">
                        <p className="text-base font-semibold text-muted-foreground/60 flex items-center justify-center gap-2">
                            Developed for
                            <a href="https://www.youtube.com/@DevZoneAI" target="_blank">
                                <span className="text-foreground border-b border-primary/50 hover:border-primary">DevZoneAI</span>
                            </a>
                            YouTube Channel
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthShell;
