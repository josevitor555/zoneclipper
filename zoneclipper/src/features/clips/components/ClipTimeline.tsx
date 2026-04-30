import React from "react";
import { Clock, Scissors, Zap } from "lucide-react";
import type { TimelineMoment } from "../types/clip.types";

interface ClipTimelineProps {
    moments: TimelineMoment[];
    startTime: string;
    endTime: string;
    duration: string;
}

export const ClipTimeline: React.FC<ClipTimelineProps> = ({ moments, startTime, endTime, duration }) => {
    return (
        <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Scissors className="w-4 h-4 text-muted-foreground" />
                    <h3 className="text-base font-semibold text-foreground">Clip Timeline</h3>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted border border-border">
                    <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-base font-semibold text-foreground">{duration}</span>
                </div>
            </div>

            <div className="relative pt-8 pb-12 px-2">
                {/* Main Track */}
                <div className="h-2 w-full bg-muted rounded-full relative">
                    {/* Selected Segment */}
                    <div className="absolute top-0 left-[20%] right-[30%] h-full bg-primary rounded-full">
                        {/* Draggable handles mockup */}
                        <div className="absolute -top-1.5 -left-1 w-3 h-5 bg-primary border-2 border-background rounded-sm cursor-col-resize" />
                        <div className="absolute -top-1.5 -right-1 w-3 h-5 bg-primary border-2 border-background rounded-sm cursor-col-resize" />
                    </div>

                    {/* Indicators */}
                    {moments.map((moment, idx) => (
                        <div
                            key={idx}
                            className="absolute top-full mt-4 flex flex-col items-center group cursor-pointer"
                            style={{ left: `${20 + (idx * 25)}%` }}
                        >
                            <div className="w-0.5 h-2 bg-muted-foreground group-hover:bg-foreground transition-colors" />
                            <div className="mt-2 text-center">
                                <p className="text-xs font-semibold text-foreground whitespace-nowrap">{moment.label}</p>
                                <p className="text-xs text-muted-foreground font-semibold">{moment.time}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Start/End Time Labels */}
                <div className="absolute top-0 left-0 right-0 flex justify-between px-2">
                    <span className="text-xs font-semibold text-muted-foreground">{startTime}</span>
                    <span className="text-xs font-semibold text-muted-foreground">{endTime}</span>
                </div>
            </div>

            <div className="mt-8 space-y-3">
                {moments.map((moment, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-background/50 border border-border hover:border-foreground/20 transition-all cursor-pointer group">
                        <div className="flex items-center gap-3">
                            <div className={`p-1.5 rounded-lg ${idx === 1 ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                                {idx === 1 ? <Zap className="w-3.5 h-3.5 fill-current" /> : <Clock className="w-3.5 h-3.5" />}
                            </div>
                            <span className="text-base font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{moment.label}</span>
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground bg-muted rounded-full px-2 py-0.5 rounded border border-border">{moment.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
