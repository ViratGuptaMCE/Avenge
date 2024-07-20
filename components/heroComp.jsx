'use client'
import React, { useState } from 'react'

const Hero = (props) => {
  // console.log(props.name);
  const [hovered, setHovered] = useState(false)
  // console.log(hovered)
  return (
    <section
      className={`iron h-[100vh] m-0 p-0 w-full grid grid-cols-main`}
      id={`${props.id}`}
      style={{
        background: props.bg,
      }}
    >
      <div className="details flex flex-col col-start-2 col-end-3 mb-[30px] self-end">
        <a href="iron.html" className="sketch text-[120px]">
          {props.letter}
        </a>
        <h1 className="name text-[50px]">{props.name}</h1>
        <h2 className="brief">{props.brief}</h2>
      </div>
      <div
        className="hero overflow-hidden col-start-3 col-end-5 flex justify-center m-0 p-0 z-0 items-center"
        onMouseEnter={() => { 
          // console.log(hovered)
          setHovered(!hovered)}}
        onMouseLeave={() => {
          // console.log(hovered)
          setHovered(!hovered)}}
      >
        <img
          src={props.imgSrc1}
          alt="left"
          className={`Left max-w-[48%] max-h-[80vh] overflow-hidden transition-all duration-[2s] ease-in-out  ${
            hovered ? "translate-y-0" :'translate-y-[30px]'
          }`}
        />
        <img
          src={props.imgSrc2}
          alt="Right"
          className={`Right max-w-[48%] max-h-[80vh] overflow-hidden transition-all duration-[2s] ease-in-out  ${
            hovered ? "translate-y-0" : 'translate-y-[-30px]'
          }`}
        />
      </div>
    </section>
  );
}

export default Hero