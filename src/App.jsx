import React, {
  Component,
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
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
    // console.log("num changed");
  }, [num]);

  const callbackChange = useCallback(() => setNum((num) => num + 1), []);

  return (
    <>
      <div>{num}</div>
      <button onClick={() => setNum(num + 1)}>change Msg</button>
      <hr />
      {/* <Child num={num} setNum={setNum} /> */}
      <NumContext.Provider value={{ num, callbackChange }}>
        <SubChild />
      </NumContext.Provider>
      <hr />
      <Child callbackChange={callbackChange}></Child>
    </>
  );
};

export default App;
