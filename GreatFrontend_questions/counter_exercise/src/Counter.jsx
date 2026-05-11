import { useState } from "react";

const Counter=()=>
{
   const [count,setCount]=useState(0);

   return(
     <div>
         <h1>Counter App</h1>
         <button onClick={()=>setCount(count+2)}>Count {count}</button>
     </div>
   )
}


export default Counter;