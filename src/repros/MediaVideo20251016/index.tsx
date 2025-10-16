import { AbsoluteFill, Series } from "remotion";
import { Video as MediaVideo } from "@remotion/media";
import { ReproConfig } from "../../_utilities";

const MediaVideo20251016Component: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={30}>
        <AbsoluteFill>
          <MediaVideo src="https://library.videogen.io/pexels-video-20768221-primary-w960-h540.mp4#t=5.1,10.2" />
        </AbsoluteFill>
      </Series.Sequence>

      <Series.Sequence durationInFrames={30}>
        <AbsoluteFill>
          <MediaVideo src="https://library.videogen.io/pexels-video-20768221-primary-w960-h540.mp4#t=5.1,10.2" />
        </AbsoluteFill>
      </Series.Sequence>
    </Series>
  );
};

export const MediaVideo20251016: ReproConfig = {
  id: "MediaVideo20251016",
  durationInFrames: 60,
  width: 1080,
  height: 1080,
  fps: 30,
  component: MediaVideo20251016Component,
};
