import React from "react";
import Button from "../components/Button/Button";
import AboutImg1 from "../assets/clean-my-space-ltd-ceo-emmanuel-azubuike-nwaka.png";
import AboutImg2 from "../assets/clean-my-space-ltd-about-us-workers-smiling.png";
import AboutImg3 from "../assets/clean-my-space-ltd-worker-smiling-about-us.png";
import checkBox from "../assets/checkBox.png";
import AboutIcon from "../assets/aboutIcon.png";
import cleaner1 from "../assets/clean-my-space-ltd-about-us-workers-back-to-back-banner.png";
import tree from "../assets/tree.png";
import Banner from "../components/Banner/Banner";
import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import Link from "next/link";
import CustomHead from "@/components/CustomHead/CustomHead";

const services = [
  {
    title: "Flexible Scheduling",
    description:
      "We understand the importance of convenience, offering flexible scheduling to meet your unique needs.",
    imageSrc: checkBox
  },
  {
    title: "Experienced Team",
    description:
      "Our team of experts brings a wealth of experience and professionalism to every job, making us a top choice among cleaning firms in Abuja.",
    imageSrc: checkBox
  },
  {
    title: "Eco-Friendly Cleaning",
    description:
      "We prioritize the use of environmentally safe products and methods, ensuring that our services are both effective and sustainable.",
    imageSrc: checkBox
  },
  {
    title: "Commitment to Excellence",
    description:
      "We are committed to providing the best services, and consistently delivering results that exceed expectations.",
    imageSrc: checkBox
  }
];

