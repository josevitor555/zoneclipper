import type { ClipDetails } from "../types/clip.types";

export const clipMock: ClipDetails = {
  title: "Unexpected insight about AI tools",
  parentAnalysis: "Highlights Podcast #01",
  source: "YouTube",
  status: "ready",
  startTime: "00:01:24",
  endTime: "00:02:10",
  duration: "46s",
  viralScore: 91,
  captionStyle: "Bold kinetic",
  platform: "YouTube Shorts",
  format: "9:16 Vertical",
  quality: "1080p",
  captionText: "This moment could become a viral short",
  reason: "Strong hook detected in the first seconds with a clear curiosity gap.",
  timelineMoments: [
    {
      time: "00:01:24",
      label: "Hook starts"
    },
    {
      time: "00:01:38",
      label: "Peak reaction"
    },
    {
      time: "00:02:10",
      label: "Clip ends"
    }
  ]
};
