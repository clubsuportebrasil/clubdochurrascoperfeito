import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Anton";

const { fontFamily } = loadFont();

export const Scene1 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12 },
  });

  const imgSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 20 },
  });

  const opacity = interpolate(frame, [0, 10], [0, 1]);
  const scale = interpolate(titleSpring, [0, 1], [0.8, 1]);
  const imgY = interpolate(imgSpring, [0, 1], [200, 0]);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center p-12 text-white">
      <div style={{ opacity }}>
        <h1
          className="text-7xl font-bold text-center mb-8 uppercase tracking-tighter text-orange-500"
          style={{
            fontFamily,
            transform: `scale(${scale})`,
            textShadow: "0 0 20px rgba(249, 115, 22, 0.4)",
          }}
        >
          CHEGA DE <br /> IMPROVISAR
        </h1>
        
        <div 
          className="relative w-full max-w-[600px] aspect-square rounded-3xl overflow-hidden border-4 border-orange-600/30 shadow-2xl"
          style={{ transform: `translateY(${imgY}px)` }}
        >
          <Img 
            src={staticFile("images/hero.jpg")} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a] via-transparent to-transparent" />
        </div>
      </div>
    </AbsoluteFill>
  );
};
