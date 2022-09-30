import About from "./pages/About";
import Footer from "./pages/Footer";
import Gallery from "./pages/Gallery";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Services from "./pages/Services";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
