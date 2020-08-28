import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//creat el context
export const ContactoContext = createContext();

//provider
const ContactoProvider = (props) => {

    const [busqueda, datosFormulario] = useState({});
    const [mensaje, setMensaje] = useState({});

    const [consultar, guardarConsulta] = useState(false);

    const { name, mail, phone, obser } = busqueda;

    useEffect( () => {
        if(consultar){
            const enviarFormulario = async () => {
                //const url = `https://www.airlife.es/api/espana/email`;
                const url = `http://localhost:4500/api/espana/email`;
                const resultado = await axios.post(url, busqueda);
                setMensaje(resultado.data.msg);
            }
            enviarFormulario();
        }
    }, [busqueda])

    return (
        <ContactoContext.Provider
            value={{
                datosFormulario,
                guardarConsulta,
                mensaje
            }}
        >
            {props.children}
        </ContactoContext.Provider>
    )

}

export default ContactoProvider;