import { AbsoluteFill, useCurrentFrame } from "remotion";
import { ReproConfig } from "../../_utilities";

const Test20251016Component: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <div style={{ color: "white" }}>{frame}</div>
    </AbsoluteFill>
  );
};

export const Test20251016: ReproConfig = {
  id: "Test20251016",
  durationInFrames: 60,
  width: 1080,
  height: 1080,
  fps: 30,
  component: Test20251016Component,
};
