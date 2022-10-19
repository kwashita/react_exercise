import React from "react";
import { useParams } from "react-router-dom";

export default function List() {
  const { id } = useParams();

  // console.log(params);
  return <div>List: {id}</div>;
}
