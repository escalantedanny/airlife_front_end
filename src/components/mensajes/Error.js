import React from 'react';

const Error = ({mensaje}) => {
    return ( 
        <p className="alert alert-danger error text-center">{mensaje}</p>
     );
}
 
export default Error;