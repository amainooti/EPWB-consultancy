import Aboutsection from "./components/Aboutsection";
import Topsection from "./components/Topsection";
import Aboutcenter from "./components/Aboutcenter";
import Aboutbottom from "./components/Aboutbottom";
import Aboutending from "./components/Aboutending";
import Services from "./components/Services";
import Foundersection from "./components/Foundersection";
import Gallerysection from "./components/Gallerysection";
import Footersection from "./components/Footersection";


function App() {
  return (
    <div className="flex flex-col gap-3">
      <Topsection />
      <Aboutsection />
      <Aboutcenter />
      <Aboutbottom />
      <Aboutending />
      <Services/>
      <Foundersection/>
      <Gallerysection/>
      <Footersection/>
    </div>
  );
}

export default App;
