import data from '../utils/data';
import Carousel from './Carousel';

export default function Testimonials() {
  console.log(data.testimonial);
  return (
    <div className="mt-[100px] mb-[100px] max-[568px]:mt-[50px] max-[568px]:mb-[50px] lg:h-[500px] md:h-[400px] max-[568px]:h-[400px]">
      <h1 className="h1-primary  text-slate-700 max-[568px]:text-[23px]">
        TESTIMONIALS
      </h1>
      {/* {data.testimonial.map((test) => (
        <div
          className="testimonial-content w-[60%] max-[768px]:w-[80%] max-[568px]:w-[90%] m-auto mb-[30px]"
          key={test.key}
        >
          <p className="text-secondary text-center max-[568px]:text-[16px]">
            {test.content}
          </p>
          <p className="text-center text-primary drop-shadow-md">{test.name}</p>
        </div>
      ))} */}

      <div className="carousel w-[90%] mx-auto lg:h-[300px]  ">
        <Carousel loop>
          {data.testimonial.map((promo, i) => {
            return (
              <div
                className="relative lg:h-[400px] md:h-[300px] sm:h-[300px] h-[300px] w-full flex-[0_0_100%] bg-black/75 "
                key={i}
              >
                <div className="pro-content center-item bg-white rounded-lg m-auto border-solid border-2 w-[90%] h-[90%] shadow-xl flex flex-col justify-center items-center">
                  <h2 className="text-slate-800 font-[500] text-[30px] max-[578px]:text-[18px] text-center ">
                    {promo.name}
                  </h2>
                  <p className=" text-slate-800  text-[18px] max-[670px]:text-[14px] text-center max-[768px]:mb-[20px] mb-[50px] font-playfair ">
                    {promo.content}
                  </p>
                  <div className="img-content w-[70%] h-[50%] max-[565px]:h-[40%] max-[400px]:h-[30%] relative mx-auto ">
                    {/*  <Link href="https://www.harveynorman.com.au/westinghouse-60cm-13-place-setting-stainless-steel-freestanding-dishwasher.html?CAWELAID=720013240000514751&gclid=Cj0KCQjw7aqkBhDPARIsAKGa0oLHnMll6o7bmusosJxGOjZ1NCxLQ43HCtd2bj177qICLN_9hsqCEzwaApMREALw_wcB&gclsrc=aw.ds">
                      <Image
                        className="rounded-t-lg  fill-slate-700 "
                        src={promo.image}
                        alt={promo.name}
                        fill={true}
                      />
                    </Link> */}
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
