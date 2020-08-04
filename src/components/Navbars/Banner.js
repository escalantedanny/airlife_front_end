import React from 'react';
  var banner = (
    <img 
    className="img-fluid"
      width="1900" 
      height="650"
      alt="Certificaciones de la compañia" 
      src={require("assets/images/baner_final.png")}  
    />
  );

const Banner = () => {
    return ( 
      <div className="text-center">{ banner }</div>
     );
}
 
export default Banner;