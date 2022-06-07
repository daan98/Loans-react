import React from "react";

function Result(props) {
    const {quantity, term, total} = props;
    return(
        <div className="u-full-width mensajes resultado">
            <h2>Summary:</h2>
            <p><strong>Quantity:</strong> ${quantity}</p>
            <p><strong>To pay on:</strong> {term} months</p>
            <p><strong>Total:</strong> ${total}</p>
            <p><strong>Pay per moth:</strong> ${total / term}</p>
        </div>
    );
}

export default Result;