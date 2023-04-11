import React from 'react';
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

import "./style.css"

const LocationMap = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyA8v1EcYrQdf9BXlQzvMRvNxHbjbPi4DcM",
    });

    if (!isLoaded)
        return (
            <div>
                <p className='event_opened_map_loading'>Завантаження карти...</p>
            </div>
        )
    else
        return (
            <div>
                <GoogleMap
                    zoom={10}
                    center={{ lat: 44, lng: -80 }}
                    mapContainerClassName='event_opened_map_container'>
                    <MarkerF position={{ lat: 44, lng: -80 }} />
                </GoogleMap>
            </div>
        )
}
export default LocationMap;