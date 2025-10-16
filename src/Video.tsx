import { AbsoluteFill, Sequence, useCurrentFrame } from "remotion";

export const Video: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", fontSize: 80 }}>
      <Sequence>
        <div>Frame {frame}</div>
      </Sequence>
    </AbsoluteFill>
  );
};
