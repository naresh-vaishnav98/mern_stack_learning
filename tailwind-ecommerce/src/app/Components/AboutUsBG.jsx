import React from 'react'

export default function AboutUsBG() {
  return (
    <>
      <div class="relative">
          <img
            class="w-full object-cover brightness-50 filter lg:h-[500px]"
            src="/images/about-us-bg.jpeg"
            alt="Iphone with Macbook image"
          />

          <div
            class="absolute top-1/2 left-1/2 mx-auto flex w-11/12 max-w-[1200px] -translate-x-1/2 -translate-y-1/2 flex-col text-center text-white lg:ml-5"
          >
            <h1 class="text-4xl font-bold sm:text-5xl">About Us</h1>
            <p class="mx-auto pt-3 text-xs lg:w-3/5 lg:pt-5 lg:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur aperiam natus, nulla, obcaecati nesciunt, itaque
              adipisci earum ducimus pariatur eaque labore.
            </p>
          </div>
        </div>
    </>
  )
}
