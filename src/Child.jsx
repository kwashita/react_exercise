import React, { memo } from "react";
import SubChild from "./SubChild";

export default memo(function Child(props) {
  console.log("child updated");
  return (
    <>
      <div>Child: myself</div>
      <button
        onClick={() => {
          props.callbackChange();
        }}
      >
        change Num in App
      </button>
      <hr />
      {/* <SubChild></SubChild> */}
    </>
  );
});
