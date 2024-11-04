import React, { useRef, useEffect } from "react";
import {gsap} from "gsap";
import logo from "../assets/Hero_Assets/tokens.png"
import poker from "../assets/Hero_Assets/poker_guy.png"
import profile from "../assets/Hero_Assets/profile.png"

function Hero(){

    useEffect(()=>{

        const mainText = gsap.utils.toArray(".main-text");
        const subText = gsap.utils.toArray(".sub-text");

        const tl=gsap.timeline();
        tl.fromTo(
            ".nav-items",
            { y: -40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.2, // Adjust the stagger value as needed
              ease: "power2.inOut",
            }
          );
          mainText.forEach((text)=>{
            tl.fromTo(text, {
                x: 10,
                opacity: 0, // Start after main text
            },
            {
                x:0,
                opacity:1,
                duration: 0.8,
                delay: 0.5  
            }
        );
        });
    
        subText.forEach((text)=>{
        tl.fromTo(text, {
            x: 10,
            opacity: 0,// Start after main text
        },
        {
            x:0,
            opacity:1,
            duration: 0.8,
            delay: 0.7  
        }
    );
    });
    },[]);


    return(
        <div className="w-full h-screen bg-[#36343B] overflow-hidden" >
            <div className="flex justify-between px-[20px] text-white text-[140%]" >
                <div className="flex flex-row items-center">
                    <div className=" w-[50px] h-auto" ><img src={logo} alt="logo" /></div>
                    <div className="font-bold text-[120%]" >Stakify</div>
                </div>
                <div className="flex items-center gap-10 hover:cursor-pointer" >
                    <div className="nav-items hover:text-[#1AE0E0] rounded-lg px-[10px]">Home</div>
                    <div className="nav-items hover:text-[#1AE0E0] rounded-lg px-[10px]">Guide</div>
                    <div className="nav-items hover:text-[#1AE0E0] rounded-lg px-[10px]">Success</div>
                    <div className="nav-items hover:text-[#1AE0E0] rounded-lg px-[10px]">FAQs</div>
                    <div className="nav-items hover:text-[#1AE0E0] rounded-lg px-[10px]">Contact</div>
                    <div className="nav-items w-[40px] h-auto" ><img src={profile} alt="" /></div>
                </div>
            </div>
            <div className="flex justify-between px-[20px] translate-y-[50px] translate-x-[-70px]" >
                <div className="w-[60%] h-auto " ><img src={poker} alt="logo" /></div>
            </div>  
            <div className="w-[60vw] h-auto flex flex-col items-start translate-y-[-400px] translate-x-[630px] text-white gap-[10px]" >
                <p className="main-text text-[380%] font-[Anton] leading-[110%]" >If you're going to <span className="text-[#DC4444]" > bet </span> on something... <br/> bet on yourself...</p> 
                <p className="sub-text text-[20px] font-[Poiret One]" >A platform to stake <span className="text-[#DC4444]" > portfolios </span>  and bet on your <span className="text-[#0A8E13]" > technical analysis </span> </p>
                <div className="flex flex-row gap-10 text-black font-bold" >
                    <button className="border w-[80px] h-[30px] bg-[#DC4444] rounded-lg" >Sign In</button>
                    <button className="border w-[80px] h-[30px] bg-[#0A8E13] rounded-lg" >Sign Up</button>
                </div>
            </div>
        </div>
    );
}
export default Hero;