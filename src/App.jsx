import { useState } from "react";
import "./App.css";
import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import ".src/assets/images";

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
      text: "Which season do you like the most.",
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
      text: "Yellow Pikmin",
      description:
        "These Pikmin have lamellae which resemble large ears; these are the means by which they are primarily identifiable.",
      image: "src/assets/images/400px-P4_Yellow_Pikmin.webp",
    },
    {
      id: 1,
      text: "Red Pikmin",
      description:
        "The first Pikmin type discovered in all games, and are usually considered the main type of Pikmin due to their relatively simple traits and early discovery. They are cultivated via the Red Onion (or the Master Onion)",
      image: "src/assets/images/300px-P4_Red_Pikmin.webp",
    },
    {
      id: 2,
      text: "Ice Pikmin",
      description:
        "heir most defining characteristics are their cyan, blocky bodies, seemingly made of ice chunks, their complete immunity to all types of freezing, and their ability to freeze enemies and bodies of water solid.",
      image: "src/assets/images/300px-Icepikminrender.webp",
    },
    {
      id: 3,
      text: "Winged Pikmin",
      description:
        "They are pink with large blue eyes, their bodies are striped in darker pink, and they have lavender buds and flowers like Rock Pikmin. Their name comes from the transparent wings on their backs, which allows them to be airborne most of the time.",
      image: "src/assets/images/Pikmin_4_Winged_Pikmin.webp",
    },
    {
      id: 4,
      text: "Glow Pikmin",
      description:
        "Glow Pikmin have bright green, bioluminescent bodies. They have no legs; their bodies instead end in a tapered and ghost-like tail. Because of this, they have the ability to float.",
      image: "src/assets/images/400px-Glow_Pikmin.webp",
    },
    {
      id: 5,
      text: "Rock Pikmin",
      description:
        "They resemble small polished rocks with Pikmin eyes and limbs, and have lavender buds and flowers like the Winged Pikmin. The main part of their bodies seem to be a black (gray prior to Pikmin 4) texture of graphite that reflects light, whereas their stems, arms, and legs appear to be smooth and gray.",
      image: "src/assets/images/400px-P4_Rock_Pikmin.webp",
    },
    {
      id: 6,
      text: "Rock Pikmin",
      description:
        "They resemble small polished rocks with Pikmin eyes and limbs, and have lavender buds and flowers like the Winged Pikmin. The main part of their bodies seem to be a black (gray prior to Pikmin 4) texture of graphite that reflects light, whereas their stems, arms, and legs appear to be smooth and gray.",
      image: "src/assets/images/400px-P4_Rock_Pikmin.webp",
    },
    {
      id: 7,
      text: "Blue Pikmin",
      description:
        "These Pikmin are distinguishable from other Pikmin species by their pink mouths, a trait seen in no other Pikmin species. These mouths are used to take in water, which filters oxygen through gills, giving them the ability to breathe both underwater and on dry land.",
      image: "src/assets/images/P4_Blue_Pikmin.webp",
    },
    {
      id: 8,
      text: "Purple Pikmin",
      description:
        "Their most noteworthy characteristics are their massive weight and carrying strength – 10 times those of a regular Pikmin. They are also slower than normal, and have a unique way of attacking enemies",
      image: "src/assets/images/P4_Purple_Pikmin_Render.webp",
    },
    {
      id: 9,
      text: "White Pikmin",
      description:
        "Their most noteworthy characteristics are their faster speed compared to other Pikmin, ability to find buried objects that are completely hidden underground, and their immunity to poison. Their defining physical characteristics are their red eyes, white color, and smaller size.",
      image: "src/assets/images/480px-Pikmin_4_White_Flower_Pikmin.webp",
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
        setFinalResult(results[9]);
      } else if (score > 45) {
        setFinalResult(results[8]);
      } else if (score > 40) {
        setFinalResult(results[7]);
      } else if (score > 36) {
        setFinalResult(results[6]);
      } else if (score > 32) {
        setFinalResult(results[5]);
      } else if (score > 28) {
        setFinalResult(results[4]);
      } else if (score > 24) {
        setFinalResult(results[3]);
      } else if (score > 20) {
        setFinalResult(results[2]);
      } else if (score > 16) {
        setFinalResult(results[1]);
      } else if (score >= 0) {
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
          <h1>Pikmin Character Quiz</h1>
          <h2>Which Pikmin are you?</h2>
        </div>
        {startQuiz ? (
          <div className="content">
            {/* //status */}
            {/* <h2>test score {score}</h2> */}
            {showResponse ? (
              <div className="feedback">
                <div class="p-3 mb-2 bg-dark text-white">
                  <img className="image" src={finalResult.image} alt="Card image cap" height="200px" />
                  <h1>You Got: {finalResult.text} </h1>
                  <div class="card-body">
                    <p>{finalResult.description}</p>
                  </div>
                  <a href="http://localhost:5174/">Take The Quiz Again</a>
                </div>
                <footer>
                  <p className="source">All information sourced from https://www.pikminwiki.com/</p>
                </footer>
              </div>
            ) : (
              <div className="feedback">
                <div class="p-3 mb-2 bg-dark text-white">
                  <div className="Questions">
                    <h2 className="tracker">
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
