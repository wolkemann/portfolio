export default function ProjectCard({ name, description }) {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full bg-white border border-gray-200 rounded-lg shadow snap-always snap-center">
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
