import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const PlayerCustom = ({ urlVideo }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    const setupVideo = () => {
      if (videoRef.current) {
        var videoSrc = urlVideo;
        try {
          if (urlVideo !== null) {
            if (Hls.isSupported()) {
              const hls = new Hls();
              // console.log("HLS Supported:", hls);
              hls.loadSource(videoSrc);
              hls.attachMedia(videoRef.current);
            } else if (
              videoRef.current.canPlayType("application/vnd.apple.mpegurl")
            ) {
              // console.log("HLS Not Supported - Using Alternative");
              videoRef.current.src = videoSrc;
            }
          } else {
            videoSrc = "https://media.553328.com/videos/luongson.m3u8";
            if (Hls.isSupported()) {
              const hls = new Hls();
              console.log("HLS Supported:", hls);
              hls.loadSource(videoSrc);
              hls.attachMedia(videoRef.current);
            } else if (
              videoRef.current.canPlayType("application/vnd.apple.mpegurl")
            ) {
              // console.log("HLS Not Supported - Using Alternative");
              videoRef.current.src = videoSrc;
            }
          }
        } catch (error) {
          console.error("HLS error", error);
        }
      }
    };

    setupVideo();
  }, [urlVideo]);

  return (
    <video
      ref={videoRef}
      autoPlay
      controls
      className="w-full h-auto lg:min-h-[400px] "
      height="500px"
      width="100%"
    />
  );
};

export default PlayerCustom;
