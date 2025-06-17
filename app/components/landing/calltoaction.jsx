"use client";
import Link from "next/link";
import Button from "../global/button_gradient";
import "./landing.css";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const CallToAction = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="/landing-page-assets/landing_bg-min.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
        width={1920}
        height={1080}
      />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col justify-center h-full pl-12 text-left text-white pt-32">
        {/* Main Text */}
        <h1
          className="text-8xl  mb-4 viga-regular"
          style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.7)" }}
        >
          Venture Beyond the <br />
          <Typewriter
            words={["Stars", "Solar System", "Universe", "Galaxy"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </h1>
        <p
          className="text-2xl font-semibold mb-6 opacity-85"
          style={{ textShadow: "3px 3px 10px rgba(0, 0, 0, 0.6)" }}
        >
          Experience the Cosmos Like Never Before: In an Immersive Simulation
        </p>

        {/* Sub-text */}
        <p
          className="text-base max-w-md mb-8 font-light opacity-80"
          style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)" }}
        >
          Embark on Antarikxplorer’s VR and Gyro immersive experience and
          explore distant exoplanets from the comfort of your space. Soar
          through alien worlds, navigate star systems, and interact with
          real-time NASA data. Your cosmic adventure awaits—are you ready to
          explore?
        </p>

        {/* Button */}
        <Button className="w-80">
          <Link href="/simulation">Launch your Virtual Journey</Link>
        </Button>
      </div>

      {/* Astronaut Image */}
      <div className="astronaut-container">
        <Image
          src="/landing-page-assets/landing_astro1.png" // Replace with your astronaut image path
          alt="Astronaut"
          width={1200}
          height={1200}
          className="astronaut"
        />
      </div>
    </div>
  );
};

export default CallToAction;