function AboutUs() {
  return (
    <Layout>
      {/* Banner */}
      <CustomHead
        title={"About Clean My Space Ltd | Leading Cleaning Company in Abuja"}
        description={
          "Learn more about Clean My Space Ltd, a trusted cleaning firm in Abuja committed to delivering top-notch cleaning services to residential and commercial clients"
        }
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Clean My Space Ltd",
          url: "https://www.cleanmyspace.ng/AboutUs",
          description:
            "The best cleaning company in Abuja! Clean My Space Ltd. offers top-notch residential and commercial cleaning services.",
          foundingDate: "2022-08-18",
          founders: [
            {
              "@type": "Person",
              name: "Emmanuel Azubuike Nwaka"
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
      <Banner
        title="Welcome to Clean My Space Ltd."
        heading="About Clean My Space Ltd."
        rightImage={cleaner1}
        alt="Clean My Space Ltd team members standing back-to-back, representing collaboration and teamwork on the About Us page."
      />

      {/* welcome section */}
      <div className="my_container flex flex-col lg:flex-row pt-[90px] pb-[50px] md:pb-[160px] gap-[20px]">
        <div className=" lg:max-w-[377px] flex flex-col justify-between">
          <h2 className="font-secondary font-bold text-[36px] lg:text-[44px] leading-[50px] lg:leading-[70px] text-center lg:text-left">
            Welcome to Clean My Space Ltd.
          </h2>
          <Image
            src={tree}
            className="w-full pt-[50px] lg:w-[303px] hidden lg:block"
            alt=""
          />
        </div>
        <div className="max-w-full lg:max-w-[773px]">
          <p className="text text-[#7A7A7A] text-[14px] lg:text-[16px]">
            Founded on August 18, 2022, Clean My Space Ltd. is a leading
            cleaning company dedicated to creating pristine and healthy
            environments. Born out of a deep passion for maintaining clean
            spaces, our journey began with a simple but powerful mission: to
            promote eco-friendly living through exceptional cleaning services.
          </p>

          {/* mission vision section */}
          <div className="pt-[50px] flex flex-col lg:flex-row gap-[20px]">
            <div className="lg:w-1/2 border border-[#939393] rounded-[40px]">
              <h2 className="text-[32px] leading-[50px] font-bold text-center pt-[30px] font-secondary">
                Our Mission
              </h2>
              <p className="text text-[16px] text-center p-[10px] md:p-[32px]">
                “ At Clean My Space Ltd, our mission is to provide exceptional
                cleaning services that enhance the comfort and well-being of our
                clients. We are dedicated to delivering meticulous, reliable,
                and eco-friendly cleaning solutions while fostering a culture of
                integrity, respect, and professionalism. Our goal is to create
                pristine environments that contribute to healthier and happier
                living and working spaces. ”
              </p>
            </div>
            <div className="lg:w-1/2 border border-[#939393] rounded-[40px]">
              <h2 className="text-[32px] leading-[50px] font-bold text-center pt-[30px] font-secondary">
                Our Vision
              </h2>
              <p className="text text-[16px] text-center p-[10px] md:p-[32px]">
                “ Our vision at Clean My Space Ltd is to be the leading provider
                of innovative and sustainable cleaning services in Nigeria,
                renowned for our commitment to excellence and customer
                satisfaction. We aspire to set new standards in the cleaning
                industry by leveraging cutting-edge technology, eco-friendly
                practices, and a passionate team, ensuring that every space we
                touch is not only clean but also contributes to a better, more
                sustainable world. ”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* about ceo section */}
      <div className="max-w-[970px] md:mx-[20px] mx-[10px] lg:mx-auto pt-[45px] pl-[45px] mb-[50px] md:mb-[160px] bg-[#DBECFF] border border-[#939393] rounded-[20px] flex flex-col lg:flex-row lg:items-end">
        <div className=" lg:max-w-[680px] w-full">
          <h3 className="font-secondary font-bold text-[32px] leading-[50px] pb-[10px]">
            About Our CEO
          </h3>
          <p className="text text-[#464646] pr-[20px] lg:pr-0">
            Emmanuel Azubuike Nwaka, the visionary behind Clean My Space Ltd.,
            is an ambitious entrepreneur with a passion for transforming
            environments through meticulous cleaning. Originating from Kwale,
            Delta State, Emmanuel’s journey has taken him from his roots in the
            vibrant Delta region to the bustling city of Abuja, FCT, where he
            currently resides.
            <br /> What began as a personal hobby for Emmanuel—a deep love for
            cleaning—evolved into the driving force behind the establishment of
            Clean My Space Ltd. His dedication to creating clean and healthy
            spaces reflects his broader commitment to fostering eco-friendly
            practices and enhancing community well-being. Under Emmanuel’s
            leadership, Clean My Space Ltd.
            <br /> has grown into a trusted cleaning firm, known for blending
            passion, professionalism, and environmental consciousness. His
            ambitious vision and entrepreneurial spirit are the cornerstones of
            our company’s mission to deliver outstanding cleaning services that
            are both effective and sustainable. With a keen eye for detail and a
            relentless drive for excellence, Emmanuel continues to steer Clean
            My Space Ltd. towards new heights, ensuring that every space we
            touch is left spotless and contributes positively to a cleaner,
            greener future.
          </p>
          <h3 className="font-semibold pt-[20px]  text-[24px] leading-[38px]">
            Emmanuel Azubuike Nwaka
          </h3>
          <p className="text-[14px] pb-[45px] font-medium">CEO</p>
        </div>
        <div className="flex md:items-center lg:items-end">
          <Image
            src={AboutImg1}
            className=" lg:w-full w-[40%] md:w-[27%]  "
            alt="Emmanuel Azubuike Nwaka, CEO of Clean My Space Ltd."
          />
        </div>
      </div>

      {/* About Cleaning Agency */}

      <div className="my_container pb-[80px] md:pb-[110px] lg:pb-[160px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-[30px]">
          <div className="col-span-1 flex flex-col items-center lg:items-start">
            <div className="p-[24px] bg-[#FFE9CA] border border-[#939393] rounded-[20px] flex gap-[20px] items-center">
              <div className="p-[15px] bg-white border border-[#000000] rounded-full">
                <Image
                  src={AboutIcon}
                  className="w-[30px] h-[30px]"
                  alt="Icon"
                />
              </div>
              <h3 className="text-[20px] leading-[30px] font-medium lg:max-w-[179px] text-center lg:text-left">
                We make the cleaning effortless
              </h3>
            </div>
            <Image
              src={AboutImg2}
              className="bg-[#FFE5F9] border border-[#D9D9D9] rounded-[30px] mt-[20px] lg:max-w-none"
              alt="Two Clean My Space Ltd workers smiling, representing the company's friendly and professional service in the About Us section. cleaning service"
            />
          </div>
          <div className="md:col-span-2 col-span-1">
            <div className="pb-[15px] text-center lg:text-left">
              <p className="border border-black inline-block py-[10px] px-[20px] rounded-[20px]">
                About Cleaning Agency
              </p>
              <h3 className="heading_2 pt-[10px]">
                Why Choose Clean My Space Ltd.?
              </h3>
              <div className="grid md:grid-cols-2 grid-cols-1 pt-[20px] border-b border-[#D9D9D9]">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-[10px] pb-[25px] justify-center lg:justify-start"
                  >
                    <div className="flex items-center gap-[10px]">
                      <Image
                        src={service.imageSrc}
                        className="w-[22px] h-[22px]"
                        alt="Checkbox"
                      />
                      <p className="text text-[16px]">{service.title}</p>
                    </div>
                    <p className="text text-[14px] pl-8 text-gray-600 text-left lg:text-left">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center lg:justify-start">
                <Link href={"/Contact"}>
                  <Button label="Contact us" className="mt-[20px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my_container pb-[80px] md:pb-[110px] lg:pb-[160px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:items-end items-center ">
          {/* First Row */}
          <div
            className="col-span-1 sm:col-span-2 lg:col-span-2 p-[20px] 
                  lg:border-r-0 lg:border-t-0 border-[#D9D9D9] 
                 border lg:border-l-0  lg:border-[#D9D9D9]"
          >
            <h2 className="text-[44px] leading-[52px] font-bold font-secondary text-center">
              Stories of Satisfaction and growth
            </h2>
          </div>
          <div
            className="col-span-1 p-[20px] 
                 border-t-0 lg:border-l lg:border-r-0 lg:border-t-0  
                 border border-[#D9D9D9]  lg:border-[#D9D9D9]"
          >
            <h2 className="text-[100px] leading-[120px] font-bold font-secondary text-center">
              120+
            </h2>
          </div>
          <div
            className="col-span-1 p-[20px] 
                 border-t-0 lg:border-l lg:border-t-0 border-[#D9D9D9] 
                 border lg:border-r-0  lg:border-[#D9D9D9]"
          >
            <p className="text-[20px] leading-[39px] font-semibold text-center">
              Empowering 120+ clients for success and satisfaction
            </p>
          </div>

          {/* Second Row */}
          <div
            className="col-span-1 p-[20px] 
                 border-t-0 lg:border-b-0 lg:border-l-0 lg:border-r lg:border-t-0 border-[#D9D9D9] 
                 border border-b-0 lg:border-[#D9D9D9]"
          >
            <h2 className="text-[100px] leading-[120px] font-bold font-secondary text-center">
              2+
            </h2>
          </div>
          <div
            className="col-span-1 sm:col-span-2 lg:col-span-3 p-[20px] 
                 border-t lg:border-l-0 lg:border-b-0 lg:border-r-0 lg:border-t-0 lg:border-[#D9D9D9] 
                 border border-[#D9D9D9] "
          >
            <p className="text-[20px] leading-[39px] font-semibold text-center">
              CMS Cleaning has 2+ years of experience with providing wide area
              of specialty services works listed below
            </p>
          </div>
        </div>
      </div>

      {/* contact us section */}

      <div className="my_container flex flex-col lg:flex-row pb-[160px] gap-[20px]">
        <div className="w-full lg:max-w-[575px] bg-[#FFE9CA] border border-[#939393] rounded-[40px] flex items-center justify-center">
          <h3 className="font-secondary font-bold text-[28px] md:text-[38px] leading-[60px] text-center p-[55px]">
            Expert cleaning, from deep cleans to post-construction, leaving your
            space pristine.
          </h3>
        </div>

        <div className="w-full lg:max-w-[575px] bg-[#DBECFF] border border-[#939393] rounded-[40px] flex items-end">
          <div className="lg:max-w-[355px] flex flex-col pl-[42px] py-[42px]">
            <h3 className="font-secondary font-bold text-[32px] md:text-[50px] leading-[40px] md:leading-[60px] pb-[25px] text-center md:text-left">
              Expert care in every clean.
            </h3>
            <Link href={"/Contact"}>
              <Button label="Contact Us" className=" md:self-start" />
            </Link>
          </div>

          <div>
            <Image
              src={AboutImg3}
              className="w-full block"
              alt="Clean My Space Ltd worker smiling near the 'We’re committed to caring' cleaning company in Nigeria"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
