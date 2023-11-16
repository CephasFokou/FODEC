    import React,{useState} from 'react'
    import Header from '../../components/Heeader/Header'
    import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
    import './Home.css'
    import MapContainer from '../../components/MapContainer/MapContainer '

    const Home = () => {
        return (
            <div className="flex justify-start items-start">
                <LeftSidebar />
                <div className="content-container">
                    <Header />
                    {/* Add the main content of your Home component here */}
                    <div className='geo-map-wrapper'>
                        <MapContainer />
                    </div>
                </div>
            </div>
        )
    }

    export default Home