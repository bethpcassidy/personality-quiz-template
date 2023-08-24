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
        { id: 3, text: "Old Chapstick" },
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
    {
      text: "There's a drink vending machine, what are you getting?",
      options: [
        { id: 0, text: "Green Tea" },
        { id: 1, text: "Soda" },
        { id: 2, text: "Energy Drink" },
        { id: 3, text: "Canned Coffee Beverage" },
      ],
    },
    {
      text: "Which video game do you play?",
      options: [
        { id: 0, text: "Cozy town simulator" },
        { id: 1, text: "Fast paced first person shooter" },
        { id: 2, text: "Racing game" },
        { id: 3, text: "Fantasy survival/building game" },
      ],
    },
    {
      text: "What do you name your cat?",
      options: [
        { id: 0, text: "Mittens" },
        { id: 1, text: "Steve" },
        { id: 2, text: "Coco" },
        { id: 3, text: "Trinity" },
      ],
    },
    {
      text: "What time do you wake up if you have no obligations?",
      options: [
        { id: 0, text: "8 am." },
        { id: 1, text: "10 am." },
        { id: 2, text: "12 pm." },
        { id: 3, text: "3 pm." },
      ],
    },
    {
      text: "How do you remember your plans?",
      options: [
        { id: 0, text: "Put it in my calendar" },
        { id: 1, text: "Alarm." },
        { id: 2, text: "Write it on my whiteboard." },
        { id: 3, text: "I'll remember on my own." },
      ],
    },
    {
      text: "Which color do you like the most",
      options: [
        { id: 0, text: "Red" },
        { id: 1, text: "Yellow" },
        { id: 2, text: "Blue" },
        { id: 3, text: "Black" },
      ],
    },
    {
      text: "What would you want to do most on a free day.",
      options: [
        { id: 0, text: "Read a book." },
        { id: 1, text: "Go hiking with friends." },
        { id: 2, text: "Watch a really good movie." },
        { id: 3, text: "Go into the city." },
      ],
    },
    {
      text: "What season do you like the most.",
      options: [
        { id: 0, text: "Summer" },
        { id: 1, text: "Fall" },
        { id: 2, text: "Winter" },
        { id: 3, text: "Spring" },
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
      if (score > 37) {
        // uses setFinalResult to determine the answer with an else if response
        setFinalResult(results[3]);
      } else if (score > 30) {
        setFinalResult(results[2]);
      } else if (score > 24) {
        setFinalResult(results[1]);
      } else if (score > 13) {
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
          <h1>Pikmin Character Survey</h1>
          <h2>Which Pikmin are you?</h2>
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
              <div className="feedback">
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
              </div>
            )}
          </div>
        ) : (
          <div className="feedback">
            <div class="p-3 mb-2 bg-dark text-white">
              <h1 className="start" onClick={() => setQuiz(true)}>
                Start Quiz
              </h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
