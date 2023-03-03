import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../store/helpers/helpersSlice";

export default function StartCreate() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("create"));
  }, []);

  return (
    <div style={{ minHeight: "calc(100vh - 89px)" }}>
      <img
        class="w-[100%]"
        src={require("../../Components/Theme/Img/createP.png")}
        alt="headImage"
      />
      <div class=""> StartCreate</div>
    </div>
  );
}
