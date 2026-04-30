import React from 'react';
import { Play, Edit2, Zap, Clock, Type } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SuggestedClipCardProps {
    title: string;
    startTime: string;
    endTime: string;
    score: number;
    reason: string;
    captionStyle: string;
    index: number;
}

const SuggestedClipCard: React.FC<SuggestedClipCardProps> = ({
    title,
    startTime,
    endTime,
    score,
    reason,
    captionStyle,
    index
}) => {
    return (
        <div className="group bg-card/40 border border-border hover:border-muted-foreground/30 rounded-2xl p-5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Index & Image Placeholder */}
                <div className="relative w-full md:w-32 aspect-video bg-muted/40 rounded-xl overflow-hidden flex items-center justify-center border border-border/50">
                    <span className="text-xs font-bold text-muted-foreground uppercase">Clip {String(index + 1).padStart(2, '0')}</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="space-y-1">
                            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{title}</h3>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5" />
                                    {startTime} - {endTime}
                                </span>
                                <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                                <span className="flex items-center gap-1">
                                    <Type className="w-3.5 h-3.5" />
                                    {captionStyle}
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
                            <Zap className="w-3.5 h-3.5 text-primary fill-primary" />
                            <span className="text-sm font-bold text-primary">{score} Score</span>
                        </div>
                    </div>

                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                        {reason}
                    </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 md:flex-none bg-muted/20 border-border hover:bg-muted/40 rounded-xl h-10 px-4"
                    >
                        <Play className="w-3.5 h-3.5 mr-2" />
                        Preview
                    </Button>
                    <Button 
                        size="sm" 
                        className="flex-1 md:flex-none bg-foreground text-background hover:opacity-90 rounded-xl h-10 px-4 font-semibold"
                    >
                        <Edit2 className="w-3.5 h-3.5 mr-2" />
                        Edit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SuggestedClipCard;
