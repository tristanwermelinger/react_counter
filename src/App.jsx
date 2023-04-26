import "./App.css";
import { useState } from "react";
import Increment from "./components/Increment";

function App() {
  const [counter, setCounter] = useState(0);
  return;
  <>
    <p>{counter}</p>

    <Increment counter={counter} setCounter={setCounter} />
  </>;
}

export default App;
