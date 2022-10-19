import React from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

export default function AppRouter() {
  const location = useLocation();
  const navigate = useNavigate();
  //   console.log(location);
  //   console.log(navigate);

  const goDetail = () => {
    navigate("/detail", {
      state: { username: "John" },
    });
  };
  return (
    <div>
      <div>AppRouter</div>
      <ul>
        <li>
          <Link to="/home?id=456&username=Lucy">Home</Link>
        </li>
        <li>
          <Link to="/list/123">List</Link>
        </li>
        <li>
          <Link to="/detail">Detail</Link>
        </li>
      </ul>
      <button onClick={goDetail}> Go to Detail</button>
      <Outlet />
    </div>
  );
}
