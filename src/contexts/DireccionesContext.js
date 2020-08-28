import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//creat el context
export const DireccionesContext = createContext();


//provider
const DireccionesProvider = (props) => {

    const [direcciones, guardarDirecciones] = useState([]);
    const [poblaciones, guardarPoblacion] = useState([]);

    const [busqueda, buscarDirecciones] = useState({
        ciudad : '',
        marca : ''
    });

    const [consultar, guardarConsulta] = useState(false);

    const [pobla, buscarPobla] = useState({
        marca : ''
    });

    useEffect( () => { 

        if(pobla){
            const obtenerPobla = async () => {
                const url = `http://localhost:4500/api/espana/clientxMark?marca=${pobla.marca}`;
                //const url = `https://www.airlife.es/api/espana/clientxMark?marca=${pobla.marca}`;
                const resultado = await axios.get(url);
                guardarPoblacion(resultado.data);
            }
            obtenerPobla();
        }


    }, [pobla]);

    const { ciudad, marca } = busqueda;

    useEffect( () => {

        if(consultar){
            const obtenerDirecciones = async () => {
                const url = `http://localhost:4500/api/espana/search?ciudad=${ciudad}&marca=${marca}`;
                //const url = `https://www.airlife.es/api/espana/search?ciudad=${ciudad}&marca=${marca}`;
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
                buscarPobla,
                direcciones,
                poblaciones
            }}
        >
            {props.children}
        </DireccionesContext.Provider>
    )

}

export default DireccionesProvider;