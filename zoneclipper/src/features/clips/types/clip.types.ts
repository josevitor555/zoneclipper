export type ClipStatus = "ready" | "draft" | "exported";

export type TimelineMoment = {
    time: string;
    label: string;
};

export type ClipDetails = {
    title: string;
    parentAnalysis: string;
    source: string;
    status: ClipStatus;
    startTime: string;
    endTime: string;
    duration: string;
    viralScore: number;
    captionStyle: string;
    platform: string;
    format: string;
    quality: string;
    captionText: string;
    reason: string;
    timelineMoments: TimelineMoment[];
};
