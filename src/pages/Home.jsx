import React from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Arrow from "../assets/arrow.png";
import homeService1 from "../assets/clean-my-space-ltd-eco-friendly-initiatives-logo.png";
import homeService2 from "../assets/clean-my-space-ltd-commercial-cleaning-logo.png.png";
import homeService3 from "../assets/clean-my-space-ltd-specialized-cleaning-logo.png";
import homeService4 from "../assets/clean-my-space-ltd-additional-services-logo.png";
import TopService1 from "../assets/home_img3.png";
import TopService2 from "../assets/home_img4.png";
import bestServices1 from "../assets/bestServices1.png";
import bestServices2 from "../assets/bestServices2.png";
import bestServices3 from "../assets/bestServices3.png";
import bestServices4 from "../assets/bestServices4.png";
import checkBox from "../assets/checkBox.png";
import bgDoted from "../assets/bgDoted.png";
import Book from "../assets/Book.png";
import Confirm from "../assets/Confirm.png";
import Enjoy from "../assets/Enjoy.png";
import quote from "../assets/quote.png";
import client from "../assets/clean-my-space-ltd-worker-smiling-testimonial.png";
import worker1 from "../assets/clean-my-space-ltd-manager-Obinna-Odukwu.png";
import worker2 from "../assets/clean-my-space-ltd-on-demand-cleaning-workers-ready.png";
import worker3 from "../assets/clean-my-space-ltd-worker-folding-hands-booking-steps.png";
import Button from "../components/Button/Button";
import { IoIosPlay } from "react-icons/io";
import { FaArrowRight, FaStar } from "react-icons/fa";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout/Layout";
import CustomHead from "@/components/CustomHead/CustomHead";

const services = [
  {
    title: "Eco-Friendly Initiatives",
    description:
      "We prioritize environmentally friendly cleaning methods to protect your space and the planet.",
    backgroundColor: "#EFF2FC",
    alt: "Clean My Space Ltd Eco-Friendly Initiatives text logo – We prioritize environmentally friendly cleaning methods to protect your space and the planet.",
    imgSrc: homeService1
  },
  {
    title: "Commercial Cleaning",
    description:
      "We offer specialized cleaning services for businesses, ensuring a clean and productive environment.",
    backgroundColor: "#FFE9CA",
    alt: "Clean My Space Ltd Commercial Cleaning text logo – We offer specialized cleaning services for businesses, ensuring a clean and productive environment.",
    imgSrc: homeService2
  },
  {
    title: "Specialized Cleaning",
    description:
      "We handle unique cleaning challenges with specialized techniques and equipment.",
    backgroundColor: "#FFE5F9",
    alt: "Clean My Space Ltd Specialized Cleaning text logo – We handle unique cleaning challenges with specialized techniques and equipment.",
    imgSrc: homeService3
  },
  {
    title: "Additional Services",
    description:
      "We offer various supplementary services to meet all your cleaning needs.",
    backgroundColor: "#E1EEE8",
    alt: "Expert workers are highly skilled professional with extensive in their respective fields.",
    imgSrc: homeService4
  }
];

const items1 = [
  "Removal of dust and debris from all surfaces",
  "Cleaning of windows, frames, and sills",
  "Detailed cleaning of floors, including vacuuming and mopping",
  "Wiping down walls, fixtures, and fittings",
  "Disinfection of high-touch areas",
  "Removal of paint splatters and other construction residues"
];

const items2 = [
  "Thoroughly cleaning all areas of your home or office",
  " Addressing build-up in hard-to-reach places, including behind appliances and under furniture",
  "Sanitizing and deodorizing carpets, upholstery, and other fabrics",
  "Cleaning and polishing high-touch surfaces, such as doorknobsand light switches",
  "Scrubbing and disinfecting bathrooms and kitchens to remove grime and bacteria"
];

const stats = [
  {
    bgColor: "#DBECFF",
    count: 120, // Use a number instead of a string
    description: "Happy Clients"
  },
  {
    bgColor: "#FFE9CA",
    count: 150,
    description: "Project Complete"
  },
  {
    bgColor: "#E1EEE8",
    count: 20,
    description: "Team Members"
  },
  {
    bgColor: "#FFE5F9",
    count: 2,
    description: "Year Experience"
  }
  // Add more items here if needed
];

