import { Composition } from "remotion";
import { Test20251016 } from "./repros/Test20251016";
import { MediaVideo20251016 } from "./repros/MediaVideo20251016";
import { PremountFor20251016 } from "./repros/PremountFor20251016";
import { MediaVideo20251017 } from "./repros/MediaVideo20251017";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition {...Test20251016} />
      <Composition {...MediaVideo20251016} />
      <Composition {...PremountFor20251016} />
      <Composition {...MediaVideo20251017} />
    </>
  );
};
