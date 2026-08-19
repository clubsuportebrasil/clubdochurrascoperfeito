import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from "remotion";
import { Scene1 } from "./scenes/Scene1";
import { Scene2 } from "./scenes/Scene2";
import { Scene3 } from "./scenes/Scene3";
import { Scene4 } from "./scenes/Scene4";
import { Scene5 } from "./scenes/Scene5";

const PersistentBackground = () => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill className="bg-[#1a0f0a]">
      {/* Dynamic gradient background */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${50 + Math.sin(frame / 50) * 20}% ${50 + Math.cos(frame / 60) * 20}%, #c2410c 0%, transparent 70%)`
        }}
      />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </AbsoluteFill>
  );
};

export const MainVideo = () => {
  return (
    <AbsoluteFill>
      <PersistentBackground />
      
      <Sequence from={0} durationInFrames={150}>
        <Scene1 />
      </Sequence>
      
      <Sequence from={150} durationInFrames={180}>
        <Scene2 />
      </Sequence>

      <Sequence from={330} durationInFrames={180}>
        <Scene3 />
      </Sequence>

      <Sequence from={510} durationInFrames={180}>
        <Scene4 />
      </Sequence>

      <Sequence from={690} durationInFrames={210}>
        <Scene5 />
      </Sequence>
    </AbsoluteFill>
  );
};
