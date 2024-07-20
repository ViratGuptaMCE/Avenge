'use client'
import Header from '@/components/Header';
import PageScroller from '@/components/pageScroller';
import React, { useState } from 'react'
import { scrollPositionContext } from '@/contexts/contexts.js';

const HomeLayout = ({ children }) => {
  const [scrollPos, setScrollPos] = useState(1)
  return (
    <scrollPositionContext.Provider value={{ value :scrollPos , setValue :setScrollPos}}>
      <main className="portfolio h-[100vh] overflow-y-scroll snap-y snap-mandatory relative text-white">
        <Header className="fixed w-full z-10" />
        {children}
        <PageScroller />
      </main>
    </scrollPositionContext.Provider>
  );
}

export default HomeLayout