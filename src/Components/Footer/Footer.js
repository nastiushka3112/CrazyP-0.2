import React from "react";

export default function Footer() {
  return (
    <div class="flex items-center justify-between px-[60px] py-[35px] bg-[#0F1B33]">
      <div class="flex items-center">
        <img src={require("../Theme/Img/logo.png")} alt="Logo" />
      </div>
      <div>
        <p class="text-[#FFFFFF] text-[16px] font-main">
          © 2023 Grazy Prints. All rights reserved
        </p>
      </div>
    </div>
  );
}
