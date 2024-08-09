'use client'
import React, { useState } from 'react'
import { slideContext } from '@/contexts/contexts';
import PageSlider from '@/components/pageSlider';

const layout = ({ children }) => {
  const [slide, setSlide] = useState(1)
  return (
    <slideContext.Provider value={{ value: slide, setValue: setSlide }}>
      <main className="portfolio h-[100vh] overflow-y-scroll snap-y snap-mandatory relative text-white">
        {children}
        <PageSlider />
      </main>
    </slideContext.Provider>
  );
};

export default layout