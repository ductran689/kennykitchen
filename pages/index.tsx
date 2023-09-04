import Layout from '../components/Layout';
/* import data from '../utils/data'; */
import Carousel from '../components/Carousel';
import Form from '../components/Form';
/* import ProductItem from '../components/ProductItem'; */
import text from '../utils/text';
import Image from 'next/image';
import About from '../components/About';
import Services from '../components/Services';
import Form_btn from '../components/Form_btn';
import Testimonials from '../components/Testimonials';
import data from '../utils/data';
import Link from 'next/link';
import clientPromise from '../lib/mongodb';
/* import { getAbout, getAllPics, getCarousel } from '../prisma/admin'; */

export async function getStaticProps(context: any) {
  const client = await clientPromise;
  const db = client.db('kenny');
  const servicesCollection = db.collection('services');
  const servicesArray = await servicesCollection.find().toArray();

  return {
    props: {
      services: servicesArray.map((service) => ({
        name: service.name,
        description: service.description,
        slug: service.slug,
        id: service._id.toString(),
      })),
    },
  };
}
export default function Home(props: any) {
  const { services } = props;
  services.map((service: any, i: number) => console.log('sevice', i, service));
  console.log('services', services);

  return (
    <Layout title="Kenny Kitchen">
      <div className="carousel w-full mx-auto ">
        <Carousel loop>
          {data.carousel.map((src, i) => {
            return (
              // 👇 style each individual slide.
              // relative - needed since we use the fill prop from next/image component
              // h-64 - arbitrary height
              // flex[0_0_100%]
              //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
              //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
              <div
                className="relative h-[800px] w-full flex-[0_0_100%]"
                key={i}
              >
                <div className="intro-text bg-black/[0.3] center-item z-50 lg:w-[80%] md:w-[90%] w-[90%] h-[50%] max-[578px]:h-[50%] rounded-xl">
                  <h1 className="lg:text-[60px] text-white font-[700] md:text-[50px] text-[40px] text-center">
                    Kenny Kitchen
                  </h1>
                  {text.promo.map((text, i) => (
                    <Link href="/promotion" key={i + 0.3}>
                      <p
                        className="flex mb-[10px]  text-white lg:text-[30px] md:text-[25px] font-[400] font-poppins max-[768px]:text-[20px] items-center justify-start"
                        key={text.name}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#FFFFFF"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="#575353"
                          className="w-8 h-8 max-[578px]:w-4 max-[578px]:h-4 max-[640px]:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{text.text}</span>
                      </p>
                    </Link>
                  ))}
                  <div className="flex justify-center hover:border-black p-[5px] ">
                    <Form_btn
                      href="#form_section"
                      color="white"
                      bg="black/50"
                      hoverText="slate-700"
                      hoverBg="white"
                    ></Form_btn>
                  </div>
                </div>
                <Image
                  src={src}
                  fill
                  className="object-cover brightness-[1] "
                  alt={`${i}`}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
      {/* Products */}
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {data.products.map((product: object) => (
        <ProductItem product={product} key={Math.random()}></ProductItem>
      ))}
    </div> */}
      <About></About>
      <Services services={services}></Services>
      {/* <Gallery></Gallery> */}
      <Testimonials></Testimonials>
      <Form></Form>
    </Layout>
  );
}
