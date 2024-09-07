import React from "react";
import banner from "../../assets/Banner.png";
import Image from "next/image";
function Banner({ heading, rightImage, title, alt }) {
  return (
    <div
      className="w-full py-[20px] md:pt-[30px] md:pb-0 bg-cover bg-center bg-no-repeat flex items-center "
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="my_container flex items-center text-center md:text-start justify-center md:justify-between w-full">
        <div className="lg:w-[600px]">
          <p className="lg:text-[24px] text-[18px] font-semibold text-[#0073AC]">{title}</p>
          <h1 className="heading_2 text-2xl md:text-7xl">
            {heading}
          </h1>
        </div>
        <div className="hidden md:block self-end">
          <Image src={rightImage} className="w-60 md:w-96 h-auto" alt={alt} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
