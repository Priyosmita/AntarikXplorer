"use client";

import React, { useState } from "react";
import axios from "axios";

export const dynamic = "force-dynamic";

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleOptionClick = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = option;
    setAnswers(newAnswers);
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleQuizSubmit = async () => {
    const questionsWithSelectedOptions = questions.map((question, index) => ({
      ...question,
      selectedOption: answers[index],
    }));

    try {
      const response = await axios.post(
        "https://ant.buckets.growsoc.arpan.xyz/questions/submit",
        { questions: questionsWithSelectedOptions }
      );
      if (response.status === 200) {
        // Handle successful submission
        console.log("Quiz submitted successfully");
      } else {
        // Handle errors
        console.error("Failed to submit quiz");
      }
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = answers[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="pt-40 h-[83dvh] bg-no-repeat bg-[url('https://images.pexels.com/photos/12491661/pexels-photo-12491661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-opacity-30">
      <div className="my-auto quiz-container p-4 max-w-xl mx-auto bg-gradient-to-r from-purple-600 to-indigo-900 shadow-md rounded-lg text-white">
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
