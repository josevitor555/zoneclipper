import React from 'react';
import { Search, ChevronDown, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LibraryFilters: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
            {/* Search Input */}
            <div className="relative flex-1 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-foreground transition-colors" />
                <input 
                    type="text" 
                    placeholder="Search analyses..." 
                    className="w-full h-12 bg-card border border-border focus:border-muted-foreground/50 rounded-xl pl-11 pr-4 text-foreground outline-none transition-all"
                />
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                <Button variant="outline" className="bg-foreground text-background hover:bg-foreground/90 border-transparent rounded-lg px-4 h-10 font-semibold text-sm">
                    All
                </Button>
                <Button variant="outline" className="bg-card border-border hover:bg-muted/50 rounded-lg px-4 h-10 text-muted-foreground hover:text-foreground font-medium text-sm">
                    Completed
                </Button>
                <Button variant="outline" className="bg-card border-border hover:bg-muted/50 rounded-lg px-4 h-10 text-muted-foreground hover:text-foreground font-medium text-sm">
                    Processing
                </Button>
                <Button variant="outline" className="bg-card border-border hover:bg-muted/50 rounded-lg px-4 h-10 text-muted-foreground hover:text-foreground font-medium text-sm">
                    Failed
                </Button>
            </div>

            {/* Sort Toggle */}
            <Button variant="outline" className="bg-card border-border hover:bg-muted/50 rounded-xl px-4 h-12 text-foreground font-medium transition-all min-w-[160px] justify-between">
                <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-muted-foreground" />
                    Sort by recent
                </div>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </Button>
        </div>
    );
};

export default LibraryFilters;
