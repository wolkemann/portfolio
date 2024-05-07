import { NavLink } from "react-router-dom";
import { usePortfolioDispatch } from "../context/PortfolioContext";
import HomeScene from "../scenes/HomeScene";
import Loader from "../components/Loader/Loader";
import { Canvas } from "@react-three/fiber";
import Sidebar from "../components/Sidebar/Sidebar";
import Cursor from "../components/Cursor/Cursor";

export default function About() {
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
    <main>
      <Cursor />
      <Loader />
      <Sidebar />
      <div
        className="md:p-8 md:pt-0 md:w-[768px] md:m-auto 
      h-screen flex flex-col p-5 justify-center"
      >
        <div
          className="mouse-interact md:fixed md:w-[500px] md:left-0 md:bottom-0 md:p-10"
          onMouseEnter={() => handleMouseHover("Pose_2")}
          onMouseLeave={() => handleMouseHover("Pose_0")}
        >
          <h1
            className="md:text-[85px] md:text-left 
          text-[45px] text-center"
          >
            Federico Sardo
          </h1>
          <h2 className="md:my-1 text-[25px] my-2">Developer</h2>
          <h2 className="md:mb-0 text-[25px] my-2">From Hamburg with Love</h2>
        </div>
        <p
          className="mouse-interact md:fixed md:w-[400px] md:text-[25px] md:bottom-0 md:right-0 md:my-0 md:p-10 xl:w-[505px] 
        xl:text-[50px] my-2 text-center"
          onMouseEnter={() => handleMouseHover("Pose_3")}
          onMouseLeave={() => handleMouseHover("Pose_0")}
        >
          “Sur des pensers nouveaux, faisons des vers antiques”
        </p>
      </div>
      <div className="canvas">
        <Canvas
          eventSource={document.getElementById("root")}
          eventPrefix="client"
          shadows
          camera={{ zoom: 15 }}
        >
          
        </Canvas>
      </div>
    </main>
  );
}
