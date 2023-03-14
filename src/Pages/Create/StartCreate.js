import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../store/helpers/helpersSlice";
import Step1 from "../../Components/Steps/Step1";
import Step2 from "../../Components/Steps/Step2";
import Step3 from "../../Components/Steps/Step3";

export default function StartCreate() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.helpers.step);

  useEffect(() => {
    dispatch(setPage("create"));
  }, []);

  return (
    <div style={{ minHeight: "calc(100vh - 89px)", paddingBottom: "176px" }}>
      <img
        class="w-[100%] max-[420px]:h-[100px]"
        src={require("../../Components/Theme/Img/createP.png")}
        alt="headImage"
      />
      <div class="flex center justify-center mt-[32px] flex-col items-center pb-[166px]">
        <div class="pb-[48px]">
          <h2 class="font-mainText text-text-color text-[24px]">
            Create Story Book
          </h2>
        </div>
        {step === 0 && <Step1 />}
        {step === 1 && <Step2 />}
        {step === 2 && <Step3 />}
      </div>
    </div>
  );
}
