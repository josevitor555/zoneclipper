import React from 'react';
import { Layout, Palette, Settings2, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaptionPreviewCard: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="bg-card border border-border rounded-3xl p-6 backdrop-blur-xl animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium mb-6 uppercase tracking-wider">
                    <Smartphone className="w-4 h-4" />
                    Preview 9:16
                </div>

                {/* Vertical Preview Container */}
                <div className="relative aspect-[9/16] w-full bg-muted/30 rounded-2xl overflow-hidden border border-border/50 group">
                    {/* Simulated Video Content */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

                    {/* Animated Glow/Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary/5 rounded-full blur-[100px] animate-pulse" />

                    {/* Overlay Captions */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <div className="space-y-2 animate-in fade-in zoom-in duration-1000">
                            <span className="inline-block bg-primary text-primary-foreground px-2 py-0.5 text-sm font-semibold uppercase tracking-tighter rounded">
                                Viral Moment
                            </span>
                            <p className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tighter leading-none [text-shadow:_0_4px_12px_rgb(0_0_0_/_50%)]">
                                This moment could <br />
                                <span className="text-primary">become a viral</span> <br />
                                short video
                            </p>
                        </div>
                    </div>

                    {/* Video Info UI Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md" />
                            <div className="space-y-0.5">
                                <div className="h-2 w-16 bg-white/40 rounded" />
                                <div className="h-1.5 w-10 bg-white/20 rounded" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="w-6 h-6 rounded-full bg-white/20" />
                            <div className="w-6 h-6 rounded-full bg-white/20" />
                            <div className="w-6 h-6 rounded-full bg-white/20" />
                        </div>
                    </div>
                </div>

                {/* Style Details */}
                <div className="mt-8 space-y-4">
                    <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-center justify-between p-3 bg-muted/20 border border-border/50 rounded-xl">
                            <div className="flex items-center gap-2 text-sm">
                                <Palette className="w-4 h-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Style</span>
                            </div>
                            <span className="text-sm font-semibold">Bold Kinetic</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted/20 border border-border/50 rounded-xl">
                            <div className="flex items-center gap-2 text-sm">
                                <Layout className="w-4 h-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Format</span>
                            </div>
                            <span className="text-sm font-semibold">9:16 Vertical</span>
                        </div>
                    </div>

                    <Button className="w-full bg-muted border border-border hover:bg-muted/80 text-foreground rounded-xl h-12 font-semibold transition-all">
                        <Settings2 className="w-4 h-4 mr-2" />
                        Customize captions
                    </Button>
                </div>
            </div>

            {/* Platform Badge */}
            <div className="bg-muted/10 border border-border/30 rounded-full p-4 flex items-center justify-center gap-4 animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
                <span className="text-base font-semibold text-muted-foreground">Optimized for</span>
                <div className="flex items-center gap-3 opacity-50">
                    <div className="w-4 h-4 bg-muted-foreground rounded-sm" />
                    <div className="w-4 h-4 bg-muted-foreground rounded-full" />
                    <div className="w-4 h-4 bg-muted-foreground rotate-45 rounded-sm" />
                </div>
            </div>
        </div>
    );
};

export default CaptionPreviewCard;
