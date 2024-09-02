import React from "react";
import banner from "../../assets/Banner.png";
import Image from "next/image";
function Banner({ heading, rightImage }) {
  return (
    <div
      className="w-full py-[20px] md:pt-[30px] md:pb-0 bg-cover bg-center bg-no-repeat flex items-center "
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="my_container flex items-center text-center md:text-start justify-center md:justify-between w-full">
        <div>
          <p className="text-[24px] font-semibold text-[#0073AC]">{heading}</p>
          <h1 className="heading_2">
            Welcome to Clean <br />
            My Space Ltd.
          </h1>
        </div>
        <div className="hidden md:block self-end">
          <Image src={rightImage} className="w-full" alt="Right Image" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
