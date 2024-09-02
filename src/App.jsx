// src/App.js

import "./App.css";
import AboutSection from "./Components/AboutSection/AboutSection";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import ServicesSection from "./Components/ServicesSection/ServicesSection";

function App() {
  return (
    <div className="App">
      <HeroSection />

      <AboutSection />
      <ServicesSection />

      <Footer />
    </div>
  );
}

export default App;
