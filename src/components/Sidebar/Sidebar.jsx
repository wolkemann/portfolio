import { NavLink } from "react-router-dom";
import { WOMAN_POSES } from "../../utils/constants";
import { usePoseChanging } from "../../hooks/usePoseChanging";

export default function Sidebar() {
  const { updatePose, isHome } = usePoseChanging();

  return (
    <nav className="z-[998] md:text-[20px] md:w-[200px] md:h-fit md:bg-transparent xl:block md:top-0 md:p-10 fixed bottom-0 w-screen bg-backgroundColor">
      <ul className="md:justify-start flex md:flex-col md:gap-3 justify-between">
        <li>
          <NavLink to="/" className="link">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            className="link"
            onMouseEnter={() => updatePose(isHome ? WOMAN_POSES.SIDEBAR_ABOUT_POSE : null)}
            onMouseLeave={() => updatePose(isHome ? WOMAN_POSES.DEFAULT_POSE : null)}
            to="/about"
          >
            About me
          </NavLink>
        </li>

        <li>
          <NavLink
            className="link"
            onMouseEnter={() => updatePose(isHome ? WOMAN_POSES.SIDEBAR_PROJECTS_POSE : null)}
            onMouseLeave={() => updatePose(isHome ? WOMAN_POSES.DEFAULT_POSE : null)}
            to="/projects"
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            className="link"
            onMouseEnter={() => updatePose(isHome ? WOMAN_POSES.SIDEBAR_BLOG_POSE : null)}
            onMouseLeave={() => updatePose(isHome ? WOMAN_POSES.DEFAULT_POSE : null)}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
