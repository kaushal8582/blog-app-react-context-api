import { useState } from "react";
import blogContext from "./blog-context";

function BlogProvider(props) {

    const [isEdit,setIsEdit] = useState(false);
    const [editedValue,setEditedValue] = useState({});

  const [blogs, setBlogs] = useState([
    {
      name: "kaushal",
      desc: "this is img",
      img: "https://imgs.search.brave.com/X_DBWvkU8fdgS6YbDm_VySyoVhzk7qi8ezyPnNwhl2k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9keWwz/NDdoaXd2M2N0LmNs/b3VkZnJvbnQubmV0/L2FwcC91cGxvYWRz/LzIwMjMvMTEvUmln/aHRfSW1hZ2VfRmxh/dC5qcGc",
      id:  Date.now()+1,
    },
    {
      name: "kaushal",
      desc: "this is img",
      img: "https://imgs.search.brave.com/X_DBWvkU8fdgS6YbDm_VySyoVhzk7qi8ezyPnNwhl2k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9keWwz/NDdoaXd2M2N0LmNs/b3VkZnJvbnQubmV0/L2FwcC91cGxvYWRz/LzIwMjMvMTEvUmln/aHRfSW1hZ2VfRmxh/dC5qcGc",
      id:  Date.now()+2,
    },
    {
      name: "kaushal",
      desc: "this is img",
      img: "https://imgs.search.brave.com/X_DBWvkU8fdgS6YbDm_VySyoVhzk7qi8ezyPnNwhl2k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9keWwz/NDdoaXd2M2N0LmNs/b3VkZnJvbnQubmV0/L2FwcC91cGxvYWRz/LzIwMjMvMTEvUmln/aHRfSW1hZ2VfRmxh/dC5qcGc",
      id:  Date.now()+4,
    },
    {
      name: "kaushal",
      desc: "this is img",
      img: "https://imgs.search.brave.com/X_DBWvkU8fdgS6YbDm_VySyoVhzk7qi8ezyPnNwhl2k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9keWwz/NDdoaXd2M2N0LmNs/b3VkZnJvbnQubmV0/L2FwcC91cGxvYWRz/LzIwMjMvMTEvUmln/aHRfSW1hZ2VfRmxh/dC5qcGc",
      id:  Date.now()+7,
    },
  ]);

  function addBlogs(item){

    let findIndex = blogs.findIndex((it)=>it.id==item.id);
    console.log(findIndex)
    if(findIndex>=0){
        blogs[findIndex] = item;
    }else{
        setBlogs((prev)=>[...prev,item]);
    }

  }

  function deleteBlog(id){
    let allblog = blogs.filter((item)=>item.id!=id);
    setBlogs(allblog)
  }



  return (
    <blogContext.Provider value={{ blogs , addBlogs,deleteBlog,isEdit,editedValue,setIsEdit,setEditedValue}}>
      {props.children}
    </blogContext.Provider>
  );
}

export default BlogProvider;
