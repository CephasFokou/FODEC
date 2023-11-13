import React,{useState} from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { ChevronDownIcon,ChevronUpIcon } from '@heroicons/react/24/outline';
import MapTitle from './MapButtons/MapTitle';
import './Mapcontainer.css'


const MapContainer = () => {

    const mapStyles = {
        width: '100%',
        height: '90vh', // height
    };

    const defaultCenter = {
        lat: 0, // initial latitude
        lng: 0, // initial longitude
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
            <LoadScript
                //googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} // Google Maps API key
            >
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={10} // initial zoom level
                    center={defaultCenter}
                />
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
