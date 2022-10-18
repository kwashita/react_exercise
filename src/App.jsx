import React, {
  Component,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import Child from "./Child";
import SubChild from "./SubChild";

export const NumContext = createContext();

const App = () => {
  const [num, setNum] = useState(1);
  //   useEffect(() => {
  //     console.log("mounted");
  //   });
  useEffect(() => {
    console.log("num changed");
  }, [num]);

  return (
    <>
      <div>{num}</div>
      <button onClick={() => setNum(num + 1)}>change Msg</button>
      <hr />
      {/* <Child num={num} setNum={setNum} /> */}
      <NumContext.Provider value={{ num, setNum }}>
        <SubChild />
      </NumContext.Provider>
    </>
  );
};

export default App;
