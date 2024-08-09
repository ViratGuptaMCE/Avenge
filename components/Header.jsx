'use client'
import React, { useRef, useState } from 'react'
import gsap from 'gsap';

const Header = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  
  const t2 = gsap.timeline({ paused: true, reversed: true });
  const navOpen = useRef();
  const contact = useRef();
  const social = useRef();
  function animateHead() {
    t2.to(navOpen.current,
      {
      y: "-100%",
      duration: 0,
      }
    );
    t2.to(contact.current, {
      opacity: 0,
      y: "-100%",
      duration: 0
    });
    t2.to(social.current, {
      opacity: 0,
      y: "100%",
      duration: 0,
    });
    t2.to(
      navOpen.current,
      {
        y: "0%" ,
        duration : 0.5
      },      
    )
    t2.to(contact.current, {
      opacity: 1,
      y: "0%",
      duration: 0.5,
    });
    t2.to(social.current, {
      opacity: 1,
      y: "0%",
      duration: 0.5,
    });
      // .from(
      //   contact.current,
      //   0.5,
      //   { opacity: 0, y: "-100%" },
      //   { opacity: 1, y: "0%" }
      // )
      // .from(
      //   social.current,
      //   0.5,
      //   { opacity: 0, y: "100%" },
      //   { opacity: 1, y: "0%" }
    // );
    // console.log("\n isOpen is : ", isOpen);
    !isOpen ? t2.play() : t2.reverse(1.5);
  }

  return (
    <header className={className}>
      <nav className="w-full min-h-[80px] max-h-[150px] grid grid-cols-header grid-rows-2 px-[30px] py-[10px] ">
        <h1 className="row-start-1 col-start-2 row-end-2 col-end-3 text-[3.2rem] cursor-pointer ">
          Avengers
        </h1>
        <img
          type="icon"
          src={
            isOpen
              ? "/marvimgs/IconsFol/filled.png"
              : "/marvimgs/IconsFol/transparent.png"
          }
          alt="Avengers"
          width={50}
          height={50}
          className=" align-middle row-start-1 col-start-3 row-end-2 cursor-pointer justify-self-end col-end-4"
          onClick={(e) => {
            e.preventDefault();
            if(isOpen===false)  {
              setIsOpen(!isOpen);
              // console.log(isOpen);
              animateHead();
            } else {
              animateHead();
              setTimeout(() => setIsOpen(!isOpen),1400);
            }
          }}
        />
        <div
          className={`row-start-2 row-end-2 col-start-2 col-end-4 rounded-xl overflow-hidden ${
            !isOpen
              ? "hidden"
              : "flex justify-around items-center text-center backdrop-blur-[5px] bg-backColor-1"
            } `}
          ref={navOpen}
        >
          <div className="contact" ref={contact}>
            <h3>Contact</h3>
            <p>www.getout#joke.comforyou</p>
          </div>
          <div className="social" ref={social}>
            <a href={'/heromodel'}>Models</a>
            <p>Twitter</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header