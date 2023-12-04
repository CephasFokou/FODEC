import React,{ useState } from 'react'
import './Tree.css';
import { useSelector } from 'react-redux';

const Fruit= ({fruit})=>{
    const [showDetail,hideOrShowDEtail]= useState(false);
    const selectedSite = useSelector((state) => state.map?.mapData);
    return (
        <>
            <div onClick={()=>hideOrShowDEtail(!showDetail)}  className='relative border-[0.5px] border-solid border-black/10 w-full min-h-[40px] rounded py-1 px-2 flex items-center justify-between'>
                <div>
                    <div className="font-['Open_Sans'] text-xs text-black/50 font-bold capitalize">{fruit?.name}</div>
                    <div className="font-medium text-[10px] text-black manrope-font">{selectedSite?.farmType} | {selectedSite?.floorType} | {selectedSite?.lastDensity} </div>
                </div>
                <div className='flex items-center justify-end'>
                    <div className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                        <path d="M0 3.46677V2.97163C0 2.56143 0.332522 2.2289 0.742721 2.2289H11.8835V0.743462C11.8835 0.0822233 12.685 -0.248133 13.1515 0.218265L15.6272 2.694C15.9172 2.98407 15.9172 3.45433 15.6272 3.74436L13.1515 6.2201C12.6868 6.68467 11.8835 6.35893 11.8835 5.69494V4.20949H0.742721C0.332522 4.20949 0 3.87697 0 3.46677ZM15.102 8.17067H3.96118V6.68523C3.96118 6.02563 3.16084 5.69246 2.69326 6.16004L0.217524 8.63577C-0.0725081 8.92584 -0.0725081 9.3961 0.217524 9.68613L2.69326 12.1619C3.15833 12.6269 3.96118 12.3001 3.96118 11.6367V10.1513H15.102C15.5122 10.1513 15.8447 9.81874 15.8447 9.40854V8.91339C15.8447 8.5032 15.5122 8.17067 15.102 8.17067Z" fill="#3CCB7F"/>
                    </svg>
                    </div>
                </div>
            </div>
            


            {showDetail &&
                <div className='flex-wrap manrope-font rounded border border-solid border-black/10  text-[10px] gray-true-600 flex justify-between items-center pl-2.5 pt-1 pr-1 pb-2.5 max-[1000px]:justify-center max-[1000px]:px-2'>
                    <div className='mr-5 tree-chart'>
                        <svg width="93" height="71" viewBox="0 0 93 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Image">
                            <rect id="Base" x="0.433594" y="3.578" width="92.5" height="63.706" fill="#F2F2F2"/>
                            <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M47.2703 19.2367L58.2815 0.730469L85.9273 47.1939H61.9505C62.1353 45.9292 62.2309 44.6365 62.2309 43.3219C62.2309 32.8427 56.1547 23.7463 47.2703 19.2367ZM47.2703 19.2367C43.4704 17.308 39.1568 16.2183 34.5852 16.2183C19.3247 16.2183 6.93945 28.3607 6.93945 43.3219C6.93945 58.2831 19.3247 70.4256 34.5852 70.4256C48.5048 70.4256 60.0323 60.3231 61.9505 47.1939H30.6358L47.2703 19.2367Z" fill="#5DB075"/>
                            </g>
                        </svg>
                    </div>
                    <div className='manrope-font text-[10px] text-black grow flex flex-col justify-center items-start'>
                        <div><span className='font-bold' >Forme : </span> {fruit.shape}</div>
                        <div className='flex items-center'>
                            <span className='font-bold'>Couleur : </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className='ml-1' width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <circle cx="4.5" cy="4.46997" r="4" fill="#3CCB7F"/>
                            </svg>    
                        </div>
                        <div><span className='font-bold'>Type : </span> {fruit.type}</div>
                    </div>
                   
                </div>
            }
        </>
    )
};
 export default Fruit