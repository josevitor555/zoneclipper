import React from "react";
import { Info, TrendingUp, Clock, Type, Smartphone } from "lucide-react";

interface ClipMetadataCardProps {
    viralScore: number;
    duration: string;
    captionStyle: string;
    platform: string;
    reason: string;
}

export const ClipMetadataCard: React.FC<ClipMetadataCardProps> = ({ viralScore, duration, captionStyle, platform, reason }) => {
    return (
        <div className="bg-card border border-border rounded-2xl p-6 shadow-xl mb-6">
            <div className="flex items-center gap-2 mb-6">
                <Info className="w-4 h-4 text-muted-foreground" />
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Clip Details</h3>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-primary">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span className="text-base font-semibold">Viral Score</span>
                    </div>
                    <span className="text-xl font-black text-foreground">{viralScore}%</span>
                </div>

                <div className="p-4 rounded-2xl bg-muted border border-border flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Duration</span>
                    </div>
                    <span className="text-xl font-bold text-foreground">{duration}</span>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-border">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Type className="w-4 h-4" />
                        <span className="text-sm">Caption Style</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground bg-muted px-2 py-1 rounded">{captionStyle}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-border">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Smartphone className="w-4 h-4" />
                        <span className="text-sm">Suggested Platform</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground bg-muted px-2 py-1 rounded">{platform}</span>
                </div>
            </div>

            <div className="mt-6">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-2">AI Reason</p>
                <div className="p-3 rounded-xl bg-background border border-border leading-relaxed">
                    <p className="text-sm text-muted-foreground">"{reason}"</p>
                </div>
            </div>
        </div>
    );
};
