import React, { useState, useEffect } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon, popup } from "leaflet";

const Mapa = ({direcciones}) => {

    const [dirr, setAddress] = useState({
        lati : [40.4167, -3.70325],
        long : 6
    });

    if(dirr){
        console.log(dirr.latitud)
        console.log(dirr.longitud)
    }

    //var espana = [40.4167, -3.70325];
    //var zoom = 12;

    useEffect( () => {

        setAddress(direcciones[0]);

    }, [direcciones])

    const icon = new Icon({
        iconUrl: "./icon_map.jpeg",
        iconSize: [25,41],
        iconAnchor: [12.5, 41],
        popupAnchor: [0,41]
    })

    return ( 
        <Map 
            center={
                (!dirr) ? [40.463667, -3.74922] : ![dirr.latitud, dirr.longitud]
            } 
            zoom={(!dirr) ? 6 : 10}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />

            {   direcciones.map( address => (
                    <Marker 
                        key = { address._id }
                        position={[address.latitud, address.longitud]} 
                    >
                        <Popup
                            position={[address.latitud, address.longitud]} 
                        >
                            <div>
                                <h6>Cliente: {address.cliente}</h6>
                                <div>Población: {address.poblacion}</div>
                                <div>Dirección: {address.direccion}</div>
                                <div>Web: <a href={address.website} target="_blank">{address.website}</a></div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
        </Map>
     );
}
 
export default Mapa;