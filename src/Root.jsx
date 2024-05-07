import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

function Root() {

  return (
      <Router>
        <Routes>
          <Route path="/*" element={<App />}></Route>
        </Routes>
      </Router>
  );
}

export default Root;
