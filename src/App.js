import Aboutsection from "./components/Aboutsection";
import Topsection from "./components/Topsection";
import Aboutcenter from "./components/Aboutcenter";
import Aboutbottom from "./components/Aboutbottom";
import Aboutending from "./components/Aboutending";
<<<<<<< HEAD
import Services from "./components/Services";
import Foundersection from "./components/Foundersection";
import Gallerysection from "./components/Gallerysection";
import Footersection from "./components/Footersection";
=======
import Servicetop from "./components/Servicetop";
import Servicemiddle from "./components/Servicemiddle";
import Servicebottom from "./components/Servicebottom";
>>>>>>> ddcbffa5250c97072dbe3704ca18382c7f611aff


function App() {
  return (
    <div className="flex flex-col gap-3 md:gap-20">
      <Topsection />
      <Aboutsection />
      <Aboutcenter />
      <Aboutbottom />
      <Aboutending />
      <Servicetop />
      <Servicemiddle />
      <Servicebottom />
    </div>
  );
}

export default App;
