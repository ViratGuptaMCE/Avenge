'use client'
import React, { useRef, useState } from 'react'
import Link from 'next/link';

const ShopHeader = () => {
  const [isSearch, setisSearch] = useState(false);
  const first = useRef();
  return (
    <div className="text-black bg-headBg min-h-[60px] flex-between px-8">
      <div className="logo flex-center">
        <div className="relative w-[80px] overflow-hidden">
          <img
            src="/svgs/blob.svg"
            className="absolute h-full w-full"
          ></img>
          <svg
            viewBox="0 0 76 76"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            baseProfile="full"
            enable-background="new 0 0 76.00 76.00"
            xmlSpace="preserve"
            fill="#ffffff"
            stroke="#ffffff"
            className="w-full scale-125"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill="#ff0000"
                fill-opacity="1"
                stroke-linejoin="round"
                d="M 42,50L 47,45L 47,50L 42,50 Z M 47,19L 47,26.355C 51.7937,29.2418 55,34.4965 55,40.5C 55,49.6127 47.6127,57 38.5,57C 35.911,57 33.4613,56.4037 31.2807,55.341L 32.5585,52.6256C 34.3514,53.5058 36.368,54 38.5,54C 45.9558,54 52,47.9559 52,40.5C 52,36.2656 50.0505,32.4865 47,30.0114L 47,42L 42,37L 42,28L 36,41L 42,41L 42,38.5L 46.9999,43.5L 42,48.5L 42,46L 34,46L 29,57L 23,57L 37.9954,27.0093C 30.7733,27.2747 25,33.2131 25,40.5C 25,42.6708 25.5124,44.722 26.4228,46.5391L 24.8803,49.8169C 23.0631,47.1657 22,43.957 22,40.5C 22,31.3873 29.3873,24 38.5,24L 39.4855,24.0289L 42,19L 47,19 Z "
              ></path>{" "}
            </g>
          </svg>
        </div>
        <h1 className="self-center text-[30px] text-red-600 drop-shadow-2xl">AvengeStore</h1>
      </div>
      <div className="navigation w-[40%]">
        <nav className="flex-between">
          <div className="flex-center">
            {isSearch && <input type="text" placeholder='search' className='w-[60px] text-xl'/>}
            <img
              src="/svgs/search.svg"
              alt=""
              width={25}
              className=" transition-all hover:scale-125"
              onClick={() =>setisSearch(!isSearch)}
            />
          </div>
          <Link href="./" className="font-descript text-2xl ">
            Home
          </Link>
          <Link href="./" className="font-descript text-2xl ">
            Login
          </Link>
          <Link href="./" className="font-descript text-2xl ">
            Cart
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default ShopHeader