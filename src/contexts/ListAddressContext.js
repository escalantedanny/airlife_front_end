import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ListAddressContext = createContext();

const ListasProvider = (props) => {

    const [ listas, guardarListas ] = useState([]);

    useEffect( () => {
        const obtenerListas = async () => {
            const url = `http://localhost:4500/api/espana/listAddress`;
            const resultado = await axios.get(url);
            guardarListas(resultado.data.clientes);
        }
    
        obtenerListas();
    }, [])


    return (
        <ListAddressContext.Provider
            value={{
                listas
            }}
        >
            {props.children}
        </ListAddressContext.Provider>
    )

}

export default ListasProvider;