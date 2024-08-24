import logo from "./logo.svg";
import "./App.css";

function App() {
  const arr = ["aloo", "piyaaz", "adrak", "mooli"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <ul>
          {
            arr.map((data)=>{
              return <li> {data}</li>
            })
          }
        </ul>
        
        
        
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

      </header>
    </div>
  );
}

export default App;
