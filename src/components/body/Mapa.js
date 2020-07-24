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
        <Map center={espana} zoom={12}>
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
                                <div>Población: {activeAddress.poblacion}</div>
                                <div>Dirección: {activeAddress.direccion}</div>
                                <div>Web: <a href={activeAddress.website} target="_blank">{activeAddress.website}</a></div>
                            </div>
                        </Popup>
                    )}
                        
                    </Marker>
                ))}
        </Map>
     );
}
 
export default Mapa;