import { useRef, useState } from "react";

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <video
        ref={videoRef}
        src="https://files.vidstack.io/sprite-fight/720p.mp4"
        width="100%"
        title="Sprite Fight"
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "0",
          right: "0",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <button
          onClick={togglePlay}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            padding: "5px 10px",
          }}
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>

        <div>
          <button
            aria-label="Settings"
            onClick={toggleSettings}
            style={{
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              padding: "5px 10px",
            }}
          >
            ⚙️
          </button>

          {showSettings && (
            <div
              style={{
                position: "absolute",
                bottom: "40px",
                right: "10px",
                backgroundColor: "#333",
                borderRadius: "5px",
                padding: "10px",
                color: "white",
              }}
            >
              <div>Settings</div>
              <div>
                Playback Speed:
                <button
                  onClick={() =>
                    videoRef.current && (videoRef.current.playbackRate = 0.5)
                  }
                >
                  0.5x
                </button>
                <button
                  onClick={() =>
                    videoRef.current && (videoRef.current.playbackRate = 1)
                  }
                >
                  1x
                </button>
                <button
                  onClick={() =>
                    videoRef.current && (videoRef.current.playbackRate = 1.5)
                  }
                >
                  1.5x
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
