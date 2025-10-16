import { Composition } from "remotion";
import { Test20251016 } from "./repros/Test20251016";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition {...Test20251016} />
    </>
  );
};
