import React, { useRef, useState } from 'react';


const Factorial = () => {
  //Variables
  const inputRef = useRef(null);
  //States
  const [factorialResult, setFactorialResult] = useState(0);

  //Function
  const submitForm = (e) => {
    e.preventDefault();
    if (inputRef?.current) {
      let rval = 1;
      const number = inputRef?.current.value;
      for (var i = 2; i <= number; i++)
        rval = rval * i;
      setFactorialResult(rval);
    }
  }

  //JSX
  return (
    <div>
      <h1>Factorial Calculator</h1>
      <form onSubmit={submitForm}>
        <input ref={inputRef} type="number" placeholder="Enter a number..." />
        <br />
        <button>Calculate Factorial</button>
      </form>
      <h2>Factorial: {factorialResult}</h2>
    </div>
  );
}

export default Factorial;
