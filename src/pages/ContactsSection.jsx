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
  }, [isInView, updateScene]);

  return (
    <section
      className="relative w-screen h-screen p-5 snap-center md:p-10"
      id={SECTIONS.CONTACTS}
      ref={ref}
    >
      <div className="flex flex-col gap-5  mt-10 md:gap-10 md:mt-0">
        {contacts.map((contact) => (
          <div key={contact.social}>
            <h5 className="font-black tracking-widest flex gap-3 items-center text-2xl md:text-6xl xl:text-7xl">
              <Icon icon={contact.icon} className="text-3xl md:text-7xl" />
              {contact.social}
            </h5>
            <p className="bg-black text-pink-400 w-fit tracking-widest md:text-3xl xl:text-4xl">
              <a href={contact.url} target="_BLANK">
                @{contact.contactName}
              </a>
            </p>
          </div>
        ))}
      </div>

      <div className="absolute bg-black bottom-0 right-0 m-5 md:m-10 p-2">
        <p className="text-pink-400 font-bold tracking-widest md:text-4xl xl:text-5xl">
          Thanks for stopping by!
        </p>
      </div>
    </section>
  );
}

const contacts = [
  {
    social: "E-mail",
    icon: "fluent:mail-20-filled",
    contactName: "federico.sardo1@gmail.com",
    url: "mailto:federico.sardo1@gmail.com",
  },
  {
    social: "GitHub",
    icon: "mdi:github",
    contactName: "wolkemann",
    url: "https://github.com/wolkemann",
  },
  {
    social: "LinkedIn",
    icon: "mdi:linkedin",
    contactName: "federico-sardo",
    url: "https://www.linkedin.com/in/federico-sardo-8187a3196/",
  },
  {
    social: "Instagram",
    icon: "mdi:instagram",
    contactName: "wolke.mann",
    url: "https://www.instagram.com/",
  },
];
