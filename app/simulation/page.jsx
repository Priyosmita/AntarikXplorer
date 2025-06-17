"use client";

import Image from "next/image";
import Header from "../components/global/header";
import { MdOutlineAccountCircle } from "react-icons/md";
import Footer from "../components/global/footer";
import Link from "next/link";
import Button from "../components/global/button_gradient";
import { motion } from "framer-motion";

const slideInVariant = (direction) => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: {
    opacity: 0,
    x: direction === "left" ? 100 : -100,
    transition: { duration: 0.8, ease: "easeIn" },
  },
});

const Page = () => {
  const options = [
    { label: "Home", link: "/" },
    { label: "Simulation", link: "/simulation" },
    { label: "Quizzes", link: "/quizzes" },
    { label: "Insights", link: "/insights" },
  ];

  return (
    <div className="bg-black bg-[url('/landing-page-assets/about_bg.png')] bg-center bg-cover bg-no-repeat bg-opacity-20 overflow-x-hidden">
      <div className="bg-black z-[2] top-0 left-0 fixed h-full w-screen bg-opacity-50"></div>
      <Header
        logo={
          <Image
            src="/global-assets/logo.png"
            alt="Logo"
            className="h-10 object-contain"
            width={200}
            height={100}
          />
        }
        options={options}
        name="AntarikXplorer"
        catchPhrase="Beyond the stars"
        accountIcon={
          <MdOutlineAccountCircle className="text-white text-4xl hover:text-indigo-300 transition-colors duration-300" />
        }
      />

      <div className="relative block pt-24 z-10 max-w-screen overflow-hidden">
        <h2
          className="text-8xl viga-regular text-center py-4"
          style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.7)" }}
        >
          Venture Beyond the Stars
        </h2>

        {/* Section 1 */}
        <div className="flex justify-between items-center mx-8 viga-regular">
          <motion.div
            className="w-1/2"
            variants={slideInVariant("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            exit="exit"
          >
            <Image
              src="/landing-page-assets/about_planet.png"
              alt="planet"
              width={1920}
              height={1080}
              className="object-contain h-96"
            />
          </motion.div>
          <motion.div
            className="space-y-3 w-1/2"
            variants={slideInVariant("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            exit="exit"
          >
            <h3 className="text-3xl">Simulate Planetary Environments</h3>
            <p className="w-4/5">
              Discover how different planets work by simulating their
              atmospheres, gravity, and weather. Experience extreme conditions
              from gas giants to rocky worlds in real-time.
            </p>
            <Button className="cursor-default">
              <Link href="https://priyosmita.itch.io/antarikxplorer" className="cursor-default">
                {" "}
                Coming soon{" "}
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-row-reverse justify-between items-center mx-8 viga-regular">
          <motion.div
            className="w-1/2"
            variants={slideInVariant("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            exit="exit"
          >
            <Image
              src="/landing-page-assets/about_spacecraft.png"
              alt="spacecraft"
              width={1920}
              height={1080}
              className="object-contain h-96"
            />
          </motion.div>
          <motion.div
            className="space-y-3 w-1/2"
            variants={slideInVariant("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            exit="exit"
          >
            <h3 className="text-3xl">Command Your Spaceship</h3>
            <p className="w-4/5">
              Pilot your own spacecraft across star systems, navigating the vast
              distances between planets. Complete missions, collect data, and
              explore the wonders of space at your own pace.
            </p>
          </motion.div>
        </div>

        {/* Section 3 */}
        <div className="flex justify-between items-center mx-8 viga-regular">
          <motion.div
            className="w-1/2"
            variants={slideInVariant("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            exit="exit"
          >
            <div className="flex justify-center items-end -space-x-52">
              <Image
                src="/landing-page-assets/about_vr.png"
                alt="vr"
                width={1920}
                height={1080}
                className="object-contain h-96"
              />
              <Image
                src="/landing-page-assets/about_mockup.png"
                alt="mockup"
                width={1920}
                height={1080}
                className="object-contain h-64"
              />
            </div>
          </motion.div>
          <motion.div
            className="space-y-3 w-1/2"
            variants={slideInVariant("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            exit="exit"
          >
            <h3 className="text-3xl">Experience in VR</h3>
            <p className="w-4/5">
              Discover how different planets work by simulating their
              atmospheres, gravity, and weather. Experience extreme conditions
              from gas giants to rocky worlds in real-time.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
