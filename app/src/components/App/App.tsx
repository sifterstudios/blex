import React, {useEffect} from "react";
import "./App.css";
import { BlexBar } from "../BlexBar/BlexBar";

function App() {
    useEffect(() => {
        document.body.classList.add('dark','bg-slate-900');
    })
  return (
    <div className="App">
      <BlexBar />
    </div>
  );
}

export default App;
