/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function ProductItem({ product }) {
  return (
    <div className="card mt-4">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        {/*  <Link href={`/product/${product.slug}`}></Link> */}
        <p className="mb-2">{product.name}</p>
        <button className="primary-button" type="button">
          <Link href={`/product/${product.slug}`}>Add to cart</Link>
        </button>
      </div>
    </div>
  );
}
