// Fonts
import "@fontsource-variable/roboto-serif";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

//Providers
import { PortfolioProvider } from "./context/PortfolioContext";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";



function App() {
  const location = useLocation();

  return (
    <PortfolioProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path='/about-me' element={<About />} />
        </Routes>
      </AnimatePresence>
    </PortfolioProvider>
  );
}

export default App;
