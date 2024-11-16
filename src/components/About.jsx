import React, { useEffect,useRef } from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ship from '../assets/About_Assets/ship.png';
gsap.registerPlugin(ScrollTrigger);
function About(){
    const imgRef=useRef(null);
    const aboutRef=useRef(null);
    const textRef=useRef(null);

    useEffect(()=>{
        const section=aboutRef.current;
        gsap.fromTo(imgRef.current,{
            x:550,

        },
        {
            x:0,

            duration:3,
            ease:"back.out(6.7)",
            scrollTrigger:{
                trigger:imgRef.current,
                start:"top 0%",
                end: "top 2%",
                scrub:4,
            }
        }
    );

        const text=textRef.current;
        gsap.fromTo(
            ".sub-text",
            { x: 40, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.5,
              ease: "power2.inOut",
              scrollTrigger:{
                trigger:"main-text",
                start:"top 0%",
                end: "top 2%",
                scrub:4,
            }
            }
          );

    return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
    },[]);

    
    return(
        <div ref={aboutRef} className="w-full h-screen bg-[#36343B] overflow-hidden text-white">
            <div ref={textRef} className="text-[300%] font-bold  text-end translate-x-[-35px]" >
                <h1 className=" text-[#ffffff] font-[cursive]">About Stakify</h1>
            </div>
            <div className="main-text absolute flex flex-col gap-[20px] w-[60vw] text-[130%]  text-start px-[5vw] leading-[130%] translate-y-[10vh]" >
                <p className="sub-text">Stakify revolutionizes staking by adding high-stakes betting options, letting users earn both steady rewards and higher-risk returns. <br/> This unique approach appeals to crypto users with varied <br/> risk levels.</p>
                <p className="sub-text">Stakify’s goal is to build a sustainable reward system where betting losses partly fund staker payouts, creating a fair, <br/> community-driven model. Users can enjoy consistent, lower-risk returns alongside thrilling betting opportunities.</p>
                <p className="sub-text">With blockchain transparency and smart contracts, Stakify aims to offer a secure, engaging platform that makes staking both rewarding and enjoyable for everyone.</p>
            </div>
            <div className="translate-x-[50vw] translate-y-[64vh]">
                <img ref={imgRef} className="scale-[68%]  translate-y-[-75vh]" src={ship} alt="ship" />
            </div>
        </div>
    );
}

export default About;
