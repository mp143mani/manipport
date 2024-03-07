import React from "react";
import Profile from "./Profile";
import About from "../About/About";
import AppSkilll from "../Skills/Skilll";
import Appproject from "../Projects/Project";
import Certificate from "../Certificate/Certificate";
import "./Home.css"

import Contact from "../Contact/Contact";

function Home() {
  return (
    <div>
      <Profile />
      <About />
      <Appproject />
      <AppSkilll />
      <Certificate />
      <Contact />
    </div>
  );
}

export default Home;
