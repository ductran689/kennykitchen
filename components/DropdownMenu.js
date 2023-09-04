import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import data from '../utils/data';

const DropdownMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative " ref={dropdownRef}>
      <button
        className="inline-flex items-center max-[1024px]:mt-[15px] w-full mr-6 hover:text-white text-[18px] font-[500] text-gray-200 bg-transparent rounded-md  focus:outline-none "
        onClick={toggleMenu}
      >
        {children}
        <svg
          className="w-4 h-4 ml-2 -mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M10 12l-6-6h12l-6 6z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-[15%] top-4 lg:top-6 w-48 py-2 mt-2 bg-black/50 rounded-md shadow-lg">
          {data.services.map((service, i) => (
            <Link
              key={i + 0.2}
              href={`/services/${service.slug}`}
              className="block px-4 py-2 font-[600] text-slate-200 hover:bg-gray-200/25 hover:text-black "
            >
              {service.name}
            </Link>
          ))}

          {/* <Link
            href="/"
            className="block px-4 py-2 font-[600] text-slate-200 hover:bg-gray-200/25 hover:text-slate-700"
          >
            Home
          </Link>
          <Link
            href="/"
            className="block px-4 py-2 font-[600] text-slate-200 hover:bg-gray-200/25 hover:text-slate-700"
          >
            Home
          </Link> */}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
