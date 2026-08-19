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

export const Scene2 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const moveSpring = spring({
    frame,
    fps,
    config: { damping: 15 },
  });

  const x = interpolate(moveSpring, [0, 1], [-500, 0]);
  const opacity = interpolate(frame, [0, 15], [0, 1]);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center p-10 text-white">
      <div className="w-full" style={{ opacity }}>
        <h2
          className="text-5xl font-bold mb-10 text-orange-400"
          style={{ fontFamily, transform: `translateX(${x}px)` }}
        >
          O SISTEMA PRÁTICO <br /> QUE VOCÊ PRECISAVA
        </h2>
        
        <div className="grid grid-cols-1 gap-6 w-full">
          {[
            "Calculadora de Carne",
            "Controle de Fogo",
            "Checklists Essenciais",
            "Guia de Pontos"
          ].map((text, i) => {
            const itemSpring = spring({
              frame: frame - (20 + i * 10),
              fps,
            });
            const itemX = interpolate(itemSpring, [0, 1], [1000, 0]);
            
            return (
              <div 
                key={text}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center shadow-lg"
                style={{ transform: `translateX(${itemX}px)` }}
              >
                <div className="w-3 h-3 rounded-full bg-orange-500 mr-4" />
                <span className="text-2xl font-semibold tracking-wide">{text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
