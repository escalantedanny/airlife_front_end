import React, { useState, useEffect } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from "leaflet";

const Mapa = ({direcciones}) => {

    const [dirr, setAddress] = useState({
        latitud : '',
        longitud : '',
        flyTo: { 
            zoom: 14, 
            speed: 1.4 } 
    });

    useEffect( () => {

        setAddress(direcciones[0]);

    }, [direcciones])

    const icon = new Icon({
        iconUrl: "./globoairlife.png",
        iconSize: [36,36],
        iconAnchor: [15, 41],
        popupAnchor: [0,41]
    })

    return ( 
        <Map 
            center={
                (dirr) ? [dirr.latitud, dirr.longitud] : [40.463667, -3.74922]
            } 
            zoom={(!dirr) ? 6 : 10}
            movingMethod="flyTo"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />

            {   direcciones.map( address => (
                    <Marker 
                        key = { address._id }
                        position={[address.latitud, address.longitud]} 
                        icon = {icon}
                    >
                        <Popup
                            position={[address.latitud, address.longitud]} 
                        >
                            <div>
                                <h6>Cliente: {address.cliente}</h6>
                                <div>Población: {address.poblacion}</div>
                                <div>Dirección: {address.direccion}</div>
                                <div><a rel="noopener noreferrer"  href={address.website} target="_blank">{address.website}</a></div><br />
                                <div><a rel="noopener noreferrer" href={`https://maps.google.com/?q=${address.latitud},${address.longitud}`} target="_blank"> Como llegar </a></div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
        </Map>
     );
}
 
export default Mapa;