import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { usePoseChanging } from "../hooks/usePoseChanging";
import { SECTIONS, WOMAN_POSES } from "../utils/constants";

export default function AboutSection() {
  const { updateScene } = usePoseChanging();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      updateScene(SECTIONS.ABOUT, WOMAN_POSES.ABOUT_POSE);
    }
  }, [isInView]);

  return (
    <section ref={ref}>
      <article>
        <h2 className="w-screen h-screen p-5 md:p-10 flex text-bold text-[60px] md:text-[100px] text-center">
          <span className="text-about-title m-auto">
            About me<span className="text-gray-100">.</span>
          </span>
        </h2>
        <div className="h-screen" />
        <section className="min-h-screen h-screen text-gray-100 md:p-10 md:m-auto md:w-[768px] xl:w-[1000px]">
          <h2 className="text-about-title text-[35px] md:text-[55px] float-left m-5 w-[300px]">
            <span className="bg-black">From Italy to Germany</span>
          </h2>

          <p className="text-[25px]">
            <span className="bg-black">
              I was raised and lived most of my life in a small town in the
              center of Sicily, Italy.
            </span>
          </p>
        </section>
      </article>
    </section>
  );
}
