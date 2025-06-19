import React from 'react'
import ConsBages from './ConsBages'
import Link from 'next/link'

export default function CheckoutDelivery() {
  return (
    <>
      <div class="flex-grow">
        <section
          class="container mx-auto max-w-[1200px] py-5 lg:flex lg:flex-row lg:py-10"
        >
          <h2 class="mx-auto px-5 text-2xl font-bold md:hidden">
            Delivery Method
          </h2>
          {/* <!-- form  --> */}
          <section
            class="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10"
          >
            <table class="hidden lg:table">
              <thead class="h-16 bg-neutral-100">
                <tr>
                  <th>ADDRESS</th>
                  <th class="bg-neutral-600 text-white">DELIVERY METHOD</th>
                  <th>PAYMENT METHOD</th>
                  <th>ORDER REVIEW</th>
                </tr>
              </thead>
            </table>

            <div class="py-5">
              <form
                class="grid w-full grid-cols-1 gap-3 lg:grid-cols-2"
                action=""
              >
                <div class="flex w-full justify-between gap-2">
                  <div class="flex w-full cursor-pointer flex-col border">
                    <div class="flex bg-amber-400 px-4 py-2">
                      <input class="outline-yellow-400" type="radio" />

                      <p class="ml-3 font-bold">DHL, next day</p>
                    </div>

                    <div class="px-4 py-3">
                      <p class="pb-3 font-bold text-violet-900">FREE</p>
                      <p class="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui nulla dolorum obcaecati, sequi, quidem quo eligendi
                        soluta modi accusamus esse explicabo exercitationem!
                      </p>
                    </div>
                  </div>
                </div>

                <div class="flex w-full cursor-pointer flex-col border">
                  <div class="flex bg-amber-400 px-4 py-2">
                    <input class="outline-yellow-400" type="radio" />

                    <p class="ml-3 cursor-pointer font-bold">SDEK, 3 hours</p>
                  </div>

                  <div class="px-4 py-3">
                    <p class="pb-3 font-bold text-violet-900">&dollar;300</p>
                    <p class="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui nulla dolorum obcaecati, sequi, quidem quo eligendi
                      soluta modi accusamus esse explicabo exercitationem!
                    </p>
                  </div>
                </div>

                <div class="flex w-full cursor-pointer flex-col border">
                  <div class="flex bg-amber-400 px-4 py-2">
                    <input class="outline-yellow-400" type="radio" />

                    <p class="ml-3 font-bold">UPS, Secure Delivery</p>
                  </div>

                  <div class="cursor-pointer px-4 py-3">
                    <p class="pb-3 font-bold text-violet-900">&dollar;50</p>
                    <p class="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui nulla dolorum obcaecati, sequi, quidem quo eligendi
                      soluta modi accusamus esse explicabo exercitationem!
                    </p>
                  </div>
                </div>

                <div class="flex w-full cursor-pointer flex-col border">
                  <div class="flex bg-amber-400 px-4 py-2">
                    <input class="outline-yellow-400" type="radio" />

                    <p class="ml-3 font-bold">Pochta Rossii, 12 years</p>
                  </div>

                  <div class="cursor-pointer px-4 py-3">
                    <p class="pb-3 font-bold text-violet-900">&dollar;3000</p>
                    <p class="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui nulla dolorum obcaecati, sequi, quidem quo eligendi
                      soluta modi accusamus esse explicabo exercitationem!
                    </p>
                  </div>
                </div>
              </form>
            </div>

            <div class="flex w-full items-center justify-between">
              <a
                href="catalog.html"
                class="hidden text-sm text-violet-900 lg:block"
                >&larr; Back to the shop</a
              >

              <div class="mx-auto flex justify-center gap-2 lg:mx-0">
                <Link
                  href="/checkout-address"
                  class="bg-purple-900 px-4 py-2 text-white"
                  >Previous step</Link>

                <Link href="/checkout-payment" class="bg-amber-400 px-4 py-2"
                  >Payment method</Link>
              </div>
            </div>
          </section>
          {/* <!-- /form  --> */}

          {/* <!-- Summary  --> */}

          <section class="mx-auto w-full px-4 md:max-w-[400px]">
            <div class="">
              <div class="border py-5 px-4 shadow-md">
                <p class="font-bold">ORDER SUMMARY</p>

                <div class="flex justify-between border-b py-5">
                  <p>Subtotal</p>
                  <p>$1280</p>
                </div>

                <div class="flex justify-between border-b py-5">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>

                <div class="flex justify-between py-5">
                  <p>Total</p>
                  <p>$1280</p>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* <!-- /Summary --> */}

        {/* <!-- Cons bages --> */}

        <ConsBages/>
      </div>
    </>
  )
}
