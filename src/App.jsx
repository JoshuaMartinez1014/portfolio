import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import { Header, AboutMe, Skills, Projects } from "./components";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />{" "}
        {/* Rendered when you're at '/'. This is your Homepage */}
        {/*  <Route path="/contact" element={<Contact />} />{" "} */}
        {/* Rendered when you're at '/skills' */}
      </Routes>
      {/*     <Footer /> */}
    </Router>
  );
}

export default App;
/*  <AboutMe />
      <Skills />
      <Projects /> */
