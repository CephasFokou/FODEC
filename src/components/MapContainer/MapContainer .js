import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
    const mapStyles = {
        width: '100%',
        height: '90vh', // height
    };

    const defaultCenter = {
        lat: 0, // initial latitude
        lng: 0, // initial longitude
    };

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyAgIIM2yjg9fxC23Dj_psJmI6kAr6QXFgQ" // Google Maps API key
        >
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10} // initial zoom level
                center={defaultCenter}
            />
        </LoadScript>
    );
};

export default MapContainer;
