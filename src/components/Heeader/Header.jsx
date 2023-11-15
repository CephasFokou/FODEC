import React from 'react'
import './Header.css'
import { AdjustmentsHorizontalIcon,QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const Header = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div className="flex items-center justify-between font-bold text-sm text-black h-[64px]">
            <div className="ml-4 input-wrapper w-[300px] h-10 pl-2.5  relative">
                <input type="text" className='outline-0 h-10 pr-10 bg-gray-ligth w-full placeholder:text-black' name="" id=""  placeholder='Recherche par genotype'/>
                <svg className='absolute top-[9px] right-[12px]' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.73438 10.1562C2.73438 6.27852 5.88789 3.125 9.76562 3.125C13.6434 3.125 16.7969 6.27852 16.7969 10.1562C16.7969 14.034 13.6434 17.1875 9.76562 17.1875C5.88789 17.1875 2.73438 14.034 2.73438 10.1562ZM21.141 19.8746L17.1625 15.8949C18.3965 14.3082 19.1406 12.3195 19.1406 10.1562C19.1406 4.98711 14.9348 0.78125 9.76562 0.78125C4.59648 0.78125 0.390625 4.98711 0.390625 10.1562C0.390625 15.3254 4.59648 19.5312 9.76562 19.5312C11.9289 19.5312 13.9176 18.7871 15.5043 17.5531L19.484 21.5316C19.7125 21.7602 20.0125 21.875 20.3125 21.875C20.6125 21.875 20.9125 21.7602 21.141 21.5316C21.5992 21.0734 21.5992 20.3328 21.141 19.8746Z" fill="#231F20"/>
                </svg>
            </div>
            <div className='flex items-center mr-1'>
                <QuestionMarkCircleIcon  className=' text-gray-dark h-6 w-6'/>
                <div className="input-wrapper">
                    <select name="" id="" className='px-2 bg-gray-ligth mr-1 w-[159px] h-10 outline-0'>
                        <option value="">Speculation</option>
                        <option value="">Option 2</option>
                        <option value="">Option 3</option>
                    </select>
                </div>

                <div className="input-wrapper mr-2">
                    <select name="" id="" className="input-wrapper outline-0 px-2 py-3 bg-gray-ligth">
                        <option value="">Ressource génétique</option>
                        <option value="">Option 2</option>
                        <option value="">Option 3</option>
                    </select>
                </div>

                <button className="rounded text-white h-10 w-[117px] mr-2 flex items-center justify-center bg-green-main">
                    <AdjustmentsHorizontalIcon className="h-6 w-6  mr-1" />
                    <span>Filter</span>
                </button>

                <div className='flex items-center'>
                    <div className="h-6 w-6  mr-2">
                        <img src="./agriculture.jpg" className='rounded-[50%] h-full w-full object-cover' alt="user-profile" />
                    </div>
                    <span className='text-[#1C1C1C]'>{user ? user.username : ''}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.64645 5.65967C3.84171 5.44678 4.15829 5.44678 4.35355 5.65967L7.64645 9.25C7.84171 9.4629 8.15829 9.4629 8.35355 9.25L11.6464 5.65968C11.8417 5.44678 12.1583 5.44678 12.3536 5.65968C12.5488 5.87257 12.5488 6.21775 12.3536 6.43065L9.06066 10.021C8.47487 10.6597 7.52513 10.6597 6.93934 10.021L3.64645 6.43065C3.45118 6.21775 3.45118 5.87257 3.64645 5.65967Z" fill="black" fill-opacity="0.2"/>
                    </svg>
                </div>  
            </div>
        </div>
    )
}

export default Header