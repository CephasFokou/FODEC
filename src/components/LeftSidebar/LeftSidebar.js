import React, { useState } from 'react';
import './LeftSidebar.css';
import HandleSite from './HandleSite/HandleSite';
import { ArrowRightOnRectangleIcon,ChevronRightIcon, ArrowTrendingUpIcon, ChevronLeftIcon, GlobeEuropeAfricaIcon, MapIcon, MapPinIcon, PlusIcon, SunIcon } from '@heroicons/react/24/outline';

const LeftSidebar = () => {
    const [isReduced, setIsReduced] = useState(false);
	const [selectedMenuItem, setSelectedMenuItem]=useState('Menu');

    const toggleSidebar = () => {
        setIsReduced(!isReduced);
    };

	function changeSelectedMenuItem(menuItem){
		setSelectedMenuItem(menuItem);
	}
    return (
        <div className={`left-sidebar ${isReduced ? 'reduced' : ''}`}>
			{isReduced?
				<div className='logoReducerWrapper'> {/*logo here */}</div>
				:
				<div className="logo">
					<h2 className='font-bold text-[25px] text-center mb-6'>
                        <span className='text-dark-main'>SEED</span>
                        <span className='text-green-main'>TRACK</span>
                    </h2>
				</div>
			}
			<div>

				{isReduced ?
					<button className='rounded bg-green-main h-10 w-12 text-white flex items-center justify-center'>
						<PlusIcon className="reduced-menu-icon" /> 
					</button>
				: 
					<button className='menu-button flex justify-center items-center capitalize'>
						{selectedMenuItem!=='Menu' && 
							<ChevronLeftIcon onClick={()=>changeSelectedMenuItem('Menu')} className='h-4 w-5 text-gray-dark mr-1'/>
						}
						{selectedMenuItem}
					</button>
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
						<li onClick={()=>changeSelectedMenuItem('Arbre')}>
							{isReduced ?(
								<GlobeEuropeAfricaIcon className="reduced-menu-icon" />
							):(
								<>Arbre <GlobeEuropeAfricaIcon className="menu-icon" /></>
							)}
						</li>
					</ul>
				}
				{
					selectedMenuItem==='Gestion site'&& <HandleSite/>
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
							<> <span className='text-gray-dark text-xs'>Se déconnecter</span> <ArrowRightOnRectangleIcon className='menu-icon' /></>
						)}
					</li>
				</ul>
			</div>
		}
		</div>
    );
};

export default LeftSidebar;
