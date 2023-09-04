import React, { useState } from 'react';
import SubLayout from '../../components/SubLayout';
import FileInput from '../../components/FileInput';
import clientPromise from '../../lib/mongodb';
import Link from 'next/link';

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

export default function index({ services }) {
  console.log('services', services);
  /*  const cont1 = services[0].description.content1;
  const cont2 = services[0].description.content2;
  const [des1, setDes1] = useState(cont1);
  const [des2, setDes2] = useState(cont2);
  const handleUpdate = () => {}; */
  return (
    <SubLayout topic="DashBoard">
      <div className="flex flex-row justify-between">
        {services.map((service, i) => {
          return (
            <div>
              <Link href={`/Dashboard/${service.id}`}>{service.name}</Link>
            </div>
          );
        })}
      </div>

      {/* <FileInput></FileInput>
      <div className="update-content1">
        <label
          for="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Content 1
        </label>
        <textarea
          id="message"
          rows="4"
          value={des1}
          onChange={(e) => setDes1(e.target.value)}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>

        <label
          for="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Content 2
        </label>
        <textarea
          id="message"
          rows="4"
          value={des2}
          onChange={(e) => setDes2(e.target.value)}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
      <button
        type="submit"
        onSubmit={handleUpdate}
        className="border-solid border-black border-2 rounded-md mt-2"
      >
        Update
      </button> */}
    </SubLayout>
  );
}
