import React from "react";
import customerService from '../assets/Contact_Assets/Contact1.png'
import instagram from '../assets/Contact_Assets/insta.png'
import x from '../assets/Contact_Assets/x.png'
import discord from '../assets/Contact_Assets/discord.png'
import linkedIn from '../assets/Contact_Assets/linkedIn.png'
import img from '../assets/Contact_Assets/Contact3.png'
function Contact(){
    
    
    return(
        <div className="bg-[#36343B] overflow-hidden">
            <div className="flex translate-y-[80px] ">
                <div className="w-[50vw] text-[400%] font-bold text-white translate-x-[40px] translate-y-[30px]" ><h1>Have Questions ? <br />We are here for help</h1></div>
                <div className="bg-[#D9D9D9] rounded-3xl w-[35vw] h-[50vh] translate-x-[70px] flex flex-col justify-around ">
                    <div className="flex justify-around ">
                        <input className="w-[14vw] h-[50px] border-2 border-black bg-[#ffffff] text-center rounded-full" type="text" placeholder="Name" />
                        <input className="w-[14vw] h-[50px] border-2 border-black bg-[#ffffff] text-center rounded-full" type="text" placeholder="Email"/>
                    </div>
                    <div><input className="w-[30vw] h-[50px] border-2 border-black bg-[#ffffff] text-center rounded-full translate-x-[30px]" type="text" placeholder="Description" /></div>
                    <div><input className="w-[10vw] h-[50px] border-2 border-black bg-[#ffffff] text-center rounded-full translate-x-[150px]" type="text" placeholder="Submit"/></div>
                    <div>Our customer executive will reach out to you soon.</div>
                </div>
            </div>
            <div className="flex translate-y-[100px] gap-[10px]">
                <div className="w-[400px]"><img src={customerService} alt="" /></div>
                <div className="flex flex-col gap-[30px] translate-y-[40px]">
                    <div className=" flex items-center gap-[40px]"><img className="w-[50px]" src={instagram} alt="" /> <p className="bg-[#D9D9D9] text-center  rounded-full w-[180px] h-[40px]">@_chandanjha_</p></div>
                    <div className=" flex items-center gap-[40px]"><img className="w-[50px]" src={x} alt="" />         <p className="bg-[#D9D9D9] text-center  rounded-full w-[180px] h-[40px]">@_chandanjha_1</p></div>
                    <div className=" flex items-center gap-[40px]"><img className="w-[50px]" src={discord} alt="" />   <p className="bg-[#D9D9D9] text-center  rounded-full w-[180px] h-[40px]">@_chandanjha_</p></div>
                    <div className=" flex items-center gap-[40px]"><img className="w-[50px]" src={linkedIn} alt="" />  <p className="bg-[#D9D9D9] text-center  rounded-full w-[180px] h-[40px]">Chandan Jha</p></div>
                </div>
                <div className="w-[50vw]"><img src={img} alt="" /></div>
            </div>
            <div className="translate-x-[40vw] translate-y-[20px]">
                @copyright Stakify made by Chandan Jha
            </div>
        </div>
    );
}
export default Contact