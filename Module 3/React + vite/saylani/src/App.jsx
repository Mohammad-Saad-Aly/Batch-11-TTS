import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let [bulb, setBulb] = useState(false)

  // let onBulb = () =>{
  //   setBulb(true)
  // }
  // let offBulb = () =>{
  //   setBulb(false)
  // }

  // let onToggle = () => {
  //   setBulb(!bulb)
  // }

  let [inputText, setInputText] = useState("");
  let [list, setList] = useState(["apple", "banana"]);

  let addItem = () => {
    // list.push(inputText)
    let copyList = [...list];
    copyList.push(inputText);
    setList(copyList);
  };

  let handleInput = (e) => {
    setInputText(e.target.value);
  };

  let delItem = (index) => {
    let copyList = [...list];
    copyList.splice(index, 1)
    setList(copyList);
  };

  return (
    <>
      <input onChange={handleInput} type="text" name="" id="" />
      <button onClick={addItem}>Add Item</button>

      <ul>
        {list.map((data, index) => {
          return (
            <li key={index}>
              {data} <button onClick={() => delItem(index)}>Delete</button>
            </li>
          );
        })}
      </ul>

      {/* {
    bulb && <img
    width="300"
    src="https://img.freepik.com/free-vector/realistic-light-bulb-with-electricity_23-2149129409.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724976000&semt=ais_hybrid"
    alt=""
  />
  }


      
{
  !bulb && <img
  width="300"
  src="https://w7.pngwing.com/pngs/859/425/png-transparent-light-bulb-illustration-incandescent-light-bulb-lamp-bulb-candle-product-light-thumbnail.png"
  alt=""
/>
}
      

      <br />
      <br />
      <button onClick={onBulb}>On</button>
      <button onClick={offBulb}>Off</button>
      <br />
      <button onClick={onToggle} >On and Off</button> */}
    </>
  );
}

export default App;
