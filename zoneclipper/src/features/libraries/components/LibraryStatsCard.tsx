import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface LibraryStatsCardProps {
    label: string;
    value: string | number;
    description: string;
    icon?: LucideIcon;
}

const LibraryStatsCard: React.FC<LibraryStatsCardProps> = ({
    label,
    value,
    description,
    icon: Icon
}) => {
    return (
        <div className="bg-card border border-border rounded-2xl p-5 md:p-6 transition-all hover:border-muted-foreground/30 group">
            <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {label}
                </span>
                {Icon && (
                    <div className="w-8 h-8 rounded-lg bg-muted/20 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                        <Icon className="w-4 h-4" />
                    </div>
                )}
            </div>

            <div className="space-y-1">
                <div className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                    {value}
                </div>
                <p className="text-sm text-muted-foreground/80">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default LibraryStatsCard;
