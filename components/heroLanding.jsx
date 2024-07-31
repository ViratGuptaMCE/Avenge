'use client'
import React, { useEffect, useState } from 'react'
import { LANDING_HEROES } from '@/constants';
import Loader from './loader';
// import { promises as fs } from "fs";


const HeroLandingPage = ({page}) => {
  const [hero] = LANDING_HEROES.filter((heros) => heros.name === page);
  const [loaded, setLoaded] = useState(false);
  const topImg = hero.topImg;
  const bottomImg = hero.bottomImg;
  const [about, setAbout] = useState("");
  const [armor, setArmor] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const aboutResponse = await fetch(`/texts/abouts/${page}.txt`);
        const aboutText = await aboutResponse.text();
        setAbout(aboutText);

        const armorResponse = await fetch(`/texts/armors/${page}.txt`);
        const armorText = await armorResponse.text();
        setArmor(armorText);
        setLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [page]);

  if(!loaded) return(<Loader/>)
  
  

  return (
    <div
      className="content w-full font-descript "
      style={{
        background: hero.bg,
      }}
    >
      <img src={topImg} alt="ironman" className="photo w-full" />
      <div className="about w-[80%] m-auto ">
        <div
          className={`h1`}
          style={{
            color: hero.headColor,
            textShadow: `${hero.shadowColor} 3px 3px 5px`,
          }}
        >
          About{" "}
          <span
            className="stick font-sketch ml-3 text-[100px]"
            style={{
              color: hero.headColor,
              textShadow: `${hero.shadowColor} 3px 3px 0px`,
            }}
          >
            {hero.letter}
          </span>
        </div>
        <p className="descrip text-white text-lg tracking-wide mb-[50px]">
          {about}
        </p>
        <hr />
      </div>
      <div className="armor w-[80%] m-auto mt-[50px]">
        <div
          className="h1"
          style={{
            color: hero.headColor,
            textShadow: `${hero.shadowColor} 3px 3px 5px`,
          }}
        >
          Agent & Suits
        </div>
        <div className="descrip text-white text-lg tracking-wide mb-[50px]">
          {armor}
        </div>
      </div>
      <img src={bottomImg} alt="Suits" className="photo w-full" />
    </div>
  );
}

export default HeroLandingPage