import { NavLink } from "react-router-dom";
import { usePortfolioDispatch } from "../../context/PortfolioContext";

export default function Sidebar() {
  const dispatch = usePortfolioDispatch();

  const handleMouseHover = (pose) => {
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
  };

  return (
    <nav className="md:text-[20px] md:bg-transparent md:block md:top-0 fixed bottom-0 w-screen bg-backgroundColor">
      <ul className="md:justify-start flex justify-between">
        <NavLink to="/">
          <li className="link">Home</li>
        </NavLink>
        <NavLink to="/about">
          <li
            className="link"
            onMouseEnter={() => handleMouseHover("Pose_1")}
            onMouseLeave={() => handleMouseHover("Pose_0")}
          >
            About me
          </li>
        </NavLink>
        <li className="link">Projects</li>
        <li className="link">Blog</li>
      </ul>
    </nav>
  );
}
