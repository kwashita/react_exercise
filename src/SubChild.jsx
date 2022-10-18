import React, { useContext, useState, useRef, memo } from "react";

import { NumContext } from "./App";

export default memo(function SubChild() {
  console.log("subchild changed");

  const [value, setValue] = useState("asd");
  const { num, callbackChange } = useContext(NumContext);
  //   console.log(num);
  const inputRef = useRef(null);
  return (
    <>
      <h4>Subchild: </h4>
      <div>{num}</div>
      <button onClick={() => callbackChange(num + 1)}>change Num in App</button>
      <hr />
      <p>controlled input</p>
      <span>{value}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => console.log(value)}>get input value</button>
      <hr />
      <p>no-controlled input</p>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        get input value
      </button>
    </>
  );
});
