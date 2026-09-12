import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainTech from "./components/Technology/MainTech";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <MainTech />

      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;