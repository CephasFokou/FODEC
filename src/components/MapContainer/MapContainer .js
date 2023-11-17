import React,{useState} from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker, Polyline } from '@react-google-maps/api';
import { ChevronDownIcon,ChevronUpIcon } from '@heroicons/react/24/outline';
import MapTitle from './MapButtons/MapTitle';
import './Mapcontainer.css'

const MapContainer = ({selectedSite}) => {
    const [infoWindowVisible, setInfoWindowVisible] = useState(false);

    const mapStyles = {
        width: '100%',
        height: '90vh', // height
    };
    console.log("selected site ", selectedSite)
    const defaultCenter = {
        lat: selectedSite ? selectedSite.lat : 0,
        lng: selectedSite ? selectedSite.lng : 0,
    };
    const [showDropdown,setDropdownState]=useState('');
    const [selectedParcel, setSelectedParcel]=useState('Choisir parcelle');
    const [selectedFarm, setSelectedFarm]=useState('Selection champs');

    const setDropdownItem= (newState)=>{
        if(showDropdown===''){
            setDropdownState(newState)
        }else{
            setDropdownState('');
        }
    }
    
    return (
        <>
            <MapTitle/>
            <LoadScript googleMapsApiKey="AIzaSyAgIIM2yjg9fxC23Dj_psJmI6kAr6QXFgQ" // Google Maps API 
            //googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} // Envirro
            
        >
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10} // initial zoom level
                center={defaultCenter}
            >
                {selectedSite && (
                    <Marker
                        position={{ lat: selectedSite.lat, lng: selectedSite.lng }}
                        onClick={() => setInfoWindowVisible(!infoWindowVisible)}
                    >
                        {infoWindowVisible && (
                            <InfoWindow onCloseClick={() => setInfoWindowVisible(false)}>
                                <div>
                                    <h3>{selectedSite.name}</h3>
                                    <p>Amount: {selectedSite.amount}</p>
                                    {/* Add more information as needed */}
                                </div>
                            </InfoWindow>
                        )}
                    </Marker>
                )}

                {selectedSite && (
                    <Polyline
                        path={[
                            { lat: defaultCenter.lat, lng: defaultCenter.lng },
                            { lat: selectedSite.lat, lng: selectedSite.lng },
                        ]}
                        options={{
                            strokeColor: '#FF0000',
                            strokeOpacity: 1,
                            strokeWeight: 2,
                        }}
                    />
                )}
            </GoogleMap>
        </LoadScript>

            <div  onMouseLeave={()=>setDropdownState('')}  onClick={()=>setDropdownItem('farm')} className="text-gray-dark absolute bottom-[101px] ml-4 z-10 text-sm font-bold px-4 py-2 text-gray-dark flex rounded-[100px] items-center bg-white/40 ">
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
            
            <div  onMouseLeave={()=>setDropdownState('')}  onClick={()=>setDropdownItem('parcel')} className=" text-gray-dark absolute bottom-[53px] ml-4 z-10 text-sm font-bold px-4 py-2 text-gray-dark flex rounded-[100px] items-center bg-white/40 ">
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
