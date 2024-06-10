import { Icon } from "@iconify/react/dist/iconify.js";

import Button from "../Button/Button";

export default function ProjectCard({
  name,
  description,
  tech,
  gitUrl,
  demoUrl,
  website,
}) {
  return (
    <div className="w-full h-full snap-always snap-center md:py-10 md:flex">
      <div className="max-w-full p-5 md:p-10 bg-gray-50 rounded shadow-lg md:m-auto md:w-[900px]">
        <h4 className="flex items-center gap-2 mb-5 text-xl font-black tracking-widest md:mb-10 md:text-2xl xl:text-5xl">
          {name}
          {website && <a href={website} target="_BLANK">
            <Icon
              icon="eva:external-link-outline"
              className="text-projects-title text-2xl md:text-4xl"
            />
          </a>}
        </h4>

        <p className="mb-5 tracking-widest leading-relaxed text-xs md:text-l xl:text-xl">
          {description}
        </p>
        {tech && (
          <p className="text-right mb-5 tracking-widest leading-relaxed text-sm md:text-l xl:text-xl">
            <span className="font-black">Made with - </span>
            {tech.join(", ")}
          </p>
        )}
        <div className="flex flex-col text-sm md:text-l xl:text-xl md:flex-row gap-3 md:gap-10">
          {gitUrl && (
            <Button href={gitUrl} icon="mdi:github">
              GitHub
            </Button>
          )}
          {demoUrl && (
            <Button href={demoUrl} icon="material-symbols:play-circle">
              Try it
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
