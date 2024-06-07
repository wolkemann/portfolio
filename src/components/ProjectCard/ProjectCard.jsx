export default function ProjectCard({ name, description }) {
  return (
    <div className="w-full h-full snap-always snap-center md:py-10 md:flex">
      <div className="md:m-auto max-w-full md:w-[900px]">
        <div className="p-5">
          <h4 className="mb-5 text-2xl font-black tracking-widest md:mb-10 md:text-5xl">
            {name}
          </h4>

          <p className="mb-3 tracking-widest leading-relaxed md:text-xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
