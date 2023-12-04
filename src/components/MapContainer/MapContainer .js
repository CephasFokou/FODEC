import React,{useState} from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker, Polygon, Polyline } from '@react-google-maps/api';
import { ChevronDownIcon,ChevronUpIcon } from '@heroicons/react/24/outline';
import MapTitle from './MapButtons/MapTitle';
import './Mapcontainer.css'
import { useSelector } from 'react-redux';

const MapContainer = () => {
    const [infoWindowVisible, setInfoWindowVisible] = useState(false);
    const selectedSite = useSelector((state) => state.map?.mapData);
    
    const mapStyles = {
        width: '100%',
        height: '90vh', // height
    };
    console.log("selected site ", selectedSite);
    const geoPos = selectedSite?.geographicalPos || {};
    const defaultCenter = {
        lat: geoPos.leftTop?.latitude || 0,
        lng: geoPos.leftTop?.longitude || 0,
    };
    const [showDropdown,setDropdownState]=useState('');
    const [selectedParcel, setSelectedParcel]=useState('Choisir parcelle');
    const [selectedFarm, setSelectedFarm]=useState('Selection champs');

    const setDropdownItem= (newState)=>{
        if(showDropdown===''){
            setDropdownState(newState);
        }else{
            setDropdownState('');
        }
    }
    
    return (
        <>
            <MapTitle/>
            <LoadScript googleMapsApiKey="AIzaSyAgIIM2yjg9fxC23Dj_psJmI6kAr6QXFgQ" // Google Maps API 
        >
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10} // initial zoom level
                center={defaultCenter}
            >
                {selectedSite && (
                    <>
                        <Marker
                            position={{ lat: selectedSite.lat, lng: selectedSite.lng }}
                            onClick={() => setInfoWindowVisible(!infoWindowVisible)}
                            onMouseOver={() => setInfoWindowVisible(true)}
                            onMouseOut={() => setInfoWindowVisible(false)}
                        >
                            {infoWindowVisible && (
                                <InfoWindow onCloseClick={() => setInfoWindowVisible(false)}>
                                    <div>
                                        <h3>{selectedSite.name}</h3>
                                        <p>Amount: {selectedSite.amount}</p>
                                        <p>Speculation: {selectedSite.speculation}</p>
                                        <p>Genetic Resource: {selectedSite.geneticResource}</p>
                                        <p>Number of Farms: {selectedSite.numberFarms}</p>
                                    </div>
                                </InfoWindow>
                            )}
                        </Marker>

                        <Polygon
                            path={[
                                { lat: geoPos.leftTop?.latitude, lng: geoPos.leftTop?.longitude },
                                { lat: geoPos.leftBottom?.latitude, lng: geoPos.leftBottom?.longitude },
                                { lat: geoPos.rightBottom?.latitude, lng: geoPos.rightBottom?.longitude },
                                { lat: geoPos.rightTop?.latitude, lng: geoPos.rightTop?.longitude },
                            ]}
                            options={{
                                strokeColor: '#00FF00',
                                strokeOpacity: 1,
                                strokeWeight: 2,
                                fillOpacity: 0.2,
                                fillColor: "#00FF00", // Green color
                            }}
                        />
                    </>
                )}

                {selectedSite && (
                    <Polyline
                        path={[
                            { lat: geoPos.leftTop?.latitude, lng: geoPos.leftTop?.longitude },
                            { lat: geoPos.leftBottom?.latitude, lng: geoPos.leftBottom?.longitude },
                            { lat: geoPos.rightBottom?.latitude, lng: geoPos.rightBottom?.longitude },
                            { lat: geoPos.rightTop?.latitude, lng: geoPos.rightTop?.longitude },
                            { lat: geoPos.leftTop?.latitude, lng: geoPos.leftTop?.longitude }, // Connect back to the start
                        ]}
                        options={{
                            strokeColor: '#FF0000',
                            strokeOpacity: 1,
                            strokeWeight: 2,
                            fillOpacity: 0.5,
                            fillColor: "#00FF00", // Green color
                        }}
                    />
                )}
            </GoogleMap>
        </LoadScript>

            <div  onMouseLeave={()=>setDropdownState('')}  onClick={()=>setDropdownItem('farm')} className="text-gray-dark absolute bottom-[101px] ml-4 z-10 text-sm font-bold px-4 py-2 flex rounded-[100px] items-center bg-white/40 ">
                <div>{selectedFarm}</div> 
                {showDropdown==='farm'? 
                    <>
                        <ChevronUpIcon className='ml-1 w-4 h-5'/>
                        
                        <div className='map-dropdown-item-container w-full ' onClick={()=>setDropdownState('')}>
                            <div className="map-dropdown-item" onClick={() =>setSelectedFarm('farm 1')}>farm 1</div>
                            <div className="map-dropdown-item" onClick={() =>setSelectedFarm('farm 1')}>farm 2</div>
                        </div>

                    </>
                    :
                    <ChevronDownIcon onClick={()=>setDropdownState('farm')} className='ml-1 w-4 h-5'/>
                }
            </div>
            
            <div  onMouseLeave={()=>setDropdownState('')}  onClick={()=>setDropdownItem('parcel')} className=" absolute bottom-[53px] ml-4 z-10 text-sm font-bold px-4 py-2 text-gray-dark flex rounded-[100px] items-center bg-white/40 ">
                <div >{selectedParcel}</div> 
                {showDropdown==='parcel'? 
                    <>
                        <ChevronUpIcon className='ml-1 w-4 h-5'/>
                        <div className='map-dropdown-item-container w-full' onClick={()=>setDropdownState('')}>
                            <div className="map-dropdown-item" onClick={() =>setSelectedParcel('parcel 1')}>parcel 1</div>
                            <div className="map-dropdown-item" onClick={() =>setSelectedFarm('parcel 2')}>parcel 2</div>
                        </div>
                    </>
                    :
                    <ChevronDownIcon onClick={()=>setDropdownState('parcel')} className='ml-1 w-4 h-5'/>
                }
            </div>
        </>
       
    );
};

export default MapContainer;
