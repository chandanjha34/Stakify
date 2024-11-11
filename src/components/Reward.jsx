import React from "react";
import { useState,useEffect } from "react";
import Ethereum from '../assets/Reward_Assets/Ethereum.png'
import Solana from '../assets/Reward_Assets/Solana.png'
import Avalanche from '../assets/Reward_Assets/Avalanche.svg'
import Starknet from '../assets/Reward_Assets/Starknet.png'
import Polkadot from '../assets/Reward_Assets/Polkadot.png'
import dropdown from '../assets/Reward_Assets/dropdown.png'
import Meta from '../assets/Reward_Assets/Meta.webp'
import Rocket from '../assets/Reward_Assets/Rocket.webp'
import Stafi from '../assets/Reward_Assets/Stafi.webp'
import Frax from '../assets/Reward_Assets/Frax.webp'
import EtherFi from '../assets/Reward_Assets/EtherFi.webp'
import Lido from '../assets/Reward_Assets/Lido_Finance.webp'
import Coinbase from '../assets/Reward_Assets/Coinbase.webp'
import Binance from '../assets/Reward_Assets/Binance.webp'
import {Returns} from '../assets/Reward_Assets/Returns'
import one from '../assets/Reward_Assets/one.gif'
import seven from '../assets/Reward_Assets/seven.gif'
import month from '../assets/Reward_Assets/month.gif'
import year from '../assets/Reward_Assets/year.gif'

const assets=[
    {value:1,img:Ethereum, label: `Ethereum` },
    {value:2,img:Solana, label: `Solana` },
    {value:3,img:Starknet, label: `Starknet` },
    {value:4,img:Polkadot, label: `Polkadot` },
    {value:5,img:Avalanche, label: `Avalanche` }
];

const providers=[
    {index:1,img:Coinbase, label: `Coinbase`,value:`Coinbase` },
    {index:2,img:Binance, label: `Binance`,value: `Binance` },
    {index:3,img:Lido, label: `Lido Finance`,value:`Lido` },
    {index:4,img:EtherFi, label: `Ether.fi`,value:`EtherFi` },
    {index:5,img:Frax, label: `Frax Finance`,value:`Frax` },
    {index:6,img:Stafi, label: `Stafi Protocol`,value:`Stafi` },
    {index:7,img:Rocket, label: `Rocket Pool`,value:`Rocket` },
    {index:8,img:Meta, label: `Meta Pool`, value:`Meta` }
];

