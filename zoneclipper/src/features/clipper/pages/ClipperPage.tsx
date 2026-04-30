import React, { useState } from 'react';

// Shadcn Components
import { Button } from '@/components/ui/button';

// Style CSS
import "../../../App.css";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Icons
import {
    Sparkles,
    Scissors,
    Type,
    Link as LinkIcon,
    ChevronRight,
    ChevronDown,
    Library,
    AlertCircle,
    Clipboard
} from 'lucide-react';

const ClipperPage = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const [title, setTitle] = useState('');
    const [library, setLibrary] = useState('');
    const [error, setError] = useState('');

    const libraries = [
        { id: 'gamers', name: 'Gamers' },
        { id: 'ia-prog', name: 'AI + Programming' },
        { id: 'tech', name: 'Tech Curiosities' },
    ];

    const handleAnalyzeVideo = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!videoUrl.trim()) {
            setError('Please enter a YouTube video link.');
            return;
        }

        if (!videoUrl.includes('youtube.com') && !videoUrl.includes('youtu.be')) {
            setError('The link must be from a YouTube video.');
            return;
        }

        console.log('Analyzing video:', {
            videoUrl,
            title,
            library
        });

        alert('Analysis started! Check the console for more details.');
    };

    return (
        <div className="relative min-h-screen bg-background text-foreground overflow-hidden selection:bg-muted selection:text-foreground">
            <div className="relative z-10 container mx-auto px-4 py-12 md:py-24 flex flex-col items-center">
                {/* Hero Header */}
                <header className="text-center max-w-4xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/50 text-muted-foreground text-sm mb-6 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-foreground" />
                        <span>AI-powered smart clipping</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                        Transform long videos into <span className="text-muted-foreground">viral Shorts</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        AI finds the best moments, suggests crops, and prepares animated captions so you can focus on content.
                    </p>
                </header>

                {/* Main Card */}
                <div className="w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    <div className="bg-card/40 border border-border rounded-3xl p-8 backdrop-blur-xl shadow-2xl shadow-background/50">
                        <form onSubmit={handleAnalyzeVideo} className="space-y-6">
                            {/* YouTube Link Field */}
                            <div className="space-y-2">
                                <label htmlFor="videoUrl" className="text-sm font-medium text-muted-foreground ml-1 flex items-center gap-2">
                                    <Clipboard className="w-4 h-4" /> YouTube video link
                                </label>
                                <div className="relative group">
                                    <input
                                        id="videoUrl"
                                        type="url"
                                        placeholder="https://www.youtube.com/watch?v=..."
                                        value={videoUrl}
                                        onChange={(e) => setVideoUrl(e.target.value)}
                                        className="w-full bg-input border border-border focus:border-muted-foreground focus:ring-1 focus:ring-muted-foreground rounded-2xl py-4 px-5 text-foreground transition-all outline-none placeholder:text-muted-foreground/40"
                                    />
                                    <div className="absolute inset-0 rounded-2xl border border-muted-foreground/0 group-hover:border-muted-foreground/10 pointer-events-none transition-all" />
                                </div>
                                {error && (
                                    <div className="flex items-center gap-2 text-destructive text-xs mt-1 ml-1 animate-in fade-in slide-in-from-top-1">
                                        <AlertCircle className="w-3 h-3" /> {error}
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Optional Title Field */}
                                <div className="space-y-2">
                                    <label htmlFor="title" className="text-sm font-medium text-muted-foreground ml-1">
                                        Analysis Title (optional)
                                    </label>
                                    <input
                                        id="title"
                                        type="text"
                                        placeholder="Ex: Highlights Podcast #01"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="w-full bg-input border border-border focus:border-muted-foreground focus:ring-1 focus:ring-muted-foreground rounded-2xl py-3 px-4 text-foreground transition-all outline-none placeholder:text-muted-foreground/40"
                                    />
                                </div>

                                {/* Library Select */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground ml-1 flex items-center gap-2">
                                        <Library className="w-4 h-4" /> Library
                                    </label>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="w-full h-[50px] bg-input border-border hover:bg-input hover:text-foreground justify-between px-4 rounded-2xl text-foreground font-normal transition-all outline-none"
                                            >
                                                {library ? libraries.find(l => l.id === library)?.name : "Select a library"}
                                                <ChevronDown className="w-4 h-4 opacity-50" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-[280px] bg-card border-border rounded-xl">
                                            {libraries.map((lib) => (
                                                <DropdownMenuItem
                                                    key={lib.id}
                                                    onClick={() => setLibrary(lib.id)}
                                                    className="focus:bg-muted focus:text-foreground cursor-pointer py-2.5"
                                                >
                                                    {lib.name}
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>

                            {/* Action Button */}
                            <Button
                                type="submit"
                                className="w-full h-14 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg transition-all active:scale-[0.98] mt-2 group"
                            >
                                Analyze video with AI
                                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Workflow Badges */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                    <WorkflowStep
                        icon={<LinkIcon className="w-5 h-5" />}
                        title="Link"
                        desc="Paste the video URL"
                    />
                    <WorkflowStep
                        icon={<Sparkles className="w-5 h-5" />}
                        title="AI"
                        desc="Automatic analysis"
                    />
                    <WorkflowStep
                        icon={<Scissors className="w-5 h-5" />}
                        title="Clips"
                        desc="Best moments"
                    />
                    <WorkflowStep
                        icon={<Type className="w-5 h-5" />}
                        title="Captions"
                        desc="Animated styles"
                    />
                </div>

                {/* Minimalist Footer */}
                <footer className="mt-24 text-muted-foreground/60 text-base">
                    <p>© 2026 ZoneClipper.ai — From long video to viral in minutes.</p>
                </footer>
            </div>
        </div>
    );
};

// Helper component for workflow steps
const WorkflowStep = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="flex flex-col items-center text-center p-4 group">
        <div className="w-12 h-12 rounded-2xl bg-muted border border-border flex items-center justify-center mb-4 group-hover:border-muted-foreground group-hover:bg-muted/80 transition-all text-muted-foreground group-hover:text-foreground">
            {icon}
        </div>
        <h3 className="font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-base text-muted-foreground">{desc}</p>
    </div>
);

export default ClipperPage;