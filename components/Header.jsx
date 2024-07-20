'use client'
import React, { useState } from 'react'

const Header = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <header className={className}>
      <nav className="w-full min-h-[80px] max-h-[150px] grid grid-cols-header grid-rows-2 px-[30px] py-[10px] ">
        <h1 className="row-start-1 col-start-2 row-end-2 col-end-3 text-[3.2rem] cursor-pointer ">
          Avengers
        </h1>
        <img
          type="icon"
          src="/marvimgs/IconsFol/transparent.png"
          alt="Avengers"
          width={50}
          height={50}
          className=" align-middle row-start-1 col-start-3 row-end-2 cursor-pointer justify-self-end col-end-4"
          onClick={() => setIsOpen(!isOpen)}
        />
        <div className={`row-start-2 row-end-2 col-start-2 col-end-4 rounded-xl overflow-hidden ${!isOpen ? 'hidden' : 'flex justify-around items-center text-center backdrop-blur-[5px] bg-backColor-1'} `}>
          <div className="contact">
            <h3>Contact</h3>
            <p>www.getout#joke.comforyou</p>
          </div>
          <div className="social">
            <h3>Unsocial</h3>
            <p>Twitter</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header