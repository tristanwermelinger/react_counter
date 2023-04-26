import "./App.css";
import { useState } from "react";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/Reset";

function App() {
  //console.log(App);
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Increment counter={counter} setCounter={setCounter} />
      <p>{counter}</p>
      <Decrement counter={counter} setCounter={setCounter} />
      <Reset counter={counter} setCounter={setCounter} />
    </>
  );
}

export default App;
