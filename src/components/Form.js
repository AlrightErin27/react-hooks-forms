import React, { useState } from "react";
import ActualForm from "./ActualForm";
import DisplayData from "./DisplayData";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [num, setNum] = useState(0);
  const [error, setError] = useState(null);

  function handleOnChangeFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleOnChangeLastName(e) {
    setLastName(e.target.value);
  }
  //console.log(firstName, lastName);
  console.log(error);
  return (
    <>
      <ActualForm
        firstName={firstName}
        lastName={lastName}
        handleOnChangeFirstName={handleOnChangeFirstName}
        handleOnChangeLastName={handleOnChangeLastName}
      />
      <DisplayData firstName={firstName} lastName={lastName} />
      <form>
        <input
          type="number"
          value={num}
          onChange={(e) => {
            const newNum = parseInt(e.target.value);
            newNum >= 0 && newNum <= 5
              ? setNum(newNum) && setError(null)
              : setError(`🤯 ${newNum} is NOT a valid number.`);
          }}
        />
      </form>
    </>
  );
}

export default Form;
