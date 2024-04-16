import { createContext, useContext, useReducer } from "react";

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
    case "modifyPose": {
      return { ...state, womanPose: action.womanPose };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

const initialState = {
  womanPose: "initialPose",
};
