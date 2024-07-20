import Hero from '@/components/heroComp.jsx'
import React from 'react'
import { HERO } from '@/constants.js'

const page = () => {
  return (
    <div className='main'>
      {
        HERO.map((person) => {
          // console.log(person.name)
          return <Hero
            key={person.link}
            name={person.name}
            letter={person.sketchLetter}
            brief={person.brief}
            imgSrc1={person.imgSrc1}
            imgSrc2={person.imgSrc2}
            link={person.link}
            bg={person.bg}
            id={person.id}
          />
        })
      }
      
    </div>
  )
}

export default page