import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

export default function BtnCard({ href, children, service }) {
  const [activeId, setActiveId] = useState(0);
  const handleHover = (id) => {
    setActiveId(id);
    console.log('onhover', activeId);
  };
  const undoHover = () => {
    setActiveId(0);

    console.log('offhover', activeId);
  };
  return (
    <div className="service_content center-item flex flex-col justify-center items-center">
      <Link href={`/services/${href}`}>
        <div className="describtion ">
          <h2 className="h2-primary text-white font-[400] cursor-pointer font-poppinsbold">
            {children}
          </h2>
        </div>
      </Link>

      <div
        className=" mt-6 btn-card-lg btn "
        onMouseEnter={() => handleHover(service.key)}
        onMouseLeave={undoHover}
      >
        <Link href={`/services/${href}`}>
          <button className="btn-service text-center btn-primary ">
            <p className="text-slate-200 font-medium space text-btn font-poppinsbold">
              VIEW MORE
            </p>
            <Image
              className="ml-[15px] my-[15px]"
              src={
                activeId === service.key
                  ? `/images/arrowlongrightblack.svg`
                  : `/images/arrowlongrightwhite.svg`
              }
              alt=" right arrow"
              width={12}
              height={10}
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
