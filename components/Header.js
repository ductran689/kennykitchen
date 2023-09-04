import Link from 'next/link';
import { useState } from 'react';
import DropdownMenu from '../components/DropdownMenu';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-x-6 bg-black/50 h-[60px]">
      {/* <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <Image
          className="rounded-t-lg  fill-slate-700"
          src=""
          alt="logo"
          width={40}
          height={40}
        />
      </div> */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-white h-5 w-5 ${isOpen ? 'hidden' : 'block'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-white h-5 w-5 ${isOpen ? 'block' : 'hidden'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block  lg:flex lg:items-center lg:w-auto  ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="text-sm lg:flex lg:justify-end max-[1024px]:bg-black/50 max-[1024px]:pl-[10px] max-[1024px]:pb-[10px] max-[1024px]:pt-[5px] z-40">
          <Link href="/" className="text-header">
            Home
          </Link>
          <Link href="/about" className="text-header">
            About Us
          </Link>

          <Link href="#service_section" scroll={false}>
            <DropdownMenu>Services</DropdownMenu>
          </Link>

          <Link href="/projects" className="text-header">
            Projects
          </Link>
          <Link href="/promotion" className="text-header">
            Promotion
          </Link>

          <Link href="/quote" className=" ">
            <p className="text-header border-solid border-2 px-1 w-fit hover:bg-white hover:text-slate-500">
              FREE Quote
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Header;
