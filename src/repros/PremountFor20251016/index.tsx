import { AbsoluteFill, Series } from "remotion";
import { ReproConfig } from "../../_utilities";

const PremountFor20251016Component: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={60} premountFor={60}>
        <Series>
          <Series.Sequence durationInFrames={30} premountFor={60}>
            <AbsoluteFill style={{ backgroundColor: "red" }} />
          </Series.Sequence>
          <Series.Sequence durationInFrames={30} premountFor={60}>
            <AbsoluteFill style={{ backgroundColor: "blue" }} />
          </Series.Sequence>
        </Series>
      </Series.Sequence>

      <Series.Sequence durationInFrames={60} premountFor={60}>
        <Series>
          <Series.Sequence durationInFrames={30} premountFor={60}>
            <AbsoluteFill style={{ backgroundColor: "green" }} />
          </Series.Sequence>
          <Series.Sequence durationInFrames={30} premountFor={60}>
            <AbsoluteFill style={{ backgroundColor: "yellow" }} />
          </Series.Sequence>
        </Series>
      </Series.Sequence>
    </Series>
  );
};

export const PremountFor20251016: ReproConfig = {
  id: "PremountFor20251016",
  durationInFrames: 120,
  width: 1080,
  height: 1080,
  fps: 30,
  component: PremountFor20251016Component,
};
