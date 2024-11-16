import React from 'react'
import { useRef,useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

function Boat() {

    const imgRef=useRef(null);
    const aboutRef=useRef(null);

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
                trigger:section,
                start:"top 5%",
                end: "top 50%",
                scrub:4,
            }
        }
    );

    

    return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
    },[]);
  return (
    
    <div ref={aboutRef} className=''>
        <div className="translate-x-[50vw] translate-y-[64vh]">
                <img ref={imgRef} className="scale-[68%]  translate-y-[-75vh]" src={ship} alt="ship" />
        </div>
    </div>
  );
}
    export default Boat;