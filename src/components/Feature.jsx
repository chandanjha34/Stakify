import React from "react";
import stake from '../assets/Feature_Assets/stake.webm'
import bet from '../assets/Feature_Assets/bet.webm'
import insights from '../assets/Feature_Assets/insights.webm'
import news from '../assets/Feature_Assets/news.webm'
import earn from '../assets/Feature_Assets/earn.webm'

function Feature(){

    return(

        <div className="flex gap-[70px] w-full bg-[#36343B] font-[cursive] px-[70px] text-white font-bold">
            <div className="flex flex-col">
                <div><video src={stake} className="loop" loop autoPlay muted></video></div>
                <div className="text-center">STAKE <br /> CRYPTO <br /> CURRENCY</div>
            </div>
            <div className="flex flex-col">
                <div><video src={bet} className="loop" loop autoPlay muted></video></div>
                <div className="text-center">BET<br />CRYPTO<br />CURRENCY</div>
            </div>
            <div className="flex flex-col">
                <div><video src={news} className="loop" loop autoPlay muted></video></div>
                <div className="text-center">GET<br />CYRPTO<br />NEWS</div>
            </div>
            <div className="flex flex-col">
                <div><video src={insights} className="loop" loop autoPlay muted></video></div>
                <div className="text-center">TRADING<br />ANALYSIS &<br />INSIGHTS</div>
            </div>
            <div className="flex flex-col">
                <div className=""><video src={earn} className="loop" loop autoPlay muted></video></div>
                <div className="text-center">GRAB<br />A CHANCE<br />TO EARN MORE</div>
            </div>
        </div>

    );
}

export default Feature;