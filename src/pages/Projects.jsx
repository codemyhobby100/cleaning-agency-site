import React from "react";
import Banner from "../components/Banner/Banner";
import cleaner3 from "../assets/done/cleanmyspace5.webp";
import { RiMapPinLine } from "react-icons/ri";
import Button from "../components/Button/Button";
import Layout from "@/components/Layout/Layout";
import CustomHead from "@/components/CustomHead/CustomHead";

function Projects() {
  return (
    <Layout>
      <CustomHead
        title={
          "Our Cleaning Projects | recent projects #1 cleaning company in Abuja today!"
        }
        description={
          "Top-notch cleaning projects in Abuja with Clean My Space Ltd. We offer expert office and commercial cleaning tailored to your needs. Contact the #1 cleaning company in Abuja today!"
        }
        image="https://www.cleanmyspace.ng/_next/static/media/cleanmyspace1.073937be.webp"
        imageWidth="1200"
        imageHeight="630"
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Moscow Underground",
            description: "The future begins with happy clients.",
            
            creator: {
              "@type": "Organization",
              name: "Clean My Space Ltd"
            },
            datePublished: "2024-08-18",
            url: "https://www.cleanmyspace.ng/Projects",
            video: {
              "@type": "VideoObject",
              name: "Moscow Underground",
              description:
                "cleaning company in Abuja / Clean My Space Ltd / Moscow Underground",
              url: "https://youtu.be/6mdV8XoKZR0"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Tokyo Nightlife",
            description: "The future begins with happy clients.",
            creator: {
              "@type": "Organization",
              name: "Clean My Space Ltd"
            },
            datePublished: "2024-08-18",
            url: "https://www.cleanmyspace.ng/Projects",
            video: {
              "@type": "VideoObject",
              name: "Tokyo Nightlife",
              description:
                "cleaning company in Abuja / Clean My Space Ltd / Moscow Underground",
              url: "https://youtu.be/qwnLP_wHvTY"
            }
          }
        ]}
      ></CustomHead>
      {/* banner section */}
      <Banner
        heading=" Our Cleaning Projects"
        title="Welcome to Clean My Space Ltd."
        rightImage={cleaner3}
      />

      {/* Recent Projects section */}

      <div className="my_container">
        <h2 className="heading_2 text-center py-[80px]">Recent Projects</h2>
        <div className="flex flex-col lg:flex-row gap-[20px] pb-[160px]">
          {/* First Project */}
          <div className="lg:w-1/2 w-full flex flex-col items-center">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/6mdV8XoKZR0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="rounded-[15px]"
            ></iframe>
            <h3 className="text-[24px] font-semibold leading-[28px] pb-[10px] pt-[20px] text-center lg:text-left">
              Tokyo Nightlife Abuja
            </h3>
            <div className="flex gap-[10px] justify-center lg:justify-start">
              <RiMapPinLine className="size-[20px]" />
              <p className="text text-center lg:text-left">
                5 Lobito Cres, Wuse, Abuja 900288, Federal Capital
              </p>
            </div>
          </div>

          {/* Second Project */}
          <div className="lg:w-1/2 w-full flex flex-col items-center">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/qwnLP_wHvTY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="rounded-[15px]"
            ></iframe>
            <h3 className="text-[24px] font-semibold leading-[28px] pb-[10px] pt-[20px] text-center lg:text-left">
              Moscow Underground
            </h3>
            <div className="flex gap-[10px] justify-center lg:justify-start">
              <RiMapPinLine className="size-[20px]" />
              <p className="text text-center lg:text-left">
                35 Adetokunbo Ademola Cres, Wuse, Abuja 904101, Federal Capital
                Territory
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my_container flex flex-col lg:flex-row gap-[50px] pb-[160px]">
        <div className="lg:max-w-[535px] flex flex-col items-center lg:items-start w-full mb-[50px] lg:mb-0">
          <p className="border border-black inline text py-[10px] px-[20px] rounded-[20px] text-center">
            We are expert
          </p>
          <h2 className="heading_2 lg:text-[42px] lg:leading-[50px] pt-[15px] text-center lg:text-start">
            Transforming Spaces with Satisfied Clients in Abuja
          </h2>
          <p className="text pt-[30px] pb-[40px] text-center lg:text-start">
            At Clean My Space Ltd, we’re dedicated to exceeding your
            expectations with every project. Whether you need expert cleaning
            services, innovative solutions, or dependable support, we deliver
            top-notch results tailored to your needs.
          </p>
          <Button label="More information's here" />
        </div>

        <div className="lg:max-w-[576px] w-full">
          <div className="flex flex-col items-center lg:flex-row gap-[20px] pb-[20px]">
            <div className="bg-[#DBECFF] border border-[#939393] py-[18px] px-[50px] rounded-[30px] mb-[20px] lg:mb-0 lg:max-w-[278px]">
              <h3 className="font-secondary font-bold text-[55px] xl:text-[60px] 2xl:text-[72px]  leading-[86px] pb-[10px]">
                120+
              </h3>
              <p className=" 2xl:text-[20px] xl:text-[18px] text-[20px] font-medium leading-[28px] paragraph pb-[30px]">
                Customers all Across Abuja
              </p>
            </div>
            <div className="bg-[#FFE5F9] border border-[#939393] py-[18px] px-[50px] rounded-[30px] mb-[20px] lg:mt-[-50px] lg:mb-[50px] lg:max-w-[278px]">
              <h3 className="font-secondary font-bold text-[55px] xl:text-[60px] 2xl:text-[72px]  leading-[86px] pb-[10px]">
                5X
              </h3>
              <p className="2xl:text-[20px] xl:text-[18px] text-[20px] font-medium leading-[28px] paragraph pb-[30px]">
                Growth each and every year
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-[#FFE9CA] border border-[#939393] py-[18px] px-[50px] rounded-[30px] lg:ml-[100px] lg:max-w-[278px]">
              <h3 className="font-secondary font-bold text-[55px] xl:text-[60px] 2xl:text-[72px] leading-[86px] pb-[10px]">
                95%
              </h3>
              <p className="2xl:text-[20px] xl:text-[18px] text-[20px] font-medium leading-[28px] paragraph pb-[30px]">
                Customer Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
