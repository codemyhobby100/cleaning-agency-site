import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "Do I need to be home while my office is being cleaned?",
    answer:
      "Transform your space with a call for unparalleled cleaning. Begin your journey to a spotless, stress-free environment now.",
  },
  {
    id: 2,
    question: "Why does my office not smell “clean”?",
    answer:
      "Our standard office cleaning includes dusting, vacuuming, mopping, disinfecting surfaces, and emptying trash bins.",
  },
  {
    id: 3,
    question: "I have lots of collectibles how should we handle that?",
    answer:
      "The frequency depends on your needs. We offer daily, weekly, and monthly cleaning services.",
  },
  {
    id: 4,
    question: "Can I have the same crew member each time?",
    answer:
      "Yes, we use eco-friendly cleaning products that are safe for your office and the environment.",
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
        <div key={faq.id} className="border border-[#D9D9D9] p-[26px] rounded-[15px]">
          <div
            className="question cursor-pointer font-bold text-[24px] flex items-center gap-[10px]"
            onClick={() => toggleFAQ(faq.id)}
          >
            <p
              className={`py-[5px] px-[14px] border border-[#D2D2D2] rounded-[10px] ${
                openFAQ === faq.id ? 'bg-black text-white' : 'bg-[#F6F6EF] text-[#848484]'
              }`}
            >
              {faq.id.toString().padStart(2, '0')}
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
