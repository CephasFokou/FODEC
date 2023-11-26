import React, { useEffect, useState } from 'react';
import { Modal, Form, Input, InputNumber, } from 'antd';
import './HandleSite.css';
import Site from '../Items/Site';
import { useDispatch, useSelector } from 'react-redux';
import { addMapData } from '../../../Redux/Reducers/MapSlice';
import { createSite, fetchSites } from '../../../Redux/Reducers/SiteSlice';
//import CustomDropDown from '../../CustomDropDown/CustomDropDown'
//import Searchbar from '../Searchbar'
// const siteList=[ {
//     id:1,
//     name: 'abom mbanga',
//     amount: '07',
//     lat: 10, // initial latitude
//     lng: 15, // initial longitude
// },{
//     id:2,
//     name:'abom mbangant',
//     amount: '15',
//     lat: 20, // initial latitude
//     lng: 45, // initial longitude
// }]
// //const sortList=['propio','option 2', 'option 3'];

const HandleSite = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [numberFarms, setNumberFarms] = useState(0);
    const [percentageFarmSite, setPercentageFarmSite] = useState(0.0);
    const [percentageMaleLine, setPercentageMaleLine] = useState(0.0);
    const [percentageFemaleLine, setPercentageFemaleLine] = useState(0.0);
    const [percentageMaleTreeNotNormal, setPercentageMaleTreeNotNormal] = useState(0.0);
    const [percentageMaleTreeNormal, setPercentageMaleTreeNormal] = useState(0.0);
    const [percentageFemaleTreeNotNormal, setPercentageFemaleTreeNotNormal] = useState(0.0);
    const [percentageFemaleTreeNormal, setPercentageFemaleTreeNormal] = useState(0.0);
    const [numberMaleLine, setNumberMaleLine] = useState(0);
    const [numberFemaleLine, setNumberFemaleLine] = useState(0);
    const [numberMaleTree, setNumberMaleTree] = useState(0);
    const [percentageMaleTree, setPercentageMaleTree] = useState(0.0);
    const [numberFemaleTree, setNumberFemaleTree] = useState(0);
    const [numberMaleTreeNotNormal, setNumberMaleTreeNotNormal] = useState(0);
    const [numberMaleTreeNormal, setNumberMaleTreeNormal] = useState(0);
    const [numberFemaleTreeNotNormal, setNumberFemaleTreeNotNormal] = useState(0);
    const [numberFemaleTreeNormal, setNumberFemaleTreeNormal] = useState(0);
    const [numberMaleTreeMissing, setNumberMaleTreeMissing] = useState(0);
    const [numberFemaleTreeMissing, setNumberFemaleTreeMissing] = useState(0);
    const [percentageMaleTreeMissing, setPercentageMaleTreeMissing] = useState(0.0);
    const [percentageFemaleTreeMissing, setPercentageFemaleTreeMissing] = useState(0.0);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSites());
    }, [dispatch]);
    const siteList = useSelector((state) => state.site.sites);
    const data = siteList?.data || [];
    console.log("Loading",data)
    
    const filteredSiteList = data.filter((site) =>
      site.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSiteClick = (site) => {
        console.log('Site clicked:', site);
        dispatch(addMapData(site));
    };

    const handleAddSite = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = async (values) => {
        try {
            // Dispatch the createSite action with the form values
            await dispatch(createSite(values));

            // Close the modal after successful submission
            setIsModalVisible(false);
        } catch (error) {
            // Handle error (you may want to display an error message to the user)
            console.error('Error creating site:', error);
        }
    };

    const renderedListItem = filteredSiteList.map((site) => (
        <div
            className='flex flex-col gap-2.5 cursor-pointer'
            key={site.name}
            onClick={() => handleSiteClick(site)}
        >
            <Site site={site} />
        </div>
    ));

    return (
        <>
            <div className='manrope-font'>
                <button className='border-2 border-green-main px-5 rounded-md text-green-main' onClick={handleAddSite}>
                    Ajouter
                </button>

                <Modal
                    title='Ajout de Site'
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <Form onFinish={onFinish} initialValues={{
                        name: name,
                        numberFarms: numberFarms,
                        percentageFarmSite: percentageFarmSite,
                        percentageMaleLine: percentageMaleLine,
                        percentageFemaleLine: percentageFemaleLine,
                        percentageMaleTreeNotNormal: percentageMaleTreeNotNormal,
                        percentageMaleTreeNormal: percentageMaleTreeNormal,
                        percentageFemaleTreeNotNormal: percentageFemaleTreeNotNormal,
                        percentageFemaleTreeNormal: percentageFemaleTreeNormal,
                        numberMaleLine: numberMaleLine,
                        numberFemaleLine: numberFemaleLine,
                        numberMaleTree: numberMaleTree,
                        percentageMaleTree: percentageMaleTree,
                        numberFemaleTree: numberFemaleTree,
                        numberMaleTreeNotNormal: numberMaleTreeNotNormal,
                        numberMaleTreeNormal: numberMaleTreeNormal,
                        numberFemaleTreeNotNormal: numberFemaleTreeNotNormal,
                        numberFemaleTreeNormal: numberFemaleTreeNormal,
                        numberMaleTreeMissing: numberMaleTreeMissing,
                        numberFemaleTreeMissing: numberFemaleTreeMissing,
                        percentageMaleTreeMissing: percentageMaleTreeMissing,
                        percentageFemaleTreeMissing: percentageFemaleTreeMissing,
                        speculation: "_geneticRessource",
                        geneticRessource: "CHAMPS SEMENCIER",
                        user: "karlmabs",
                        parcels: [],
                        geographicalPos: {
                            leftTop: {
                                latitude: 1.0,
                                longitude: 2.0
                            },
                            leftBottom: {
                                latitude: 3.0,
                                longitude: 4.0
                            },
                            rightTop: {
                                latitude: 6.0,
                                longitude: 0.0
                            },
                            rightBottom: {
                                latitude: 8.0,
                                longitude: 7.0
                            },
                            image: null
                        },
                        additionalFields: {}
                    }}>
                        <Form.Item
                            label='Nom du site'
                            name='name'
                            rules={[{ required: true, message: 'Renseignez le nom du site!' }]}
                        >
                            <Input onChange={(e) => setName(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label='Nombre de fermes'
                            name='numberFarms'
                        >
                            <InputNumber onChange={(value) => setNumberFarms(value)} />
                        </Form.Item>

                        <Form.Item
                            label='Pourcentage de la superficie du site'
                            name='percentageFarmSite'
                        >
                            <InputNumber onChange={(value) => setPercentageFarmSite(value)} />
                        </Form.Item>

                        <Form.Item
                            label='Pourcentage de la lignée masculine'
                            name='percentageMaleLine'
                        >
                            <InputNumber onChange={(value) => setPercentageMaleLine(value)} />
                        </Form.Item>

                        <Form.Item
                            label='Pourcentage de la lignée féminine'
                            name='percentageFemaleLine'
                        >
                            <InputNumber onChange={(value) => setPercentageFemaleLine(value)} />
                        </Form.Item>

                        <Form.Item
                            label="Pourcentage de l'arbre masculin non normal" 
                            name='percentageMaleTreeNotNormal'
                        >
                            <InputNumber onChange={(value) => setPercentageMaleTreeNotNormal(value)} />
                        </Form.Item>

                        <Form.Item
                            label="Pourcentage de l'arbre masculin normal"
                            name='percentageMaleTreeNormal'
                        >
                            <InputNumber onChange={(value) => setPercentageMaleTreeNormal(value)} />
                        </Form.Item>

                        <Form.Item
                            label='Pourcentage de arbre féminin non normal'
                            name='percentageFemaleTreeNotNormal'
                        >
                            <InputNumber onChange={(value) => setPercentageFemaleTreeNotNormal(value)} />
                        </Form.Item>

                        <Form.Item
                            label='Pourcentage de arbre féminin normal'
                            name='percentageFemaleTreeNormal'
                        >
                            <InputNumber onChange={(value) => setPercentageFemaleTreeNormal(value)} />
                        </Form.Item>

                        <Form.Item
                            label='Nombre de lignées masculines'
                            name='numberMaleLine'
                        >
                            <InputNumber onChange={(value) => setNumberMaleLine(value)} />
                        </Form.Item>

                        <Form.Item
                            label='Nombre de lignées féminines'
                            name='numberFemaleLine'
                        >
                            <InputNumber onChange={(value) => setNumberFemaleLine(value)} />
                        </Form.Item>

                        <Form.Item
                            label='Nombre arbres masculins'
                            name='numberMaleTree'
                        >
                            <InputNumber onChange={(value) => setNumberMaleTree(value)} />
                        </Form.Item>

                        <Form.Item
                            label='Pourcentage arbres masculins'
                            name='percentageMaleTree'
                        >
                            <InputNumber onChange={(value) => setPercentageMaleTree(value)} />
                        </Form.Item>

                        <Form.Item
                            label='Nombre arbres féminins'
                            name='numberFemaleTree'
                        >
                            <InputNumber onChange={(value) => setNumberFemaleTree(value)} />
                        </Form.Item>

                        <Form.Item
                            label='Nombre arbres masculins non normaux'
                            name='numberMaleTreeNotNormal'
                        >
                            <InputNumber onChange={(value) => setNumberMaleTreeNotNormal(value)} />
                        </Form.Item>

                        <Form.Item
                            label='Nombre arbres masculins normaux'
                            name='numberMaleTreeNormal'
                        >
                            <InputNumber onChange={(value) => setNumberMaleTreeNormal(value)} />
                        </Form.Item>

                        <Form.Item
                            label='Nombre arbres féminins non normaux'
                            name='numberFemaleTreeNotNormal'
                        >
                            <InputNumber onChange={(value) => setNumberFemaleTreeNotNormal(value)} />
                        </Form.Item>

                        <Form.Item
                            label="Nombre d'arbres féminins normaux"
                            name='numberFemaleTreeNormal'
                        >
                            <InputNumber onChange={(value) => setNumberFemaleTreeNormal(value)} />
                        </Form.Item>

                        <Form.Item
                            label="Nombre darbres masculins manquants"
                            name='numberMaleTreeMissing'
                        >
                            <InputNumber onChange={(value) => setNumberMaleTreeMissing(value)} />
                        </Form.Item>

                        <Form.Item
                            label="Nombre d'arbres féminins manquants"
                            name='numberFemaleTreeMissing'
                        >
                            <InputNumber onChange={(value) => setNumberFemaleTreeMissing(value)} />
                        </Form.Item>

                        <Form.Item
                            label="Pourcentage d'arbres masculins manquants"
                            name='percentageMaleTreeMissing'
                        >
                            <InputNumber onChange={(value) => setPercentageMaleTreeMissing(value)} />
                        </Form.Item>

                        <Form.Item
                            label="Pourcentage d'arbres féminins manquants"
                            name='percentageFemaleTreeMissing'
                        >
                            <InputNumber onChange={(value) => setPercentageFemaleTreeMissing(value)} />
                        </Form.Item>

                        {/* Remaining fields ... */}

                        <Form.Item>
                            <button type='primary' htmlType='submit' className='px-8 bg-green-main border-2 text-white'>
                                Ajouter le site
                            </button>
                        </Form.Item>
                    </Form>
                </Modal>

                <div className='relative w-full'>
                    <label htmlFor='searchSite' className='text-xs text-gray-true-500'>
                        Search by name
                    </label>
                    <input
                        type='text'
                        className='w-full outline-0 border-b border-solid border-green-main pr-10 gray-true-800'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <svg
                        className='bottom-2 absolute right-1'
                        xmlns='http://www.w3.org/2000/svg'
                        width='17'
                        height='17'
                        viewBox='0 0 17 17'
                        fill='none'
                    >
                        <path
                            d='M14.5001 14.5L11.6048 11.6047M11.6048 11.6047C12.1001 11.1094 12.4929 10.5215 12.761 9.87438C13.029 9.22729 13.1669 8.53375 13.1669 7.83335C13.1669 7.13295 13.029 6.4394 12.761 5.79232C12.4929 5.14523 12.1001 4.55727 11.6048 4.06202C11.1095 3.56676 10.5216 3.1739 9.8745 2.90586C9.22742 2.63783 8.53387 2.49988 7.83347 2.49988C7.13307 2.49988 6.43953 2.63783 5.79244 2.90586C5.14535 3.1739 4.5574 3.56676 4.06214 4.06202C3.06192 5.06224 2.5 6.41882 2.5 7.83335C2.5 9.24787 3.06192 10.6045 4.06214 11.6047C5.06236 12.6049 6.41895 13.1668 7.83347 13.1668C9.248 13.1668 10.6046 12.6049 11.6048 11.6047Z'
                            stroke='#292929'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </div>
                {renderedListItem}
            </div>
        </>
    );
};

export default HandleSite;
