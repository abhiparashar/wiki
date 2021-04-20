import React from "react";

const Accordian = (props) => {
  const renderlist = props.items.map((item) => {
    return(
        <div>
            {item.title}
            <div>{item.content}</div>
        </div>
    )
  });
  return <div>{renderlist}</div>;
};

export default Accordian;
