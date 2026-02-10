import React from "react";

import walmart from "../assets/logo/download.svg";
import framer from "../assets/logo/download (1).svg";
import huawei from "../assets/logo/download (2).svg";
import instagram from "../assets/logo/download (3).svg";
import microsoft from "../assets/logo/download (4).svg";

export default function TrustedBy() {

  const logos = [
    walmart,
    framer,
    huawei,
    instagram,
    microsoft,
  ];

  return (

    <div className="w-full bg-black py-6 px-8 overflow-hidden">

      <div className="max-w-7xl px-8 mx-auto flex items-center gap-8">

        <span className="text-gray-400 whitespace-nowrap">
          Trusted by:
        </span>

        <div className="overflow-hidden flex-1 ">

          <div className="flex gap-16 logo-scroll items-center w-max">

            {/* first set */}
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                className="h-6 opacity-70 hover:opacity-100 transition"
              />
            ))}

            {/* duplicate set for infinite loop */}
            {logos.map((logo, index) => (
              <img
                key={"duplicate-" + index}
                src={logo}
                className="h-5 opacity-70 hover:opacity-100 transition"
              />
            ))}

          </div>

        </div>

      </div>

    </div>

  );
}
