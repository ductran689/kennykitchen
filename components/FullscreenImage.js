import Image from 'next/image';
import React from 'react';

const FullScreenImage = ({ imageUrl }) => {
  return (
    <div className="w-[790px] z-40">
      <Image src={imageUrl} alt="Full-Screen Image" fill="true" />
    </div>
  );
};

export default FullScreenImage;
