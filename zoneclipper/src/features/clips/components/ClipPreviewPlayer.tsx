import React from "react";
import { Play, SkipBack, SkipForward, Maximize2, Volume2 } from "lucide-react";

interface ClipPreviewPlayerProps {
    captionText: string;
}

export const ClipPreviewPlayer: React.FC<ClipPreviewPlayerProps> = ({ captionText }) => {
    return (
        <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl relative aspect-[9/16] max-w-[360px] mx-auto w-full group">
            {/* Video Content Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center border border-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <Play className="w-8 h-8 text-foreground fill-foreground" />
                    </div>
                </div>

                {/* Mock Captions */}
                <div className="absolute bottom-1/3 left-0 right-0 px-8 text-center">
                    <p className="text-2xl font-black text-foreground uppercase tracking-tighter drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] leading-tight italic">
                        {captionText}
                    </p>
                </div>
            </div>

            {/* Badge */}
            <div className="absolute top-4 left-4">
                <span className="px-2 py-1 rounded bg-background/60 backdrop-blur-md text-[10px] font-bold text-foreground uppercase tracking-widest border border-foreground/10">
                    9:16 Preview
                </span>
            </div>

            {/* Playback Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/60 to-transparent pt-20">
                {/* Progress Bar */}
                <div className="h-1 w-full bg-foreground/20 rounded-full mb-6 overflow-hidden cursor-pointer relative group/bar">
                    <div className="absolute top-0 left-0 h-full w-[45%] bg-primary transition-colors" />
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-foreground">
                        <button className="hover:text-primary transition-colors">
                            <SkipBack className="w-5 h-5 fill-current" />
                        </button>
                        <button className="p-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-colors">
                            <Play className="w-4 h-4 fill-current" />
                        </button>
                        <button className="hover:text-primary transition-colors">
                            <SkipForward className="w-5 h-5 fill-current" />
                        </button>
                        <span className="text-xs font-medium tabular-nums ml-2">00:18 / 00:46</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <Volume2 className="w-5 h-5 cursor-pointer hover:text-foreground transition-colors" />
                        <Maximize2 className="w-5 h-5 cursor-pointer hover:text-foreground transition-colors" />
                    </div>
                </div>
            </div>
        </div>
    );
};
