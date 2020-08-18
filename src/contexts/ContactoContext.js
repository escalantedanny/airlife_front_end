import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//creat el context
export const ContactoContext = createContext();

//provider
const ContactoProvider = (props) => {

    const [busqueda, datosFormulario] = useState({});

    const [consultar, guardarConsulta] = useState(false);

    const { name, mail, phone, obser } = busqueda;

    useEffect( () => {
        if(consultar){
            const enviarFormulario = async () => {
                const url = `https://www.airlife.es/api/espana/email`;
                const resultado = await axios.post(url, busqueda);
            }
            enviarFormulario();
        }
    }, [busqueda])

    return (
        <ContactoContext.Provider
            value={{
                datosFormulario,
                guardarConsulta
            }}
        >
            {props.children}
        </ContactoContext.Provider>
    )

}

export default ContactoProvider;