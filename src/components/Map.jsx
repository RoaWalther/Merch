import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = (data) => {

    const mapStyles ={
        height: '58vh',
        width: '100%'
    }
    const defaultCenter = {
        lat: data.data.latitude, lng: data.data.longitude
    }

  return (
    <LoadScript googleMapsApiKey='AIzaSyB8R6iS3DATCSlUYJuvg1YTYSSMsT5AF6M'>
        <GoogleMap 
        mapContainerStyle={mapStyles}
        zoom={8}
        center={defaultCenter}
        >
            <Marker position={defaultCenter}></Marker>
        </GoogleMap>
    </LoadScript>
  );
}

export default Map;