import React,{ useState } from 'react'
import { useSelector } from 'react-redux';


const Site= ({site}) => {
    const [showDetail,hideOrShowDEtail]= useState(false);
    const selectedSite = useSelector((state) => state.map?.mapData);
    const displaSiteFarms=(farmId)=>{
        //to be define
    }

    const showSiteOnTheCard=(farmId)=>{
        //to be define
    }

    return (
        <>
            <div   className='relative border-[0.5px] cursor-pointer border-solid border-black/10 w-full min-h-[40px] rounded py-1 flex items-center justify-between'>
                <div onClick={()=>hideOrShowDEtail(!showDetail)}  className='relative w-full min-h-[40px] rounded'></div>
                
                <div onClick={()=>displaSiteFarms(site.id)} className='absolute left-2'>
                    <div className="font-['Open_Sans'] text-xs text-black/50 font-bold uppercase">{site.name}</div>
                    <div className="font-medium text-[10px] text-black manrope-font">{site.geneticRessource}</div>
                </div>

                <div onClick={()=>showSiteOnTheCard(site.id)} className='absolute right-2 flex items-center justify-end'>
                    <div className='cursor-pointer absolute right-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
                            <path d="M11.215 0C8.5051 0 6.30844 2.19666 6.30844 4.90656C6.30844 7.09738 9.51523 11.0904 10.7438 12.5398C10.9926 12.8334 11.4377 12.8334 11.6862 12.5398C12.9148 11.0904 16.1216 7.09738 16.1216 4.90656C16.1216 2.19666 13.9249 0 11.215 0ZM11.215 6.54208C10.3116 6.54208 9.57948 5.80999 9.57948 4.90656C9.57948 4.00313 10.3116 3.27104 11.215 3.27104C12.1184 3.27104 12.8505 4.00313 12.8505 4.90656C12.8505 5.80999 12.1184 6.54208 11.215 6.54208ZM0.783492 8.4093C0.552252 8.50179 0.354024 8.66144 0.214374 8.86765C0.0747233 9.07386 5.53822e-05 9.31719 0 9.56624L0 19.3139C0 19.7548 0.445095 20.0562 0.854365 19.8926L6.23056 17.4456V8.36919C5.88632 7.74692 5.60477 7.141 5.40306 6.56155L0.783492 8.4093ZM11.215 14.0059C10.6671 14.0059 10.1488 13.7652 9.79327 13.3455C9.02769 12.442 8.21343 11.4132 7.47667 10.3579V17.4452L14.9533 19.9374V10.3583C14.2166 11.4132 13.4027 12.4424 12.6367 13.3458C12.2812 13.7652 11.7629 14.0059 11.215 14.0059ZM21.5756 6.27573L16.1994 8.72278V19.9378L21.6465 17.759C21.8778 17.6666 22.076 17.5069 22.2157 17.3007C22.3554 17.0945 22.43 16.8512 22.43 16.6021V6.85439C22.43 6.41358 21.9849 6.11217 21.5756 6.27573Z" fill="#3CCB7F"/>
                        </svg>
                    </div>
                </div>
            </div>

            {showDetail &&
                <div className='manrope-font rounded border border-solid border-black/10 bg-[#F5F5F5]  text-[10px] gray-true-600 flex justify-between p-2 pb-2.5'>
                    <div className='text-left'>
                        <span className='block'> <span className='font-extrabold'>{selectedSite.percentageFarmSite} Pourcentage/site</span></span>
                        <span className='block'><span className="font-extrabold"> {selectedSite.numberFarms} Nombre de champs</span></span>
                        <span className='block'> <span className='font-extrabold'></span>{selectedSite.numberMaleTreeNotNormal} arbre mâle NC</span>
                        <span className='block'> <span className='font-extrabold'></span> {selectedSite.numberMaleTree}arbre mâle C</span>
                        <span className='block'> <span className='font-extrabold'></span>{selectedSite.numberFemaleTreeNotNormal} arbre femelle NC</span>
                        <span className='block'> <span className='font-extrabold'></span> {selectedSite.numberFemaleTree}arbre femelle C</span>
                    </div>
                    <div className='text-left'>
                        <span className='block'> <span className='font-extrabold'></span> arbre manquant</span>
                        <span className='block'> <span className='font-extrabold'>{selectedSite.percentageMaleTreeMissing}</span> {selectedSite.numberMaleTreeMissing}arbre M manquants</span>
                        <span className='block'> <span className='font-extrabold'>{selectedSite.percentageFemaleTreeMissing}</span> {selectedSite.numberFemaleTreeMissing} arbre F manquants</span>
                        {/* <span className='block'> <span className='font-extrabold'></span> arbre M manquants</span>
                        <span className='block'> <span className='font-extrabold'></span> arbre F manquants</span> */}
                    </div>
                </div>
            }
            
        </>
        
    )
}
export default Site