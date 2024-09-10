import React from "react";
import logo from "../../assets/clean-my-space-ltd-abuja-logo.png";
import Button from "../Button/Button";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="my_container bg-[#F3F3F3] rounded-[30px] p-[15px] md:p-[30px] xl:p-[60px] border border-[#939393]">
        <div className="flex flex-col md:flex-row gap-[40px] items-center md:justify-between lg:gap-[70px]">
          <div className="flex flex-col items-center md:items-start max-w-[549px]  lg:text-left">
            <Image src={logo} alt="Logo" className="max-w-full h-auto" />
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://forms.gle/zr3cv7GJvX4dFswC8" 
              className="contact_heading pt-[25px] pb-[12px]"
            >
              Subscribe to our newsletter
            </a>
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://forms.gle/zr3cv7GJvX4dFswC8" 
              className="contact_heading pt-[25px] pb-[12px]">
              <Button label="Subscribe" />
              </a>
            <div className="flex flex-col items-center md:items-start lg:flex-row gap-[20px] pt-[25px]">
              <div className="border-t lg:border-r lg:border-t-0 border-[#D9D9D9] pt-[10px] lg:pt-0 pr-[20px]">
                <p className="contact_heading md:text-start text-center">
                  +2349119178436
                </p>
                <a href="mailto:business@cleanmyspace.ng">
                  <p className="underline text-[18px] leading-[50px]">
                    business@cleanmyspace.ng
                  </p>
                </a>
              </div>
              <div className=" pt-[10px] lg:pt-0">
                <p className="contact_heading">+2349024819164</p>
                <a href="mailto:ceo@cleanmyspace.ng">
                  <p className="underline text-[18px] leading-[50px]">
                    ceo@cleanmyspace.ng
                  </p>
                </a>
              </div>
            </div>
            <div className="pt-[20px] text-center md:text-start">
              <p className="text-[18px] leading-[30px]">
                Citec estate, No29 East Rd, Mbora, Abuja 900102, Federal Capital
                Territory
              </p>
              <a
                href="https://maps.app.goo.gl/k5nxftnYKaZBt27E6"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[18px] leading-[30px]"
              >
                VIEW MAP
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[70px]  lg:text-left">
            <div>
              <h3 className="contact_heading pb-[12px] text-center md:text-start">
                Useful Links
              </h3>
              <Link href="/Home">
                <p className="text-[18px] leading-[40px] text-center md:text-start">
                  Home
                </p>
              </Link>
              <Link href="/AboutUs">
                <p className="text-[18px] leading-[40px] text-center md:text-start">
                  About Us
                </p>
              </Link>
              <Link href="/Services">
                <p className="text-[18px] leading-[40px] text-center md:text-start">
                  Services
                </p>
              </Link>
              <Link href="/Projects">
                <p className="text-[18px] leading-[40px] text-center md:text-start">
                  Projects
                </p>
              </Link>
              <Link href="/Contacts">
                <p className="text-[18px] leading-[40px] text-center md:text-start">
                  Contacts
                </p>
              </Link>
            </div>
            <div>
              <h3 className="contact_heading pb-[12px] text-center md:text-start">
                Services
              </h3>
              <p className="text-[18px] leading-[40px] text-center md:text-start">
                House Cleaning
              </p>
              <p className="text-[18px] leading-[40px] text-center md:text-start">
                Oven Cleaning
              </p>
              <p className="text-[18px] leading-[40px] text-center md:text-start">
                Commercial Cleaning
              </p>
              <p className="text-[18px] leading-[40px] text-center md:text-start">
                Construction Cleaning
              </p>
              <p className="text-[18px] leading-[40px] text-center md:text-start">
                Office Cleaning
              </p>
              <p className="text-[18px] leading-[40px] text-center md:text-start">
                Residential Cleaning
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1170px] mx-auto py-[28px] flex flex-col lg:flex-row items-center justify-between gap-[20px] text-center lg:text-left">
        <p className="text-[12px] leading-[20px] lg:leading-[50px]">
          Copyright@2024 CMS Clean. All Rights reserved.
        </p>
        <div className="flex items-center justify-center gap-[10px]">
          <div className="w-[48px] h-[48px] rounded-full bg-[#E7F7FD] flex items-center justify-center">
            <FaFacebookF className="text-[#4267B2] text-[18px]" />
          </div>
          <a
            href="https://www.instagram.com/cleanmyspaceltd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-[48px] h-[48px] rounded-full bg-[#F8F0FB] flex items-center justify-center">
              <FaInstagram className="text-[#BB6BD9] text-[18px]" />
            </div>
          </a>
        </div>
        <a href="https://www.instagram.com/volume.ng/" 
          target="_blank"
          rel="noopener noreferrer" 
          className="text-[12px] leading-[20px] lg:leading-[50px]">

          Developed by Volume Technologies International Limited
        </a>
      </div>
    </>
  );
}

export default Footer;
