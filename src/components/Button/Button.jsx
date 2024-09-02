import React from "react";

function Button({ label, className,onClick  }) {
  return (
    <button
      className={`px-[20px] py-[10px] bg-[#48BEF7] rounded-[10px] text-[18px] leading-[30px] font-medium ${className}`} onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
