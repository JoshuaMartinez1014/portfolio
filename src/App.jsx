/* import { Route, Routes, BrowserRouter } from "react-router-dom"; */
import "./styles/global.css";
import { Header, AboutMe, Skills } from "./components";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Skills />
    </>
  );
}

export default App;
