import "./App.css";
import Button from "./Components/Button/Button";

function App() {
  // const arr = ["apple", "banana", "orange"];

  // const userName = "Saad"

  const arr = [
    {
      userName: "smit",
      roll: "1234",
    },
    {
      userName: "saylani",
      roll: "12345",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Button bgColor="red" title="Login" />
        <Button title="Submit" bgColor="yellow" />
        <Button title="Hello world" bgColor="purple" />

        <Card imgSrc="url agai image ki" />
        <Card imgSrc="url agai image ki" />
        <Card imgSrc="url agai image ki" />



        {/* <ul>
        {
          arr.map((val, index) =>{
            return <li key={index}>{val.userName} {val.roll}</li>
          })
        }
      </ul> */}
        {/* <p>{userName}</p> */}
        {/* <h1>Hello world!</h1> */}
        {/* <ul>
      {
        arr.map((val, index)=>{
          return <li key={index}>{val}</li>
        })
      }
    </ul> */}
      </header>
    </div>
  );
}

export default App;
