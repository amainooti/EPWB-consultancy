import Aboutsection from "./components/Aboutsection";
import Topsection from "./components/Topsection";

function App() {
  return (
    <div className="flex flex-col gap-3">
      <Topsection />
      <Aboutsection />
    </div>
  );
}

export default App;
