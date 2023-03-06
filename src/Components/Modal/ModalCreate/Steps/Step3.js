import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../store/helpers/helpersSlice";

export default function Step2() {
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(10);
  const [Otp, setOtp] = useState();

  const fetchData = () => {
    setTimeLeft(10);
    console.log(Otp);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : fetchData()));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);

  return (
    <div class="w-[100%]">
      <div class="text-left m-[32px]">
        <h2 class="text-[18px] font-textSec pb-[8px]">Continue with OTP</h2>
        <input
          onChange={(e) => {
            setOtp(e.target.value);
          }}
          name="OTP"
          label="OTP"
          type="text"
          placeholder="OTP"
          class="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px] mb-[16px]"
        />
        <div class="text-center flex justify-center items-center pb-[64px]">
          <p class=" text-[14px] font-textSec pr-[2px] text-text-gray">
            Send back OTP in
          </p>
          <p class=" text-[14px] font-textSec text-black">{timeLeft}s</p>
        </div>
        <div class="flex gap-[16px] justify-end">
          <button
            class="btn-modal-send flex items-center"
            type="submit"
            onClick={(e) => {
              console.log(Otp);
              // dispatch(
              //   openModal({
              //     open: true,
              //     step: 2,
              //   })
              // );
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
