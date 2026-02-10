import { AbsoluteFill, Series } from "remotion";
import { Video as MediaVideo } from "@remotion/media";
import { ReproConfig } from "../../_utilities";

const MediaVideo20251017Component: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={60}>
        <AbsoluteFill>
          <MediaVideo
            src="https://reencoded-library.videogen.io/getty/1822061465.mp4"
            fallbackOffthreadVideoProps={{
              onError: (error) => {
                console.error(error);
              },
            }}
          />
        </AbsoluteFill>
      </Series.Sequence>
    </Series>
  );
};

export const MediaVideo20251017: ReproConfig = {
  id: "MediaVideo20251017",
  durationInFrames: 60,
  width: 1080,
  height: 1080,
  fps: 30,
  component: MediaVideo20251017Component,
};
