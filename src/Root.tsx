import { Composition } from "remotion";
import { Video } from "./Video";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Main"
        component={Video}
        durationInFrames={150}
        height={1080}
        width={1080}
        fps={30}
      />
    </>
  );
};
