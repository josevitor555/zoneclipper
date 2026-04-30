import React from 'react';
import { ArrowLeft, CheckCircle2, Download, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AnalysisHeader: React.FC = () => {
    return (
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="space-y-4">
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
                
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Analysis completed
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Highlights Podcast #01
                    </h1>
                    <p className="text-muted-foreground">
                        YouTube video analyzed with AI • 42:18 total duration
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <Button 
                    variant="outline" 
                    className="bg-card border-border hover:bg-muted/50 rounded-xl h-11 px-6 font-medium transition-all"
                >
                    <Plus className="w-4 h-4 mr-2" />
                    New analysis
                </Button>
                <Button 
                    className="bg-foreground text-background hover:opacity-90 rounded-xl h-11 px-6 font-semibold transition-all shadow-lg shadow-foreground/10"
                >
                    <Download className="w-4 h-4 mr-2" />
                    Export clips
                </Button>
            </div>
        </div>
    );
};

export default AnalysisHeader;
