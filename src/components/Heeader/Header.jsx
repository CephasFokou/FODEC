import React from 'react'
import './Header.css'
import { MagnifyingGlassIcon, QuestionMarkCircleIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-row">
                <div className="search-input-wrapper">
                    <div className="search-input">
                        <input type="search" name="" id="" className='input-style' placeholder='Recherche par genotype'/>
                        <MagnifyingGlassIcon className="style-icon" />
                    </div>
                </div>
                <div className="select-input-wrapper">
                   <div className="search-input">
                        <QuestionMarkCircleIcon className="style-icon" />
                        <select name="" id="">
                            <option value="">Speculation</option>
                            <option value="">Option 2</option>
                            <option value="">Option 3</option>
                        </select>
                   </div>
                </div>
                <div className="select-input-wrapper">
                    <select name="" id="">
                        <option value="">Ressource génétique</option>
                        <option value="">Option 2</option>
                        <option value="">Option 3</option>
                    </select>
                </div>
                <div className="filter-button-wrapper">
                    <button className="filter-button">
                        <AdjustmentsHorizontalIcon className='style-icon'/>Filter
                    </button>
                </div>
                <div className="user-info-wrapper">
                    <div className="user-profile-picture-wrapper">
                        <img src="./agriculture.jpg" alt="user-pp" />
                    </div>
                    <div className="user-profile-name">
                        <p>Username</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header