function Home() {
  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <Layout>
      <CustomHead
        title={"Professional Cleaning Services in Abuja | Clean My Space Ltd"}
        description={
          "Top cleaning company in Abuja offering a wide range of cleaning services. Contact Clean My Space Ltd for expert cleaning solutions tailored to your needs."
        }
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Clean My Space Ltd",
          url: "https://www.cleanmyspace.ng/",
          logo: "https://www.cleanmyspace.ng/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclean-my-space-ltd-abuja-logo.4a77eb3b.png&w=128&q=75", // Replace with your actual logo URL
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+2349119178436",
            contactType: "Customer Service"
          },
          sameAs: [
            "https://www.instagram.com/cleanmyspaceltd/",
            "https://www.youtube.com/@cleanmyspaceabuja",
            "https://www.linkedin.com/company/clean-my-space-ltd/"
          ]
        }}
      ></CustomHead>
      <HomeBanner />

      {/* Plan & Explore section */}

      <div className="my_container flex justify-center flex-col gap-[80px] lg:flex-row pb-[80px] lg:pt-[50px] md:pt-0 md:pb-[100px] lg:pb-[160px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] items-end">
          <div className="bg-[#DBECFF] border border-[#939393] h-max px-[20px] pt-[20px] rounded-[25px] md:max-w-[255px] flex justify-end flex-col">
            <div className="flex justify-end items-center">
              <div className="bg-black inline-block rounded-full p-[20px] z-0"></div>
              <div className="bg-white border border-black inline-block rounded-full p-[10px] z-10 relative -left-[20px]">
                <a
                  href="https://www.youtube.com/embed/6mdV8XoKZR0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoIosPlay className="size-[20px]" />
                </a>
              </div>
              <p className="text-[14px] font-medium pr-[20px]">Watch</p>
            </div>
            <Image
              src={worker1}
              alt="Obinna Odukwu, Manager at Clean My Space Ltd, standing in the office."
              className="self-end"
            />
          </div>

          <div className="bg-[#FFE9CA] border border-[#939393] px-[20px] h-max pt-[20px] flex flex-row md:max-w-[255px] rounded-[25px]">
            <div className="flex flex-col justify-between pb-[80px]">
              <p className="text-[14px] font-medium ">
                On Demand Cleaning Service
              </p>
              <div className="flex items-center w-max gap-[10px] bg-white rotate-[-90deg] justify-end border border-black py-[10px] px-[20px] rounded-[20px]">
                <p className="text-center">Get Plan</p>
                <FaArrowRight />
              </div>
            </div>
            <Image
              src={worker2}
              alt="Two cleaning workers from Clean My Space Ltd are standing back-to-back, wearing gloves and ready for work in an on-demand cleaning service."
              className="self-end md:w-[200px] w-[50%] md:h-[250px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-end">
          <div className="bg-[#FFE5F9] border border-[#939393] px-[20px]  pt-[20px] flex flex-row md:max-w-[255px] rounded-[25px]">
            <div className="flex flex-col pb-[80px]">
              <p className="text-[14px] pb-[20px] font-medium ">
                Book in 3 Easy Steps
              </p>
              <a
                href="#work"
                onClick={handleSmoothScroll}
                className="flex items-center"
              >
                <div className="bg-white border border-black inline-block rounded-full py-[10px] px-[15px]  z-0">
                  <p>1</p>
                </div>
                <div className="bg-black text-white inline-block rounded-full py-[10px] px-[14px] relative -left-[10px] z-10">
                  <p>2</p>
                </div>
                <div className="bg-white border border-black inline-block rounded-full py-[10px] px-[14px] relative -left-[20px] z-20">
                  <p className="">3</p>
                </div>
              </a>
              <div className="mt-20 md:mt-10">
                <p className="text-[22px] md:text-[10px] pt-4 font-bold">
                  Choose Your Service
                </p>
                <p className="text-[22px] md:text-[10px] pt-3 font-bold">
                  Confirm Your Booking
                </p>
                <p className="text-[22px] md:text-[10px] pt-3 font-bold">
                  Enjoy a Spotless Space
                </p>
              </div>
            </div>

            <Image
              src={worker3}
              alt="Clean My Space Ltd worker folding hands, illustrating the 'Book in 3 Easy Steps' process."
              className="self-end w-[55%] md:w-full ml-[-30px]"
            />
          </div>

          <div className="bg-[#FFE9CA] border border-[#939393] px-[20px] h-max pt-[20px] flex flex-row md:max-w-[200px] rounded-[25px]">
            <div className="flex flex-col justify-between pb-[20px]">
              <div className="flex items-center w-max gap-[5px] bg-inherit border border-black py-[10px] px-[20px] rounded-[20px]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-[14px] font-medium py-[10px] ">
                Check out our ratings on{" "}
              </p>
              <div className="flex items-center w-max gap-[10px] pt-[10px] bg-white border border-black py-[10px] px-[20px] rounded-[20px]">
                <p className="text-center">Google Maps</p>
              </div>
              <a
                href="https://maps.app.goo.gl/LhY6XmBRfPUCtDEh6?g_st=com.google.maps.preview.copy"
                className="flex items-center gap-[10px] pt-[20px] "
              >
                <p className="text">View Ratings.</p>
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* We Provide Best Services */}

      <div className="my_container pb-[80px] md:pb-[100px] lg:pb-[160px]">
        <div>
          <div className="flex justify-center pb-[15px]">
            <p className="border border-black inline-block py-[10px] px-[20px] rounded-[20px] text-center">
              Our Services
            </p>
          </div>

          <h2 className="heading_2 text-center pb-[50px]">
            We Provide the Best Cleaning Services in Abuja
          </h2>
          <p className="text text-center lg:max-w-[774px] lg:mx-auto pb-[50px]">
            As one of the top cleaning companies in Abuja, Clean My Space Ltd.
            is committed to exceeding your expectations. Whether you need
            professional cleaning services, innovative solutions, or reliable
            support, we deliver excellence that sets us apart from other
            cleaning services in Abuja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[0px] items-start">
          {/* First Div */}
          <div className="relative border-b border-[#D9D9D9] md:border-r lg:p-[60px] p-[20px]">
            <div className="flex items-center gap-[16px] pb-[20px]">
              <div className="p-[24px] bg-[#FFE9CA] border border-[#939393] rounded-[20px]">
                <Image src={bestServices1} alt="" />
              </div>
              <div>
                <p className="text">Expert</p>
                <p className="text-[28px] font-semibold leading-[30px]">
                  Expert Workers
                </p>
              </div>
            </div>
            <div>
              <p className="text text-[16px]">
                Our team consists of seasoned professionals, each with deep
                expertise in their field. We handle every task with precision
                and care, ensuring superior results.
              </p>
            </div>
          </div>

          {/* Second Div */}
          <div className="relative border-b border-[#D9D9D9] lg:p-[60px] p-[20px]">
            <div className="flex items-center gap-[16px] pb-[20px]">
              <div className="p-[24px] bg-[#EFF2FC] border border-[#939393] rounded-[20px]">
                <Image src={bestServices2} alt="" />
              </div>
              <div>
                <p className="text">Advance</p>
                <p className="text-[28px] font-semibold leading-[30px]">
                  Advanced Services
                </p>
              </div>
            </div>
            <div>
              <p className="text text-[16px]">
                We provide cutting-edge cleaning and services tailored to your
                specific needs. By leveraging the latest technology and best
                practices, we guarantee exceptional results every time.
              </p>
            </div>
          </div>

          {/* Third Div */}
          <div className="relative border-b md:border-b-0 border-[#D9D9D9] md:border-r lg:p-[60px] p-[20px]">
            <div className="flex items-center gap-[16px] pb-[20px]">
              <div className="p-[24px] bg-[#E1EEE8] border border-[#939393] rounded-[20px]">
                <Image src={bestServices3} alt="" />
              </div>
              <div>
                <p className="text">24/7</p>
                <p className="text-[28px] font-semibold leading-[30px]">
                  24/7 Availability
                </p>
              </div>
            </div>
            <div>
              <p className="text text-[16px]">
                We’re available whenever you need us, offering round-the-clock
                cleaning services in Abuja to ensure your space is always
                pristine, no matter the hour.
              </p>
            </div>
          </div>

          {/* Fourth Div */}
          <div className="relative border-b md:border-none border-[#D9D9D9] lg:p-[60px] p-[20px]">
            <div className="flex items-center gap-[16px] pb-[20px]">
              <div className="p-[24px] bg-[#FFE5F9] border border-[#939393] rounded-[20px]">
                <Image src={bestServices4} alt="" />
              </div>
              <div>
                <p className="text">Customer</p>
                <p className="text-[28px] font-semibold leading-[30px]">
                  Customer Satisfaction
                </p>
              </div>
            </div>
            <div>
              <p className="text text-[16px]">
                Your satisfaction is our mission. We strive to deliver
                unparalleled service that not only meets but consistently
                exceeds your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services section */}

      <div className="my_container  pb-[80px] md:pb-[100px] lg:pb-[160px]">
        <div>
          <div className="flex justify-center pb-[15px]">
            <p className="border border-black inline-block py-[10px] px-[20px] rounded-[20px] text-center">
              Our Categories
            </p>
          </div>

          <h2 className="heading_2  text-center pb-[50px]">
            Explore Our Current Cleaning and Services
          </h2>
          <p className="text text-center pb-[50px]">
            At Clean My Space Ltd., we provide a comprehensive range of cleaning
            services in Abuja, designed to meet the needs of both residential
            and commercial clients. Our commitment to quality and eco-friendly
            practices ensures that every space we clean is left in pristine
            condition. Here’s a list of our current services and some exciting
            offerings we’re planning to add soon:
          </p>
        </div>

        {/* Service cards */}
        <div className="flex flex-wrap gap-[20px] justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`w-full md:w-[40%] border border-[#939393] rounded-[20px] p-[25px]`}
              style={{ backgroundColor: service.backgroundColor }}
            >
              <div className="flex justify-between pb-[25px]">
                <Image
                  src={service.imgSrc}
                  className="size-[90px]"
                  alt={service.alt}
                />
                <Link href={"/Services"}>
                  <Image src={Arrow} className="size-[48px]" alt="Arrow" />
                </Link>
              </div>

              <h3 className="text-[#1F1F1F] text-[22px] leading-[26px] pb-[20px] font-semibold">
                {service.title}
              </h3>
              <p className="text-[14px] text leading-[26px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Exploring the Top Services */}

      <div className="my_container pb-[80px] md:pb-[100px] lg:pb-[120px]">
        <div className="text-center pb-[15px]">
          <p className="border border-black inline-block py-[10px] px-[20px] rounded-[20px]">
            Featured Services
          </p>
        </div>

        <h2 className="heading_2 text-center pb-[50px]">
          Explore Our Top Cleaning Services in Abuja
        </h2>
        <p className="text text-center lg:max-w-[774px] lg:mx-auto pb-[50px]">
          Discover the best cleaning services Abuja has to offer, designed to
          meet your needs and exceed your expectations. Whether you’re looking
          for professional expertise, innovative solutions, or dependable
          support, we’re here to deliver exceptional results every time.
        </p>

        {/* Top Service 1 */}
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[40px] pb-[40px] items-center">
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <Image
              src={TopService1}
              alt="Top Service image 1"
              className="mx-auto lg:mx-0"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="pb-[32px]">
              <div className="flex justify-center lg:justify-start pb-[15px]">
                <p className="border border-black inline-block py-[10px] px-[20px] rounded-[20px] text-center">
                  Cleaning
                </p>
              </div>
              <h2 className="font-secondary text-[48px] text-[#1F1F1F] leading-[52px] font-semibold text-center lg:text-left">
                Post-Construction Cleaning
              </h2>
              <p className="text-[16px] leading-[24px] text-[#7A7A7A] pt-[16px] text-center lg:text-left">
                After the dust has settled, our Post-Construction Cleaning
                service ensures that your newly renovated or constructed space
                is spotless and ready for use. We tackle all the remnants of
                construction work, including:
              </p>
            </div>

            <div>
              {items1.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-[10px] pb-[20px] items-center justify-start"
                >
                  <Image
                    src={checkBox}
                    className="size-[22px] text-[#48BEF7]"
                    alt=""
                  />
                  <p className="paragraph text-[18px] leading-[21px]">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-[16px] leading-[30px] text-[#7A7A7A] pt-[16px] text-center lg:text-left">
              Our thorough approach guarantees that your space is not only clean
              but also safe and welcoming.
            </p>
            <div className="flex flex-col lg:flex-row gap-[50px] items-center pt-[30px]">
              <h3 className="text-[32px] leading-[35px] font-secondary font-semibold text-center lg:text-left">
                From N100,000
              </h3>
              <Link href={"/Contacts"}>
                <Button label="Book Now" />
              </Link>
            </div>
          </div>
        </div>

        {/* Top Service 2 */}
        <div className="flex flex-col-reverse lg:flex-row gap-[50px] lg:gap-[40px] items-center">
          <div className="lg:w-1/2 w-full">
            <div className="pb-[32px]">
              <div className="flex justify-center lg:justify-start pb-[15px]">
                <p className="border border-black inline-block py-[10px] px-[20px] rounded-[20px] text-center">
                  Cleaning
                </p>
              </div>
              <h2 className="font-secondary text-[48px] text-[#1F1F1F] leading-[52px] font-semibold text-center lg:text-left">
                Deep Cleaning
              </h2>
              <p className="text-[16px] leading-[24px] text-[#7A7A7A] pt-[16px] text-center lg:text-left">
                Our Deep Cleaning service is designed to reach every nook and
                cranny, providing a comprehensive clean that goes beyond the
                surface. This service is ideal for:
              </p>
            </div>

            <div>
              {items2.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-[10px] pb-[20px] items-center justify-start"
                >
                  <Image
                    src={checkBox}
                    className="size-[22px] text-[#48BEF7]"
                    alt=""
                  />
                  <p className="paragraph text-[18px] leading-[21px]">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-[16px] leading-[30px] text-[#7A7A7A] pt-[16px] text-center lg:text-left">
              Whether it’s a seasonal refresh or preparation for special
              occasions, our Deep Cleaning service ensures a spotless, hygienic
              environment that enhances your comfort and peace of mind.
            </p>
            <div className="flex flex-col lg:flex-row gap-[50px] items-center pt-[30px]">
              <h3 className="text-[32px] leading-[35px] font-secondary font-semibold text-center lg:text-left">
                From N30,000
              </h3>
              <Link href={"/Contacts"}>
                <Button label="Book Now" />
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <Image
              src={TopService2}
              alt="Top Service image 2"
              className="mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>

      {/* Our working process */}

      <div
        className="my_container pb-[80px] md:pb-[100px] lg:pb-[120px]"
        id="work"
      >
        <div className="text-center pb-[15px]">
          <p className="border border-black inline-block py-[10px] px-[20px] rounded-[20px]">
            Our working process
          </p>
        </div>

        <h2 className="heading_2 text-center pb-[50px]">
          How We Ensure Your Space Stays Spotless
        </h2>
        <p className="text text-center lg:max-w-[774px] lg:mx-auto pb-[50px]">
          We are dedicated to surpassing your expectations at every step.
          Whether you’re looking for expert cleaning services, innovative
          solutions, or dependable support in Abuja, we prioritize your needs
          and deliver exceptional results to keep your space pristine.
        </p>

        <div
          className="w-full lg:h-[300px] bg-none bg-center bg-no-repeat lg:bg-contain"
          style={{ backgroundImage: `url(${bgDoted.src})` }}
        >
          <div className="grid lg:max-w-[1100px] lg:mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[80px] px-[50px]">
            {/* First Card */}
            <div className="border lg:max-w-[278px] border-[#939393] p-[10px] md:p-[30px] rounded-[20px] lg:rotate-[-13.36deg] bg-[#E1EEE8]">
              <Image src={Book} className="pb-[20px]" alt="Book" />
              <h3 className="text-[24px] font-bold font-secondary pb-[20px] leading-[30px]">
                Book Online
              </h3>
              <p className="text-[14px] leading-[22px] text-[#4F4F4F] pb-[20px]">
                Choose your cleaning service and book easily through our
                website.
              </p>
            </div>

            {/* Second Card */}
            <div className="border lg:max-w-[278px] border-[#939393] p-[10px] md:p-[30px] lg:rotate-[11.36deg] rounded-[20px] bg-[#FFE9CA]">
              <Image src={Confirm} className="pb-[20px]" alt="Book" />
              <h3 className="text-[24px] font-bold font-secondary pb-[20px] leading-[30px]">
                Get Confirmation
              </h3>
              <p className="text-[14px] leading-[22px] text-[#4F4F4F] pb-[20px]">
                Receive instant confirmation and scheduling details.
              </p>
            </div>

            {/* Third Card */}
            <div className="border lg:max-w-[278px] border-[#939393] p-[10px] md:p-[30px] lg:rotate-[-5.71deg] rounded-[20px] bg-[#FFE5F9]">
              <Image src={Enjoy} className="pb-[20px]" alt="Book" />
              <h3 className="text-[24px] font-bold font-secondary pb-[20px] leading-[30px]">
                Enjoy Services
              </h3>
              <p className="text-[14px] leading-[22px] text-[#4F4F4F] pb-[20px]">
                Sit back and relax while our expert workers take care of your
                space.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}

      <div className="my_container pb-[80px] md:pb-[100px] lg:pb-[160px] lg:pt-[80px]">
        <div className="text-center pb-[15px]">
          <p className="border border-black inline-block py-[10px] px-[20px] rounded-[20px]">
            Testimonials
          </p>
        </div>

        <h2 className="heading_2 text-center pb-[50px]">
          What Our Clients Say
        </h2>
        <p className="text text-center lg:max-w-[774px] lg:mx-auto pb-[50px]">
          Our client testimonials underscore the convenience, reliability, and
          top-notch quality of our cleaning services in Abuja. We take pride in
          exceeding our customers&apos; expectations at every step, delivering
          exceptional service that makes us one of the most trusted cleaning
          companies in Abuja.
        </p>

        <div className="flex z-0">
          <div className="z-10 hidden lg:inline">
            <Image
              src={client}
              className="lg:ml-[200px]  "
              alt="Clean My Space Ltd worker smiling next to a testimonial – showcasing positive feedback from a satisfied customer."
            />
          </div>
          <div className="lg:max-w-[772px] z-0 border border-[#939393] rounded-[30px] p-[30px] md:p-[60px]">
            <Image src={quote} className="rotate-180" alt="Quote" />
            <h3 className="text-[32px] leading-[38px] font-bold text-center">
              Mattaniah Okodugha
            </h3>
            <p className="text text-center pt-[30px]">
              Incredible convenience! I urgently needed a house cleaner, and the
              website made it quick and easy to book. The cleaner was very
              professional, and the service was top-notch. I was extremely
              satisfied.
            </p>
            <Image src={quote} className="ml-auto lg:pb-[40px]" alt="Quote" />
          </div>
        </div>
        {/* <div className="grid gap-[30px] md:grid-cols-2 pt-[50px] lg:pt-0 lg:mt-[-90px] lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border border-[#939393] rounded-[30px] px-[20px] py-[50px] z-20"
              style={{ backgroundColor: stat.bgColor }}
            >
              <h2 className="md:text-[72px] text-[58px] leading-[75px] md:leading-[87px] font-bold text-center">
                {stat.count}
              </h2>
              <p className="text text-[20px] text-center">{stat.description}</p>
            </div>
          ))}
        </div> */}
        <div className="grid gap-[30px] md:grid-cols-2 pt-[50px] lg:pt-0 lg:mt-[-90px] lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border border-[#939393] rounded-[30px] px-[20px] py-[50px] z-20 flex flex-col items-center justify-center text-center"
              style={{ backgroundColor: stat.bgColor }}
            >
              <div className="flex items-baseline">
                <CountUp
                  start={0}
                  end={stat.count}
                  duration={2.5}
                  separator=","
                  className="md:text-[72px] text-[58px] leading-[75px] md:leading-[87px] font-bold"
                />
                <span className="md:text-[72px] text-[58px] leading-[75px] md:leading-[87px] font-bold">
                  +
                </span>
              </div>
              <p className="text-[20px]">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
