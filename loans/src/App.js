import React, {Fragment, useState} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import Message from "./components/Message";
import Spinner from "./components/Spinner";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [term, setTerm] = useState('');
  const [total, setTotal] = useState(0);
  const [spinner, setSpinner] = useState(false);
  let component;

  if(spinner){
    component = <Spinner />
  } else if(total === 0){
    component = <Message />;
  } else if (quantity === 0 || term === 0){
    component = <ErrorMessage />
  } else{
    component = <Result quantity={quantity} term={term} total={total} />;
  }
  
  return (
    <Fragment>
      <Header title="Loans quoter." />

      <div className="container">
        <Form quantity={quantity} setQuantity={setQuantity} term={term} setTerm={setTerm} total={total} setTotal={setTotal} setSpinner={setSpinner} />
      
        {component}
      </div>

    </Fragment>
  );
}

export default App;
