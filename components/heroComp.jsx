'use client'
import React, { useState } from 'react'

const Hero = (props) => {
  // console.log(props.name);
  const [hovered, setHovered] = useState(false)
  // console.log(hovered)
  return (
    <section
      className={`iron h-[100vh] m-0 p-0 w-full grid grid-cols-main `}
      id="iron"
      style={{
        background: props.bg,
      }}
    >
      <div class="details flex flex-col col-start-2 col-end-3 mb-[30px] self-end">
        <a href="iron.html" class="sketch text-[120px]">
          {props.letter}
        </a>
        <h1 class="name text-[50px]">{props.name}</h1>
        <h2 class="brief">{props.brief}</h2>
      </div>
      <div
        class="hero overflow-hidden col-start-3 col-end-5 flex justify-center m-0 p-0 z-0 items-center"
        onMouseEnter={() => { 
          console.log(hovered)
          setHovered(!hovered)}}
        onMouseLeave={() => {
          console.log(hovered)
          setHovered(!hovered)}}
      >
        <img
          src={props.imgSrc1}
          alt="left"
          class={`Left max-w-[48%] max-h-[80vh] overflow-hidden transition-all duration-[2s] ease-in-out  ${
            hovered ? "translate-y-0" :'translate-y-[30px]'
          }`}
        />
        <img
          src={props.imgSrc2}
          alt="Right"
          class={`Right max-w-[48%] max-h-[80vh] overflow-hidden transition-all duration-[2s] ease-in-out  ${
            hovered ? "translate-y-0" : 'translate-y-[-30px]'
          }`}
        />
      </div>
    </section>
  );
}

export default Hero