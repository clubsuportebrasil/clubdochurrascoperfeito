import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { Scene1 } from "./scenes/Scene1";
import { Scene2 } from "./scenes/Scene2";
import { Scene3 } from "./scenes/Scene3";
import { Scene4 } from "./scenes/Scene4";
import { Scene5 } from "./scenes/Scene5";

const PersistentBackground = () => {
  const frame = useCurrentFrame();
  const { height, width } = useVideoConfig();
  
  return (
    <AbsoluteFill className="bg-[#1a0f0a]">
      {/* Dynamic gradient background */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${50 + Math.sin(frame / 50) * 20}% ${50 + Math.cos(frame / 60) * 20}%, #c2410c 0%, transparent 70%)`
        }}
      />
      {/* Grill texture pattern or noise could go here */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </AbsoluteFill>
  );
};

export const MainVideo = () => {
  return (
    <AbsoluteFill>
      <PersistentBackground />
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={150}>
          <Scene1 />
        </TransitionSeries.Sequence>
        
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={{ durationInFrames: 30 }}
        />
        
        <TransitionSeries.Sequence durationInFrames={180}>
          <Scene2 />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={{ durationInFrames: 30 }}
        />
        
        <TransitionSeries.Sequence durationInFrames={180}>
          <Scene3 />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={{ durationInFrames: 30 }}
        />

        <TransitionSeries.Sequence durationInFrames={180}>
          <Scene4 />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={{ durationInFrames: 30 }}
        />

        <TransitionSeries.Sequence durationInFrames={210}>
          <Scene5 />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
