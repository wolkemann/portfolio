// Fonts
import "@fontsource-variable/roboto-serif";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

//Providers
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PortfolioProvider } from "./context/PortfolioContext";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          index
          element={
            <PortfolioProvider>
              <Home />
            </PortfolioProvider>
          }
        />
        <Route
          path="/about"
          element={
            <PortfolioProvider>
              <About />
            </PortfolioProvider>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