function Reward(){

    
    const [selectedAssets,SelectAssets]=useState(assets[0]);
    const [selectedAssets2,SelectAssets2]=useState(providers[0]);
    const [options,showOption]=useState(false);
    const [options2,showOption2]=useState(false);
    const [amount, displayAmount] = useState("");
    const [dayReturns, change1Returns] = useState(0);
    const [weekReturns, change7Returns] = useState(0);
    const [monthReturns, change30Returns] = useState(0);
    const [yearReturns, change365Returns] = useState(0);

    const changeAsset=(Asset)=>{
        SelectAssets(Asset);
        showOption(false);
    }
    const changeAsset2=(Asset)=>{
        SelectAssets2(Asset);
        showOption2(false);
    }
    const parsedAmount = parseFloat(amount) || 0;
    const assetKey=selectedAssets.label;
    const providerKey=selectedAssets2.value;



    useEffect(()=>{
        if (Returns[assetKey] && Returns[assetKey][providerKey]) {
            console.log(`Calculating returns for ${assetKey} and ${providerKey} with amount: ${parsedAmount}`);
            change1Returns(Returns[assetKey][providerKey]["1D"] * (amount / 100));
            change7Returns(Returns[assetKey][providerKey]["7D"] * (amount / 100));
            change30Returns(Returns[assetKey][providerKey]["30D"] * (amount / 100));
            change365Returns(Returns[assetKey][providerKey]["365D"] * (amount / 100));
        } else {
            console.warn(`No return data found for ${assetKey} and ${providerKey}`);
            change1Returns('0');
            change7Returns('0');
            change30Returns('0');
            change365Returns('0');
        }
    }, [amount, selectedAssets, selectedAssets2]);

    return(
    <div className="bg-[#36343B] h-[130vh] overflow-hidden ">
        <div className="translate-y-[200px]">
        <div className="translate-x-[40vw] text-[180%] text-[#ffffff] font-bold font-[cursive]">
            Reward Calculator
        </div>

        <div className="">

            {/*Asset Selector*/}
            
            <div  className="">
                <div className="bg-[#D9D9D9] w-[250px] h-[250px] border-4 border-black flex flex-col items-center gap-[10px] translate-x-[100px] translate-y-[120px]">
                    <div className="font-[Anton]">Step 1</div>
                    <div className="text-[160%] font-[Anton]">Choose Asset</div>
                    <div className="hover:cursor-pointer">
                        <div onClick={()=>{showOption(!options)}} className="w-[200px] h-[50px] bg-[#BDBDBD] rounded-tl-lg rounded-tr-lg flex items-center gap-[10px]">
                            <span className="w-6 h-6 translate-x-[5px]"><img className="w-6 h-6" src={selectedAssets.img} alt="" /></span><span className="translate-x-[5px] text-[140%]">{selectedAssets.label}</span><span className="translate-x-[165px] fixed"><img className="w-6 h-6" src={dropdown} alt="" /></span>
                        </div>
                        {
                            options && (
                                <div className="z-[1000] absolute h-[150px]">
                                    {assets.map((asset)=>(
                                        <div key={asset.value}  onClick={()=>changeAsset(asset)} className=" w-[200px] h-[50px] flex bg-[#BDBDBD] items-center gap-[10px]">
                                            <span><img className="w-6 h-6 translate-x-[5px]" src={asset.img} alt="" /></span>
                                            <span className="text-[140%] translate-x-[5px]">{asset.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    </div>
                    <div className="z-[10] translate-y-[70px]"><a className="text-[80%] text-[#1E5086] font-bold" href="">Learn more about {selectedAssets.label}</a></div>
                </div>

                {/*Provider Selector*/}

                <div className="bg-[#D9D9D9] w-[250px] h-[250px] border-4 border-black flex flex-col items-center gap-[10px] translate-x-[500px] translate-y-[-130px]">
                    <div className="font-bold">Step 2</div>
                    <div className="text-[140%] font-[Anton] ">Choose Provider</div>
                    <div className="hover:cursor-pointer">
                        <div onClick={()=>{showOption2(!options2)}} className="w-[200px] h-[50px] bg-[#BDBDBD] rounded-tl-lg rounded-tr-lg flex items-center gap-[10px]">
                            <span className="w-6 h-6 translate-x-[5px]"><img className="w-6 h-6" src={selectedAssets2.img} alt="" /></span><span className="translate-x-[5px] text-[140%]">{selectedAssets2.label}</span><span className="translate-x-[165px] fixed"><img className="w-6 h-6" src={dropdown} alt="" /></span>
                        </div>
                        {
                            options2 && (
                                <div className="z-[1000] absolute h-[150px]">
                                    {providers.map((asset)=>(
                                        <div key={asset.index}  onClick={()=>changeAsset2(asset)} className=" w-[200px] h-[50px] flex bg-[#BDBDBD] items-center gap-[10px]">
                                            <span><img className="w-6 h-6 translate-x-[5px]" src={asset.img} alt="" /></span>
                                            <span className="text-[140%] translate-x-[5px]">{asset.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    </div>
                    <div className="z-[10] translate-y-[70px]"><a className="text-[80%] text-[#1E5086] font-bold" href="">Learn more about {selectedAssets2.label}</a></div>
                </div>

                
                <div className="bg-[#D9D9D9] w-[280px] h-[350px]   border-4 border-black translate-x-[900px] translate-y-[-430px] flex flex-col ">
                    <div className="flex flex-col items-center font-[Anton]">
                        <div className="">Step3</div>
                        <div className=" text-[140%]">Enter Staking Amount</div>
                        <div className="flex translate-x-[5px]">
                            <div className="bg-[#BDBDBD] h-[40px] w-[20px] translate-x-[-12px] font-bold flex items-center justify-center">$</div>
                            <div><input className="h-[40px] bg-[#BDBDBD] p-2 translate-x-[-8px] w-[105%]" type="text" value={amount} onChange={(e) => displayAmount(e.target.value)}  placeholder="Enter Amount in USD"/></div>
                        </div>
                    </div>
                    <div className="text-center text-[120%] text-[#000000] font-bold">Estimated Earnings</div>
                    <div className="translate-x-[10px] translate-y-[4px] font-[crotah]">
                        <div className="underline ">1D Earnings</div>
                        <div className="flex font-[Anton] gap-[5px] items-center"><img src={one} className="w-[25px] h-[25px]" alt="" /> <input type="text" className="bg-[#D9D9D9]   " readOnly value={dayReturns.toFixed(2)} /></div>
                        <div  className="underline ">7D Earnings</div>
                        <div className="flex  font-[Anton] gap-[5px] items-center"><img src={seven} className="w-[25px] h-[25px]" alt="" /><input type="text" className="bg-[#D9D9D9]   " readOnly value={weekReturns.toFixed(2)}/></div>
                        <div className="underline ">30D Earnings</div>
                        <div className="flex  font-[Anton] gap-[5px] items-center"><img src={month} className="w-[25px] h-[25px]" alt="" /><input type="text" className="bg-[#D9D9D9]   " readOnly  value={monthReturns.toFixed(2)}/></div>
                        <div className="underline ">365D Earnings</div>
                        <div className="flex font-[Anton] gap-[5px] items-center"><img src={year} className="w-[25px] h-[25px]" alt="" /><input type="text" className="bg-[#D9D9D9]  " readOnly value={yearReturns.toFixed(2)}/></div>
                    </div>
                </div>

            </div>


            

        </div>
        </div>
    </div>
);
}
export default Reward;