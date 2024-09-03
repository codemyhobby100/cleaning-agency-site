import React, { useRef, useState } from "react";
import Banner from "../components/Banner/Banner";
import { MdPersonOutline } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import Button from "../components/Button/Button";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiMapPinLine } from "react-icons/ri";
import emailjs from "@emailjs/browser"; // Import emailjs correctly
import Swal from "sweetalert2";
import cleaner4 from "../assets/Contact-Clean-My-Space-Ltd-Abuja.png";
import Layout from "@/components/Layout/Layout";
import CustomHead from "@/components/CustomHead/CustomHead";

function Contacts() {
  const [inputValue, setInputValue] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kos25vx",
        "template_nza97zn",
        form.current,
        "7V7JdsBg6f9KC6ddk"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Great!",
            text: "Your message has been sent successfully",
            footer: '<a href="#">Go home</a>'
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Layout>
      <CustomHead
        title={
          "Contact Clean My Space Ltd | Leading Cleaning Services in Abuja"
        }
        description={
          "Get in touch with Clean My Space Ltd for top-notch cleaning services in Abuja. Fill out the contact form or call us at (+234)09119178436"
        }
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Clean My Space Ltd",
          url: "https://www.cleanmyspace.ng/",
          sameAs: [
            "https://www.instagram.com/cleanmyspaceltd/",
            "https://www.youtube.com/@cleanmyspaceabuja",
            "https://www.linkedin.com/company/clean-my-space-ltd/"
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "Customer Service",
              telephone: "+2349024819164",
              email: "ceo@cleanmyspace.ng"
            }
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "No29 East Rd, Citec estate, Mbora",
            addressLocality: "Abuja",
            addressRegion: "FCT",
            postalCode: "900102",
            addressCountry: "Nigeria"
          }
        }}
      ></CustomHead>
      {/* Banner section */}
      <Banner
        heading="Contact Clean My Space Ltd"
        title="Welcome to Clean My Space Ltd"
        rightImage={cleaner4}
        alt="Contact Clean My Space Ltd for top cleaning services in Abuja. Our team is ready to assist you with residential and commercial cleaning."
      />

      <div className="my_container py-[80px] lg:py-[160px] flex items-center flex-col lg:flex-row gap-[50px]">
        {/* Form Section */}
        <form
          ref={form}
          onSubmit={sendEmail} // Handle the submit event on the client-side
          className="flex flex-wrap gap-4 max-w-[700px] border border-[#939393] rounded-[20px] px-[20px] lg:px-[50px] pt-[50px] lg:pt-[90px] pb-[40px] lg:pb-[80px]"
        >
          <div className="w-full lg:w-[calc(50%-8px)] pb-[40px]">
            <div className="border-b border-[#C6C6C6] py-2 flex items-center">
              <MdPersonOutline className="text-[25px] text-[#200E32] mr-2" />
              <input
                type="text"
                required="required"
                name="name"
                placeholder="Your Name"
                className="w-full bg-transparent focus:outline-none text-[18px] placeholder-[#6A6A6A]"
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full lg:w-[calc(50%-8px)] pb-[40px]">
            <div className="border-b border-[#C6C6C6] py-2 flex items-center">
              <IoMailOutline className="text-[25px] text-[#200E32] mr-2" />
              <input
                type="email"
                required="required"
                name="email"
                placeholder="Your Email"
                className="w-full bg-transparent focus:outline-none text-[18px] placeholder-[#6A6A6A]"
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full lg:w-[calc(50%-8px)] pb-[40px]">
            <div className="border-b border-[#C6C6C6] py-2 flex items-center">
              <FiPhone className="text-[25px] text-[#200E32] mr-2" />
              <input
                type="phone"
                required="required"
                name="phone"
                placeholder="Phone"
                className="w-full bg-transparent focus:outline-none text-[18px] placeholder-[#6A6A6A]"
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full lg:w-[calc(50%-8px)] pb-[40px]">
            <div className="border-b border-[#C6C6C6] py-2 flex items-center">
              <BiCategory className="text-[25px] text-[#200E32] mr-2" />
              <input
                type="text"
                required="required"
                name="service"
                placeholder="Enter service"
                className="w-full bg-transparent focus:outline-none text-[18px] placeholder-[#6A6A6A]"
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          </div>
          <p className="contact_heading">Drop us a line for us</p>
          <div className="w-full pb-[30px]">
            <div className="border-b border-[#C6C6C6] py-2 flex">
              <IoMailOutline className="text-[25px] text-[#200E32] mb-2 mr-[10px]" />
              <textarea
                name="message"
                required="required"
                placeholder="Enter your message"
                className="w-full bg-transparent focus:outline-none text-[18px] placeholder-[#6A6A6A] resize-none"
                rows="4"
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full">
            <Button label="Get In Touch" type="submit" className="mb-[45px]" />{" "}
            <br />
            <a
              href="https://www.instagram.com/cleanmyspaceltd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                label="Instagram"
                className="bg-inherit border border-[#666666] rounded-[10px]"
              />
            </a>
          </div>
        </form>

        {/* Info Section */}
        <div className="flex flex-col gap-[40px]">
          <div className="border-b pb-[40px] border-[#D9D9D9] w-full">
            <div className="p-[20px] bg-[#DBECFF] border border-[#939393] text-black inline-flex items-center justify-center rounded-[20px]">
              <TfiHeadphoneAlt className="text-[18px]" />
            </div>
            <h2 className="contact_heading">Support Request</h2>
            <p className="text">Get help now! Contact our support team</p>
            <p className="text-[20px] leading-[50px] underline">Explore More</p>
          </div>
          <div className="border-b pb-[40px] border-[#D9D9D9] w-full">
            <div className="p-[20px] bg-[#FFE5F9] border border-[#939393] text-black inline-flex items-center justify-center rounded-[20px]">
              <FiPhone className="text-[18px]" />
            </div>
            <h2 className="contact_heading">Need to help</h2>
            <p className="text-[32px] leading-[50px]">+234 911 917 8436</p>
            <p className="text-[20px] leading-[50px] underline">
              business@cleanmyspace.ng
            </p>
          </div>
          <div className="border-b pb-[40px] border-[#D9D9D9] w-full">
            <div className="p-[20px] bg-[#FFE9CA] border border-[#939393] text-black inline-flex items-center justify-center rounded-[20px]">
              <RiMapPinLine className="text-[18px]" />
            </div>
            <h2 className="contact_heading">Location Info</h2>
            <p className="text">
              Citec estate, No29 East Rd, Mbora, Abuja 900102, Federal Capital
              Territory
            </p>
            <a
              href="https://maps.app.goo.gl/k5nxftnYKaZBt27E6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-[20px] leading-[50px] underline">
                Location on map
              </p>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contacts;
