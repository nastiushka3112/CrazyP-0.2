import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../store/helpers/helpersSlice";

export default function StartCreate() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("create"));
  }, []);

  return <div class="h-[1000px] pt-[320px]">StartCreate</div>;
}
