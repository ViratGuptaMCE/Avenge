'use client'
import { scrollPositionContext } from '@/contexts/contexts';
import React from 'react'
import { useContext } from 'react';

const PageScroller = () => {
  const posContext = useContext(scrollPositionContext);
  return (
    <div className="pages fixed right-[5%] h-[30%] flex flex-col justify-between translate-x-[-5%] translate-y-[-50%] top-[50%]">
      {Array.from({ length: 6 }, (_, ind) => (
        <a
          href="/"
          key={ind}
          className={`flex`}
          onClick={(e) => {
            e.preventDefault();
            const heroSection = document.getElementById(`${ind + 1}`);
            posContext.setValue(ind + 1);
            heroSection && heroSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div
            className={`circle bg-white w-[15px] h-[15px] mr-3 rounded-full self-center ${
              posContext.value === ind + 1 ? "opacity-100" : "opacity-50"
            }`}
          ></div>
          <div
            className={`${
              posContext.value === ind + 1 ? "opacity-100" : "opacity-50"
            }`}
          >
            {ind + 1}
          </div>
        </a>
      ))}
    </div>
  );
}

export default PageScroller