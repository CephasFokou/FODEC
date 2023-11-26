import React, { useState } from 'react';
import CustomDropDown from '../../CustomDropDown/CustomDropDown';
import Searchbar from '../Searchbar';
import Tree from '../Items/Tree';
import { Form, Input, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { createLigne } from '../../../Redux/Reducers/LigneSlice';
import { addMapData } from '../../../Redux/Reducers/MapSlice';

const treeList=[ {
    name: 'Artemesia',
    specification: 'CodeGPS  |  Mort | Mâle | Manquant',
    lat: 10, // initial latitude
    lng: 4, // initial longitude
},
{
    name:'Sapin',
    specification: 'CodeGPS  |  Saint | Mâle',
    lat: 10, // initial latitude
    lng: 5, // initial longitude
},
{
    name:'Eucalyptus',
    specification: 'CodeGPS  |  Saint | Mâle',
    lat: 20, // initial latitude
    lng: 15, // initial longitude
},

]
const sortList=['Etat sanitaire','option 2', 'option 3'];


const HandleLine=() => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [name, setName] = useState('');

    const filteredTreeList = treeList.filter((tree) =>
        tree.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleTreeClick = (tree) => {
        console.log('Site clicked:', tree);
        dispatch(addMapData(tree));
    };

    const renderedListItem = filteredTreeList.map(tree =>
        <div 
            className='flex flex-col mb-2.5'
            key={tree.name}
            onClick={() => handleTreeClick(tree)}
        >
            <Tree tree={tree} />
        </div>
    );

    const handleAddFruit = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = async (values) => {
        try {
            // Dispatch the createLigne action with the form values
            await dispatch(createLigne(values));

            // Close the modal after successful submission
            setIsModalVisible(false);
        } catch (error) {
            // Handle error (you may want to display an error message to the user)
            console.error('Error creating site:', error);
        }
    };
    return (
        <div className="manrope-font rendered-height pb-10 overflow-auto">
            <button className='border-2 border-green-main px-5 rounded-md text-green-main' onClick={handleAddFruit}>
                Ajouter
            </button>
            <Searchbar title={searchTerm} onSearch={setSearchTerm}/>
            <Modal
                title="Ajout d'une Ligne"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <Form onFinish={onFinish} initialValues={{
                    name: name,
                }}>
                    <Form.Item
                        label='Nom de la ligne'
                        name='name'
                        rules={[{ required: true, message: 'Renseignez le nom du site!' }]}
                    >
                        <Input onChange={(e) => setName(e.target.value)} />
                    </Form.Item>
                    <Form.Item>
                        <button type='primary' htmlType='submit' className='px-8 bg-green-main border-2 text-white'>
                            Ajouter d'une ligne
                        </button>
                    </Form.Item>
                </Form>
            </Modal>
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
export default HandleLine;