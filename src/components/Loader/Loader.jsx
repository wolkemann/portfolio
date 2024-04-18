import { useProgress } from "@react-three/drei";
import Typewriter from "./Typewriter";
import { useEffect } from "react";
import {
  usePortfolio,
  usePortfolioDispatch,
} from "../../context/PortfolioContext";

export default function Loader() {
  const { pageLoaded, quoteFinished } = usePortfolio();
  const dispatch = usePortfolioDispatch();
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      dispatch({ type: "updatePageLoadedState", pageLoaded: true });
    }
  }, [progress,dispatch]);

  return (
    !quoteFinished && (
      <div className=" z-[999] fixed w-screen h-screen bg-backgroundColor md:p-10">
        {pageLoaded && <Typewriter />}
      </div>
    )
  );
}
