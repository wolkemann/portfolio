import { NavLink, useLocation } from "react-router-dom";
import { usePortfolioDispatch } from "../../context/PortfolioContext";
import { WOMAN_POSES } from "../../utils/constants";

export default function Sidebar() {
  const dispatch = usePortfolioDispatch();
  const { pathname } = useLocation();

  const handleMouseHover = (pose) => {
    if (pathname === "/") {
      dispatch({
        type: "updatePoseChangingState",
        poseChanging: true,
      });
      setTimeout(() => {
        dispatch({ type: "updatePoseState", womanPose: pose });
        setTimeout(() => {
          dispatch({
            type: "updatePoseChangingState",
            poseChanging: false,
          });
        }, 100);
      }, 100);
    }
  };

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
            onMouseEnter={() => handleMouseHover(WOMAN_POSES.SIDEBAR_ABOUT_POSE)}
            onMouseLeave={() => handleMouseHover(WOMAN_POSES.DEFAULT_POSE)}
            to="/about"
          >
            About me
          </NavLink>
        </li>

        <li>
          <NavLink
            className="link"
            onMouseEnter={() => handleMouseHover(WOMAN_POSES.SIDEBAR_PROJECTS_POSE)}
            onMouseLeave={() => handleMouseHover(WOMAN_POSES.DEFAULT_POSE)}
            to="/projects"
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            className="link"
            onMouseEnter={() => handleMouseHover(WOMAN_POSES.SIDEBAR_BLOG_POSE)}
            onMouseLeave={() => handleMouseHover(WOMAN_POSES.DEFAULT_POSE)}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
