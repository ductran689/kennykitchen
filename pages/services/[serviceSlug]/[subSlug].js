import { useRouter } from 'next/router';
import clientPromise from '../../../lib/mongodb';
import SubLayout from '../../../components/SubLayout';
import Image from 'next/image';
import Projects from '../../../components/Projects';

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
        serviceSlug: `${service.slug}`,
        subSlug: `${service.subServices.subSlug}`,
      },
    };
  });

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
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

export default function ServiceScreen({ services }) {
  console.log('sub', services);
  const router = useRouter();
  const { subSlug, serviceSlug } = router.query;
  const service = services.find((x) => x.slug === serviceSlug);
  console.log('service', service);
  if (service) {
    const sub = service.subServices.find((x) => x.subSlug === subSlug);
    if (!sub) {
      return <div>Service Not Found</div>;
    }
    if (sub) {
      if (!sub.slider) {
        return (
          <SubLayout topic={sub.name} btn="true">
            <div className="service_gallery grid-flow-cols  gap-6  mx-[20px] grid-lg-cols grid-md-cols grid-sm-cols ">
              {sub.pics.map((subI, i) => (
                <div
                  className="sub_container h-[400px] max-[433px]:h-[300px] relative "
                  key={i}
                >
                  <h1>{subI.name}</h1>
                  <Image
                    className="rounded-lg brightness-90"
                    src={subI.image}
                    alt={subI.key}
                    fill={true}
                  />
                </div>
              ))}
            </div>
          </SubLayout>
        );
      } else {
        return (
          <SubLayout topic={sub.name} btn="true">
            <div className="grid lg:grid-cols-2 max-[768px]:grid-cols-1 gap-6 mb-8 ">
              {sub.slider.map((project) => {
                return (
                  <Projects project={project} key={project.key}></Projects>
                );
              })}
            </div>
          </SubLayout>
        );
      }
    }
  } else {
    <div>
      <h1>Cannot find the data</h1>
    </div>;
  }
}
