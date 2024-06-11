import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { usePoseChanging } from "../hooks/usePoseChanging";
import { SECTIONS, WOMAN_POSES } from "../utils/constants";

import { Icon } from "@iconify/react/dist/iconify.js";

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
      className="w-screen h-screen relative p-5 snap-center md:p-10"
      id={SECTIONS.CONTACTS}
      ref={ref}
    >
      <div className="absolute top-[100px]" style={{transform: "rotate3d(5, 10, 1, 60deg)"}}>
      <div>
        <h5 className="text-8xl font-black tracking-widest"><Icon icon={"mdi:github"} className="text-xl md:text-5xl" /> LinkedIn</h5>
        <p className="bg-black text-pink-400 w-fit text-5xl tracking-widest">@Federico.Sardo</p>
      </div>
      <div className="pt-[10px]">
        <h5 className="text-8xl font-black tracking-widest">E-mail</h5>
        <p className="bg-black text-pink-400 w-fit text-5xl tracking-widest">federico.sardo1@gmail.com</p>
      </div>
      <div className="pt-[10px]" >
        <h5 className="text-8xl font-black tracking-widest">Instagram</h5>
        <p className="bg-black text-pink-400 w-fit text-5xl tracking-widest">@wolke.mann</p>
      </div>
      <div className="pt-[10px]">
        <h5 className="text-8xl font-black tracking-widest">Twitter</h5>
        <p className="bg-black text-pink-400 w-fit text-5xl tracking-widest">@wolkemann</p>
      </div>
      </div>
      
    </section>
  );
}
