<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Navbar from "./components/Navbar"
=======
import Aboutsection from "./components/Aboutsection";
import Topsection from "./components/Topsection";
import Aboutcenter from "./components/Aboutcenter";
import Aboutbottom from "./components/Aboutbottom";
import Aboutending from "./components/Aboutending";
import Servicetop from "./components/Servicetop";
import Servicemiddle from "./components/Servicemiddle";
import Servicebottom from "./components/Servicebottom";

>>>>>>> 566b5d46aebfb75d8c5910414437bae9c0b41553

function App() {
  return (
    <>
<<<<<<< HEAD
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
=======
      <Topsection />
      <Aboutsection />
      <Aboutcenter />
      <Aboutbottom />
      <Aboutending />
      <Servicetop />
      <Servicemiddle />
      <Servicebottom />
>>>>>>> 566b5d46aebfb75d8c5910414437bae9c0b41553
    </>
  );
}

export default App;
