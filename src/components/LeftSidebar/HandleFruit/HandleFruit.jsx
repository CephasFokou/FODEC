import React from 'react';
import CustomDropDown from '../../CustomDropDown/CustomDropDown';
import Searchbar from '../Searchbar';
import Fruit from '../Items/Fruit';

const fruitList=[ {
    name: 'fruit 1',
    type: 'type 1',
    weight: '1kg',
    size: '5cm x 3cm',
    couleur: '#F8e822'
},
{
    name: 'fruit 2',
    type: 'type 2',
    weight: '1kg',
    size: '5cm x 3cm',
    couleur: '#F8a822'
},
{
    name: 'fruit 3',
    type: 'type 3',
    weight: '1kg',
    size: '2cm x 3cm',
    couleur: '#F8e822'
},

]
const sortList=['Etat sanitaire','option 2', 'option 3'];

const renderedListItem = fruitList.map(fruit =>
    <div className='flex flex-col mb-2.5'>
        <Fruit fruit={fruit} />
    </div>
);

const HandleFruit=() => {
    return (
        <div className="manrope-font rendered-height pb-10 overflow-auto">
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
            <div className='z-50 w-[100px] absolute bottom-4 tree-detail-button translate-x-1/2 right-1/2  bg-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M9.71751 4.4092H6.44536V1.13705C6.44536 0.735536 6.11974 0.409912 5.71822 0.409912H4.99108C4.58956 0.409912 4.26393 0.735536 4.26393 1.13705V4.4092H0.991791C0.590272 4.4092 0.264648 4.73482 0.264648 5.13634V5.86348C0.264648 6.265 0.590272 6.59063 0.991791 6.59063H4.26393V9.86277C4.26393 10.2643 4.58956 10.5899 4.99108 10.5899H5.71822C6.11974 10.5899 6.44536 10.2643 6.44536 9.86277V6.59063H9.71751C10.119 6.59063 10.4446 6.265 10.4446 5.86348V5.13634C10.4446 4.73482 10.119 4.4092 9.71751 4.4092Z" fill="#3CCB7F"/>
                </svg>
                <span className='ml-2 z-50 text-[10px] text-dark-main cursor-pointer'>Load more</span> 
            </div>

        </div>
        
    )
};
export default HandleFruit;