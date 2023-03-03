import React from "react";
import { useSelector } from "react-redux";
import NavMain from "./navBars/NavMain";
import NavCreate from "./navBars/NavCreate";

export default function Header() {
  const page = useSelector((state) => state.helpers.page);

  if (page === "main") {
    return <NavMain />;
  }

  if (page === "create") {
    return <NavCreate />;
  }
}
