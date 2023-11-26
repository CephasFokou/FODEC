import React, { useEffect, useState } from 'react';
import { Modal, Form, Input, } from 'antd';
import './HandleSite.css';
import Site from './Items/Site';
import { useDispatch, useSelector } from 'react-redux';
import { addMapData } from '../../../Redux/Reducers/MapSlice';
import { fetchSites } from '../../../Redux/Reducers/SiteSlice';
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

const siteList = [
    {
        id: 1,
        name: 'abom mbanga',
        amount: '07',
        lat: 10,
        lng: 15,
    },
    {
        id: 2,
        name: 'abom mbangant',
        amount: '15',
        lat: 20,
        lng: 45,
    },
];

const HandleSite = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
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
            //Requete axios de type POST
            const response = await axios.post('URL_DONNE_PAR_KARL_ET_STEVE', values);

            // La réponse du POST. Ici vous aurez peut-etre le success, le returnValue, etc.
            console.log('Réponse:', response.data);

            // Fermer le modal après soumission
            setIsModalVisible(false);
        } catch (error) {
            // Gestion d'erreurs
            console.error('Axios POST error:', error);
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
                <Form onFinish={onFinish}>
                    <Form.Item
                        label='Nom du site'
                        name='siteName'
                        rules={[{ required: true, message: 'Renseignez le nom du site!' }]}
                    >
                        <Input />
                    </Form.Item>

                    {/* Vous pouvez ajouter des éléments supplémentaires comme des select, des textarea, tel que vu sur la documentation ant design */}

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
    );
};

export default HandleSite;
