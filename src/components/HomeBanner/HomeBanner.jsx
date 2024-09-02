import React from "react";
import homeBanner from "../../assets/HomeBanner.png";
import worker4 from "../../assets/home-banner.png";
import { RiMapPinLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import Image from "next/image";
function HomeBanner() {
  return (
    <>
      <div
        className="w-full md:px-[30px] py-[30px] md:py-[70px] lg:pt-[40px] lg:pb-[80px] bg-cover bg-no-repeat bg-center flex items-center "
        style={{ backgroundImage: `url(${homeBanner.src})` }}
      >
        <div className="my_container flex lg:flex-row gap-[50px] flex-col items-center ">
          <div className="flex flex-col items-center lg:items-start">
            <div className="">
              <h1 className="main_heading mobile:relative z-0 text-center lg:text-left">
                Your Space,<br /> We Clean
              </h1>
              <p className="text-[16px] leading-[34px] paragraph px-[10px] lg:max-w-[849px] lg:mx-auto pt-[40px] text-center lg:text-left">
                Looking for the best cleaning company in Abuja? Clean My Space
                Ltd. offers top-notch house and office cleaning services. Trust
                our expert team to keep your space spotless and inviting.
                Reliable, efficient, and affordable cleaning solutions in Abuja.
              </p>
            </div>
            <div className="md:max-w-[649px] w-full  border border-[#939393] mt-[35px] bg-[#FAFAFA] p-[15px] rounded-[20px] flex flex-col gap-[20px] lg:gap-[10px] items-center lg:items-start lg:flex-row">
              <div className="w-full">
                <div className="flex gap-[10px] items-center">
                  <RiMapPinLine className="text-[18px]" />
                  <p className="text-[18px] leading-[34px] font-medium">
                    Enter Location
                  </p>
                </div>
                <div className="pl-[25px]">
                  <select className="w-full outline-none focus:outline-none bg-[#FAFAFA] border-b border-[#D9D9D9] py-[8px] text-[16px]">
                    <option value="" disabled selected>
                      Write here
                    </option>
                    <option value="Abuja, Nigeria">Abuja, Nigeria</option>
                  </select>
                </div>
              </div>

              <div className="w-full">
                <div className="flex gap-[10px] items-center">
                  <BiCategory className="text-[18px]" />
                  <p className="text-[18px] leading-[34px] font-medium">
                    Enter Service
                  </p>
                </div>
                <div className="pl-[25px]">
                  <select className="w-full outline-none focus:outline-none bg-[#FAFAFA] border-b  border-[#D9D9D9] py-[8px] text-[16px]">
                    <option className="" value="" disabled selected>
                      Write here
                    </option>
                    <option value="House Cleaning">House Cleaning</option>
                    <option value="Oven Cleaning">Oven Cleaning</option>
                    <option value="Commercial Cleaning">
                      Commercial Cleaning
                    </option>
                    <option value="Construction Cleaning">
                      Construction Cleaning
                    </option>
                    <option value="Office Cleaning">Office Cleaning</option>
                    <option value="Residential Cleaning">
                      Residential Cleaning
                    </option>
                  </select>
                </div>
              </div>

              <a href="tel:+23409119178436">
                <div className="p-[20px] bg-[#0073AC] text-white inline-flex items-center justify-center rounded-[14px] cursor-pointer">
                  <FiPhone className="text-[18px]" />
                </div>
              </a>
            </div>
          </div>
          <div className="mt-5 lg:mt-0">
            <Image src={worker4} className="" alt="Worker" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
