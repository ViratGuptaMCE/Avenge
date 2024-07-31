import HeroLandingPage from '@/components/heroLanding'
import React from 'react'

const Page = ({params}) => {
  return (
    <HeroLandingPage page={params.slug} />
  )
}

export default Page