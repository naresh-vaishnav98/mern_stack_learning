import React from 'react'
import ConsBages from './ConsBages'
import Link from 'next/link'

export default function CheckoutAddress() {
  return (
    <>
      <div class="flex-grow">
        <section
          class="container mx-auto max-w-[1200px] py-5 lg:flex lg:flex-row lg:py-10"
        >
          <h2 class="mx-auto px-5 text-2xl font-bold md:hidden">
            Complete Address
          </h2>
          {/* <!-- form  --> */}
          <section
            class="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10"
          >
            <table class="hidden lg:table">
              <thead class="h-16 bg-neutral-100">
                <tr>
                  <th class="bg-neutral-600 text-white">ADDRESS</th>
                  <th>DELIVERY METHOD</th>
                  <th>PAYMENT METHOD</th>
                  <th>ORDER REVIEW</th>
                </tr>
              </thead>
            </table>

            <div class="py-5">
              <form class="flex w-full flex-col gap-3" action="">
                <div class="flex w-full justify-between gap-2">
                  <div class="flex w-1/2 flex-col">
                    <label class="flex" for="name"
                      >Full Name<span
                        class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
                      ></span
                    ></label>
                    <input
                      class="w-full border px-4 py-2 outline-yellow-400"
                      type="text"
                      placeholder="Sarah Johnson"
                    />
                  </div>

                  <div class="flex w-1/2 flex-col">
                    <label class="flex" for="name"
                      >Email Address<span
                        class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
                      ></span
                    ></label>
                    <input
                      class="w-full border px-4 py-2 outline-yellow-400"
                      type="text"
                      placeholder="sarahj@maybell.com"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div class="flex w-full justify-between gap-2">
                  <div class="flex w-1/2 flex-col">
                    <label class="flex" for="name"
                      >Street<span
                        class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
                      ></span
                    ></label>
                    <input
                      class="w-full border px-4 py-2 outline-yellow-400"
                      type="text"
                      placeholder="Big Serbian avenue, 18"
                    />
                  </div>

                  <div class="flex w-1/2 flex-col">
                    <label class="flex" for="name"
                      >City<span
                        class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
                      ></span
                    ></label>
                    <input
                      class="w-full border px-4 py-2 outline-yellow-400"
                      type="text"
                      placeholder="Belgrade"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div class="flex w-full justify-between gap-2">
                  <div class="flex w-1/2 flex-col">
                    <label class="flex" for="name"
                      >ZIP code<span
                        class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
                      ></span
                    ></label>
                    <input
                      x-mask="999999"
                      class="w-full border px-4 py-2 outline-yellow-400"
                      placeholder="176356"
                    />
                  </div>

                  <div class="flex w-1/2 flex-col">
                    <label class="flex" for="name"
                      >Recipient<span
                        class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
                      ></span
                    ></label>
                    <input
                      class="w-full border px-4 py-2 outline-yellow-400"
                      type="text"
                      placeholder="Andrew Johnson"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div class="flex flex-col">
                  <label for="">Commentary</label>
                  <textarea
                    class="border px-4 py-2 outline-yellow-400"
                    type="text"
                  ></textarea>
                </div>
              </form>
            </div>

            <div class="flex w-full items-center justify-between">
              <a href="catalog.html" class="text-sm text-violet-900"
                >&larr; Back to the shop</a
              >

              <Link href="/checkout-delivery" class="bg-amber-400 px-4 py-2"
                >Place an order</Link>
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

        {/* <!-- /Cons bages  --> */}
      </div>
    </>
  )
}
