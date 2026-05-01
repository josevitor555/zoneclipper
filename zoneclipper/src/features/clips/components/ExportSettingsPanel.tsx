import React from "react";
import { Download, Share2, Music2, Layers, Play, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ExportSettingsPanel: React.FC = () => {
    return (
        <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-6">
                <Share2 className="w-4 h-4 text-muted-foreground" />
                <h3 className="text-base font-semibold text-foreground">Export Settings</h3>
            </div>

            <div className="space-y-5">
                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                        <label className="text-base font-semibold text-muted-foreground block">Format</label>
                        <div className="bg-muted border border-border rounded-xl p-2.5 text-xs text-foreground flex items-center justify-between cursor-pointer hover:border-primary transition-colors">
                            9:16 Vertical
                            <div className="w-1 h-1 rounded-full bg-primary" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-base font-semibold text-muted-foreground block">Quality</label>
                        <div className="bg-muted border border-border rounded-xl p-2.5 text-xs text-foreground flex items-center justify-between cursor-pointer hover:border-primary transition-colors">
                            1080p
                            <div className="w-1 h-1 rounded-full bg-primary" />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-base font-semibold text-muted-foreground block">Social Platforms</label>
                    <div className="flex items-center gap-2">
                        <div className="p-2.5 rounded-xl bg-muted border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-all cursor-pointer">
                            <PlayCircle className="w-4 h-4" />
                        </div>
                        <div className="p-2.5 rounded-xl bg-primary border border-primary text-primary-foreground transition-all cursor-pointer">
                            <Music2 className="w-4 h-4" />
                        </div>
                        <div className="p-2.5 rounded-xl bg-muted border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-all cursor-pointer">
                            <Play className="w-4 h-4" />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-base font-semibold text-muted-foreground block">Captions</label>
                    <div className="bg-muted border border-border rounded-xl p-3 flex items-center justify-between group cursor-pointer hover:border-primary transition-colors">
                        <div className="flex items-center gap-3">
                            <Layers className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-foreground">Burned-in captions</span>
                        </div>
                        <div className="w-8 h-4 bg-primary rounded-full relative">
                            <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-primary-foreground rounded-full shadow-sm" />
                        </div>
                    </div>
                </div>

                <div className="pt-4 flex flex-col gap-3">
                    <Button variant="outline" className="w-full bg-card border-border text-muted-foreground hover:bg-muted hover:text-foreground h-11 gap-2">
                        <Download className="w-4 h-4" />
                        Download preview
                    </Button>
                    <Button className="w-full bg-primary text-primary-foreground hover:opacity-90 font-black h-12 uppercase tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                        Export Final Clip
                    </Button>
                </div>
            </div>
        </div>
    );
};
