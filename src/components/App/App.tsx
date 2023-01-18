import React from 'react'
import "./App.css";
import { BlexBar } from "../BlexBar/BlexBar";
import LoginForm from "../forms/LoginForm";

function App() {
  return (
    <div className="App">
      <BlexBar />
        <LoginForm />
    </div>
  );
}

export default App;
