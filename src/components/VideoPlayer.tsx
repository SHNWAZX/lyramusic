import { memo, useEffect, useRef } from "react";
import Hls from "hls.js";

interface VideoPlayerProps {
  src: string;
  className?: string;
}

function VideoPlayerComponent({ src, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    } else if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: false });
      hls.loadSource(src);
      hls.attachMedia(video);
    }

    return () => {
      if (hls) {
        hls.destroy();
        hls = null;
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}

export const VideoPlayer = memo(VideoPlayerComponent);
