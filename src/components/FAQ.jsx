import React, { useState } from "react";
import {Queries} from "../assets/FAQ/Queries";

function FAQ(){

    const [activeIndex, setActiveIndex] = useState(-1);

    const callFAQ = (index) => {
        if (activeIndex !== index.index) {
            setActiveIndex(index.index);
        } else {
            setActiveIndex(-1);
        }
    };

    return(
        <div className="flex flex-col gap-[20px] items-center h-auto bg-[#36343B]">
            <div className="text-center font-bold text-[#ffffff] text-[40px]">FAQs</div>
            {
                Queries.map((Query)=>(
                    <div key={Query.index} className="flex flex-col gap-[5px]">
                        <div onClick={()=>{callFAQ(Query)}} className="w-[90vw] h-[40px] rounded-lg px-[5px] hover:cursor-pointer border-2 font-bold text-[110%] border-black bg-[#D9D9D9]">{Query.query}</div>
                        {activeIndex === Query.index &&(  
                        <div className="w-[90vw] h-[40px] rounded-lg border-3 px-[5px] border-[#000000] bg-[#D9D9D9]">{Query.answer}</div>
                        )
                    }
                    </div>
                ))
            }
        </div>
    );
}
export default FAQ;