import React from "react";

function Result(props) {
    const {quantity, term, total} = props;
    return(
        <div className="u-full-width mensajes resultado">
            <h2>Summary:</h2>
            <p><strong>Quantity:</strong> ${quantity}</p>
            <p><strong>To pay on:</strong> {term} months</p>
            <p><strong>Total:</strong> ${Number(total).toFixed(2)}</p>
            <p><strong>Pay per moth:</strong> ${Number(total / term).toFixed(2)}</p>
        </div>
    );
}

export default Result;