import { AbsoluteFill, Series } from "remotion";
import { Video as MediaVideo } from "@remotion/media";
import { ReproConfig } from "../../_utilities";

const MediaVideo20251017Component: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={60}>
        <AbsoluteFill>
          <MediaVideo src="https://delivery.gettyimages.com/downloads/466160456?k=20&e=8Wn43_lhno-SA07UetF0GL3UrqTIH6-WLEpnr8TByO7UkrweH6B3KpzV-TjJUi8O1e9MERzJ68rTPqWIzZ1QH0Jne3t73xm9yKg-NoWo2UgVIaF9q3KJCrLOtO0nWyiB" />
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
