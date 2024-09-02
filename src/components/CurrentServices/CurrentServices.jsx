import React, { useState } from "react";
import Button from "../Button/Button";
import checkBox from "../../assets/checkBox.png";
import Image from "next/image";

const servicesData = {
  "Residential Cleaning": {
    title: "Residential Cleaning",
    description:
      "We promise to prioritize your and surpass your expectations at every turn. Whether you’re seeking professional Expertise, Creative solutions or reliable support.",
    services: [
      {
        name: "Regular House Cleaning",
        description:
          "Our standard cleaning service covers all essential areas of your home, including dusting, vacuuming, mopping, and bathroom sanitization. We ensure that your living spaces are consistently clean and comfortable.",
      },
      {
        name: "Deep Cleaning",
        description:
          "For those times when your home needs a more thorough clean, our deep cleaning service goes beyond the surface. We focus on neglected areas, such as under furniture, inside appliances, and detailed bathroom scrubbing, to restore your home to its freshest state.",
      },
      {
        name: "Move-In/Move-Out Cleaning",
        description:
          "Moving can be stressful, so let us handle the cleaning. We provide comprehensive cleaning for new homes or after a move-out, ensuring the space is spotless and ready for the next occupant.",
      },
      {
        name: "Post-Construction Cleaning",
        description:
          "After a renovation or construction project, our specialized team removes dust, debris, and any residual construction materials, leaving your new space ready for use.",
      },
      {
        name: "Carpet and Upholstery Cleaning",
        description:
          "We use advanced cleaning techniques to remove dirt, stains, and allergens from your carpets and upholstery, revitalizing the look and feel of your home furnishings.",
      },
      {
        name: "Window Cleaning",
        description:
          "Our professional window cleaning service ensures that your windows are streak-free and crystal clear, enhancing the natural light and beauty of your home.",
      },
    ],
  },
  "Commercial Cleaning": {
    title: "Commercial Cleaning",
    description:
      "A clean workspace is essential for productivity and making a positive impression on clients. Our commercial cleaning services cater to businesses of all sizes, ensuring a hygienic and professional environment.",
    services: [
      {
        name: "Office Cleaning",
        description:
          "We provide daily, weekly, or customized office cleaning services that cover all common areas, workspaces, restrooms, and kitchens, maintaining a clean and healthy workplace for your employees and visitors.",
      },
      {
        name: "Retail Space Cleaning",
        description:
          "We understand the importance of a clean retail environment for attracting customers. Our team ensures your store is spotless, from the sales floor to storage areas, helping you create a welcoming shopping experience.",
      },
      {
        name: "Post-Event Cleaning",
        description:
          "After hosting a corporate event, party, or conference, our team handles the cleanup, restoring the venue to its original state quickly and efficiently.",
      },
      {
        name: "Facility Maintenance",
        description:
          "Beyond regular cleaning, we offer ongoing facility maintenance services, including floor care, restroom sanitation, and waste management, to keep your commercial property in top condition.",
      },
      {
        name: "Carpet and Upholstery Cleaning",
        description:
          "High-traffic areas in commercial spaces can cause wear and tear on carpets and upholstery. Our specialized cleaning services remove stains and refresh your office furniture, extending its lifespan.",
      },
      {
        name: "Industrial Cleaning",
        description:
          "We provide industrial cleaning services for warehouses, factories, and other large facilities, handling everything from machinery cleaning to floor care, ensuring a safe and clean working environment.",
      },
    ],
  },
  "Specialized Cleaning": {
    title: "Specialized Cleaning",
    description:
      "Our specialized cleaning services cater to unique needs that require more than just a standard clean. We bring the expertise and equipment necessary to tackle these specific challenges.",
    services: [
      {
        name: "Sanitization and Disinfection Services",
        description:
          "In today’s health-conscious world, we offer sanitization and disinfection services to eliminate germs and bacteria from your home or workplace, providing peace of mind in a clean and safe environment.",
      },
      {
        name: "Floor Care",
        description:
          "From stripping and sealing to polishing, we offer comprehensive floor care services that maintain the appearance and durability of various floor types, including hardwood, tile, and vinyl.",
      },
    ],
  },
  "Additional Cleaning": {
    title: "Additional Cleaning",
    description:
      "To provide even more convenience, we offer a range of additional services that complement our core cleaning offerings.",
    services: [
      {
        name: "Laundry and Ironing Services",
        description:
          "Save time with our laundry and ironing services, where we handle your clothing and linens with care, returning them fresh, clean, and neatly pressed.",
      },
      {
        name: "Pressure Washing",
        description:
          "Our pressure washing service effectively removes dirt, grime, and mildew from exterior surfaces such as driveways, patios, and siding, restoring them to their original appearance.",
      },
    ],
  },
};

function CurrentServices() {
  const [activeButton, setActiveButton] = useState("Residential Cleaning");

  const handleButtonClick = (label) => {
    setActiveButton(label);
  };

  const activeService = servicesData[activeButton];

  return (
    <>
      <div className="my_container ">
        <h2 className="heading_2 text-center pt-[80px] pb-[40px]">
          Current Services
        </h2>
        <div className="grid gap-[20px] pb-[50px] lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 justify-items-center">
          {Object.keys(servicesData).map((service) => (
            <Button
              key={service}
              label={service}
              className={
                activeButton === service
                  ? "bg-[#48BEF7] "
                  : "bg-inherit border border-[#CCCCCC]"
              }
              onClick={() => handleButtonClick(service)}
            />
          ))}
        </div>

        <div className="my_container flex flex-col lg:flex-row items-center gap-[50px]">
          <div className=" lg:max-w-[200px]">
            <h2 className="font-secondary font-bold text-[36px] lg:text-[38px] leading-[50px] lg:leading-[55px] text-center lg:text-left">
              {activeService.title}
            </h2>
          </div>
          <div className="max-w-full lg:max-w-[773px]">
            <p className="text text-[#7A7A7A] text-[14px] lg:text-[16px]">
              {activeService.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] pt-[40px] ">
          {activeService.services.map((item, index) => (
            <div key={index} className="flex gap-[10px] pb-[20px]">
              <Image
                src={checkBox}
                className="size-[22px] text-[#48BEF7]"
                alt=""
              />
              <div>
                <p className="paragraph text-[18px] leading-[21px] pb-[10px]">
                  {item.name}
                </p>

                <p className="text-[#7A7A7A] text-[14px] leading-[24px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CurrentServices;
