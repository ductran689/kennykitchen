import { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface Props {
  dirs: string[];
}

const Home: NextPage<Props> = ({ dirs }) => {
  console.log(dirs);
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File>();
  /* const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null); */

  /* const onCancelFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!previewUrl && !file) {
      return;
    }
    setFile(null);
    setPreviewUrl(null);
  }; */

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append('myImage', selectedFile);
      const { data } = await axios.post('/api/image', formData);
      console.log(data);
    } catch (error: any) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };
  const handleCancel = () => {
    setSelectedImage('');
  };

  return (
    <div className=" rounded-md bg-slate-300 border-[1px] border-black mx-auto p-10 mb-10 space-y-6 flex justify-around">
      <label>
        <input
          type="file"
          hidden
          onChange={({ target }) => {
            if (target.files && target.files.length > 0) {
              const file = target.files[0];

              try {
                const objectURL = URL.createObjectURL(file);
                setSelectedImage(objectURL);
                setSelectedFile(file);
              } catch (error) {
                console.error('Error creating object URL:', error);
                // Handle the error gracefully, e.g., display an error message to the user.
              }
            }
          }}
        />
        <div className="w-[300px] h-[300px] relative  aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer">
          {selectedImage ? (
            <Image src={selectedImage} alt="" fill />
          ) : (
            <label className="flex flex-col items-center justify-center h-full py-3 transition-colors duration-150 cursor-pointer hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-14 h-14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>

              <span>Select Image</span>
            </label>
          )}
        </div>
      </label>
      <div className="flex mt-4 md:mt-0 md:flex-col justify-center gap-1.5">
        <button
          onClick={handleUpload}
          disabled={uploading}
          style={{ opacity: uploading ? '.5' : '1' }}
          className="bg-red-600 p-3 w-32 text-center rounded text-white"
        >
          {uploading ? 'Uploading..' : 'Upload'}
        </button>

        <button
          onClick={handleCancel}
          disabled={uploading}
          style={{ opacity: uploading ? '.5' : '1' }}
          className="bg-red-600 p-3 w-32 text-center rounded text-white"
        >
          Cancel
        </button>
      </div>

      {dirs && (
        <div className="mt-20 flex flex-col space-y-3">
          {dirs.map((item) => (
            <Link key={item} href={'/images/' + item}>
              <a className="text-blue-500 hover:underline">{item}</a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  const props = { dirs: [] };
  try {
    const dirs = await fs.readdir(
      path.join(process.cwd(), '/public/images'),
      (err, files) => {
        console.log(files);
      }
    );

    props.dirs = dirs as any;
    return { props };
  } catch (error) {
    return { props };
  }
};

export default Home;
