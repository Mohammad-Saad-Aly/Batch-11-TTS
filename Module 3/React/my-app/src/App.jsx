import { useState } from "react";
import "./App.css";

function App() {
  let [num, setNum] = useState(0);

  let incFun = () => {
    setNum(num + 1);
  };

  
  let decFun = () => {
    setNum(num - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{num}</h1>

        <button onClick={incFun}>Increment</button>
        <br />
        <button onClick={decFun}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
