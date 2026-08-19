import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";

export const RemotionRoot = () => (
  <Composition
    id="main"
    component={MainVideo}
    durationInFrames={900} // 30 seconds at 30fps
    fps={30}
    width={1080}
    height={1920} // Vertical video for mobile/social
  />
);
