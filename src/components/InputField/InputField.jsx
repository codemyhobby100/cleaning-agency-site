import React from "react";

function InputField({ icon: Icon, placeholder, onChange, type }) {
  return (
    <div
      className={`border-b border-[#C6C6C6] py-2 ${
        type !== "textarea" ? "flex items-center" : " flex"
      }`}
    >
      {Icon && (
        <Icon
          className={`text-[25px] text-[#200E32] ${
            type === "textarea" ? "mb-2 mr-[10px] " : "mr-2 "
          }`}
        />
      )}
      {type === "textarea" ? (
        <textarea
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent focus:outline-none text-[18px] placeholder-[#6A6A6A] resize-none"
          rows="4"
        />
      ) : (
        <input
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent focus:outline-none text-[18px] placeholder-[#6A6A6A]"
        />
      )}
    </div>
  );
}

export default InputField;
