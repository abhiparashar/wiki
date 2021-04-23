import React, { useState,useEffect,useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef()
  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      if(ref.current.contains(event.target)){
        return
      }
      setOpen(false)
    });
  }, []);
  const renderedList = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div onClick={() => onSelectedChange(option)} key={option.value}>
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <div className="label">select a label</div>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon" />
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
