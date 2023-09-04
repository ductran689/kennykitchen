import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export default function ServiceScreen() {
  const { query } = useRouter();
  console.log({ query });
  const { gallerySlug } = query;
  const gallery = data.gallery.find((x) => x.slug === gallerySlug);
  if (!gallery) {
    return <div>Gallery Not Found</div>;
  }
  return (
    <Layout title={gallery.name}>
      <div className="py-2">
        <Link href="/">back to Homepage</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={gallery.image}
            alt={gallery.name}
            width={640}
            height={640}
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{gallery.name}</h1>
            </li>
          </ul>
        </div>
        <div className="card p-5">
          <div className="mb-2 flex justify-between">
            <div>Price</div>
            <div>${gallery.price}</div>
          </div>
          <div className="mb-2 flex justify-between">
            <div>Status</div>
            <div>{gallery.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</div>
          </div>
          <button className="primary-button w-full">Add to cart</button>
        </div>
      </div>
    </Layout>
  );
}
