import * as logic from '../utils/logicJS';
import React, { useState } from 'react';


const StarsDisplay = (props)=>{
    return(
        <>   
         {logic.utils.range(1, props.count).map((starID) => (
            <div className="star" key={starID} />
          ))}
        </>
    
    );
}
    
export default StarsDisplay;