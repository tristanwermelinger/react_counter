import "./App.css";
import { useState } from "react";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";

function App() {
  //console.log(App);
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Increment counter={counter} setCounter={setCounter} />
      <p>{counter}</p>
      <Decrement
        className={counter === 0 ? "none" : "block"}
        setCounter={setCounter}
      />
    </>
  );
}

export default App;
