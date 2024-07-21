import React from 'react'

const Page = ({params}) => {
  console.log(params)
  return (
    <div className='text-black'>Hello {params.slug}</div>
  )
}

export default Page