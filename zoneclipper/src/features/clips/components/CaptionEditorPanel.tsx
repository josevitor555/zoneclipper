import React from "react";
import { Type, Sparkles, Wand2, Check } from "lucide-react";
import { Button } from "../../../components/ui/button";

interface CaptionEditorPanelProps {
    initialText: string;
}

export const CaptionEditorPanel: React.FC<CaptionEditorPanelProps> = ({ initialText }) => {
    const styles = ["Bold kinetic", "Clean subtitles", "High contrast"];

    return (
        <div className="bg-card border border-border rounded-2xl p-6 shadow-xl mb-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Type className="w-4 h-4 text-muted-foreground" />
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Captions</h3>
                </div>
                <button className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all border border-primary/20 group">
                    <Sparkles className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold uppercase">AI Refine</span>
                </button>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="text-base font-semibold text-muted-foreground mb-2 block">Caption Content</label>
                    <textarea
                        className="w-full bg-background border border-border rounded-xl p-4 text-base text-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all h-24 resize-none leading-relaxed"
                        defaultValue={initialText}
                    />
                </div>

                <div>
                    <label className="text-base font-semibold text-muted-foreground mb-3 block">Visual Style</label>
                    <div className="grid grid-cols-1 gap-2">
                        {styles.map((style) => (
                            <button
                                key={style}
                                className={`flex items-center justify-between p-3 rounded-xl border transition-all text-left ${style === "Bold kinetic" ? 'bg-primary border-primary text-primary-foreground' : 'bg-muted border-border text-muted-foreground hover:border-foreground/20'}`}
                            >
                                <span className="text-base font-semibold">{style}</span>
                                {style === "Bold kinetic" && <Check className="w-3.5 h-3.5" />}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center flex-wrap gap-3">
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-4 h-4 rounded border border-border bg-muted flex items-center justify-center group-hover:border-primary transition-colors">
                            <Check className="w-2.5 h-2.5 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">Uppercase</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-4 h-4 rounded border border-border bg-muted flex items-center justify-center group-hover:border-primary transition-colors">
                            <Check className="w-2.5 h-2.5 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">Highlight keywords</span>
                    </label>
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:opacity-90 font-bold h-11 gap-2">
                    <Wand2 className="w-4 h-4" />
                    Regenerate captions
                </Button>
            </div>
        </div>
    );
};
