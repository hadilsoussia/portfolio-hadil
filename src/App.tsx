import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ESIEABot from "./pages/ESIEABot";
import CapProjet from "./pages/CapProjet";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/esieabot" element={<ESIEABot />} />
          <Route path="/project/cap-projet" element={<CapProjet />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
