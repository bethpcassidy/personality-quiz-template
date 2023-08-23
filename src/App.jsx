import { useState } from "react";
import "./App.css";
import { React } from "react";

function App() {
  const [count, setCount] = useState(0);

  //variables
  const [showResponse, setResponse] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      text: "What season were you born?",
      options: [
        { id: 0, text: "Fall", isCorrect: false },
        { id: 1, text: "Summer", isCorrect: false },
        { id: 2, text: "Winter", isCorrect: false },
        { id: 3, text: "Spring", isCorrect: true },
      ],
    },
    {
      text: "Which food do you like the most?",
      options: [
        { id: 0, text: "Pasta", isCorrect: true },
        { id: 1, text: "Soup", isCorrect: false },
        { id: 2, text: "Stir Fry", isCorrect: false },
        { id: 3, text: "Salad", isCorrect: false },
      ],
    },
    {
      text: "What are you most likely to find in your pockets.",
      options: [
        { id: 0, text: "Old Tickets", isCorrect: true },
        { id: 1, text: "Pen", isCorrect: false },
        { id: 2, text: "Laniard", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "It's raining, you:",
      options: [
        { id: 0, text: "Read a book.", isCorrect: false },
        { id: 1, text: "Watch a show.", isCorrect: true },
        { id: 2, text: "Play cards.", isCorrect: false },
        { id: 3, text: "Go out for a walk.", isCorrect: false },
      ],
    },
    {
      text: "What book title would you grab first.",
      options: [
        { id: 0, text: "Gardening Journal: Corinthians and You", isCorrect: false },
        { id: 1, text: "Mystery on 47th Avenue", isCorrect: true },
        { id: 2, text: "Photos From Beach Towns Around the World", isCorrect: true },
        { id: 3, text: "The History of Snakes", isCorrect: false },
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

  const [finalResult, setFinalResult] = useState([]);

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
        <h1>Survey</h1>
        {/* //status */}
        {/* <h2>test score {score}</h2> */}
        {showResponse ? (
          <div className="feedback">
            <h1>You Got:{finalResult.text} </h1>
            <h2>{finalResult.text}</h2>
            <button>Honk</button>
          </div>
        ) : (
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
                    <li onClick={() => optionClicked(option.id)} key={option.id}>
                      {option.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
