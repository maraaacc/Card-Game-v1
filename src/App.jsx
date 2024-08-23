import Details from "./components/Details.jsx";
import Footer from "./components/Footer.jsx";
import Cards from "./components/Cards.jsx";
import Controller from "./components/Controller.jsx";
import "./index.css";

function App() {
  return (
    <div className="w-screen h-screen p-5">
      <div className="flex gap-5">
        <Details />
        <Controller />
      </div>
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
