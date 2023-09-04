import React from 'react';

export default function Footer() {
  return (
    <footer className=" w-full  bg-black ">
      <div className="footer_content flex justify-around items-center shadow-inner pt-[70px] mb-[50px]">
        <div className="contact_detail ml-[4px] ">
          <h3 className="text-gray-200  mb-[20px] font-[500] md:text-[20px] text-[16px] lg:text-[22px] font-poppinsbold">
            GET IN TOUCH
          </h3>
          <p className="font-poppinsbold">
            <span className="text-gray-200 font-[700] text-[11px] lg:text-[18px]">
              Phone No:{' '}
            </span>
            <span className="text-gray-200 font-[700] text-[11px] lg:text-[18px]">
              0416677889
            </span>{' '}
            <br />
            <span className="text-gray-200 font-[700] text-[11px] lg:text-[18px]">
              Address:{' '}
            </span>
            <span className="text-gray-200 font-[700] text-[11px] lg:text-[18px]">
              184 Sandal Cresent, Carramar, NSW 2163
            </span>{' '}
            <br />
            <span className="text-gray-200 font-[700] text-[11px] lg:text-[18px]">
              Email:{' '}
            </span>
            <span className="text-gray-200 font-[700] text-[11px] lg:text-[18px]">
              sales@kennykitchen.com.au
            </span>
          </p>
        </div>
        <div className="trading_hour mr-[4px]">
          <h3 className="text-gray-200 text-left font-[500] mb-[20px] md:text-[20px] text-[16px] lg:text-[22px] font-poppinsbold">
            TRADING HOURS
          </h3>
          <p className="text-left font-poppinsbold">
            <span className=" text-gray-200 font-[700] text-[11px] lg:text-[18px] ">
              Mon- Sat:{' '}
            </span>
            <span className=" text-gray-200 font-[700] text-[11px] lg:text-[18px]">
              7am - 5pm
            </span>{' '}
            <br />
            {/*   <span className=" text-footer-responsive ">Sat: </span>
              <span className=" text-footer-responsive">
                Appointment Only
              </span>{' '} */}
            <br />
            <span className=" text-gray-200 font-[700] text-[11px] lg:text-[18px] ">
              Other Days:
            </span>
            <span className=" text-gray-200 font-[700] text-[11px] lg:text-[18px]">
              {' '}
              By Appointment
            </span>{' '}
            <br />
          </p>
        </div>
      </div>
      <p className="text-center font-poppins pb-[70px] text-gray-200 text-xl shadow-inner max-[640px]:text-[16px] ">
        Copyright 2023 Kenny Kitchen
      </p>
    </footer>
  );
}
