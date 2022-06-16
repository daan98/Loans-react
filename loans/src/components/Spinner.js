import React from "react";
import './Spinner.css';

function Spinner(){
    return(
        <div  data-cy="spinner" className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
        </div>
    );
}

export default Spinner;