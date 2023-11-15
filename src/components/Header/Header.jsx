import React, { useState } from 'react';
import CustomDropDown from '../CustomDropDown/CustomDropDown';

import './Header.css'
import { AdjustmentsHorizontalIcon,QuestionMarkCircleIcon, ChevronDownIcon } from '@heroicons/react/24/outline';


const Header = () => {
    const speculationDropDownItem=['Speculation','Option 2','Option 3'];
    const ressourceDropDownItem=['Ressource génétique','Option 2','Option 3'];

    return (
        <div className="flex items-center justify-between font-bold text-sm text-black h-[64px]">
            <div className=" input-wrapper w-[230px] h-10 pl-2.5  relative">
                <input type="text" className='outline-0 focus:border-[0.5px]  focus:border-green-main rounded h-[41px] pr-9 pl-1 bg-gray-ligth w-full placeholder:text-black' name="" id=""  placeholder='Recherche par genotype'/>
                <svg className="absolute top-[9px] right-[12px] cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.73438 10.1562C2.73438 6.27852 5.88789 3.125 9.76562 3.125C13.6434 3.125 16.7969 6.27852 16.7969 10.1562C16.7969 14.034 13.6434 17.1875 9.76562 17.1875C5.88789 17.1875 2.73438 14.034 2.73438 10.1562ZM21.141 19.8746L17.1625 15.8949C18.3965 14.3082 19.1406 12.3195 19.1406 10.1562C19.1406 4.98711 14.9348 0.78125 9.76562 0.78125C4.59648 0.78125 0.390625 4.98711 0.390625 10.1562C0.390625 15.3254 4.59648 19.5312 9.76562 19.5312C11.9289 19.5312 13.9176 18.7871 15.5043 17.5531L19.484 21.5316C19.7125 21.7602 20.0125 21.875 20.3125 21.875C20.6125 21.875 20.9125 21.7602 21.141 21.5316C21.5992 21.0734 21.5992 20.3328 21.141 19.8746Z" fill="#231F20"/>
                </svg>
            </div>
            <div className='flex items-center mr-1'>
                <QuestionMarkCircleIcon  className=' text-black h-6 w-6 mr-2'/>
                <CustomDropDown dropdownItem={speculationDropDownItem} height={'h-10'} minWidth={'w-[150px]'} />
                <CustomDropDown dropdownItem={ressourceDropDownItem} height={'h-10'} minWidth={'min-w-[150px]'} />
                

                <button className="rounded text-white h-10 w-[117px] mr-2 flex items-center justify-center bg-green-main">
                    <AdjustmentsHorizontalIcon className="h-6 w-6  mr-1" />
                    <span>Filter</span>
                </button>

                <div className='flex items-center'>
                    <div className="h-6 w-6  mr-2">
                        <img src="./agriculture.jpg" className='rounded-[50%] h-full w-full object-cover' alt="user-profile-picture" />
                    </div>
                    <div className="custom-dropdown h-10 min-w-[150px]">
                        <div className="min-w-fit">Username</div> <ChevronDownIcon className='dropdown-icon'/>
                    </div>
                </div>  
            </div>

            
        </div>
    )
}

export default Header