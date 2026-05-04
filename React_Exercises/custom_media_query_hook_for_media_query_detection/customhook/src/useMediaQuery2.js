import { useEffect } from "react";
import { useState } from "react";

const useMediaQuery2=(query)=>{

    const [matches,setMatches]=useState(false);

    useEffect(()=>{

        const media=window.matchMedia(query);

        if(media.matches!==matches)
        {
             setMatches(media.matches);
        }

        const listener=()=>setMatches(media.matches);

        if(media.addEventListener)
        {
            media.addEventListener('change',listener)
        }
        

        return()=>{
            media.removeEventListener('change',listener)
        }


    },[query])

    return matches;

}

export default useMediaQuery2;