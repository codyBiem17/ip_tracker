import React from "react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Icon } from "leaflet";
import locationIcon from '../assets/images/icon-location.svg'

const MapArea = ({currentIp}) => {

    console.log(currentIp.location)
    const locator = new Icon({
        iconUrl: locationIcon,
        iconSize: [40, 50],
        iconAnchor: [23, 55],
        popupAnchor: [-3, -76]
        // className: 'locator'
    })

    return (
        <MapContainer 
            center={[currentIp.location?.lat, currentIp.location?.lng]} 
            zoom={13} 
            zoomControl={false}
            key={`${currentIp.location?.lat}${currentIp.location?.lng}`}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[currentIp.location?.lat, currentIp.location?.lng]} icon={locator} />
        </MapContainer>
    )
}

export default MapArea