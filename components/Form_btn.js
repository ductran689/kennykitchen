import Link from 'next/link';
import React from 'react';

export default function Form_btn({ href, color, hoverText, hoverBg, bg }) {
  return (
    <Link href={href} scroll={false}>
      <button
        className={`border-${color} border-[2px] text-${color} p-2 lg:text-[25px] font-[400] bg-${bg} mt-[10px] flex items-center hover:text-${hoverText} hover:bg-${hoverBg} md:text-[20px] text-[16px] hover:border-black font-poppins`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4 mr-[4px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg>
        Contact Us Today
      </button>
    </Link>
  );
}
