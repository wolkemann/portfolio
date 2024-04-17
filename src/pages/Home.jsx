import { NavLink } from "react-router-dom";
import { usePortfolioDispatch } from "../context/PortfolioContext";
import HomeScene from "../scenes/HomeScene";
import Loader from "../components/Loader/Loader";

export default function Home() {
  const dispatch = usePortfolioDispatch();

  return (
    <main>
      <Loader />
      <nav className="md:text-[20px] md:p-8 md:m-auto p-5">
        <ul className="md:gap-10 md:justify-start flex justify-between">
          <li className="link">Home</li>
          <li className="link">
            <NavLink to="/about">About me</NavLink>
          </li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
      </nav>
      <div
        className="md:p-8 md:pt-0 md:w-[768px] md:m-auto 
      h-screen flex flex-col p-5"
      >
        <div
          className="md:fixed md:w-[500px] md:left-0 md:bottom-0 md:p-10"
          onClick={() => dispatch({ type: "modifyPose", womanPose: "Pose_1" })}
        >
          <h1
            className="md:text-[85px] md:text-left 
          text-[45px] text-center blue-500"
          >
            Federico Sardo
          </h1>
          <h2 className="md:my-1 text-[25px] my-2">Developer</h2>
          <h2 className="md:mb-0 text-[25px] my-2">From Hamburg with Love</h2>
        </div>
        <p
          className="md:fixed md:w-[400px] md:text-[25px] md:bottom-0 md:right-0 md:my-0 md:p-10 xl:w-[505px] 
        xl:text-[50px] my-2 text-center"
        >
          “Sur des pensers nouveaux, faisons des vers antiques”
        </p>
      </div>

      <HomeScene />
    </main>
  );
}
