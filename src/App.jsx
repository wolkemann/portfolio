// Fonts
import "@fontsource-variable/roboto-serif";

// Pages
import HomePage from "./pages/HomePage";

//Providers
import { AnimatePresence } from "framer-motion";
import { PortfolioProvider } from "./context/PortfolioContext";

function App() {
  return (
    <AnimatePresence mode="wait">
      <PortfolioProvider>
        <HomePage />
      </PortfolioProvider>
    </AnimatePresence>
  );
}

export default App;
