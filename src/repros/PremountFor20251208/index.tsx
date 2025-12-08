import { AbsoluteFill, Series } from "remotion";
import { TransitionSeries } from "@remotion/transitions";
import { PropsWithChildren, useEffect } from "react";
import { ReproConfig } from "../../_utilities";

type CustomAbsoluteFillProps = {
  style?: React.CSSProperties;
};

const CustomAbsoluteFill = ({ children, style }: PropsWithChildren<CustomAbsoluteFillProps>) => {
  useEffect(() => {
    console.log(`Mounting absolute fill with style: ${JSON.stringify(style)}`);
  }, [style]);

  return <AbsoluteFill style={style}>{children}</AbsoluteFill>;
};

const PremountFor20251208Component: React.FC = () => {
  return (
    <TransitionSeries>
      {/** Section */}
      <TransitionSeries.Sequence durationInFrames={60} premountFor={30}>
        {/** Layer */}
        <Series>
          {/** Assets */}
          <Series.Sequence durationInFrames={30} premountFor={15}>
            <CustomAbsoluteFill style={{ backgroundColor: "red" }} />
          </Series.Sequence>
          <Series.Sequence durationInFrames={30} premountFor={15}>
            <CustomAbsoluteFill style={{ backgroundColor: "blue" }} />
          </Series.Sequence>
        </Series>
      </TransitionSeries.Sequence>

      {/** Section */}
      <TransitionSeries.Sequence durationInFrames={60} premountFor={30}>
        {/** Layer */}
        <Series>
          {/** Assets */}
          <Series.Sequence durationInFrames={30} premountFor={15}>
            <CustomAbsoluteFill style={{ backgroundColor: "green" }} />
          </Series.Sequence>
          <Series.Sequence durationInFrames={30} premountFor={15}>
            <CustomAbsoluteFill style={{ backgroundColor: "yellow" }} />
          </Series.Sequence>
        </Series>
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};

export const PremountFor20251208: ReproConfig = {
  id: "PremountFor20251208",
  durationInFrames: 120,
  width: 1080,
  height: 1080,
  fps: 30,
  component: PremountFor20251208Component,
};
