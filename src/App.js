import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar";
import Footersection from "./components/Footersection";
import Copyright from "./components/Copyright";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footersection />
      <Copyright />
    </>
  );
}

export default App;
