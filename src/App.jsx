import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Navbar, Welcome, Footer, Services, Testimonials } from "./components";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome lg:min-h-screen">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
