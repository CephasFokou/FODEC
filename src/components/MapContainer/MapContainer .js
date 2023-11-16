import React,{useState} from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker, Polyline } from '@react-google-maps/api';

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
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyAgIIM2yjg9fxC23Dj_psJmI6kAr6QXFgQ" // Google Maps API key
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
    );
};

export default MapContainer;
