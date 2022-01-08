import React from "react";
import "./App.css";
import Card from "./Components/Card";
import BasicCard from "./Components/Card/basicCard";
import ComplexCard from "./Components/Card/complexCard";
import ProductCard from "./Components/Card/productCard";

function App() {
  return (
    <div className="App">
      <Card />
      <ComplexCard />
      <BasicCard />
      <ProductCard />
    </div>
  );
}

export default App;
