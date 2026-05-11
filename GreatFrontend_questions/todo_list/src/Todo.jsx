import { useState } from "react";

const Todo=()=>{

    const [todo,setTodo]=useState([]);
    const [todotext,setTodoText]=useState("");
    const [edit,setEdit]=useState(false);
    const [indexValue,setIndexValue]=useState(0);




    const handleClick=()=>{
          
          if(edit)
          {
            setTodo(todo.map((item,idx)=>indexValue===idx?todotext:item));
            setEdit(false);
          }
          else{
              setTodo([...todo,todotext]);
          }
          setTodoText("");
          
    }

    const handleDelete=(index)=>{

         setTodo(todo.filter((_,idx)=>idx!==index));

    }

    const handleEdit=(index)=>{
        console.log("index=",index)
        setTodoText(todo[index]);
        setEdit(true)
        setIndexValue(index);

    }
     
    

    return(
       <div>
        <h1>Todo List</h1>
        <input name="todotext" value={todotext} type="text" placeholder="Enter Todo" onChange={(e)=>setTodoText(e.target.value)}></input>
        <button onClick={handleClick}>Submit</button>
        <ul>
            {
                todo.map((todoItem,index)=>(
                    <div style={{display:"flex",flexDirection:"row",gap:"5px",justifyContent:"center"}}>
                        <p key={index}>{todoItem}</p>
                        <button onClick={()=>{handleEdit(index)}}>Edit</button>
                        <button onClick={()=>{handleDelete(index)}}>Delete</button>
                    </div>
                ))
            }
        </ul>
       </div>
    )

}

export default Todo;