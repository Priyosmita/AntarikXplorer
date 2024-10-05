"use client";
import Quiz from "@/app/components/quiz/Quiz";
import axios from "axios";
import { useState, useEffect } from "react";

const Page = () => {
  const [allData, setAllData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios.get(
        "https://ant.buckets.growsoc.arpan.xyz/questions/easy"
      );
      setAllData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Quiz questions={allData} />
    </div>
  );
};

export default Page;
