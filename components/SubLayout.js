import Image from 'next/image';
import React from 'react';
import Layout from './Layout';
import Form_btn from '../components/Form_btn';

export default function SubLayout({ topic, children, btn }) {
  return (
    <Layout>
      <div className="promo_page bg-white w-[95%] m-auto">
        <div className="cover lg:h-[350px] md:h-[300px] sm:h-[200px] h-[200px] relative  mb-[50px] ">
          <h1 className="text-white font-[500] text-[50px] max-[672px]:text-[40px] max-[555px]:text-[27px] px-4 center-item z-30 rounded-lg shadow-lg ring-4 ring-white text-center max-[470px]:w-[60%]">
            {topic}
          </h1>
          <Image
            className=" object-cover brightness-50"
            src="/images/dark_kit_4.jpg"
            alt="about-cover"
            fill={true}
          />
        </div>
        <div className="submain_content">{children}</div>
        {btn == 'true' && (
          <div className="flex justify-center mt-[20px]">
            <Form_btn
              href="/quote"
              color="white"
              bg="black/50"
              hoverText="black"
              hoverBg="white"
            ></Form_btn>
          </div>
        )}

        {/*  <div className="extra-content bg-slate-100 flex flex-row justify-between items-start about_xtra_res">
          {text.extra_text_about.map((extra, i) => (
            <div
              className="extra_col w-[30%] p-8 max-[880px]:w-[95%] max-[562px]:p-2"
              key={i}
            >
              <h3 className="h3-primary text-center font-[500] mb-[20px] text-slate-700">
                {extra.h3}
              </h3>
              <p className="lg:text-[18px] md:text-[18px] font-[500] text-gray-800 min-[320px]:text-[16px] text-left">
                {extra.extra}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </Layout>
  );
}
