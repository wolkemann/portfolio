import { usePortfolioDispatch } from "../context/PortfolioContext";
import { WOMAN_POSES } from "../utils/constants";

export const usePoseChanging = () => {
  const dispatch = usePortfolioDispatch();

  const updatePose = (pose) => {
    if (pose) {
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

  const updateScene = (scene, pose = WOMAN_POSES.DEFAULT_POSE) => {
    dispatch({
      type: "updatePoseChangingState",
      poseChanging: true,
    });
    setTimeout(() => {
      dispatch({
        type: "updatePageSectionState",
        pageSection: scene,
        womanPose: pose,
      });
      setTimeout(() => {
        dispatch({
          type: "updatePoseChangingState",
          poseChanging: false,
        });
      }, 250);
    }, 250);
  };

  return { updatePose, updateScene };
};
