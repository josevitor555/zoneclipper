import React from 'react';
import LibraryHeader from '../components/LibraryHeader';
import LibraryStatsCard from '../components/LibraryStatsCard';
import LibraryFilters from '../components/LibraryFilters';
import LibraryAnalysisCard from '../components/LibraryAnalysisCard';
import { Database, Zap, Sparkles, Loader2 } from 'lucide-react';
import type { LibraryAnalysis } from '../types/library.types';

const libraryMock: LibraryAnalysis[] = [
    {
        title: "Highlights Podcast #01",
        source: "YouTube",
        url: "youtube.com/watch?v=example",
        status: "completed",
        duration: "42:18",
        clipsCount: 3,
        viralScore: 82,
        createdAt: "Today, 14:32",
        thumbnailLabel: "Podcast"
    },
    {
        title: "React Performance Tips",
        source: "YouTube",
        url: "youtube.com/watch?v=react-demo",
        status: "completed",
        duration: "18:44",
        clipsCount: 5,
        viralScore: 88,
        createdAt: "Yesterday, 19:10",
        thumbnailLabel: "Code"
    },
    {
        title: "AI Tools Comparison 2026",
        source: "YouTube",
        url: "youtube.com/watch?v=ai-tools",
        status: "processing",
        duration: "31:05",
        clipsCount: 0,
        viralScore: null,
        createdAt: "Yesterday, 10:21",
        thumbnailLabel: "AI"
    },
    {
        title: "Gaming Setup Review",
        source: "YouTube",
        url: "youtube.com/watch?v=gaming-setup",
        status: "failed",
        duration: "24:57",
        clipsCount: 0,
        viralScore: null,
        createdAt: "Apr 28, 2026",
        thumbnailLabel: "Gaming"
    }
];

const LibraryPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground pb-20">
            {/* Main Container */}
            <div className="container mx-auto px-4 py-12">

                {/* Header */}
                <LibraryHeader />

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
                    <LibraryStatsCard
                        label="Total analyses"
                        value="12"
                        description="Videos processed in your library"
                        icon={Database}
                    />
                    <LibraryStatsCard
                        label="Clips generated"
                        value="36"
                        description="Viral short-form clips created"
                        icon={Sparkles}
                    />
                    <LibraryStatsCard
                        label="Avg. Viral Score"
                        value="81%"
                        description="Performance across all suggestions"
                        icon={Zap}
                    />
                    <LibraryStatsCard
                        label="In processing"
                        value="2"
                        description="Currently being analyzed by AI"
                        icon={Loader2}
                    />
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                    {/* Filters & Search */}
                    <LibraryFilters />

                    {/* Analysis List */}
                    <div className="grid grid-cols-1 gap-4">
                        {libraryMock.map((item, index) => (
                            <LibraryAnalysisCard
                                key={index}
                                index={index}
                                {...item}
                            />
                        ))}
                    </div>

                    {/* Empty State / Pagination Placeholder */}
                    <div className="mt-12 text-center py-12 border-t border-border/30">
                        <p className="text-muted-foreground text-base">
                            Showing {libraryMock.length} of 12 analyses.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibraryPage;
