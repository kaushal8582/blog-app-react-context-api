import React from "react";
import "../App.css";

const Form = (props) => {
  return (
    <div className="form-box" onClick={()=> props.onClose()}>
      <form action="" onClick={(e)=>e.stopPropagation()}>
        <input type="text" name="" id="" placeholder="title" />
        <input type="text" name="" id="" placeholder="description" />
        <input type="text" name="" id="" placeholder="image" />
        <div className="buttons">
          <button type="submit">Add</button>
          <button onClick={()=> props.onClose()} >Close</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
