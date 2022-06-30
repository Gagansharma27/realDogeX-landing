import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Navbar, Welcome, Footer, Services, Testimonials, Subscribe } from "./components";

const App = () => {
  // Set up AOS on component mount
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    // Create page layout
    <div className="min-h-screen">
      <div className="gradient-bg-welcome lg:min-h-screen">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
