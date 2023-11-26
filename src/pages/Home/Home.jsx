import './Home.css'
import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import MapContainer from '../../components/MapContainer/MapContainer '
import TreeDetails from '../../components/LeftSidebar/HandleSite/Items/TreeDetails/TreeDetails';

const Home = () => {
    const [menuTitle,setMenuTitle]=useState('Menu');
    const [maptitle,setMaptitle]=useState('');

    return (
            <div className="flex justify-start items-start">
                <LeftSidebar title={menuTitle} setTitle={setMenuTitle} setCaption={setMaptitle} />
               
                <TreeDetails/>
                <div className="content-container">
                    <Header />
                    <div className='geo-map-wrapper'>
                        <MapContainer caption={maptitle}/>
                    </div>
                </div>
            </div>  
        )
    }

    export default Home