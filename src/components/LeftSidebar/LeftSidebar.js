import React, { useState } from 'react';
import './LeftSidebar.css';
import { ArrowRightOnRectangleIcon, ArrowTrendingUpIcon, ChevronLeftIcon, GlobeEuropeAfricaIcon, MapIcon, MapPinIcon, PlusIcon, SunIcon } from '@heroicons/react/24/outline';

const LeftSidebar = () => {
    const [isReduced, setIsReduced] = useState(false);

    const toggleSidebar = () => {
        setIsReduced(!isReduced);
    };

    return (
        <div className={`left-sidebar ${isReduced ? 'reduced' : ''}`}>
			{isReduced?
				<div className='logoReducerWrapper'> {/*logo here */}</div>
				:
				<div className="logo">
					<h2 className='text-sm logo-wrapper' style={{ fontSize: 25 }}>
						<span className='logo-first-side'>SEED</span>
						<span className='logo-second-side'>TRACK</span>
					</h2>
				</div>
			}
			<div className="menu">
				<button className="menu-button">
					{isReduced ? <PlusIcon className="style-icon" /> : 'Menu'}
				</button>
				<ul className="menu-items">
					<li>
						{isReduced ? (
							<MapPinIcon className="style-icon" />
						) : (
							<>Gestion site <MapPinIcon className="style-icon" /></>
						)} 
					</li>
					<li>
						{isReduced ? (
							<MapIcon className="style-icon" />
						):(
							<>Champ <MapIcon className="style-icon" /></>
						)}
					</li>
					<li>
						{isReduced ? (
							<SunIcon className="style-icon" />
						):(
							<>Parcerelle <SunIcon className="style-icon" /></>
						)}
					</li>
					<li>
						{isReduced ?(
							<ArrowTrendingUpIcon className="style-icon" />
						):(
							<>Lingne <ArrowTrendingUpIcon className="style-icon" /></>
						)}
					</li>
					<li>
						{isReduced ?(
							<GlobeEuropeAfricaIcon className="style-icon" />
						):(
							<>Arbre <GlobeEuropeAfricaIcon className="style-icon" /></>
						)}
					</li>
				</ul>
			</div>
			<div className="sidebar-controls">
				<ul className="menu-items">
					<li
						onClick={toggleSidebar}
						style={{ fontWeight: 700, fontSize: 14 }}
					>
						{isReduced ? (
							<ChevronLeftIcon className='style-icon' />
						) : (
							<>Réduire le menu <ChevronLeftIcon className='style-icon' /></>
						)}
					</li>
					<li className="disconnect-link" style={{ fontWeight: 700, fontSize: 14 }}>
						{isReduced ? (
							<ArrowRightOnRectangleIcon className='style-icon' />
						) : (
							<>Se déconnecter <ArrowRightOnRectangleIcon className='style-icon' /></>
						)}
					</li>
				</ul>
			</div>
		</div>
    );
};

export default LeftSidebar;
