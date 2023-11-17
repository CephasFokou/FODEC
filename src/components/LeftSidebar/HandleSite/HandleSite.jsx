import React from 'react';
import './HandleSite.css';
import CustomDropDown from '../../CustomDropDown/CustomDropDown'
import Site from './Items/Site';
import Searchbar from '../Searchbar'
const siteList=[ {
    id:1,
    name: 'abom mbanga',
    amount: '07'
},{
    id:2,
    name:'abom mbangant',
    amount: '15'
}]
const sortList=['propio','option 2', 'option 3'];

const renderedListItem = siteList.map(site =>
    <div className='flex flex-col mb-2.5'>
        <Site site={site} />
    </div>
);

const HandleSite= () => {
    return (
        <div className="manrope-font">

            <Searchbar />

            <div>
                <div className='mt-4 mb-3 px-3 w-full text-xs flex justify-between items-center'>
                    <div className='text-gray-true-800' > Search results 02</div>
                    <div className='flex items-center'>
                        <span>Sort:</span>
                        <div className='c-container'>
                            <CustomDropDown dropdownItem={sortList} height={'h-[30px]'} />
                        </div>
                    </div>
                </div>

                <div className='hidden' >
                    <Site site={siteList[0]} />
                </div>
            </div>

            {renderedListItem}
        </div>
    )
}
export default HandleSite