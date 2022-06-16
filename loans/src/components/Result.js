import React from "react";

function Result(props) {
    const {quantity, term, total} = props;
    return(
        <div data-cy="result" className="u-full-width mensajes resultado">
            <h2>Summary:</h2>
            <p data-cy="quantity" ><strong>Quantity:</strong> ${quantity}</p>
            <p data-cy="term" ><strong>To pay on:</strong> {term} months</p>
            <p data-cy="total" ><strong>Total:</strong> ${Number(total).toFixed(2)}</p>
            <p data-cy="per-month" ><strong>Pay per moth:</strong> ${Number(total / term).toFixed(2)}</p>
        </div>
    );
}

export default Result;