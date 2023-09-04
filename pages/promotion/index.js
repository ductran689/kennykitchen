import React from 'react';
/* import Layout from '../../components/Layout'; */
import Image from 'next/image';
/* import text from '../../utils/text'; */
import data from '../../utils/data';
import Carousel from '../../components/Carousel';
import Link from 'next/link';
import SubLayout from '../../components/SubLayout';

export default function index() {
  return (
    <SubLayout topic={'Promotion'}>
      <div className="carousel w-full mx-auto lg:h-[800px] ">
        <Carousel loop>
          {data.promotion.map((promo, i) => {
            if (promo.image) {
              return (
                <div
                  className="relative lg:h-[800px] md:h-[600px] h-[400px] w-full flex-[0_0_100%] bg-black/75 "
                  key={i}
                >
                  <div className="pro-content center-item bg-white rounded-lg m-auto border-solid border-2 w-[70%] h-[90%] shadow-xl flex flex-col justify-center items-center">
                    <div className="promo-title lg:h-[300px] md:h-[300px] h-[200px] w-[70%] relative">
                      <Image
                        className="rounded-t-lg  fill-slate-700 "
                        src={promo.promoTitle}
                        alt={promo.name}
                        fill={true}
                      />
                    </div>

                    <h2 className=" text-slate-800 lg:text-[30px] text-[18px] text-center mb-[20px] lg:mb-[50px] ">
                      {promo.emphasize}
                    </h2>
                    <div className="img-content w-[25%] h-[50%]  relative mx-auto ">
                      <Link href="https://www.harveynorman.com.au/westinghouse-60cm-13-place-setting-stainless-steel-freestanding-dishwasher.html?CAWELAID=720013240000514751&gclid=Cj0KCQjw7aqkBhDPARIsAKGa0oLHnMll6o7bmusosJxGOjZ1NCxLQ43HCtd2bj177qICLN_9hsqCEzwaApMREALw_wcB&gclsrc=aw.ds">
                        <Image
                          className="rounded-t-lg  fill-slate-700 "
                          src={promo.image}
                          alt={promo.name}
                          fill={true}
                        />
                      </Link>
                    </div>
                    <p className="text-center font-poppinsbold lg:text-[20px] font-[400] mt-[20px] mb-[20px] text-[16px]">
                      {promo.content}
                    </p>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  className="relative lg:h-[800px] md:h-[600px] max-[768px]:h-[400px] w-full flex-[0_0_100%] bg-black/75 "
                  key={i}
                >
                  <div className="pro-content center-item bg-white rounded-lg m-auto border-solid border-2 w-[70%] h-[90%] shadow-xl flex flex-col justify-center items-center">
                    <div className="promo-title ">
                      <Image
                        className="rounded-t-lg  fill-slate-700 "
                        src={promo.promoTitle}
                        alt={promo.name}
                        fill={true}
                      />
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </Carousel>
      </div>
    </SubLayout>
  );
}
