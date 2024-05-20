import { useInView } from "framer-motion";

import { SECTIONS, WOMAN_POSES } from "../utils/constants";
import { usePoseChanging } from "../hooks/usePoseChanging";
import { useEffect, useRef } from "react";

export default function HomeSection() {
  const { updatePose, updateScene } = usePoseChanging();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      updateScene(SECTIONS.HOME);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="md:relative md:p-8 md:pt-0 
      h-screen flex flex-col p-5 justify-center"
    >
      <div
        className="mouse-interact md:absolute md:w-[500px] md:left-0 md:bottom-0 md:p-10"
        onMouseEnter={() => updatePose(WOMAN_POSES.HOME_NAME_POSE)}
        onMouseLeave={() => updatePose(WOMAN_POSES.DEFAULT_POSE)}
      >
        <h1
          className="md:text-[85px] md:text-left 
          text-[45px] text-center"
        >
          Federico Sardo
        </h1>
        <h2 className="md:my-1 text-[25px] my-2">Developer</h2>
        <h2 className="md:mb-0 text-[25px] my-2">From Hamburg with Love</h2>
      </div>
      <p
        className="mouse-interact md:absolute md:w-[400px] md:text-[25px] md:bottom-0 md:right-0 md:my-0 md:p-10 xl:w-[505px] 
        xl:text-[50px] my-2 text-center"
        onMouseEnter={() => updatePose(WOMAN_POSES.HOME_QUOTE_POSE)}
        onMouseLeave={() => updatePose(WOMAN_POSES.DEFAULT_POSE)}
      >
        “Sur des pensers nouveaux, faisons des vers antiques”
      </p>
    </section>
  );
}
