import React from "react";

export default function Footer() {
  return (
    <div class="flex items-center justify-between px-[60px] py-[35px]  bg-main-color w-[100%] absolute bottom-0 max-[420px]:flex-col">
      <div class="flex items-center">
        <img src={require("../Theme/Img/logo.png")} alt="Logo" />
      </div>
      <div>
        <p class="text-[#FFFFFF] text-[16px] font-main max-[420px]:py-[32px]">
          © 2023 Grazy Prints. All rights reserved
        </p>
      </div>
    </div>
  );
}
