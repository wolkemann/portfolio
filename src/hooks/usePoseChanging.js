import { useLocation } from "react-router-dom";
import { usePortfolioDispatch } from "../context/PortfolioContext";
import { useMemo } from "react";

export const usePoseChanging = () => {
    const { pathname } = useLocation();
    const dispatch = usePortfolioDispatch();

  const updatePose = (pose) => {
    if(pose) {
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
      }, 100)
    }
  };

  const isHome = useMemo(() => pathname === '/', [pathname])

  return { updatePose, isHome  }

}