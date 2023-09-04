import Image from 'next/image';
import React, { useRef, useState } from 'react';

export default function Projects({ project }) {
  const [imageRevealFraq, setImageRevealFraq] = useState(0.5);
  const imageContainer = useRef(undefined);

  const slide = (xPosition) => {
    const containerBoundingRect =
      imageContainer.current.getBoundingClientRect();
    setImageRevealFraq(() => {
      if (xPosition < containerBoundingRect.left) {
        return 0;
      } else if (xPosition > containerBoundingRect.right) {
        return 1;
      } else {
        return (
          (xPosition - containerBoundingRect.left) / containerBoundingRect.width
        );
      }
    });
  };
  const handleTouchMove = (event) => {
    slide(event.touches.item(0).clientX);
  };

  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  };
  const handleMouseMove = (event) => {
    slide(event.clientX);
  };

  const handleMouseUp = () => {
    window.onmousemove = undefined;
    window.onmouseup = undefined;
  };

  return (
    <div className="project_container flex flex-col mb-[20px]">
      <h1 className="text-center text-[30px] font-[500] text-slate-700">
        {project.location}
      </h1>
      <div className=" px-4">
        <div
          ref={imageContainer}
          className="max-w-lg w-full h-[400px] mx-auto mt-[20px] relative select-none"
        >
          <Image
            className=" pointer-events-none"
            src={project.img_1}
            alt="color photo"
            fill="true"
          />
          <Image
            className="absolute inset-0 pointer-events-none"
            style={{
              /*  filter: 'grayscale(100%)', */
              clipPath: `polygon(0 0,${imageRevealFraq * 100}%0,${
                imageRevealFraq * 100
              }%100%, 0 100%)`,
            }}
            src={project.img_2}
            alt="black and white"
            fill="true"
          />
          <div
            style={{ left: `${imageRevealFraq * 100}%` }}
            className="absolute inset-y-0"
          >
            <div className="relative h-full">
              <div className="absolute inset-y-0 bg-white w-0.5 -ml-px"></div>
              <div
                className=" slider h-12 w-12 -ml-6 -mt-6 rounded-full bg-white absolute top-1/2 shadow-xl flex items-center justify-center cursor pointer"
                onMouseDown={handleMouseDown}
                onTouchMove={handleTouchMove}
                style={{ touchAction: 'none' }}
                name={project.name}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#000000"
                  className="w-8 h-8 rotate-90 transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
