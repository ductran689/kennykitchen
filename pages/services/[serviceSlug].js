import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import BtnCard from '../../components/BtnCard';
import SubLayout from '../../components/SubLayout';
import data from '../../utils/data';
import clientPromise from '../../lib/mongodb';

export async function getStaticPaths() {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
  const client = await clientPromise;
  const db = client.db('kenny');
  const servicesCollection = db.collection('services');
  const servicesArray = await servicesCollection.find().toArray();

  const paths = servicesArray.map((service) => {
    return {
      params: {
        serviceSlug: service.slug.toString(),
      },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const client = await clientPromise;
  const db = client.db('kenny');
  const servicesCollection = db.collection('services');
  const servicesArray = await servicesCollection.find().toArray();

  return {
    props: {
      services: servicesArray.map((service) => ({
        name: service.name,
        description: service.description,
        slug: service.slug.toString(),
        sub_images: service.sub_images,
        subServices: service.subServices,
        id: service._id.toString(),
      })),
    },
  };
}

export default function ServiceScreen(props) {
  const { services } = props;
  console.log(services);
  /*   const [selectedImage, setSelectedImage] = useState(null);
   */
  /* const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  }; */
  const { query } = useRouter();

  const { serviceSlug } = query;
  const service = services.find((x) => x.slug === serviceSlug);

  if (!service) {
    return <div>Service Not Found</div>;
  }
  if (service && service.sub_images) {
    /*     const extend = service.sub_images.find((x) => x.image === selectedImage);
     */ return (
      <SubLayout topic={service.name} key={service.key}>
        <div className="subLayout-container ">
          <div className="mb-[40px] lg:w-[80%] md:w-[80%] w-[90%] m-auto ">
            <p className=" text-slate-700 font-poppinsbold text-center lg:text-[18px] md:text-[16px] sm:text-[16px] text-[13px] mb-[20px]">
              {service.description}
            </p>
          </div>
          <div className="service_gallery grid-flow-cols  gap-6 mb-[100px] mx-[20px] grid-lg-cols grid-md-cols grid-sm-cols ">
            {service.sub_images.map((sub) => (
              <div
                className="sub_container h-[350px] max-[433px]:h-[300px] relative "
                key={`${sub.key}`}
              >
                <Link href={sub.image}>
                  <Image
                    className="rounded-lg brightness-90 "
                    src={sub.image}
                    alt={sub.name}
                    fill={true}
                    /*   onClick={() => handleImageClick(sub.image)} */
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </SubLayout>
    );
  } else {
    return (
      <SubLayout topic={service.name} key={service.key}>
        <div className="subLayout-container ">
          <div className="mb-[40px] lg:w-[80%] md:w-[80%] w-[90%] m-auto ">
            <p className=" text-slate-700 font-poppinsbold text-center lg:text-[18px] md:text-[16px] sm:text-[16px] text-[14px] mb-[20px]">
              {service.description.content1}
            </p>
            <p className=" text-slate-700 font-poppinsbold text-center lg:text-[18px] md:text-[16px] sm:text-[16px] text-[14px] mb-[20px]">
              {service.description.content2}
            </p>
          </div>
          <div className="service_gallery grid-flow-cols  gap-6 mb-[100px] mx-[20px] grid-lg-cols grid-md-cols grid-sm-cols ">
            {service.subServices.map((sub, j) => (
              <div
                className="sub_container h-[350px] max-[433px]:h-[300px] relative "
                key={j + 0.1}
              >
                <Link href={`/services/${service.slug}/${sub.subSlug}`}>
                  <Image
                    className="rounded-lg brightness-75"
                    src={sub.image}
                    alt={sub.name}
                    fill={true}
                  />
                </Link>

                <BtnCard service={sub} href={`${service.slug}/${sub.slug}`}>
                  {' '}
                  {sub.name}
                </BtnCard>
              </div>
            ))}
          </div>
        </div>
      </SubLayout>
    );
  }
}
