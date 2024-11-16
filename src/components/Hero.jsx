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
        <div className="w-full h-screen bg-[#36343B]  flex flex-col justify-between overflow-x-hidden" >
            <div className="flex justify-between max-w-[100vw] lg:px-4 md:px-3 text-white text-[140%] shadow h-[80px] " >
                <div className="flex flex-row items-center">
                    <div className=" w-[50px] h-auto" ><img src={logo} alt="logo" /></div>
                    <div className="font-bold text-[120%] font-[cursive6] translate-y-[3px]" >Stakify</div>
                </div>
                <div className="flex items-center lg:gap-10  hover:cursor-pointer font-[Anton] overflow-hidden" >
                    <div className="hidden sm:block nav-items hover:text-[#1AE0E0] rounded-lg px-[10px]">Home</div>
                    <div className="hidden sm:block nav-items hover:text-[#1AE0E0] rounded-lg px-[10px]">Guide</div>
                    <div className="hidden sm:block nav-items hover:text-[#1AE0E0] rounded-lg px-[10px]">Success</div>
                    <div className="hidden sm:block nav-items hover:text-[#1AE0E0] rounded-lg px-[10px]">FAQs</div>
                    <div className="hidden sm:block nav-items hover:text-[#1AE0E0] rounded-lg px-[10px]">Contact</div>
                    <div className="nav-items w-[40px] h-auto" ><img src={profile} alt="" /></div>
                </div>
            </div>
            <div className="flex justify-between items-center w-screen bottom-0 overflow-hidden">
                <div className="" >
                    <img className="max-w-[45vw]  w-[45vw]" src={poker} alt="logo" />
                </div>  
                <div className="h-auto w-[50vw] flex flex-col text-white gap-[15px] bottom-0 lg:right-0 lg:max-w-[50vw] md:max-w-[50vw] md:text-[50%] lg:text-[100%] overflow-hidden" >
                    <p className="main-text text-[380%] font-[Anton] leading-[110%]" >If you're going to <span className="text-[#DC4444]" > bet </span> on something... <br/> bet on yourself...</p> 
                    <p className="sub-text text-[20px] font-[lion] text-[170%]" >A platform to stake  <span className="text-[#DC4444] font-[lion] " >   PORTFOLIOS </span>  and bet on your   <span className="text-[#0A8E13]  font-[lion]" > TECHNICAL ANALYSIS </span> </p>
                    <div className="flex flex-row gap-10 text-black font-bold font-[creamy] text-[130%]" >
                        <button className="border w-[80px] h-[30px] bg-[#DC4444] rounded-lg md:text-[160%] lg:text-[100%]" >Sign In</button>
                        <button className="border w-[80px] h-[30px] bg-[#0A8E13] rounded-lg md:text-[160%] lg:text-[100%]" >Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;