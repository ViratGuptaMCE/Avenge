import { slideContext } from '@/contexts/contexts';
import React, { useContext } from 'react'

const setSlide = (value , append) => {
  if (value === 1 && append === -1) {
    return  6;
  } else if (value === 6 && append === 1) {
    return  1;
  } else {
    return value + append;
  }
}

const PageSlider = () => {
  const slide = useContext(slideContext);
  return (
    <div className="fixed top-[50%] w-full translate-y-[-50%] pointer-events-none">
      <div className="mx-3  flex justify-between">
        <div
          className="w-[75px] bg-[#ffffff61] h-[75px] rounded-full flex items-center justify-center opacity-10 hover:opacity-100 pointer-events-auto"
          onClick={(e) => {
            e.preventDefault();
            slide.setValue(()=> setSlide(slide.value , -1));
          }
        }>
          <img
            src="/svgs/arrow.svg"
            alt="Arrow"
            className="rotate-180  transition-all"
            width={40}
          />
        </div>
        <div className="w-[75px] bg-[#ffffff61] h-[75px] rounded-full flex items-center justify-center opacity-10 hover:opacity-100 pointer-events-auto"
        onClick={(e) => {
          e.preventDefault();
          slide.setValue(()=> setSlide(slide.value , 1));
        }}
        >
          <img
            src="/svgs/arrow.svg"
            alt="Arrow"
            width={40}
          />
        </div>
      </div>
    </div>
  );
}

export default PageSlider