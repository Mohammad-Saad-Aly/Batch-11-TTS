import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    fetch("https://the-trivia-api.com/v2/questions")
      .then((data) => data.json())
      .then((response) => {
        response.map((item) => {
          item.options = [...item.incorrectAnswers, item.correctAnswer];
          item.options = shuffle(item.options);
        });

        setData(response);

        console.log("response", response);
      })
      .catch((err) => console.log(err));
  }, []);

  function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  if (!data.length) {
    return <h1>loading ....</h1>;
  }

  return (
    <>
      <p>{data[count].question.text}</p>

      {
        data[count].options.map((item, key) => {
          return (
            <div key={key}>
              <input
                onChange={() => setSelected(item)}
                type="radio"
                checked={selected == item}
                name="question{key}"
                value={item}
              />{" "}
              {item}
            </div>
          );
        })
        // console.log("data", data)
      }

      {count == data.length - 1 ? (
        <button onClick={() => setCount(0)}>Restart</button>
      ) : (
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Next
        </button>
      )}
    </>
  );
}

export default App;
