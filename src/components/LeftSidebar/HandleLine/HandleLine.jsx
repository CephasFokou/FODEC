import React from 'react';
import CustomDropDown from '../../CustomDropDown/CustomDropDown';
import Searchbar from '../Searchbar';
import Tree from '../Items/Tree';

const treeList=[ {
    name: 'Artemesia',
    specification: 'CodeGPS  |  Mort | Mâle | Manquant'
},
{
    name:'Sapin',
    specification: 'CodeGPS  |  Saint | Mâle'
},
{
    name:'Eucalyptus',
    specification: 'CodeGPS  |  Saint | Mâle'
},

]
const sortList=['Etat sanitaire','option 2', 'option 3'];

const renderedListItem = treeList.map(tree =>
    <div className='flex flex-col mb-2.5'>
        <Tree tree={tree} />
    </div>
);

const HandleLine=() => {
    return (
        <div className="manrope-font">
            <Searchbar />

            <div>
                <div className='mt-4 mb-3 px-3 w-full text-xs flex justify-between items-center'>
                    <div className='text-gray-true-800' > Search results 02</div>
                    <div className=' flex items-center'>
                        <span>Sort:</span>
                        <div className='c-container'>
                            <CustomDropDown dropdownItem={sortList} height={'h-[30px]'} />
                        </div>
                    </div>
                </div>
            </div>

            {renderedListItem}
           

        </div>
    )
};
export default HandleLine;