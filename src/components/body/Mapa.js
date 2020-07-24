import React, { useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from "leaflet";

const Mapa = ({direcciones}) => {
    
    const espana = [40.4167, -3.70325];
    const icon = new Icon({
        iconUrl: "./icon_mapa.png",
        iconSize: [25,25]
    })

    const [ activeAddress, setActiveAddress ] = useState(null);

    

    return ( 
        <Map center={espana} zoom={9}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />

            {   direcciones.map( address => (
                    <Marker 
                        key = { address._id }
                        position={[address.latitud, address.longitud]} 
                        icon={icon}
                        onclick={ () => {
                            setActiveAddress(address)
                        }}
                    >
                        
                    { activeAddress && (
                        <Popup
                            position={[activeAddress.latitud, activeAddress.longitud]} 
                        >
                            <div>
                                <h6>Cliente: {activeAddress.cliente}</h6>
                                <span>Población: {activeAddress.poblacion}</span>
                                <span>Dirección: {activeAddress.direccion}</span>
                                <span>Web: {activeAddress.website}</span>
                            </div>
                        </Popup>
                    )}
                        
                    </Marker>
                ))}
        </Map>
     );
}
 
export default Mapa;