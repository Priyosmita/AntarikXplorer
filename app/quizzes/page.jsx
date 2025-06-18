"use client";

import { MdOutlineAccountCircle } from "react-icons/md";
import Header from "../components/global/header";
import Footer from "../components/global/footer";
import Image from "next/image";
import Button from "../components/global/button_gradient";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const options = [
    { label: "Home", link: "/" },
    { label: "Simulation", link: "/simulation" },
    { label: "Quizzes", link: "/quizzes" },
    { label: "Insights", link: "/insights" },
  ];

  const [qStep, setQStep] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
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

      {/* Hero section */}
      <div className="relative flex-1">
        <Image
          src="/landing-page-assets/quiz_hero.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Quiz background"
          width={1920}
          height={1080}
        />
        <div className="relative z-10 flex flex-row items-center justify-between min-h-dvh px-12 text-white pt-20">
          {/* Left column */}
          <div className="w-2/5 flex flex-col items-center">
            <h1
              className="text-4xl mb-4 viga-regular"
              style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.7)" }}
            >
              Challenge your knowledge
            </h1>
            <p
              className="text-xl font-medium mb-6 opacity-85 w-3/4 mx-auto text-center"
              style={{ textShadow: "3px 3px 10px rgba(0, 0, 0, 0.6)" }}
            >
              Test your space science skills with adaptive quizzes that grow with your expertise.
            </p>

            {qStep === 0 ? (
              <Button className="w-80" onClick={() => setQStep(1)}>
                <span>Go to Quizzes</span>
              </Button>
            ) : (
              <div className="space-y-4">
                <div className="flex flex-col gap-3">
                  <Link
                    href="/quizzes/easy"
                    className="button_gradient text-white text-lg py-2 px-6 w-80 rounded-full text-center"
                  >
                    Easy
                  </Link>
                  <Link
                    href="/quizzes/medium"
                    className="button_gradient text-white text-lg py-2 px-6 w-80 rounded-full text-center"
                  >
                    Medium
                  </Link>
                  <Link
                    href="/quizzes/hard"
                    className="button_gradient text-white text-lg py-2 px-6 w-80 rounded-full text-center"
                  >
                    Hard
                  </Link>
                </div>

                <Button className="w-80 mt-4" onClick={() => setQStep(0)}>
                  <span>Back</span>
                </Button>
              </div>
            )}
          </div>

          {/* Right column */}
          <div className="w-2/5 flex flex-col items-center">
            <h1
              className="text-4xl mb-4 viga-regular"
              style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.7)" }}
            >
              Unlock Rewards
            </h1>
            <p
              className="text-xl font-medium mb-6 opacity-85 w-3/4 mx-auto text-center"
              style={{ textShadow: "3px 3px 10px rgba(0, 0, 0, 0.6)" }}
            >
              Earn points to redeem for exclusive upgrades and real-world prizes as you advance.
            </p>

            <Button className="w-80 cursor-default">
              <p>Coming Soon</p>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;