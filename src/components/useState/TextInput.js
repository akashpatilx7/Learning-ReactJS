import React, { useState } from "react";

const TextInput = () => {
  const [inputValue, newInputValue] = useState("Akash");
  console.log(inputValue);

  const onChangeFunction = (event) => {
    const temp = event.target.value;
    newInputValue(temp);
  };
  return (
    <div>
      <h1>{inputValue}</h1>
      <input
        type="text"
        placeholder="Write your Full Name here..."
        value={inputValue}
        onChange={onChangeFunction}
      ></input>
    </div>
  );
};

export default TextInput;
