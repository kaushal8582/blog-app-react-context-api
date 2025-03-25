import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import blogContext from "../store/blog-context";


const Form = (props) => {

  const [name,setName] = useState("");
  const [desc,setDesc]= useState('');
  const [img,setImg]  = useState("");
  

  const {addBlogs,isEdit,editedValue,setIsEdit} = useContext(blogContext)

  function handleSubmit(e){
    e.preventDefault();
    let obj={
      id:Date.now(),
      name,
      desc,
      img
    }
    addBlogs(obj);
    setDesc("")
    setImg("")
    setName("");
    props.onClose();
  }

  function updateValue(e){
    e.preventDefault();
    let obj={
      id:editedValue.id,
      name,
      desc,
      img
    }
    addBlogs(obj);
    setDesc("")
    setImg("")
    setName("");
    setIsEdit(false);
    props.onClose();
  }

  useEffect(()=>{
    if(isEdit){
      setDesc(editedValue.desc);
      setImg(editedValue.img);
      setName(editedValue.name);
    }
  },[isEdit,editedValue])

  return (
    <div className="form-box" onClick={()=> props.onClose()}>
      <form action="" onClick={(e)=>e.stopPropagation()} onSubmit={isEdit?updateValue:handleSubmit}>
        <input type="text" name="name" id="" placeholder="title" value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="text" name="desc" id="" placeholder="description" value={desc} onChange={(e)=>setDesc(e.target.value)} />
        <input type="text" name="img" id="" placeholder="image" value={img} onChange={(e)=> setImg(e.target.value)} />
        <div className="buttons">
          <button type="submit">{isEdit?"Update":"Add"}</button>
          <button onClick={()=> props.onClose()} >Close</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
