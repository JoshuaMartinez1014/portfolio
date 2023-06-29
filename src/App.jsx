/* import { Route, Routes, BrowserRouter } from "react-router-dom"; */
import "./styles/global.css";
import { Header, AboutMe, Skills, Projects } from "./components";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
