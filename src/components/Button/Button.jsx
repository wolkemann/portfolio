import { Icon } from "@iconify/react/dist/iconify.js";

export default function Button({ href, children, icon }) {
  return (
    <div className="bg-blue-950 rounded">
      <div className="transform translate-x-1 -translate-y-1 md:translate-x-2 md:-translate-y-2
       bg-projects-title rounded py-2 px-3 md:py-4 md:px-5 md:text-l xl:text-xl">
        <a
          href={href}
          className="flex items-center gap-2 font-black text-white"
          target="_BLANK"
        >
          {icon && <Icon icon={icon} className="text-xl md:text-4xl" /> }
          {children}
        </a>
      </div>
    </div>
  );
}
