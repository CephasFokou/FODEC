import React, { useState } from 'react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import './CustomDropDown.css'

const CustomDropDown= ({dropdownItem,height,minWidth}) => {

    const itnitialItem=dropdownItem[0];
    const [selectedDropdownItem, setSelectedDropDownItem]=useState(itnitialItem);
    const [showDropdown,setDropdownState]=useState(false);

    const renderedDropdownItem = dropdownItem.map(item =>
        <div className={`custom-dropdown-item ${selectedDropdownItem===item ? 'selected-range' : ''}`} onClick={()=>setSelectedDropDownItem(item)}>
            {item}
        </div>
      );

    return (
        <div  onMouseLeave={()=>setDropdownState(false)}  onClick={()=>setDropdownState(!showDropdown)} className={`custom-dropdown h-8 ${minWidth} sm:${height}`}>
            <div className="min-w-fit">{selectedDropdownItem}</div> 
            {showDropdown? 
                <>
                    <ChevronUpIcon className='dropdown-icon'/>
                    <div className='custom-dropdown-item-container w-full ' onClick={()=>setDropdownState(false)}>
                        {renderedDropdownItem}
                    </div>
                </>
                :
                <ChevronDownIcon onClick={()=>setDropdownState(true)} className='dropdown-icon'/>
            }
        </div>
    )

}
export default CustomDropDown