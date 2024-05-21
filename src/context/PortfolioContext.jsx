import { createContext, useContext, useReducer } from "react";
import { ACTIONS, SECTIONS, WOMAN_POSES } from "../utils/constants";

const PortfolioContext = createContext(null);

const PortfolioDispatchContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
  const [portfolioState, dispatch] = useReducer(portfolioReducer, initialState);

  return (
    <PortfolioContext.Provider value={portfolioState}>
      <PortfolioDispatchContext.Provider value={dispatch}>
        {children}
      </PortfolioDispatchContext.Provider>
    </PortfolioContext.Provider>
  );
};

export function usePortfolio() {
  return useContext(PortfolioContext);
}

export function usePortfolioDispatch() {
  return useContext(PortfolioDispatchContext);
}

const portfolioReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_POSE: {
      return { ...state, womanPose: action.womanPose };
    }
    case ACTIONS.UPDATE_POSE_CHANGING: {
      return { ...state, poseChanging: action.poseChanging };
    }
    case ACTIONS.UPDATE_PAGE_LOADED: {
      return { ...state, pageLoaded: action.pageLoaded };
    }
    case ACTIONS.UPDATE_QUOTE_FINSIHED: {
      return { ...state, quoteFinished: action.quoteFinished };
    }
    case ACTIONS.UPDATE_PAGE_TRANSITIONING: {
      return { ...state, pageTransitioning: action.pageTransitioning };
    }
    case ACTIONS.UPDATE_PAGE_SECTION: {
      return {
        ...state,
        womanPose: action.womanPose,
        pageSection: action.pageSection,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

const initialState = {
  womanPose: WOMAN_POSES.DEFAULT_POSE,
  poseChanging: false,
  pageLoaded: false,
  quoteFinished: false,
  pageTransitioning: false,
  pageSection: SECTIONS.HOME,
};
