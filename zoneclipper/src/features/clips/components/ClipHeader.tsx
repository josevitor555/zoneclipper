import React from "react";
import { ChevronLeft, Save, ExternalLink } from "lucide-react";
import { Button } from "../../../components/ui/button";

interface ClipHeaderProps {
    title: string;
    parentAnalysis: string;
    status: string;
}

export const ClipHeader: React.FC<ClipHeaderProps> = ({ title, parentAnalysis, status }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-start gap-4">
                <button className="p-2 rounded-lg bg-muted border border-border text-muted-foreground hover:text-foreground transition-colors mt-1">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <h1 className="text-2xl font-bold text-foreground tracking-tight">{title}</h1>
                        <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20 uppercase tracking-wider">
                            {status}
                        </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                        From <span className="text-foreground font-medium">{parentAnalysis}</span>
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <Button variant="outline" className="bg-card border-border text-muted-foreground hover:bg-accent hover:text-foreground gap-2">
                    <Save className="w-4 h-4" />
                    Save changes
                </Button>
                <Button className="bg-primary text-primary-foreground hover:opacity-90 font-semibold gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Export clip
                </Button>
            </div>
        </div>
    );
};
