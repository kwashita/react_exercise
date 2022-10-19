import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [params] = useSearchParams();
  console.log(params.get("username"));
  console.log(params.get("id"));
  console.log(params.getAll("id"));
  return <div>Home, {params.get("username")}</div>;
}
