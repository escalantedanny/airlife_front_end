import React, { createContext, useState } from 'react';

//creat el context
export const ContactoContext = createContext();

//provider
const ContactoProvider = (props) => {

    const [busqueda, datosFormulario] = useState([]);

    const { name, mail, phone, obser } = busqueda;

    console.log(busqueda);


    return (
        <ContactoContext.Provider
            value={{
                datosFormulario
            }}
        >
            {props.children}
        </ContactoContext.Provider>
    )

}

export default ContactoProvider;