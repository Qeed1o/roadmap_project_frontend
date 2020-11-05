import React from "react";

import BoardView from "./views/BoardView";
import Header from "./components/Header";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <BoardView />
    </div>
  );
};

export default App;
