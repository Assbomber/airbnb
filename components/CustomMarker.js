import {useState} from "react";
function CustomMarker(props) {
    const [hover,setHover]=useState(false);
    return (
        <div onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}>
            <p className="text-2xl">📌</p>
            <p className={hover? "block bg-white p-1 z-[1000] rounded-lg text-black":"hidden"}>{props.title}</p>
        </div>
    )
}

export default CustomMarker
