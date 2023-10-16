import React from "react";
import Profile from "./Profile";
import About from "../About/About";
import AppSkilll from "../Skills/AppSkilll";
import Appproject from "../Projects/Appproject";
import Appcertificate from "../Certificate/Appcertificate";

import Contact from "../Contact/Contact";

function Home() {
  return (
    <div>
      <Profile />
      <About />
      <Appproject />
      <AppSkilll />
      <Appcertificate />
      <Contact />
    </div>
  );
}

export default Home;
