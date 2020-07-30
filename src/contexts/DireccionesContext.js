import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//creat el context
export const DireccionesContext = createContext();


//provider
const DireccionesProvider = (props) => {

    const [direcciones, guardarDirecciones] = useState([]);

    const [busqueda, buscarDirecciones] = useState({
        ciudad : '',
        marca : '',
        poblacion : ''
    });

    const [consultar, guardarConsulta] = useState(false);

    const { ciudad, marca, poblacion } = busqueda;

    useEffect( () => {

        if(consultar){
            const obtenerDirecciones = async () => {
                const url = `https://www.descalante.com/api/espana/search?ciudad=${ciudad}&marca=${marca}&poblacion=${poblacion}`;
                const resultado = await axios.get(url);
                guardarDirecciones(resultado.data);
                
            }
            obtenerDirecciones();
        }

    }, [busqueda]);

    return (
        <DireccionesContext.Provider
            value={{
                buscarDirecciones,
                guardarConsulta,
                direcciones
            }}
        >
            {props.children}
        </DireccionesContext.Provider>
    )

}

export default DireccionesProvider;