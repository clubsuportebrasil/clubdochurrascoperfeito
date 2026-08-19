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

export const Scene5 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const finalSpring = spring({
    frame,
    fps,
    config: { damping: 12 },
  });

  const scale = interpolate(finalSpring, [0, 1], [0.8, 1]);
  const opacity = interpolate(frame, [0, 15], [0, 1]);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center p-12 text-white">
      <div className="w-full flex flex-col items-center" style={{ opacity }}>
        <h2 
          className="text-6xl font-bold text-center mb-10 text-orange-500 uppercase tracking-tighter"
          style={{ fontFamily, transform: `scale(${scale})` }}
        >
          GARANTA SEU <br /> ACESSO AGORA
        </h2>

        <div className="relative w-full max-w-[500px] mb-12 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
           <Img 
            src={staticFile("images/product.jpg")} 
            className="w-full rounded-2xl shadow-[0_20px_50px_rgba(249,115,22,0.3)] border-2 border-orange-500/20"
          />
          {/* Price Tag Overlay */}
          <div 
            className="absolute -top-6 -right-6 bg-orange-600 text-white p-6 rounded-full font-bold text-3xl shadow-xl flex items-center justify-center border-4 border-white"
            style={{ 
              fontFamily,
              transform: `scale(${interpolate(spring({ frame: frame - 40, fps }), [0, 1], [0, 1])})`
            }}
          >
            R$ 29
          </div>
        </div>

        <div 
          className="bg-orange-600 text-white px-12 py-6 rounded-full text-3xl font-bold uppercase tracking-widest shadow-2xl animate-pulse"
          style={{ 
            fontFamily,
            opacity: interpolate(frame, [60, 70], [0, 1])
          }}
        >
          CLIQUE ABAIXO
        </div>
      </div>
    </AbsoluteFill>
  );
};
