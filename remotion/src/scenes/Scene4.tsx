import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Anton";

const { fontFamily } = loadFont();

export const Scene4 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 15], [0, 1]);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center p-12 text-white bg-orange-900/20">
      <div style={{ opacity }}>
        <h2 className="text-5xl font-bold mb-12 text-center text-orange-400" style={{ fontFamily }}>
          POR QUE É DIFERENTE?
        </h2>
        
        <div className="space-y-8 w-full">
          {[
            { label: "Não é só um Ebook", val: "É uma ferramenta" },
            { label: "Não é só receita", val: "É segurança total" },
            { label: "Não é para ler", val: "É para usar agora" }
          ].map((item, i) => {
            const itemSpring = spring({
              frame: frame - (20 + i * 15),
              fps,
            });
            const scale = interpolate(itemSpring, [0, 1], [0.5, 1]);
            
            return (
              <div 
                key={item.label}
                className="text-center"
                style={{ transform: `scale(${scale})` }}
              >
                <div className="text-xl text-orange-200/60 uppercase tracking-widest mb-1">{item.label}</div>
                <div className="text-4xl font-bold text-white uppercase" style={{ fontFamily }}>{item.val}</div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
