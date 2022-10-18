import React, { useContext } from "react";

import { NumContext } from "./App";

export default function SubChild() {
  //   console.log(NumContext);
  const { num, setNum } = useContext(NumContext);
  //   console.log(num);
  return (
    <>
      <div>{num}</div>
      <button onClick={() => setNum(num + 1)}> change Num</button>
    </>
  );
}
