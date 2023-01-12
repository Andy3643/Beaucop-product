import "./App.css";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Products from "./components/products/Products";
import Slider from "./components/slider/Slider"
import Testimonials from "./components/testimonials/Testimonials";
import Virtual from "./components/virtual/Virtual";


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonials/>
      <Contact/>
      </div>
  );
}

export default App;
