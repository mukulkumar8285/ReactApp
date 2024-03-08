import React from 'react'

function File({detail , name} ){
    return(
    
        <div className='Para'>
    <h2>{detail}</h2>
    <h4 style={{color:"gray" , marginTop: "10px"}}>{name}</h4>
    </div>
   
    );
};
export default File;