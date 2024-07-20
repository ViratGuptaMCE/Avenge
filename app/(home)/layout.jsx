import Header from '@/components/Header';
import PageScroller from '@/components/pageScroller';
import React from 'react'

const HomeLayout = ({children}) => {
  return (
    <main className="relative text-white">
      <Header className="fixed w-full z-10"/>
      {children}
      <PageScroller />
    </main>
  );
}

export default HomeLayout