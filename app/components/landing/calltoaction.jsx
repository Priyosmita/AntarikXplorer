import React from "react";
import Button from "../global/button_gradient";
import "./landing.css"
const CallToAction = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <img
        src="/landing-page-assets/landing_cta.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col justify-center h-full pl-12 text-left text-white pt-32">
        {/* Main Text */}
        <h1
          className="text-8xl  mb-4 viga-regular"
          style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.7)" }}
        >
          Venture Beyond the <br /> Stars
        </h1>
        <p
          className="text-2xl font-semibold mb-6 opacity-85"
          style={{ textShadow: "3px 3px 10px rgba(0, 0, 0, 0.6)" }}
        >
          Experience the Cosmos Like Never Before: In an Immersive Simulation
        </p>

        {/* Sub-text */}
        <p
          className="text-sm max-w-md mb-8 font-light opacity-80"
          style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)" }}
        >
          Embark on Antarikxplorer’s VR and Gyro immersive experience and
          explore distant exoplanets from the comfort of your space. Soar
          through alien worlds, navigate star systems, and interact with
          real-time NASA data. Your cosmic adventure awaits—are you ready to
          explore?
        </p>

        {/* Button */}
        <Button className="w-80">Launch your Virtual Journey</Button>
      </div>
    </div>
  );
};

export default CallToAction;
