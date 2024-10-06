import React from "react";
import Header from "../../components/global/header";
import Image from "next/image";
import { MdOutlineAccountCircle } from "react-icons/md";

const Page = () => {
  const options = [
    { label: "Home", link: "/" },
    { label: "Simulation", link: "/simulation" },
    { label: "Quizzes", link: "/quizzes" },
    { label: "Insights", link: "/insights" },
  ];

  return (
    <div
      style={{
        backgroundImage: `url('/landing-page-assets/about_bg.png')`, // Replace with the actual path
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Adjust this to fit your needs
        width: "100vw",
      }}
    >
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
    </div>
  );
};

export default Page;
