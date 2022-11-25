import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
