import React, {Fragment, useState} from "react";
import { calculateTotals } from "../Helper";

function Form(props) {
    const {quantity, setQuantity, term, setTerm, total, setTotal, setSpinner } = props;
    const [error, setError] = useState(false);

    function calculate(e){
        e.preventDefault();

        if(quantity === 0 || term === 0){
            setError(true);
            return;
        }
    
        setError(false);
        
        setSpinner(true);

        setTimeout(() => {
            setSpinner(false);
            
            const totalConst = calculateTotals(Number(quantity), Number(term));
    
            setTotal(totalConst);
        }, 3000);        

    }
    
    return(
        <Fragment>
            <form onSubmit={(e) => calculate(e)}>
                <div className="row">
                    <div>
                        <label>Amount of Loan</label>
                        <input className="u-full-width" type="number" placeholder="Example: 3000" onChange={(e) => setQuantity(e.target.value)} />
                    </div>

                    <div>
                        <label>To Pay on:</label>
                        <select className="u-full-width" onChange={(e) => parseInt(setTerm(e.target.value))}>
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