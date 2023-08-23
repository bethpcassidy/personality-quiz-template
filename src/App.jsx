import { useState } from "react";
import "./App.css";
import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  const Questions = document.getElementById("Questions");

  //variables
  const [showResponse, setResponse] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [startQuiz, setQuiz] = useState(false);

  const questions = [
    {
      text: "What season were you born?",
      options: [
        { id: 0, text: "Fall" },
        { id: 1, text: "Summer" },
        { id: 2, text: "Winter" },
        { id: 3, text: "Spring" },
      ],
    },
    {
      text: "Which food do you like the most?",
      options: [
        { id: 0, text: "Pasta" },
        { id: 1, text: "Soup" },
        { id: 2, text: "Stir Fry" },
        { id: 3, text: "Salad" },
      ],
    },
    {
      text: "What are you most likely to find in your pockets.",
      options: [
        { id: 0, text: "Old Tickets" },
        { id: 1, text: "Pen" },
        { id: 2, text: "Laniard" },
        { id: 3, text: "Benjamin Franklin" },
      ],
    },
    {
      text: "It's raining, you:",
      options: [
        { id: 0, text: "Read a book." },
        { id: 1, text: "Watch a show." },
        { id: 2, text: "Play cards." },
        { id: 3, text: "Go out for a walk." },
      ],
    },
    {
      text: "What book title would you grab first.",
      options: [
        { id: 0, text: "Gardening Journal: Corinthians and You" },
        { id: 1, text: "Mystery on 47th Avenue" },
        { id: 2, text: "Photos From Beach Towns Around the World" },
        { id: 3, text: "The History of Snakes" },
      ],
    },
  ];

  const results = [
    {
      id: 0,
      text: "Vermillion",
      description: "",
      image: "",
    },
    {
      id: 1,
      text: "Daisy",
      description: "",
      image: "",
    },
    {
      id: 2,
      text: "Lime",
      description: "",
      image: "",
    },
    {
      id: 3,
      text: "Coarse",
      description: "",
      image: "",
    },
  ];

  const [finalResult, setFinalResult] = useState(false);

  //Function
  const optionClicked = (id) => {
    // uses setScore to increase the value by id number and adds a 1 so its impossible to get 0 as an answer;
    setScore(score + id + 1);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setResponse(true);
      if (score > 15) {
        // uses setFinalResult to determine the answer with an else if response
        setFinalResult(results[3]);
      } else if (score > 11) {
        setFinalResult(results[2]);
      } else if (score > 8) {
        setFinalResult(results[1]);
      } else if (score > 3) {
        setFinalResult(results[0]);
      }
    }
    console.log(score);
  };

  return (
    <>
      <div className="App">
        {/* //header */}
        <div className="top">
          <h1>Survey</h1>
        </div>
        {startQuiz ? (
          <div className="content">
            {/* //status */}
            {/* <h2>test score {score}</h2> */}
            {showResponse ? (
              <div className="feedback">
                <div class="p-3 mb-2 bg-dark text-white">
                  <img className="image" src="https://i.imgflip.com/6ek11y.png?a469848" alt="Card image cap" />
                  <h1>You Got: {finalResult.text} </h1>
                  <div class="card-body">
                    <h2>{finalResult.text}</h2>
                  </div>
                  <button>Honk</button>
                </div>
              </div>
            ) : (
              <div class="p-3 mb-2 bg-dark text-white">
                <div className="Questions">
                  <h2>
                    {" "}
                    {currentQuestion + 1} of {questions.length}{" "}
                  </h2>
                  <div>
                    <h3 className="question-text"> {questions[currentQuestion].text} </h3>
                    <ul>
                      {questions[currentQuestion].options.map((option) => {
                        return (
                          <div classname="options">
                            <li onClick={() => optionClicked(option.id)} key={option.id}>
                              {option.text}
                            </li>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div class="p-3 mb-2 bg-dark text-white">
            <h1 className="start" onClick={() => setQuiz(true)}>
              Start Quiz
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
