import React from 'react';
import { VideoIcon, Clock, Zap, Calendar, ExternalLink, Download, PlayCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import type { LibraryAnalysisStatus } from '../types/library.types';

interface LibraryAnalysisCardProps {
    title: string;
    source: string;
    url: string;
    status: LibraryAnalysisStatus;
    duration: string;
    clipsCount: number;
    viralScore: number | null;
    createdAt: string;
    thumbnailLabel: string;
    index: number;
}

const LibraryAnalysisCard: React.FC<LibraryAnalysisCardProps> = ({
    title,
    source,
    url,
    status,
    duration,
    clipsCount,
    viralScore,
    createdAt,
    thumbnailLabel,
    index
}) => {
    const statusColors = {
        completed: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
        processing: "bg-amber-500/10 text-amber-500 border-amber-500/20",
        failed: "bg-rose-500/10 text-rose-500 border-rose-500/20",
    };

    const statusIcons = {
        completed: <PlayCircle className="w-3.5 h-3.5" />,
        processing: <Loader2 className="w-3.5 h-3.5 animate-spin" />,
        failed: <AlertCircle className="w-3.5 h-3.5" />,
    };

    return (
        <div
            className="group bg-card/40 border border-border hover:border-muted-foreground/30 rounded-3xl p-5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Thumbnail Fake */}
                <div className="relative w-full md:w-48 aspect-video bg-muted/20 rounded-2xl overflow-hidden flex items-center justify-center border border-border/50 group-hover:bg-muted/30 transition-colors">
                    <span className="text-sm font-semibold text-muted-foreground/60 uppercase tracking-widest">{thumbnailLabel}</span>
                    <div className="absolute top-2 left-2">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-tight border ${statusColors[status]}`}>
                            {statusIcons[status]}
                            {status}
                        </span>
                    </div>
                    {status === 'completed' && (
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <PlayCircle className="w-10 h-10 text-white fill-white/20 backdrop-blur-sm rounded-full" />
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="flex-1 space-y-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium uppercase tracking-tighter">
                            <Calendar className="w-3 h-3" />
                            {createdAt}
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">{title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <VideoIcon className="w-3.5 h-3.5" />
                            <span>{source} • </span>
                            <span className="flex items-center gap-1 hover:text-primary cursor-pointer transition-colors">
                                {url}
                                <ExternalLink className="w-3 h-3" />
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-muted/20 px-3 py-1.5 rounded-xl border border-border/50">
                            <Clock className="w-3.5 h-3.5" />
                            {duration}
                        </div>
                        {status === 'completed' && (
                            <>
                                <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-muted/20 px-3 py-1.5 rounded-xl border border-border/50">
                                    <div className="text-xs font-bold">#</div>
                                    {clipsCount} Clips
                                </div>
                                {viralScore && (
                                    <div className="flex items-center gap-1.5 text-sm text-primary bg-primary/10 px-3 py-1.5 rounded-xl border border-primary/20 font-bold">
                                        <Zap className="w-3.5 h-3.5 fill-primary" />
                                        {viralScore}% Score
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <Link to="/analysis" className="flex-1">
                        <Button
                            className="w-full bg-foreground text-background hover:opacity-90 rounded-xl h-11 px-5 font-semibold transition-all"
                            disabled={status !== 'completed'}
                        >
                            Open
                        </Button>
                    </Link>
                    <Button
                        variant="outline"
                        size="icon"
                        className="bg-card border-border hover:bg-muted/50 rounded-xl h-11 w-11 transition-all"
                        disabled={status !== 'completed'}
                    >
                        <Download className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LibraryAnalysisCard;
