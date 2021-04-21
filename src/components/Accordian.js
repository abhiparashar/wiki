import React,{useState} from "react";

const Accordian = (props) => {
  const [activeindex, setActiveindex] = useState(null)
  const ontitleClick = (index)=>{
    setActiveindex(index)
  }
  const renderlist = props.items.map((item,index) => {
    const active = activeindex===index ? 'active' : ""
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={()=>ontitleClick(index)}>
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">
    {renderlist}
    </div>;
};

export default Accordian;
