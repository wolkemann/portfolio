import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { usePoseChanging } from "../hooks/usePoseChanging";
import { SECTIONS, WOMAN_POSES } from "../utils/constants";

export default function ContactsSection() {
  const { updateScene } = usePoseChanging();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      updateScene(SECTIONS.CONTACTS, WOMAN_POSES.CONTACTS_POSE);
    }
  }, [isInView]);

  return (
    <section
      className="w-screen h-screen p-5 snap-center md:p-10"
      id={SECTIONS.CONTACTS}
      ref={ref}
    ></section>
  );
}
