import React from 'react';
import { Plus, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const LibraryHeader: React.FC = () => {
    return (
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="space-y-1">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Library</h1>
                <p className="text-muted-foreground text-lg">
                    Manage your analyzed videos and generated clips.
                </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
                <Button 
                    variant="outline" 
                    className="flex-1 md:flex-none bg-card border-border hover:bg-muted/50 rounded-xl h-11 px-6 font-medium transition-all"
                >
                    <Upload className="w-4 h-4 mr-2" />
                    Import video
                </Button>
                <Link to="/" className="flex-1 md:flex-none">
                    <Button 
                        className="w-full bg-foreground text-background hover:opacity-90 rounded-xl h-11 px-6 font-semibold transition-all shadow-lg shadow-foreground/10"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        New analysis
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default LibraryHeader;
