import Button from "../Button/Button";

export default function ProjectCard({
  name,
  description,
  tech,
  gitUrl,
  demoUrl,
}) {
  return (
    <div className="w-full h-full snap-always snap-center md:py-10 md:flex">
      <div className="max-w-full bg-gray-50 rounded shadow-lg md:m-auto md:w-[900px]">
        <div className="p-5 md:p-10">
          <h4 className="mb-5 text-2xl font-black tracking-widest md:mb-10 md:text-2xl xl:text-5xl">
            {name}
          </h4>

          <p className="mb-5 tracking-widest leading-relaxed md:text-l xl:text-xl">
            {description}
          </p>
          {tech && (
            <p className=" text-right mb-5 tracking-widest leading-relaxed md:text-l xl:text-xl">
              <span className="font-black">Made with - </span>
              {tech.join(",")}
            </p>
          )}
          <div className="flex gap-5 md:gap-10">
            {gitUrl && <Button href={gitUrl}>GitHub</Button>}
            {demoUrl && <Button href={demoUrl}>Try demo</Button>}
          </div>
        </div>
      </div>
    </div>
  );
}
