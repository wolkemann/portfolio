export const CURSOR_PROPS = {
  showSystemCursor: true,
  innerSize: 0,
  outerSize: 55,
  outerScale: 3,
  trailingSpeed: 2,
  outerStyle: {
    //border: '2px solid #b200b2',
    background: "#e9afe3",
    mixBlendMode: "difference",
  },
  clickables: ["a", ".mouse-interact"],
};

export const WOMAN_POSES = {
  DEFAULT_POSE: "Pose_0",
  ABOUT_POSE: "Pose_1",
  SIDEBAR_PROJECTS_POSE: "Pose_4",
  SIDEBAR_BLOG_POSE: "Pose_6",
  HOME_NAME_POSE: "Pose_2",
  HOME_QUOTE_POSE: "Pose_3",
};

export const ACTIONS = {
  UPDATE_POSE: "updatePoseState",
  UPDATE_POSE_CHANGING: "updatePoseChangingState",
  UPDATE_PAGE_LOADED: "updatePageLoadedState",
  UPDATE_QUOTE_FINSIHED: "updateQuoteFinishedState",
  UPDATE_PAGE_TRANSITIONING: "updatePageTransitioningState",
  UPDATE_PAGE_SECTION: "updatePageSectionState",
};

export const SECTIONS = {
  HOME: "home",
  ABOUT: "about",
};
