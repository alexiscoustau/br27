import ListImg from "./components/main/listImg/ListImg";
import Header from "./components/header/Header";
import Nosotros from "./components/main/nosotros/Nostros";
import Servicios from "./components/main/servicios/Servicios";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Nosotros />
      <Servicios />
      <ListImg />
      <Footer />
    </>
  );
}

export default App;
