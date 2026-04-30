import React from 'react';
import { VideoIcon, Clock, Zap, Target, FileText } from 'lucide-react';

interface VideoSummaryCardProps {
    title: string;
    url: string;
    duration: string;
    viralScore: number;
    clipsFound: number;
    hooksDetected: number;
    summary: string;
}

const VideoSummaryCard: React.FC<VideoSummaryCardProps> = ({
    title,
    url,
    duration,
    viralScore,
    clipsFound,
    hooksDetected,
    summary
}) => {
    return (
        <div className="bg-card/50 border border-border rounded-3xl p-6 md:p-8 backdrop-blur-xl animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium mb-6 uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                Video summary
            </div>

            <div className="space-y-8">
                {/* Main Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <h2 className="text-xl font-bold text-foreground line-clamp-2">{title}</h2>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                <VideoIcon className="w-4 h-4" />
                                <span className="hover:text-primary cursor-pointer transition-colors break-all">
                                    {url}
                                </span>
                            </div>
                        </div>

                        <div className="p-4 bg-muted/20 border border-border/50 rounded-2xl">
                            <p className="text-sm text-muted-foreground leading-relaxed italic">
                                "{summary}"
                            </p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-muted/30 border border-border/50 rounded-2xl flex flex-col items-center justify-center text-center space-y-1">
                            <Clock className="w-5 h-5 text-muted-foreground" />
                            <span className="text-lg font-bold text-foreground">{duration}</span>
                            <span className="text-sm text-muted-foreground font-semibold">Duration</span>
                        </div>
                        <div className="p-4 bg-primary/10 border border-primary/20 rounded-2xl flex flex-col items-center justify-center text-center space-y-1">
                            <Zap className="w-5 h-5 text-primary" />
                            <span className="text-lg font-bold text-primary">{viralScore}%</span>
                            <span className="text-sm text-primary/70 font-semibold">Viral Score</span>
                        </div>
                        <div className="p-4 bg-muted/30 border border-border/50 rounded-2xl flex flex-col items-center justify-center text-center space-y-1">
                            <Target className="w-5 h-5 text-muted-foreground" />
                            <span className="text-lg font-bold text-foreground">{hooksDetected}</span>
                            <span className="text-sm text-muted-foreground font-semibold">Hooks</span>
                        </div>
                        <div className="p-4 bg-muted/30 border border-border/50 rounded-2xl flex flex-col items-center justify-center text-center space-y-1">
                            <div className="w-5 h-5 flex items-center justify-center">
                                <span className="text-lg leading-none font-bold">#</span>
                            </div>
                            <span className="text-lg font-bold text-foreground">{clipsFound}</span>
                            <span className="text-sm text-muted-foreground font-semibold">Clips Found</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSummaryCard;
