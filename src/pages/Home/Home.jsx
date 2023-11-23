import './Home.css'
import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import MapContainer from '../../components/MapContainer/MapContainer '

const Home = () => {
    const [menuTitle,setMenuTitle]=useState('Menu');
    const [maptitle,setMaptitle]=useState('');

    return (
            <div className="flex justify-start items-start">
                <LeftSidebar title={menuTitle} setTitle={setMenuTitle} setCaption={setMaptitle} />
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