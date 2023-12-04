import React, { useEffect, useState } from 'react';
import CustomDropDown from '../../CustomDropDown/CustomDropDown';
import Searchbar from '../Searchbar';
import Fruit from '../Items/Fruit';
import { addMapData } from '../../../Redux/Reducers/MapSlice';
import { useDispatch, useSelector } from 'react-redux';
import { createFarms, fetchFarms } from '../../../Redux/Reducers/FarmSlice';
import { Form, Select, notification } from 'antd';
import Modal from 'antd/es/modal/Modal';
import Input from 'antd/es/input/Input';
import { Option } from 'antd/es/mentions';
import { fetchParcels } from '../../../Redux/Reducers/ParcelsSlice';
import { SmileOutlined } from '@ant-design/icons';
const sortList=['Etat sanitaire','option 2', 'option 3'];


const HandleFruit=() => {
    const dispatch = useDispatch();
    const loading = useSelector((state) =>  state.status);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [farmType, setFarmType] = useState("");
    const [parcelId, setParcelId] = useState(0);
    const [initialDensity, setInitialDensity] = useState("");
    const [lastDensity, setLastDensity] = useState("");
    const [initialArea, setInitialArea] = useState("");
    const [lastArea, setLastArea] = useState("");
    const [floorType, setFLoorType] = useState("floorType");
    //const [geographicalPos, setGeographicalPos] = useState({});

    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
        api.open({
            message: 'Champs',
            description:
            'Farms created successfully',
            icon: <SmileOutlined style={{ color: '#5DB075' }} />,
        });
    };

    useEffect(() => {
        dispatch(fetchFarms());
    }, [dispatch]);
    const farmsLists = useSelector((state) => state.farm.frams);

    useEffect(() => {
        dispatch(fetchParcels());
    }, [dispatch]);
    const parcelLists = useSelector((state) => state.parcel.parcels);
    const [itemsToShow, setItemsToShow] = useState(10);

    const farmTypeList = [ "FARM_TYPE", "FARM_TYPE1", "FARM_TYPE2", "FARM_TYPE3"];
    const floorTypeList = [ "FLOOR_TYPE", "FLOOR_TYPE1"];
    const handleAddSite = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const [searchTerm, setSearchTerm] = useState('');
    const filteredSiteList = farmsLists.filter((fruit) =>
        fruit?.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleFruitClick = (tree) => {
        console.log('Site clicked:', tree);
        dispatch(addMapData(tree));
    };
    const renderedListItem = filteredSiteList.slice(0, itemsToShow).map(fruit =>
        <div 
            className='flex flex-col mb-2.5'
            key={fruit?.name}
            onClick={() => handleFruitClick(fruit)}
        >
            <Fruit fruit={fruit} />
        </div>
    );
    
    const onLoadMore = () => {
        // Increase the count to show more items
        setItemsToShow((prevCount) => prevCount + 10);
    };

    const onFinish = async (values) => {
        try {
             // Add additional properties to the values object
            const modifiedValues = {
                ...values,
                geographicalPos:{
                    leftTop: { latitude: 40.7128, longitude: -74.0060 },      
                    leftBottom: { latitude: 34.0522, longitude: -118.2437 },   
                    rightBottom: { latitude: 41.8781, longitude: -87.6298 },   
                    rightTop: { latitude: 51.5074, longitude: -0.1278 },
                },
                creationDate: new Date(),
                additionalFields: {
                    additionalProp1: "string",
                    additionalProp2: "string",
                    additionalProp3: "string",
                },
            };

            console.log("creating farms", modifiedValues);
            const response = await dispatch(createFarms(modifiedValues));
            if (createFarms.fulfilled.match(response)) {
                console.log("creating responses ", response);
                openNotification();
                // Close the modal after successful submission
                setIsModalVisible(false);
            } else if (createFarms.rejected.match(response)) {
                console.log("rejected", response);
            }
        } catch (error) {
            // Handle error (you may want to display an error message to the user)
            console.error('Error creating site:', error);
        }
    };
    
    return (
        <div className="manrope-font rendered-height pb-10 overflow-auto">
            <div>
                {contextHolder}
                <button className='border-2 border-green-main px-5 rounded-md text-green-main' onClick={handleAddSite}>
                    Ajouter
                </button>
                <Searchbar title={searchTerm} onSearch={setSearchTerm}/>
                <div className='mt-4 mb-3 px-3 w-full text-xs flex justify-between items-center'>
                    <div className='text-gray-true-800' > Search results {renderedListItem.length}</div>
                    <div className=' flex items-center'>
                        <span>Sort:</span>
                        <div className='c-container'>
                            <CustomDropDown dropdownItem={sortList} height={'h-[30px]'} />
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                    title='Ajout de Site'
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <Form onFinish={onFinish} initialValues={{
                        name: name,
                        initialArea: initialArea,
                        lastArea: lastArea,
                        farmType: farmType,
                        initialDensity: initialDensity,
                        lastDensity: lastDensity,
                        parcelId: parcelId,
                        floorType: floorType,
                        geographicalPos: {
                            leftTop: { latitude: 40.7128, longitude: -74.0060 },       // Example: New York City
                            leftBottom: { latitude: 34.0522, longitude: -118.2437 },   // Example: Los Angeles
                            rightBottom: { latitude: 41.8781, longitude: -87.6298 },   // Example: Chicago
                            rightTop: { latitude: 51.5074, longitude: -0.1278 },
                        },  
                        creationDate: new Date(),  
                        additionalFields: {
                            additionalProp1: "string",
                            additionalProp2: "string",
                            additionalProp3: "string",
                        },  // Set default value for additionalFields
                    }}>
                        <Form.Item
                            label='Nom du Champs'
                            name='name'
                            rules={[{ required: true, message: 'Renseignez le nom du site!' }]}
                        >
                            <Input onChange={(e) => setName(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label='FarmType'
                            name='farmType'
                        >
                            <Select value={farmType} onChange={(value) => setFarmType(value)}>
                                {farmTypeList.map((farmType) => (
                                    <Option key={farmType} value={farmType}>
                                        {farmType}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label='Parcel'
                            name='parcelId'
                        >
                            <Select value={parcelId} onChange={(value) => setParcelId(value)}>
                                {parcelLists.map((parcel) => (
                                    <Option key={parcel.id} value={parcel.id}>
                                        {parcel.name}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label='Initial Area'
                            name='initialArea'
                        >
                            <Input onChange={(value) => setInitialArea(value)} />
                        </Form.Item>

                        <Form.Item
                            label='Initial Density'
                            name='initialDensity'
                        >
                            <Input onChange={(value) => setInitialDensity(value)} />
                        </Form.Item>
                        <Form.Item
                            label='Last area'
                            name='lastArea'
                        >
                            <Input onChange={(value) => setLastArea(value)} />
                        </Form.Item>

                        <Form.Item
                            label='Floor Type'
                            name='floorType'
                        >
                            <Select value={floorType} onChange={(value) => setFLoorType(value)}>
                                {floorTypeList.map((floorTypelement) => (
                                    <Option key={floorTypelement.id} value={floorTypelement}>
                                        {floorTypelement}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Last Density" 
                            name='lastDensity'
                        >
                            <Input onChange={(value) => setLastDensity(value)} />
                        </Form.Item>

                        <Form.Item>
                            <button type='primary' htmlType='submit' className='p-3 bg-green-main border-r-4 text-white'>
                                {loading ? 'Loading...' : 'Ajouter le champs'}
                            </button>
                        </Form.Item>
                    </Form>
                </Modal>
            {renderedListItem}
            {filteredSiteList.length > itemsToShow && (
                <div className='z-50 w-[100px] absolute bottom-4 tree-detail-button translate-x-1/2 right-1/2  bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path
                        d="M9.71751 4.4092H6.44536V1.13705C6.44536 0.735536 6.11974 0.409912 5.71822 0.409912H4.99108C4.58956 0.409912 4.26393 0.735536 4.26393 1.13705V4.4092H0.991791C0.590272 4.4092 0.264648 4.73482 0.264648 5.13634V5.86348C0.264648 6.265 0.590272 6.59063 0.991791 6.59063H4.26393V9.86277C4.26393 10.2643 4.58956 10.5899 4.99108 10.5899H5.71822C6.11974 10.5899 6.44536 10.2643 6.44536 9.86277V6.59063H9.71751C10.119 6.59063 10.4446 6.265 10.4446 5.86348V5.13634C10.4446 4.73482 10.119 4.4092 9.71751 4.4092Z"
                        fill="#3CCB7F"
                    />
                    </svg>
                    <span
                        className='ml-2 z-50 text-[10px] text-dark-main cursor-pointer'
                        onClick={onLoadMore}
                    >
                        Load more
                    </span>
                </div>
            )}
        </div>
    )
};
export default HandleFruit;