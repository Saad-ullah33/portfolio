import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/home.jsx";
import Portfolio from "./pages/portfolio.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import Footer from "./pages/footer.jsx";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;