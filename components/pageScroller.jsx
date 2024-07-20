'use client'
import React from 'react'

const PageScroller = () => {
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
            console.log(heroSection)
            heroSection && heroSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="circle"></div>
          <div className="index">{ind + 1}</div>
        </a>
      ))}
    </div>
  );
}

export default PageScroller