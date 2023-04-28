import "./App.css";
import { useState } from "react";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/Reset";
import AddCounter from "./components/AddConter";

function App() {
  //console.log(App);
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>
        <div>
          <AddCounter counter={counter} setCounter={setCounter} />
        </div>
      </div>
      <div>
        <Increment counter={counter} setCounter={setCounter} />
      </div>
      <p>{counter}</p>
      <div>
        <Decrement counter={counter} setCounter={setCounter} />
      </div>
      <div>
        <Reset counter={counter} setCounter={setCounter} />
      </div>
    </>
  );
}

export default App;
