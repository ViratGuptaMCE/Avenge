'use client'
import { scrollPositionContext } from '@/contexts/contexts';
import React from 'react'
import { useContext } from 'react';

const PageScroller = () => {
  const posContext = useContext(scrollPositionContext);
  return (
    <div className="pages">
      {Array.from({ length: 6 }, (_, ind) => (
        <a
          href="/"
          key={ind}
          className={`page ${ind + 1}`}
          onClick={(e) => {
            e.preventDefault();
            const heroSection = document.getElementById(`${ind + 1}`);
            posContext.setValue(ind + 1);
            heroSection && heroSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className={`circle ${posContext.value ===ind+1 ?'active' : ''}`}></div>
          <div className="index">{ind + 1}</div>
        </a>
      ))}
    </div>
  );
}

export default PageScroller