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
    <section
      className="w-screen h-screen p-5 snap-center md:p-10"
      id={SECTIONS.ABOUT}
      ref={ref}
    >
      <article className="h-full text-gray-100 md:flex md:gap-10 md:items-center">
        <h3 className="text-about-title self-end font-black mb-5 md:mb-0 text-2xl md:tracking-widest md:text-5xl xl:text-7xl">
          FROM ITALY TO GERMANY
        </h3>
        <div className=" tracking-widest md:text-xl xl:text-3xl">
          <p className="mb-5 md:mb-10">
            I used to live most of the time in a small town in the center of
            Sicily, Italy.
          </p>
          <p className="my-5 md:my-10">
            My life has been a bit of a roller coaster: after graduating from
            law school and working as a legal consultant, I decided to turn my
            life around and started a new beginning in Germany.
          </p>
          <p className="mt-5 md:mt-10">
            While there learning the language, I decided to embark on a Web
            Developing Bootcamp at Neufische Gmbh at the same time. Today I work
            as a frontend developer for a private jet company, in the Hanseatic
            city of Hamburg.
          </p>
        </div>
      </article>
    </section>
  );
}
