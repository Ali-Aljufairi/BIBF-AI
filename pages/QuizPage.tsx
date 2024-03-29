import React, { useState } from "react";
import QuizCard from "../components/misc/QuizCard";
import Header from "../components/misc/header";
import Footer from "../components/misc/footer";

// Import the questions from the JSON file in the public folder which is the root of the project
const questions = require("../public/Quiz/Exam_Dumbs.json");

//  Create the QuizPage component as a functional component
const QuizPage: React.FC = () => {
  //  Use the useState hook to manage the state of the currentQuestionIndex
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  //  Create a function to handle the next question
  const handleNextQuestion = (): void => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  //  Create a function to handle the back question and type void
  const handleBackQuestion = (): void => {
    setCurrentQuestionIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="max-w-screen-md p-3 bg-slate-900 rounded-2xl shadow-md sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3 overflow-y-auto">
          {currentQuestionIndex < questions.length ? (
            <QuizCard
              key={currentQuestionIndex}
              questionData={questions[currentQuestionIndex]}
            />
          ) : (
            <div className="text-center text-gray-300">
              <h2 className="text-2xl font-bold mb-4">All done! 🎉</h2>
            </div>
          )}

          <div className="flex justify-center space-x-4 mt-4">
            {currentQuestionIndex > 0 && (
              <button
                className="bg-Pufr-1000 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleBackQuestion}
              >
                Back
              </button>
            )}

            {currentQuestionIndex < questions.length && (
              <button
                className="bg-Pufr-1500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleNextQuestion}
              >
                Next Question
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuizPage;
