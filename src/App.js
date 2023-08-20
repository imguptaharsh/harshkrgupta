import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <div className="bg-multy bg-no-repeat bg-cover overflow-hidden">
         <div className="h-[40px]"></div>
        <Header />
        <div className="h-[20px]"></div>
        <Banner />
         <div className="h-[50px]"></div>
      </div>
      <div className="bg-multy bg-no-repeat bg-cover overflow-hidden">
        <Nav />
      </div>
      <div className="bg-multy bg-no-repeat bg-cover overflow-hidden">
        <About />
        {/* <Services /> */}
      </div>
      <div className="bg-multy bg-no-repeat bg-cover overflow-hidden">
        <Services />
      </div>
      <div className="bg-multy bg-no-repeat bg-cover overflow-hidden">
        <Work />
      </div>
      <div className="bg-multy bg-no-repeat bg-cover overflow-hidden">
        <Contact />
      </div>
    </div>
  );
};

export default App;
