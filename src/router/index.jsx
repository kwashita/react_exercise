import AppRouter from "../AppRouter";
import Home from "../pages/Home";
import List from "../pages/List";
import Detail from "../pages/Detail";
import Error from "../pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const BaseRouter = () => (
  <BrowserRouter>
    {/* <Routes>
      <Route path="/" element={<AppRouter />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Route>
    </Routes> */}
    <Routes>
      <Route path="/" element={<AppRouter />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/list/:id" element={<List />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Route>
      <Route path="/*" element={<Error />}></Route>
    </Routes>
  </BrowserRouter>
);

export default BaseRouter;
