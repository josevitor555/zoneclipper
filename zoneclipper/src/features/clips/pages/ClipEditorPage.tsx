import React from "react";
import { ClipHeader } from "../components/ClipHeader";
import { ClipPreviewPlayer } from "../components/ClipPreviewPlayer";
import { ClipTimeline } from "../components/ClipTimeline";
import { ClipMetadataCard } from "../components/ClipMetadataCard";
import { CaptionEditorPanel } from "../components/CaptionEditorPanel";
import { ExportSettingsPanel } from "../components/ExportSettingsPanel";
import { clipMock } from "../mocks/clipMock";

const ClipDetailsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <ClipHeader
                    title={clipMock.title}
                    parentAnalysis={clipMock.parentAnalysis}
                    status={clipMock.status}
                />

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-start">
                    {/* Left Column: Preview and Timeline */}
                    <div className="space-y-8">
                        <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border border-border/50 shadow-inner">
                            <ClipPreviewPlayer captionText={clipMock.captionText} />
                        </div>

                        <ClipTimeline
                            moments={clipMock.timelineMoments}
                            startTime={clipMock.startTime}
                            endTime={clipMock.endTime}
                            duration={clipMock.duration}
                        />
                    </div>

                    {/* Right Column: Metadata and Editors */}
                    <div className="space-y-6">
                        <ClipMetadataCard
                            viralScore={clipMock.viralScore}
                            duration={clipMock.duration}
                            captionStyle={clipMock.captionStyle}
                            platform={clipMock.platform}
                            reason={clipMock.reason}
                        />

                        <CaptionEditorPanel initialText={clipMock.captionText} />

                        <ExportSettingsPanel />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClipDetailsPage;
