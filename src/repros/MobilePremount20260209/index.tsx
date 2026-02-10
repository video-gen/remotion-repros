import { Series, Html5Video } from "remotion";
import { TransitionSeries } from "@remotion/transitions";
import { ReproConfig } from "../../_utilities";

const MobilePremount20260209Component: React.FC = () => {
  return (
    <TransitionSeries>
      {/** Section */}
      <TransitionSeries.Sequence durationInFrames={60} premountFor={30}>
        {/** Layer */}
        <Series>
          {/** Assets */}
          <Series.Sequence durationInFrames={30} premountFor={15}>
            <Html5Video src="https://library.videogen.io/pexels-video-4625128-primary-w960-h540.mp4" />
          </Series.Sequence>
          <Series.Sequence durationInFrames={30} premountFor={15}>
            <Html5Video src="https://library.videogen.io/pexels-video-4625128-primary-w960-h540.mp4" />
          </Series.Sequence>
        </Series>
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};

export const MobilePremount20260209: ReproConfig = {
  id: "MobilePremount20260209",
  durationInFrames: 120,
  width: 1080,
  height: 1080,
  fps: 30,
  component: MobilePremount20260209Component,
};
