"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/app/components/global/header";
import Footer from "@/app/components/global/footer";
import Button from "@/app/components/global/button_gradient";
import Image from "next/image";
import { MdOutlineAccountCircle } from "react-icons/md";
import Link from "next/link";

const Page = () => {
  const params = useParams();
  const difficulty = params?.difficulty || "easy";

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(`/api/fetchqs?difficulty=${difficulty}`);
        const data = await res.json();
        if (data.success) {
          const shuffled = [...data.data].sort(() => 0.5 - Math.random());
          setQuestions(shuffled.slice(0, 5));
        }
      } catch (err) {
        console.error("Error fetching quiz data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [difficulty]);

  const handleOptionClick = (option) => {
    if (selected !== null) return;
    setSelected(option);
    if (option === questions[currentIndex].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === questions.length - 1) {
      setQuizComplete(true);
    } else {
      setSelected(null);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const options = [
    { label: "Home", link: "/" },
    { label: "Simulation", link: "/simulation" },
    { label: "Quizzes", link: "/quizzes" },
    { label: "Insights", link: "/insights" },
  ];

  return (
    <div className="min-h-screen text-white flex flex-col">
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

      <div className="flex flex-1 justify-center items-center px-4 bg-black bg-opacity-90">
        <div className="bg-neutral-800 text-white p-10 rounded-xl shadow-lg max-w-xl w-full">
          {loading ? (
            <p className="text-center">🔄 Loading Questions...</p>
          ) : questions.length > 0 && !quizComplete ? (
            <>
              <h2 className="text-xl mb-6">
                Q{currentIndex + 1}: {questions[currentIndex].question}
              </h2>
              <div className="space-y-4">
                {questions[currentIndex].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option)}
                    className={`w-full p-3 rounded-lg border transition-all duration-300
                      ${
                        selected === null
                          ? "bg-gray-700 hover:bg-indigo-600"
                          : option === questions[currentIndex].correctAnswer
                          ? "bg-green-600"
                          : option === selected
                          ? "bg-red-600"
                          : "bg-gray-600 opacity-50"
                      }`}
                    disabled={selected !== null}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {selected && (
                <Button className="mt-6 w-full" onClick={handleNext}>
                  {currentIndex === questions.length - 1 ? "Finish Quiz" : "Next"}
                </Button>
              )}
            </>
          ) : quizComplete ? (
            <div className="text-center">
              <h2 className="text-2xl mb-4">🎉 Quiz Complete!</h2>
              <p className="text-lg mb-6">Your Score: {score} / {questions.length}</p>
              <Button onClick={() => window.location.href = "/quizzes"}>
                Back to Quiz Menu
              </Button>
            </div>
          ) : (
            <div className="text-center">
              <p>No questions available. Try again later.</p>
              <Link href="/quizzes">
                <Button className="mt-4">Back to Menu</Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
