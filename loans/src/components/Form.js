import React, {Fragment, useState} from "react";
import { calculateTotals } from "../Helper";

function Form(props) {
    const {quantity, setQuantity, term, setTerm, setTotal, setSpinner, setClick } = props;
    const [error, setError] = useState(false);
    let previousQuantity, previousTerm;

    function calculate(e){
        e.preventDefault();

        if(quantity === 0 || term === 0){
            setError(true);
            return;
        }
        
        setError(false);
        
        setSpinner(true);
        
        setTimeout(() => { // After two seconds spinner must hide the click is detected and the amount can be displayed
            setSpinner(false);
            
            setClick(true); // Detecting click

            const totalConst = calculateTotals(Number(quantity) , Number(term) );
    
            setTotal(totalConst);
        }, 2000);        

    }

    function resetSummary(e){
        if(e.target.localName === 'input') {
            setQuantity(e.target.value);

            if(quantity !== previousQuantity) setClick(false); // If the amount changes user must click once again

            previousQuantity = e.target.value; // Saving the actual amount
        }
        else {
            parseInt(setTerm(e.target.value));

            if(term !== previousTerm) setClick(false); // If the amount of months changes user must click once again

            previousTerm = e.target.value;
            e.target[0].disabled = true; // Disabling first option
        }
    }
    
    return(
        <Fragment>
            <form onSubmit={(e) => calculate(e)}>
                <div className="row">
                    <div>
                        <label>Amount of Loan</label>
                        <input className="u-full-width" type="number" min={1} placeholder="Example: 3000" onChange={(e) => resetSummary(e)} />
                    </div>

                    <div>
                        <label>To Pay on:</label>
                        <select className="u-full-width" onChange={(e) => resetSummary(e)}>
                            <option value="">Select</option>
                            <option value="3">3 months</option>
                            <option value="6">6 months</option>
                            <option value="12">12 months</option>
                            <option value="24">24 months</option>
                        </select>
                    </div>

                    <div>
                        <input type="submit" value="Calculate" className="button-primary u-full-width" />
                    </div>
                </div>
            </form>

            {(error) ? <p className="error">All fields are required</p> : null}
        </Fragment>
    );
}

export default Form;