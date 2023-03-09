import React from "react";
import { useSelector } from "react-redux";
import Menu from "./Menu/Menu";

export default function BurgerModal() {
  const page = useSelector((state) => state.helpers.page);
  return (
    <>
      {page == "create" ? (
        <div class="w-[100%] h-[500px] absolute bg-main-color flex justify-center flex-col">
          <Menu />
        </div>
      ) : (
        <div class="w-[100%] h-[500px] absolute bg-main-color mt-[85px] flex justify-center flex-col">
          <Menu />
        </div>
      )}
    </>
  );
}
