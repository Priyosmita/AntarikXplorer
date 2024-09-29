"use server"
import Image from "next/image";
import CallToAction from "./components/landing/calltoaction";
import Header from "./components/global/header";
import { MdOutlineAccountCircle } from "react-icons/md";

export default async function Home() {
  const options = [
    { label: 'Home', link: '#' },
    { label: 'Simulation', link: '#' },
    { label: 'Quizzes', link: '#' },
    { label: 'About', link: '#' },
  ];
  return (
    <>
      <Header
        logo={<img src="/global-assets/logo.png" alt="Logo" className="h-8" />}
        options={options}
        name="Antariksxplorer"
        catchPhrase="Beyond the stars"
        accountIcon={<MdOutlineAccountCircle className="text-white text-4xl hover:text-indigo-300 transition-colors duration-300" />}
      />
      <CallToAction />
      <p>kbwrkjwvrrwkjvnlkw</p>
    </>
  );
}
