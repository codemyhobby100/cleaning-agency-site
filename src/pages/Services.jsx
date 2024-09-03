import React, { useState } from "react";
import serviceImg1 from "../assets/clean-my-space-ltd-service-page-company-office.png";
import serviceImg2 from "../assets/clean-my-space-ltd-company-office-interior.png";
import star from "../assets/star.png";
import Question from "../assets/Question.png";
import checkBox from "../assets/checkBox.png";
import cleaner2 from "../assets/clean-my-space-ltd-service-page-main-image.png";
import Banner from "../components/Banner/Banner";
import FAQ from "../components/FAQ/FAQ";
import CurrentServices from "../components/CurrentServices/CurrentServices";
import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import CustomHead from "@/components/CustomHead/CustomHead";

function Services() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Layout>
      {/* Banner */}
      <CustomHead
        title={"Our Cleaning Services | Cleaning Services in Abuja"}
        description={
          "Explore our range of cleaning services, including janitorial and laundry services in Abuja. Clean My Space Ltd provides professional cleaning solutions for homes and offices"
        }
      ></CustomHead>
      <Banner
        heading="Our Cleaning Services in Abuja"
        title="Welcome to Clean My Space Ltd."
        rightImage={cleaner2}
        alt="Main image on Clean My Space Ltd service page – highlighting our comprehensive cleaning services in Abuja."
      />

      {/* Current Services */}

      <CurrentServices />

      {/* Additional Services section */}

      <div className="my_container pt-[80px] ">
        <h2 className="heading_2 text-center pb-[50px]">Additional Services</h2>
        <div className="flex flex-wrap gap-[20px] justify-center">
          <div className="w-full lg:w-[32%] border border-[#939393] rounded-[20px] bg-[#EFF2FC] p-[25px]">
            <h3 className="text-[#1F1F1F] text-[22px] leading-[26px] pb-[20px] font-semibold border-b border-[#939393]">
              Eco-Friendly Initiatives
            </h3>
            <div className="flex gap-[10px] py-[25px]">
              <Image
                src={checkBox}
                className="size-[22px] text-[#48BEF7]"
                alt=""
              />
              <p className="text text-[16px]">
                Expanded use of sustainable and biodegradable cleaning products
              </p>
            </div>
            <div className="flex gap-[10px] pb-[25px]">
              <Image
                src={checkBox}
                className="size-[22px] text-[#48BEF7]"
                alt=""
              />
              <p className="text text-[16px]">
                Green certification for all cleaning processes
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[32%] border border-[#939393] rounded-[20px] bg-[#FFE9CA] p-[25px]">
            <h3 className="text-[#1F1F1F] text-[22px] leading-[26px] pb-[20px] font-semibold border-b border-[#939393]">
              Enhanced Technology
            </h3>
            <div className="flex  gap-[10px] py-[25px]">
              <Image
                src={checkBox}
                className="size-[22px] text-[#48BEF7]"
                alt=""
              />
              <p className="text text-[16px]">
                Introduction of advanced cleaning equipment and tools
              </p>
            </div>
            <div className="flex gap-[10px] pb-[25px]">
              <Image
                src={checkBox}
                className="size-[22px] text-[#48BEF7]"
                alt=""
              />
              <p className="text text-[16px]">
                Implementation of smart cleaning solutions and scheduling
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[32%] border border-[#939393] rounded-[20px] bg-[#FFE5F9] p-[25px]">
            <h3 className="text-[#1F1F1F] text-[22px] leading-[26px] pb-[20px] font-semibold border-b border-[#939393]">
              Customized Package
            </h3>
            <div className="flex gap-[10px] py-[25px]">
              <Image
                src={checkBox}
                className="size-[22px] text-[#48BEF7]"
                alt=""
              />
              <p className="text text-[16px]">
                Tailored cleaning solutions for unique client needs
              </p>
            </div>
            <div className="flex gap-[10px] pb-[25px]">
              <Image
                src={checkBox}
                className="size-[22px] text-[#48BEF7]"
                alt=""
              />
              <p className="text text-[16px]">
                Subscription-based services for regular, hassle-free cleaning
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[32%] border border-[#939393] rounded-[20px] bg-[#F8F8F5] p-[25px] lg:self-center">
            <h3 className="text-[#1F1F1F] text-[22px] leading-[26px] pb-[20px] font-semibold border-b border-[#939393]">
              Special Event Services
            </h3>
            <div className="flex gap-[10px] py-[25px]">
              <Image
                src={checkBox}
                className="size-[22px] text-[#48BEF7]"
                alt=""
              />
              <p className="text text-[16px]">
                Pre- and post-event cleaning for weddings, parties, and
                corporate events
              </p>
            </div>
            <div className="flex gap-[10px] pb-[25px]">
              <Image
                src={checkBox}
                className="size-[22px] text-[#48BEF7]"
                alt=""
              />
              <p className="text text-[16px]">
                Specialized setup and teardown cleaning
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[32%] border border-[#939393] rounded-[20px] bg-[#FFFFFF] p-[25px] lg:self-center">
            <h3 className="text-[#1F1F1F] text-[22px] leading-[26px] pb-[20px] font-semibold border-b border-[#939393]">
              Additional Specialized Cleaning
            </h3>
            <div className="flex gap-[10px] py-[25px]">
              <Image
                src={checkBox}
                className="size-[22px] text-[#48BEF7]"
                alt=""
              />
              <p className="text text-[16px]">HVAC System Cleaning</p>
            </div>
            <div className="flex gap-[10px] pb-[25px]">
              <Image
                src={checkBox}
                className="size-[22px] text-[#48BEF7]"
                alt=""
              />
              <p className="text text-[16px]">Tile and Grout Cleaning</p>
            </div>
            <div className="flex gap-[10px] pb-[25px]">
              <Image
                src={checkBox}
                className="size-[22px] text-[#48BEF7]"
                alt=""
              />
              <p className="text text-[16px]">Odor Removal Services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service image section */}
      <div className="my_container py-[100px] ">
        <Image
          src={serviceImg1}
          className="object-cover"
          alt="Inside Clean My Space Ltd company office – showcasing our professional cleaning services."
        />
      </div>

      {/* Job done section */}
      <div className="max-w-[971px] mx-[10px] md:mx-[20px] lg:mx-auto flex flex-col lg:flex-row gap-[20px] lg:pb-[160px] pb-[80px]">
        <div className="lg:max-w-[496px]">
          <p className="text text-[#4F4F4F]">
            We promise to prioritize your and surpass your expectations at every
            turn. Whether you’re seeking professional Expertise, Creative
            solutions or reliable support.
            <br />
            <br />
            We promise to prioritize your and surpass your expectations at every
            turn. Whether you’re seeking professional Expertise, Creative
            solutions or reliable support.
          </p>
        </div>
        <div className="lg:max-w-[475px] border border-[#939393] rounded-[20px] flex ">
          <div className="p-[20px] md:p-[40px] border-r border-[#939393]">
            <h3 className="md:text-[60px] text-[50px] leading-[72px] pb-[15px] font-bold font-secondary">
              120+
            </h3>
            <p className="font-medium text-[20px] md:text-[24px] paragraph leading-[33px]">
              Customers Across Abuja
            </p>
          </div>
          <div className="md:p-[40px] p-[20px]">
            <h3 className="md:text-[60px] text-[50px] leading-[72px] pb-[15px] font-bold font-secondary">
              100+
            </h3>
            <p className="font-medium text-[20px] md:text-[24px] paragraph leading-[33px]">
              Office Cleaning Projects
            </p>
          </div>
        </div>
      </div>

      {/* Benefits section */}

      <div className="my_container bg-[#E1EEE8] border border-[#939393] flex flex-col lg:flex-row rounded-[30px] lg:mb-[160px] mb-[80px]">
        <div className="lg:w-1/2 w-full">
          <Image
            src={serviceImg2}
            className="p-[40px] w-full"
            alt="Interior of Clean My Space Ltd company office – showcasing the workspace where cleaning services are managed and coordinated."
          />
        </div>
        <div className="lg:w-1/2 w-full flex flex-col justify-center p-[20px] lg:p-[40px]">
          <h3 className="heading_3 pt-[40px] pb-[13px]">Benefits</h3>
          <p className="font-medium text-[20px] leading-[28px] pb-[40px]">
            Over 120 satisfied clients trust our exceptional cleaning services.
          </p>

          <div className="flex gap-[15px] pb-[20px]">
            <Image src={star} className="w-[25px] h-[25px]" alt="Star" />
            <p className="text">
              <b> Rigorous safety measures: </b>Our team practices social
              distancing and uses comprehensive sanitization techniques.
            </p>
          </div>
          <div className="flex gap-[15px] pb-[20px]">
            <Image src={star} className="w-[25px] h-[25px]" alt="Star" />
            <p className="text">
              <b>Detailed cleaning:</b> We ensure thorough cleaning and
              disinfection of sinks, drains, and faucets.
            </p>
          </div>
          <div className="flex gap-[15px]">
            <Image src={star} className="w-[25px] h-[25px]" alt="Star" />
            <p className="text">
              <b>Seamless service:</b> Experience our top-notch cleaning with
              minimal contact, ensuring your convenience and safety.
            </p>
          </div>
        </div>
      </div>

      {/* faq section */}
      <div className="my_container pb-[160px] flex items-center flex-col lg:flex-row ">
        <FAQ />
        <Image
          src={Question}
          className="w-[35%] h-[35%] pt-[50px] lg:pt-0 lg:pl-[116px] mx-auto lg:mx-0"
          alt=""
        />
      </div>
    </Layout>
  );
}

export default Services;
