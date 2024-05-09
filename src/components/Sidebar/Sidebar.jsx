import { NavLink, useLocation } from "react-router-dom";
import { usePortfolioDispatch } from "../../context/PortfolioContext";

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
    <nav className=" z-[998] md:text-[20px] md:w-[200px] md:bg-transparent xl:block md:top-0 md:p-10 fixed bottom-0 w-screen bg-backgroundColor">
      <ul className="md:justify-start flex md:flex-col md:gap-3 justify-between">
        <li>
          <NavLink to="/" className="link">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            className="link"
            onMouseEnter={() => handleMouseHover("Pose_1")}
            onMouseLeave={() => handleMouseHover("Pose_0")}
            to="/about"
          >
            About me
          </NavLink>
        </li>

        <li>
          <NavLink
            className="link"
            onMouseEnter={() => handleMouseHover("Pose_4")}
            onMouseLeave={() => handleMouseHover("Pose_0")}
            to="/projects"
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            className="link"
            onMouseEnter={() => handleMouseHover("Pose_6")}
            onMouseLeave={() => handleMouseHover("Pose_0")}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
