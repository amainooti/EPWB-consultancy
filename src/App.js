import Aboutsection from "./components/Aboutsection";
import Topsection from "./components/Topsection";
import Aboutcenter from "./components/Aboutcenter";
import Aboutbottom from "./components/Aboutbottom";
import Aboutending from "./components/Aboutending";
import Servicetop from "./components/Servicetop";
import Servicemiddle from "./components/Servicemiddle";
import Servicebottom from "./components/Servicebottom";


function App() {
  return (
    <div className="flex flex-col">
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
