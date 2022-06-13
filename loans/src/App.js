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
  const [click, setClick] = useState(false);
  let component;

  // Determining which component to show
  if(spinner){
    component = <Spinner />
  } else if(total === 0 || click === false){
    component = <Message />;
  } else if (quantity === 0 || term === 0){
    component = <ErrorMessage />
  } else if(total && click){
    component = <Result quantity={quantity} term={term} total={total} />;
  }
  
  return (
    <Fragment>
      <Header title="Loans quoter." />

      <div className="container">
        <Form quantity={quantity} setQuantity={setQuantity} term={term} setTerm={setTerm} setTotal={setTotal} setSpinner={setSpinner} setClick={setClick} />
      
        {component}
      </div>

    </Fragment>
  );
}

export default App;
