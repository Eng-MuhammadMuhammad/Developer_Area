import React from "react";


import Landing from "./components/Landing/Landing"
import AboutUs from "./components/AboutUs/AboutUs";
import OurSkills from "./components/OurSkills/OurSkills"
import Gallery from "./components/Gallery/Gallery"
import TimeLine from "./components/TimeLine/TimeLine"
import Features from "./components/Features/Features"
import Testimonials from "./components/Testimonials/Testimonials"
import ContactUs from "./components/ContactUs/ContactUs"
import Footer from "./components/Footer/Footer"
import SettingsBox from "./components/SettingsBox/SettingsBox";

import '@fortawesome/react-fontawesome';
import '../src/styles/global.module.css'







function App() {
  return (
    <div>
      <Landing/>
      <AboutUs/>
      <OurSkills/>
      <Gallery/>
      <TimeLine/>
      <Features/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
      <SettingsBox/>
    </div>
  );
}

export default App;
