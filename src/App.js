import React, { useState } from "react";
import Accordian from "./components/Accordian";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React",
    content: "React is a frontend javascript library",
  },
  {
    title: "Why to use React",
    content: "React is favourite javascript framework among enginners",
  },
  {
    title: "How to use React",
    content: "you use react by making components",
  },
];

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color is  Green",
    value: "green",
  },
  {
    label: "The color of shade Blue",
    value: "blue",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);
  const onSelectedChangeHandler = (option)=>{
    setSelected(option)
  }
  return (
    <div className="App">
      {/* <Accordian items={items}/> */}
      {/* <Search/> */}
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        // onSelectedChange={onSelectedChangeHandler}
        // onSelectedChange={(option)=>setSelected(option)}
        options={options}
      />
    </div>
  );
}

export default App;
