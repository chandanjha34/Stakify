import React from "react";
import {Content} from "../assets/Guide_Assets/Content"
import {Content2} from "../assets/Guide_Assets/Content2"

const Guide=()=>(
        <div className="bg-[#36343B] w-auto">
            <div className="flex flex-col gap-[40px] translate-y-[100px] overflow-hidden">
                <h1 className="font-bold translate-x-[80px] text-[180%] text-[#ffffff]">Stake</h1>
                <div className=" flex gap-[40px] justify-center px-[30px]">
                    {Content.map((Content,index)=>(
                        <div key={index} className="flex flex-col">
                            <div className="w-[15vw]"><img src={Content.img} alt="" /></div>
                            <div className="w-[15vw] text-[#ffffff]"><p>{Content.text}</p></div>
                        </div>
                    ))}
                </div>

                <h1 className="font-bold translate-x-[80px] text-[180%] text-[#ffffff]">Bet</h1>
                <div className=" flex gap-[40px] justify-center px-[30px]">
                    {Content2.map((Content2,index)=>(
                            <div key={index} className="flex flex-col">
                                <div className="w-[15vw]"><img src={Content2.img} alt="" /></div>
                                <div className="w-[15vw] text-[#ffffff]"><p>{Content2.text}</p></div>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    )
export default Guide;