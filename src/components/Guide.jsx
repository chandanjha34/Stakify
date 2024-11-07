import React from "react";
import {Content} from "../assets/Guide_Assets/Content"

function Guide(){
    return(
        <div>
            {Content.map((stake,index)=>{
                <div key={index}>
                    <div><img src={stake.img} alt="" /></div>
                    <div><p>{stake.text}</p></div>
                </div>
            })}
        </div>
    );
}
export default Guide;