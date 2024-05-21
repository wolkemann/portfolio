import { usePortfolioDispatch } from "../context/PortfolioContext";
import { ACTIONS, WOMAN_POSES } from "../utils/constants";

export const usePoseChanging = () => {
  const dispatch = usePortfolioDispatch();

  const updatePose = (pose) => {
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
  };

  const updateScene = (scene, pose = WOMAN_POSES.DEFAULT_POSE) => {
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
      }, 200);
    }, 200);
  };

  return { updatePose, updateScene };
};
