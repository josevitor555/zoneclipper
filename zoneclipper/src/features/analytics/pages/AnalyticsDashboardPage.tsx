import React from 'react';
import AnalysisHeader from '../components/AnalysisHeader';
import VideoSummaryCard from '../components/VideoSummaryCard';
import SuggestedClipCard from '../components/SuggestedClipCard';
import CaptionPreviewCard from '../components/CaptionPreviewCard';
import { Sparkles } from 'lucide-react';

const analysisMock = {
    title: "Highlights Podcast #01",
    source: "YouTube",
    url: "https://www.youtube.com/watch?v=example",
    status: "completed",
    duration: "42:18",
    clipsFound: 3,
    viralScore: 82,
    hooksDetected: 12,
    summary:
        "AI detected multiple high-retention moments, including emotional reactions, useful explanations, and short punchy statements that can work well as vertical clips.",
    clips: [
        {
            title: "Unexpected insight about AI tools",
            startTime: "00:01:24",
            endTime: "00:02:10",
            score: 91,
            reason: "Strong hook detected in the first seconds with a clear curiosity gap.",
            captionStyle: "Bold kinetic"
        },
        {
            title: "Fast explanation with practical value",
            startTime: "00:08:42",
            endTime: "00:09:18",
            score: 84,
            reason: "The speaker gives a concise explanation that can be understood without full context.",
            captionStyle: "Clean subtitles"
        },
        {
            title: "Surprising statement for short-form",
            startTime: "00:21:05",
            endTime: "00:21:47",
            score: 76,
            reason: "A short and punchy sentence creates a good opening for a short clip.",
            captionStyle: "High contrast"
        }
    ]
};

const AnalysisPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground pb-20">
            {/* Main Container */}
            <div className="container mx-auto px-4 py-12">

                {/* Header Section */}
                <AnalysisHeader />

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left Column - Analysis & Clips */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Video Summary */}
                        <VideoSummaryCard
                            title={analysisMock.title}
                            url={analysisMock.url}
                            duration={analysisMock.duration}
                            viralScore={analysisMock.viralScore}
                            clipsFound={analysisMock.clipsFound}
                            hooksDetected={analysisMock.hooksDetected}
                            summary={analysisMock.summary}
                        />

                        {/* Suggested Clips Section */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <Sparkles className="w-5 h-5 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-bold tracking-tight">Suggested clips</h2>
                                </div>
                                <span className="text-sm text-muted-foreground font-medium bg-muted/30 px-3 py-1 rounded-full border border-border">
                                    Sorted by viral score
                                </span>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {analysisMock.clips.map((clip, index) => (
                                    <SuggestedClipCard
                                        key={index}
                                        index={index}
                                        {...clip}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Preview & Sidebar */}
                    <div className="lg:col-span-4 sticky top-12">
                        <CaptionPreviewCard />
                    </div>

                </div>

                {/* Footer Insight */}
                <div className="mt-20 p-8 rounded-3xl bg-muted/5 border border-border/50 text-center max-w-2xl mx-auto">
                    <p className="text-muted-foreground text-base leading-relaxed">
                        Need more clips? You can re-analyze the video with different settings or try another URL.
                        ZoneClipper AI continuously improves its viral detection algorithms.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AnalysisPage;
