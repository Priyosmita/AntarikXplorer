"use client";
import Footer from "@/app/components/global/footer";
import Header from "@/app/components/global/header";
import Quiz from "@/app/components/quiz/Quiz";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";

const Page = () => {
  const [allData, setAllData] = useState({});

  const options = [
    { label: "Home", link: "/" },
    { label: "Simulation", link: "/simulation" },
    { label: "Quizzes", link: "/quizzes" },
    { label: "Insights", link: "/insights" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios.get(
        "https://ant.buckets.growsoc.arpan.xyz/questions/hard"
      );
      setAllData(data);
    };
    fetchData();
  }, []);

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
      <Quiz questions={allData} />
      <Footer />
    </div>
  );
};

export default Page;
