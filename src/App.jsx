import { useState } from 'react';
import './App.css';
import Button from "./component/Button";
import Display from "./component/Display"
function App() {
  let number = ["c", 1, 2, "+", 3, 4, "-", 5, 6, "*", 7, 8, "/", "=", 9, 0, "."];

  let [value, setValue] = useState("");


  const displayValue = (e) => {
    let key = e.target.innerText;
    const operators = ['/', '*', '-', '+'];

    if (key === "=") {
      try {
        setValue(eval(value).toString()); // Note: eval should be used cautiously
      } catch {
        setValue('Error');
      }
    } else if (key === "c") {
      setValue('');
    } else if (operators.includes(key)) {
      // If the last character is an operator, replace it with the new operator
      if (operators.includes(value.slice(-1))) {
        setValue(value.slice(0, -1) + key);
      } else {
        setValue(value + key);
      }
    } else {
      setValue(value + key);
    }
  };

  return (
    <>
      <div className="calculator">
        <Display value={value}></Display>
        <Button className="button" number={number} displayValue={displayValue} />
      </div>
    </>
  );
}

export default App;
