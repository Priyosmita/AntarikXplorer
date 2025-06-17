"use client";

import React, { useState } from "react";
import server from "@/app/lib/server";
import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

const Quiz = ({ questions = [{}], slug = "" }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions?.length).fill(null));
  const router = useRouter();

  const handleOptionClick = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = option;
    setAnswers(newAnswers);
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < questions?.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleQuizSubmit = async () => {
    const questionsWithSelectedOptions = questions?.map((question, index) => ({
      ...question,
      selectedOption: answers[index],
    }));

    try {
      const response = await server.post("/questions/submit", {
        questions: questionsWithSelectedOptions,
      });
      if (response.status === 200) {
        // Handle successful submission
        alert("Score: " + response?.data?.score);
        console.log("Quiz submitted successfully");
        router.push("/");
      } else {
        // Handle errors
        alert("Failed to submit quiz");
        console.error("Failed to submit quiz");
      }
    } catch (error) {
      // Handle errors
      alert("Error submitting quiz");
      console.error("Error submitting quiz:", error);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = answers[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const onlyQuestions =
    questions.length > 1
      ? questions?.map((question) => question?.question)
      : [];

  return (
    <div className="pt-40 min-h-screen flex flex-col lg:flex-row gap-4 bg-no-repeat bg-[url('https://images.pexels.com/photos/12491661/pexels-photo-12491661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-opacity-30">
      <div className="bg-transparent w-1/2 p-4 lg:p-8 overflow-y-hidden max-h-[60vh]">
  <h4 className="text-4xl font-bold text-white text-center">
    AntarikXplorer Quiz
  </h4>
  <p className="text-center">
    Questions: {questions?.length ?? 0} | Level: {slug?.toUpperCase()}
  </p>
  <div>
    {/* Display a list of questions with controlled overflow */}
    <ul className="questions-list mt-4 space-y-2 max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-purple-700 scrollbar-track-purple-200">
      {onlyQuestions &&
        onlyQuestions?.map((question, index) => (
          <li
            key={index}
            className={`question-item p-2 rounded cursor-pointer ${
              currentQuestionIndex === index
                ? "bg-purple-800"
                : "bg-purple-500 hover:bg-purple-600"
            }`}
            onClick={() => setCurrentQuestionIndex(index)}
          >
            {index + 1}. {question}
          </li>
        ))}
    </ul>
  </div>
</div>


      <div className="my-auto quiz-container p-4 max-w-xl w-1/2 mx-auto bg-gradient-to-r from-purple-600 to-indigo-900 shadow-md rounded-lg text-white">
        <div className="progress-bar bg-gray-300 h-2 rounded mb-4">
          <div
            className="bg-purple-800 h-full rounded"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="question-container mb-4">
          <h1 className="text-2xl font-bold mb-4">
            {currentQuestion?.question}
          </h1>
          <ul className="options-list space-y-2">
            {currentQuestion?.option1 && (
              <li
                className={`option-item p-2 rounded cursor-pointer ${
                  selectedOption === currentQuestion.option1
                    ? "bg-purple-800"
                    : "bg-purple-500 hover:bg-purple-600"
                }`}
                onClick={() => handleOptionClick(currentQuestion.option1)}
              >
                {currentQuestion.option1}
              </li>
            )}
            {currentQuestion?.option2 && (
              <li
                className={`option-item p-2 rounded cursor-pointer ${
                  selectedOption === currentQuestion.option2
                    ? "bg-purple-800"
                    : "bg-purple-500 hover:bg-purple-600"
                }`}
                onClick={() => handleOptionClick(currentQuestion.option2)}
              >
                {currentQuestion.option2}
              </li>
            )}
            {currentQuestion?.option3 && (
              <li
                className={`option-item p-2 rounded cursor-pointer ${
                  selectedOption === currentQuestion.option3
                    ? "bg-purple-800"
                    : "bg-purple-500 hover:bg-purple-600"
                }`}
                onClick={() => handleOptionClick(currentQuestion.option3)}
              >
                {currentQuestion.option3}
              </li>
            )}
            {currentQuestion?.option4 && (
              <li
                className={`option-item p-2 rounded cursor-pointer ${
                  selectedOption === currentQuestion.option4
                    ? "bg-purple-800"
                    : "bg-purple-500 hover:bg-purple-600"
                }`}
                onClick={() => handleOptionClick(currentQuestion.option4)}
              >
                {currentQuestion.option4}
              </li>
            )}
          </ul>
        </div>
        <div className="navigation-buttons flex justify-between">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
            onClick={handlePreviousClick}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          {currentQuestionIndex < questions.length - 1 ? (
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
              onClick={handleNextClick}
              disabled={currentQuestionIndex >= questions.length - 1}
            >
              Next
            </button>
          ) : (
            <button
              className="px-4 py-2 bg-green-500 text-white rounded"
              onClick={handleQuizSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
