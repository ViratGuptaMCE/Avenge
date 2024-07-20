import Header from '@/components/Header';
import React from 'react'

const HomeLayout = ({children}) => {
  return (
    <main className="relative text-white">
      <Header className="fixed w-full z-10"/>
      <div className="flex">
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14 ">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
}

export default HomeLayout