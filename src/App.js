import Aboutsection from "./components/Aboutsection";
import Topsection from "./components/Topsection";
import Aboutcenter from "./components/Aboutcenter";
import Aboutbottom from "./components/Aboutbottom";
import Aboutending from "./components/Aboutending";
import Servicetop from "./components/Servicetop";
import Servicemiddle from "./components/Servicemiddle";
import Servicebottom from "./components/Servicebottom";
import Carousel from "./components/Carousel";


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
      <Carousel />
    </div>
  );
}

export default App;
