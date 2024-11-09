import React from "react";
import { useState,useEffect,useRef } from "react";
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


const assets=[
    {value:1,img:Ethereum, label: `Ethereum` },
    {value:2,img:Solana, label: `Solana` },
    {value:3,img:Starknet, label: `Starknet` },
    {value:4,img:Polkadot, label: `Polkadot` },
    {value:5,img:Avalanche, label: `Avalanche` }
];

const providers=[
    {value:1,img:Coinbase, label: `Coinbase` },
    {value:2,img:Binance, label: `Binance` },
    {value:3,img:Lido, label: `Lido Finance` },
    {value:4,img:EtherFi, label: `Ether.fi` },
    {value:5,img:Frax, label: `Frax Finance` },
    {value:5,img:Stafi, label: `Stafi Protocol` },
    {value:5,img:Rocket, label: `Rocket Pool` },
    {value:5,img:Meta, label: `Meta Pool` }
];

function Reward(){

    const [selectedAssets,SelectAssets]=useState(assets[0]);
    const [selectedAssets2,SelectAssets2]=useState(providers[0]);
    const [options,showOption]=useState(false);
    const [options2,showOption2]=useState(false);

    const changeAsset=(Asset)=>{
        SelectAssets(Asset);
        showOption(false);
    }
    const changeAsset2=(Asset)=>{
        SelectAssets2(Asset);
        showOption2(false);
    }

    return(
    <div className="bg-[#36343B] h-[130vh] overflow-x-hidden">
        <div className="translate-y-[200px]">
        <div className="translate-x-[45vw] text-[180%] font-bold">
            Reward Calculator
        </div>

        <div>

            {/*Asset Selector*/}
            
            <div  className="translate-x-[100px] flex flex-col gap-[50px]">
                <div className="bg-[#D9D9D9] w-[200px] h-[200px] border-4 border-black flex flex-col items-center gap-[10px]">
                    <div>Step 1</div>
                    <div>Choose Asset</div>
                    <div className="hover:cursor-pointer">
                        <div onClick={()=>{showOption(!options)}} className="w-[160px] h-[160%] bg-[#BDBDBD] rounded-tl-lg rounded-tr-lg flex items-center gap-[10px]">
                            <span className="w-6 h-6 translate-x-[5px]"><img className="w-6 h-6" src={selectedAssets.img} alt="" /></span><span className="translate-x-[5px]">{selectedAssets.label}</span><span className="translate-x-[135px] fixed"><img className="w-6 h-6" src={dropdown} alt="" /></span>
                        </div>
                        {
                            options && (
                                <div className="z-[1000] absolute h-[150px]">
                                    {assets.map((asset)=>(
                                        <div key={asset.value}  onClick={()=>changeAsset(asset)} className=" w-[160px] h-[30px] flex bg-[#BDBDBD]">
                                            <span><img className="w-6 h-6" src={asset.img} alt="" /></span>
                                            <span>{asset.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    </div>
                    <div className="z-[10] translate-y-[60px]"><a className="text-[80%]" href="">Learn more about {selectedAssets.label}</a></div>
                </div>

                {/*Provider Selector*/}

                <div className="bg-[#D9D9D9] w-[200px] h-[200px] border-4 border-black flex flex-col items-center gap-[10px]">
                <div>Step 2</div>
                    <div>Choose Asset</div>
                    <div className="hover:cursor-pointer">
                        <div onClick={()=>{showOption2(!options2)}} className="w-[160px] h-[160%] bg-[#BDBDBD] rounded-tl-lg rounded-tr-lg flex items-center gap-[10px]">
                            <span className="w-6 h-6 translate-x-[5px]"><img className="w-6 h-6" src={selectedAssets2.img} alt="" /></span><span className="translate-x-[5px]">{selectedAssets2.label}</span><span className="translate-x-[135px] fixed"><img className="w-6 h-6" src={dropdown} alt="" /></span>
                        </div>
                        {
                            options2 && (
                                <div className="z-[1000] absolute h-[150px]">
                                    {providers.map((asset)=>(
                                        <div key={asset.value}  onClick={()=>changeAsset2(asset)} className=" w-[160px] h-[30px] flex bg-[#BDBDBD]">
                                            <span><img className="w-6 h-6" src={asset.img} alt="" /></span>
                                            <span>{asset.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    </div>
                    <div className="z-[10] translate-y-[60px]"><a className="text-[80%]" href="">Learn more about {selectedAssets.label}</a></div>
                </div>


            </div>


            <div>

            </div>
            <div>

            </div>
        </div>
        </div>
    </div>
);
}
export default Reward;