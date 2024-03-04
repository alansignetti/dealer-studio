import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Card />
    </div>
  );
};

export default App;
