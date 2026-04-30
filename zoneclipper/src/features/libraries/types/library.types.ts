export type LibraryAnalysisStatus = "completed" | "processing" | "failed";

export type LibraryAnalysis = {
    title: string;
    source: string;
    url: string;
    status: LibraryAnalysisStatus;
    duration: string;
    clipsCount: number;
    viralScore: number | null;
    createdAt: string;
    thumbnailLabel: string;
};
