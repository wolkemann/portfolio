import CustomCursor from "custom-cursor-react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import "custom-cursor-react/dist/index.css";
import "../src/css/cursor.css";

// Fonts
import "@fontsource-variable/roboto-serif";

// Pages
import Home from "./pages/Home";
import { PortfolioProvider } from "./context/PortfolioContext";

function App() {
  const location = useLocation();

  return (
    <PortfolioProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
        </Routes>
      </AnimatePresence>
      <CustomCursor
        targets={[".link", ".gg"]}
        customClass="custom-cursor"
        dimensions={120}
        smoothness={{
          movement: 0.2,
          scale: 0.1,
          opacity: 0.2,
        }}
        targetScale={3.5}
        targetOpacity={0.5}
      />
    </PortfolioProvider>
  );
}

export default App;
