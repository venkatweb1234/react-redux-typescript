import React from "react";
import "./App.scss";
import CounterValue from "./components/Counter.comp";

//<!--https://decembersoft.com/posts/starting-a-react-redux-project-with-typescript/-->
function App() {
  return (
    <div className="App" data-test='CounterTypescript'>
     <CounterValue />
    </div>
  );
}

export default App;
