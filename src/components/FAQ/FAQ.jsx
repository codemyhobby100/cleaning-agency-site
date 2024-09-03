import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What types of cleaning services do you offer?",
    answer:
      "At Clean My Space Ltd., we provide a range of services including janitorial services, laundry service, and general cleaning services for both residential and commercial spaces. Whether you need regular office cleaning, deep cleaning, or specialized services, we've got you covered.",
  },
  {
    id: 2,
    question: "How can I book your cleaning services?",
    answer:
      "Booking our services is simple. Visit our website, select the service you need, and follow the easy booking process. If you have any questions or need assistance, feel free to contact us directly.",
  },
  {
    id: 3,
    question: "Do you offer eco-friendly cleaning options?",
    answer:
      "Yes, we are committed to sustainability and offer eco-friendly cleaning solutions. Our services are designed to minimize environmental impact while maintaining high cleaning standards.",
  },
  {
    id: 4,
    question: "Are your cleaning services available for commercial spaces?",
    answer:
      "Yes, we offer comprehensive janitorial services for commercial spaces. Our team is equipped to handle cleaning for offices, retail spaces, and more, ensuring a professional and clean environment for your business.",
  },
  {
    id: 5,
    question: "What should I do if I need to cancel or reschedule a service?",
    answer:
      "If you need to cancel or reschedule a service, please contact us as soon as possible. We will assist you in adjusting your appointment according to your needs.",
  },
  {
    id: 6,
    question: "How long will the cleaning take? ",
    answer:
      "The duration of our cleaning services depends on the type and scope of the job. Some tasks may be completed within a few hours, while more extensive projects could take 2 to 3 days to ensure thoroughness and quality.",
  },
  {
    id: 7,
    question: "Are the products used safe? ",
    answer:
      "Yes, all products we use are rigorously tested and verified to ensure they are safe for your floors and furniture. We prioritize using high-quality, non-harmful cleaning solutions to protect your home and environment.",
  },
];

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="faq-container lg:max-w-[674px] space-y-[20px]">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="border border-[#D9D9D9] p-[26px] rounded-[15px]"
        >
          <div
            className="question cursor-pointer font-bold text-[24px] flex items-center gap-[10px]"
            onClick={() => toggleFAQ(faq.id)}
          >
            <p
              className={`py-[5px] px-[14px] border border-[#D2D2D2] rounded-[10px] ${
                openFAQ === faq.id
                  ? "bg-black text-white"
                  : "bg-[#F6F6EF] text-[#848484]"
              }`}
            >
              {faq.id.toString().padStart(2, "0")}
            </p>
            <p className="font-medium text-[20px] leading-[30px]">
              {faq.question}
            </p>
          </div>
          {openFAQ === faq.id && (
            <div className="font-light leading-[26px] text-[#4F4F4F] mt-[10px] text-[16px]">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
