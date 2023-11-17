import React, { useState } from 'react';
import './LeftSidebar.css';
import HandleSite from './HandleSite/HandleSite';
import HandleLine from './HandleLine/HandleLine';
import { ArrowRightOnRectangleIcon,ChevronRightIcon, ArrowTrendingUpIcon, ChevronLeftIcon, MapIcon, MapPinIcon, PlusIcon, SunIcon } from '@heroicons/react/24/outline';

const LeftSidebar = (props) => {

    const [isReduced, setIsReduced] = useState(false);
	const [step,setStep]=useState(1);
	
	const selectedMenuItem=props.title;
	const setSelectedMenuItem=(value)=>{
		props.setTitle(value);
		setStep(2);
	};

	const setCaption=props.setCaption;

    const toggleSidebar = () => {
        setIsReduced(!isReduced);
    };

	function changeSelectedMenuItem(menuItem){
		setIsReduced(false);
		setSelectedMenuItem(menuItem);
	}
	


    return (
        <div className={`left-sidebar ${isReduced ? 'reduced' : ''}`}>
			{isReduced?
				<div className='logoReducerWrapper'> {/*logo here */}</div>
				:
				<div className="logo">
					<div className='font-bold text-[25px] text-center'>
                        <span className='text-dark-main'>SEED</span>
                        <span className='text-green-main'>TRACK</span>
                    </div>
				</div>
			}
			<div>

				{isReduced ?
					<button className='rounded bg-green-main mb-8 h-10 w-12 text-white flex items-center justify-center'>
						<PlusIcon className="reduced-menu-icon" /> 
					</button>
				: 
					<div className=' menu-button flex justify-center items-center capitalize relative'>
						{selectedMenuItem!=='Menu' && 
							<svg className='cursor-pointer absolute left-4 top-[13px]' onClick={()=>changeSelectedMenuItem('Menu')}  xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
								<path d="M0.223806 6.45942L6.41329 0.270253C6.7117 -0.0281541 7.19577 -0.0281541 7.49418 0.270253L8.21615 0.992227C8.51424 1.29032 8.51456 1.77312 8.21743 2.07184L3.31202 6.99987L8.21711 11.9282C8.51456 12.2269 8.51392 12.7097 8.21584 13.0078L7.49386 13.7298C7.19545 14.0282 6.71138 14.0282 6.41297 13.7298L0.223806 7.54031C-0.0746018 7.2419 -0.0746018 6.75783 0.223806 6.45942Z" fill="#7EB956" fill-opacity="0.19"/>
							</svg>
						}
						{selectedMenuItem}
					</div>
				}

				{selectedMenuItem==='Menu'&&
					<ul className="menu-items">
						<li onClick={()=>changeSelectedMenuItem('Gestion site')}>
							{isReduced ? (
								<MapPinIcon className="reduced-menu-icon" />
							) : (
								<>Gestion site <MapPinIcon className="menu-icon" /></>
							)} 
						</li>
						<li onClick={()=>changeSelectedMenuItem('Champ')}>
							{isReduced ? (
								<MapIcon className="reduced-menu-icon" />
							):(
								<>Champ <MapIcon className="menu-icon" /></>
							)}
						</li>
						<li onClick={()=>changeSelectedMenuItem('Parcelle')}>
							{isReduced ? (
								<SunIcon className="reduced-menu-icon" />
							):(
								<>Parcelle <SunIcon className="menu-icon" /></>
							)}
						</li>
						<li onClick={()=>changeSelectedMenuItem('Ligne')}>
							{isReduced ?(
								<ArrowTrendingUpIcon className="reduced-menu-icon" />
							):(
								<>Ligne <ArrowTrendingUpIcon className="menu-icon" /></>
							)}
						</li>
						<li onClick={()=>changeSelectedMenuItem('Arbre')} className='tree-icon'>
							{isReduced ?(
								<div></div>
							):(
								<>
									Arbre 
									<svg className=' menu-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
										<g clip-path="url(#clip0_514_9338)">
										<path d="M9.6488 3.44092C7.5521 1.3453 3.44912 1.10229 0.544902 1.10229C0.244125 1.10229 0 1.34637 0 1.64715C0 4.55137 0.241929 8.65435 2.33863 10.7511C3.22354 11.636 4.5803 12.0316 5.92506 12.0316C7.38644 12.0316 8.83475 11.5641 9.6488 10.75C11.2105 9.18837 11.4971 5.28808 9.6488 3.44092ZM8.87837 9.98062C7.7123 11.1456 4.47461 11.345 3.11024 9.98062C1.41781 8.28824 1.12464 4.85 1.09302 2.19532C3.7477 2.22694 7.18594 2.52005 8.87832 4.21248C10.2427 5.57686 10.0433 8.81567 8.87837 9.98062Z"   stroke-width="0.5"/>
										<path d="M23.4552 3.25781C20.551 3.25781 16.448 3.49974 14.3513 5.59644C12.503 7.4436 12.7896 11.3439 14.3513 12.9055C15.1653 13.7185 16.6126 14.186 18.0739 14.186C19.4187 14.186 20.7744 13.7915 21.6614 12.9067C23.7571 10.81 24.0001 6.70698 24.0001 3.80271C24.0001 3.50194 23.756 3.25781 23.4552 3.25781ZM20.8888 12.1351C19.5244 13.4994 16.2856 13.3 15.1207 12.1351C13.9557 10.9701 13.7563 7.7313 15.1207 6.36693C16.8131 4.6745 20.2513 4.38138 22.906 4.34976C22.8744 7.00551 22.5812 10.4438 20.8888 12.1351Z"   stroke-width="0.5"/>
										<path d="M19.52 7.97437C19.3915 7.70082 19.0231 7.60713 18.7518 7.73351C14.5725 9.69837 12.5194 13.1246 11.5865 16.6467C10.4324 9.15781 7.09448 6.87476 5.67887 5.90597C5.50233 5.785 5.36502 5.69673 5.28875 5.62154C5.07624 5.40903 4.73077 5.40903 4.51827 5.62154C4.30576 5.83404 4.30576 6.17952 4.51827 6.39202C4.62615 6.49884 4.8125 6.63288 5.06424 6.80503C6.65966 7.8959 10.8978 10.7958 10.8978 22.3528C10.8978 22.6536 11.1419 22.8977 11.4427 22.8977C11.7434 22.8977 11.9876 22.6536 11.9876 22.3539C11.9876 17.6843 13.2419 11.5282 19.216 8.72089C19.216 8.71982 19.3043 8.67839 19.3043 8.67839C19.5756 8.54977 19.6486 8.24679 19.52 7.97437Z" stroke-width="0.5"/>
										</g>
										<defs>
										<clipPath id="clip0_514_9338">
										<rect width="24" height="24" fill="white"/>
										</clipPath>
										</defs>
									</svg>
								</>
							)}
						</li>
					</ul>
				}
				{
					selectedMenuItem==='Gestion site' && <HandleSite setTitle={props.setTitle} setCaption={props.setCaption} />
				}
				{
					selectedMenuItem==='Ligne' && <HandleLine/>
				}
				
			</div>
			{selectedMenuItem ==='Menu' &&
			<div className="sidebar-controls">
				<ul className="menu-items">
					<li
						onClick={toggleSidebar}
						style={{ fontWeight: 700, fontSize: 14 }}
					>
						{isReduced ? (
							<ChevronRightIcon className='reduced-menu-icon' />
						) : (
							<> <span className='text-gray-dark text-sm'>Réduire le menu </span> <ChevronLeftIcon className='menu-icon' /></>
						)}
					</li>
					<li className="disconnect-link" style={{ fontWeight: 700, fontSize: 14 }}>
						{isReduced ? (
							<ArrowRightOnRectangleIcon className='reduced-menu-icon' />
						) : (
							<> <span className='text-gray-dark text-sm'>Se déconnecter</span> <ArrowRightOnRectangleIcon className='menu-icon' /></>
						)}
					</li>
				</ul>
			</div>
		}
			
		</div>
    );
};
export default LeftSidebar;
