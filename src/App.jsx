import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

// Fonts
import "@fontsource-variable/roboto-serif";

// Pages
import Home from "./pages/Home";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
