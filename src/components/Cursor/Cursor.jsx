import { useDetectGPU } from "@react-three/drei";
import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  const { isMobile } = useDetectGPU();
  return (
    !isMobile && (
      <AnimatedCursor
        showSystemCursor
        innerSize={0}
        outerSize={55}
        outerScale={3}
        trailingSpeed={2}
        outerStyle={{
          //border: '2px solid #b200b2',
          background: "#e9afe3",
          mixBlendMode: "difference",
        }}
        clickables={["a", ".mouse-interact"]}
      />
    )
  );
}
