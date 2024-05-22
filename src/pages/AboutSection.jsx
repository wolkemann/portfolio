import { useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { usePoseChanging } from "../hooks/usePoseChanging";
import { SECTIONS, WOMAN_POSES } from "../utils/constants";

import myFoto from "/images/me_placeholder.jpg";

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
    <section ref={ref} id={SECTIONS.ABOUT}>
      <article>
        <h2 className="w-screen h-screen p-5 md:p-10 flex text-bold text-[60px] md:text-[100px] justify-center items-center">
          <motion.span
            className="text-about-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 1 } }}
            viewport={{ margin: "0px 0px -200px 0px", once: true }}
          >
            About me<span className="text-gray-100">.</span>
          </motion.span>
        </h2>
        <div className="h-screen" />
        <section className="min-h-screen h-screen text-gray-100 md:p-10 md:m-auto md:w-[768px] xl:w-[1000px]">
          <figure className="bg-about-title py-5 h-full w-[400px] rounded shadow-2xl">
            <img src={myFoto} className=" w-full h-full shadow-2xl" />
          </figure>
        </section>
      </article>
    </section>
  );
}
