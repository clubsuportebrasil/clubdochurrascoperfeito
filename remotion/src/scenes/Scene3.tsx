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

export const Scene3 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scrollSpring = spring({
    frame,
    fps,
    config: { damping: 25 },
  });

  const y = interpolate(scrollSpring, [0, 1], [300, 0]);
  const opacity = interpolate(frame, [0, 15], [0, 1]);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center p-8 text-white">
      <div className="text-center mb-8" style={{ opacity }}>
        <h2 className="text-4xl font-bold text-orange-400 uppercase" style={{ fontFamily }}>
          NUNCA MAIS ERRE <br /> A QUANTIDADE
        </h2>
      </div>

      <div 
        className="relative w-full max-w-[500px] border-8 border-[#222] rounded-[3rem] overflow-hidden shadow-2xl bg-black"
        style={{ transform: `translateY(${y}px)` }}
      >
        <Img 
          src={staticFile("images/calc.jpg")} 
          className="w-full h-full object-cover"
        />
        {/* Animated Overlay to simulate interaction */}
        <div 
          className="absolute top-1/2 left-1/2 w-20 h-20 bg-white/20 rounded-full blur-xl"
          style={{
            transform: `translate(-50%, -50%) scale(${interpolate(Math.sin(frame / 5), [-1, 1], [0.8, 1.2])})`,
            opacity: interpolate(frame, [40, 60, 80], [0, 1, 0])
          }}
        />
      </div>
      
      <p className="mt-8 text-xl font-medium text-orange-200 italic opacity-80">
        Planejamento preciso direto no celular
      </p>
    </AbsoluteFill>
  );
};
