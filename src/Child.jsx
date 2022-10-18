import React from "react";
import SubChild from "./SubChild";
import { NumContext } from "./index";
export default function Child(props) {
  return (
    <>
      <div>Child: {props.num}</div>
      <button onClick={() => props.setNum(props.num + 1)}>change Num</button>
      <hr />
      <SubChild></SubChild>
    </>
  );
}
