export default function Button({ href, children }) {
  return (
    <div className="bg-blue-950 rounded">
      <div className="transform translate-x-1 -translate-y-1 bg-projects-title rounded py-4 px-5 md:text-l xl:text-xl">
        <a href={href} className="font-black text-white" target="_BLANK">
          {children}
        </a>
      </div>
    </div>
  );
}
