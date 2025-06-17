"use client";

import { MdOutlineAccountCircle } from "react-icons/md";
import Header from "../components/global/header";
import Image from "next/image";
import Button from "../components/global/button_gradient";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/global/footer";

const Page = () => {
  const options = [
    { label: "Home", link: "/" },
    { label: "Simulation", link: "/simulation" },
    { label: "Quizzes", link: "/quizzes" },
    { label: "Insights", link: "/insights" },
  ];

  const [qStep, setQStep] = useState(0);

  return (
    <div>
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

      <div className="relative min-h-screen">
        <Image
          src="/landing-page-assets/quiz_hero.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
          width={1920}
          height={1080}
        />

        <div className="relative z-10 flex flex-row items-center justify-between min-h-dvh px-12 text-center text-white pt-20">
          <div className="w-2/5">
            <h1
              className="text-4xl mb-4 viga-regular"
              style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.7)" }}
            >
              Challenge your knowledge
            </h1>
            <p
              className="text-xl font-medium mb-6 opacity-85 w-3/4 mx-auto"
              style={{ textShadow: "3px 3px 10px rgba(0, 0, 0, 0.6)" }}
            >
              Test your space science skills with adaptive quizzes that grow
              with your expertise.
            </p>
            <Button
              className={`w-80 ${qStep == 1 ? "hidden" : ""}`}
              onClick={() => setQStep(1)}
            >
              <span>Go to Quizzes</span>
            </Button>
            <div className="flex gap-2">
              <Link
                href="/quizzes/easy"
                className={`button_gradient text-white text-lg py-2 px-6 w-80 rounded-full ${
                  qStep == 0 ? "hidden" : ""
                }`}
              >
                Easy
              </Link>
              <Link
                href="/quizzes/medium"
                className={`button_gradient text-white text-lg py-2 px-6 w-80 rounded-full ${
                  qStep == 0 ? "hidden" : ""
                }`}
              >
                Medium
              </Link>
              <Link
                href="/quizzes/hard"
                className={`button_gradient text-white text-lg py-2 px-6 w-80 rounded-full ${
                  qStep == 0 ? "hidden" : ""
                }`}
              >
                Hard
              </Link>
            </div>

            <Button
              className={`w-80 mt-4 ${qStep == 0 ? "hidden" : ""}`}
              onClick={() => setQStep(0)}
            >
              <span>Back</span>
            </Button>
          </div>
          <div className="w-2/5">
            <h1
              className="text-4xl mb-4 viga-regular"
              style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.7)" }}
            >
              Unlock Rewards
            </h1>
            <p
              className="text-xl font-medium mb-6 opacity-85 w-3/4 mx-auto"
              style={{ textShadow: "3px 3px 10px rgba(0, 0, 0, 0.6)" }}
            >
              Earn points to redeem for exclusive upgrades and real-world prizes
              as you advance.
            </p>

            <Button className="w-80 cursor-default">
              <p>Coming Soon</p>
            </Button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Page;
