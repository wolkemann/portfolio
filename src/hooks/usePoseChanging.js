import { useCallback } from "react";
import {
  usePortfolio,
  usePortfolioDispatch,
} from "../context/PortfolioContext";
import { ACTIONS, WOMAN_POSES } from "../utils/constants";

export const usePoseChanging = () => {
  const { pageLoaded } = usePortfolio();
  const dispatch = usePortfolioDispatch();

  const updatePose = useCallback((pose) => {
    if (pose) {
      dispatch({
        type: ACTIONS.UPDATE_POSE_CHANGING,
        poseChanging: true,
      });
      setTimeout(() => {
        dispatch({ type: ACTIONS.UPDATE_POSE, womanPose: pose });
        setTimeout(() => {
          dispatch({
            type: ACTIONS.UPDATE_POSE_CHANGING,
            poseChanging: false,
          });
        }, 100);
      }, 100);
    }
  }, [dispatch]);

  const updateScene = useCallback((scene, pose = WOMAN_POSES.DEFAULT_POSE) => {
    if (pageLoaded) {
      document.body.style.overflow = "hidden";
      dispatch({
        type: ACTIONS.UPDATE_POSE_CHANGING,
        poseChanging: true,
      });
      setTimeout(() => {
        dispatch({
          type: ACTIONS.UPDATE_PAGE_SECTION,
          pageSection: scene,
          womanPose: pose,
        });
        setTimeout(() => {
          dispatch({
            type: ACTIONS.UPDATE_POSE_CHANGING,
            poseChanging: false,
          });
          document.body.style.overflow = "visible";
        }, 200);
      }, 200);
    }
  }, [pageLoaded, dispatch]);

  return { updatePose, updateScene };
};
