import { createContext, useContext, useReducer } from "react";
import getRandomQuotes from "../utils/quotes";

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
    case "updatePoseState": {
      return { ...state, womanPose: action.womanPose };
    }
    case "updatePoseChangingState": {
      return { ...state, poseChanging: action.poseChanging };
    }
    case "updatePageLoadedState": {
      return { ...state, pageLoaded: action.pageLoaded };
    }
    case "updateQuoteFinishedState": {
      return { ...state, quoteFinished: action.quoteFinished };
    }
    case "updatePageTransitioningState": {
      return { ...state, pageTransitioning: action.pageTransitioning };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

const initialState = {
  womanPose: "Pose_0",
  poseChanging: false,
  pageLoaded: false,
  quoteFinished: false,
  pageTransitioning: false,
};
