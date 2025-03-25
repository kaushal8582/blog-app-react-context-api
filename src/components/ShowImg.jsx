import React, { useContext, useEffect } from "react";
import blogContext from "../store/blog-context";

const ShowImg = () => {
  const { blogs,deleteBlog,setIsEdit,setEditedValue } = useContext(blogContext);

  function handelEdit(item){
    setIsEdit(true)
    setEditedValue(item)
  }
 

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {blogs.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <h2>{item.name}</h2>
              <img src={item.img} width="100px" height={"100px"} alt="" />
              <p>{item.desc}</p>
            </div>
            <div>
              <button onClick={()=>handelEdit(item)}  >Edit</button>
              <button onClick={()=> deleteBlog(item.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowImg;
