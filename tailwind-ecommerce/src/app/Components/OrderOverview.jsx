import React from 'react'
import ProfileSidebar from './Common/ProfileSidebar'

export default function OrderOverview() {
  return (
    <>
      <section
        class="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
      >
        {/* <!-- sidebar  --> */}
        <ProfileSidebar/>
        {/* <!-- /sidebar  --> */}

        {/* <!-- Mobile product table  --> */}
        <section
          class="container mx-auto my-3 flex w-full flex-col gap-3 px-4 md:hidden"
        >
          {/* <!-- 1 --> */}

          <div class="flex w-full border px-4 py-4">
            <img
              class="self-start object-contain"
              width="90px"
              src="/images/bedroom.png"
              alt="bedroom image"
            />
            <div class="ml-3 flex w-full flex-col justify-center">
              <div class="flex items-center justify-between">
                <p class="text-xl font-bold">ITALIAN BED</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"
                  />
                </svg>
              </div>
              <p class="text-sm text-gray-400">Size: XL</p>
              <p class="py-3 text-xl font-bold text-violet-900">$320</p>
              <div class="mt-2 flex w-full items-center justify-between">
                <div class="flex items-center justify-center">
                  <div
                    class="flex cursor-text items-center justify-center active:ring-gray-500"
                  >
                    Quantity: 1
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- 2 --> */}

          <div class="flex w-full border px-4 py-4">
            <img
              class="self-start object-contain"
              width="90px"
              src="/images/product-chair.png"
              alt="Chair image"
            />
            <div class="ml-3 flex w-full flex-col justify-center">
              <div class="flex items-center justify-between">
                <p class="text-xl font-bold">GUYER CHAIR</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"
                  />
                </svg>
              </div>
              <p class="text-sm text-gray-400">Size: XL</p>
              <p class="py-3 text-xl font-bold text-violet-900">$320</p>
              <div class="mt-2 flex w-full items-center justify-between">
                <div class="flex items-center justify-center">
                  <div
                    class="flex cursor-text items-center justify-center active:ring-gray-500"
                  >
                    Quantity: 1
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- 3 --> */}

          <div class="flex w-full border px-4 py-4">
            <img
              class="self-start object-contain"
              width="90px"
              src="/images/outdoors.png"
              alt="Outdoor chair image"
            />
            <div class="ml-3 flex w-full flex-col justify-center">
              <div class="flex items-center justify-between">
                <p class="text-xl font-bold">OUTDOOR CHAIR</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"
                  />
                </svg>
              </div>
              <p class="text-sm text-gray-400">Size: XL</p>
              <p class="py-3 text-xl font-bold text-violet-900">$320</p>
              <div class="mt-2 flex w-full items-center justify-between">
                <div class="flex items-center justify-center">
                  <div
                    class="flex cursor-text items-center justify-center active:ring-gray-500"
                  >
                    Quantity: 1
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- 4 --> */}

          <div class="flex w-full border px-4 py-4">
            <img
              class="self-start object-contain"
              width="90px"
              src="/images/matrass.png"
              alt="Matrass image"
            />
            <div class="ml-3 flex w-full flex-col justify-center">
              <div class="flex items-center justify-between">
                <p class="text-xl font-bold">MATRASS COMFORT &plus;</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"
                  />
                </svg>
              </div>
              <p class="text-sm text-gray-400">Size: XL</p>
              <p class="py-3 text-xl font-bold text-violet-900">$320</p>
              <div class="mt-2 flex w-full items-center justify-between">
                <div class="flex items-center justify-center">
                  <div
                    class="flex cursor-text items-center justify-center active:ring-gray-500"
                  >
                    Quantity: 1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /Mobile product table  --> */}

        {/* <!-- Product table  --> */}
        <section class="w-full max-w-[1200px] gap-3 px-5 pb-10">
          <table class="hidden w-full md:table">
            <thead class="h-16 bg-neutral-100">
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- 1 --> */}

              <tr class="h-[100px] border-b">
                <td class="align-middle">
                  <div class="flex">
                    <img
                      class="w-[90px]"
                      src="/images/bedroom.png"
                      alt="bedroom image"
                    />
                    <div class="ml-3 flex flex-col justify-center">
                      <p class="text-xl font-bold">ITALIAN BED</p>
                      <p class="text-sm text-gray-400">Size: XL</p>
                    </div>
                  </div>
                </td>
                <td class="mx-auto text-center">&#36;320</td>
                <td class="text-center align-middle">1</td>
                <td class="mx-auto text-center">&#36;320</td>
              </tr>

              {/* <!-- 2 --> */}

              <tr class="h-[100px] border-b">
                <td class="align-middle">
                  <div class="flex">
                    <img
                      class="w-[90px]"
                      src="/images/product-chair.png"
                      alt="Chair Image"
                    />
                    <div class="ml-3 flex flex-col justify-center">
                      <p class="text-xl font-bold">GUYER CHAIR</p>
                      <p class="text-sm text-gray-400">Size: XL</p>
                    </div>
                  </div>
                </td>
                <td class="mx-auto text-center">&#36;320</td>
                <td class="text-center align-middle">1</td>
                <td class="mx-auto text-center">&#36;320</td>
              </tr>

              {/* <!-- 3 --> */}

              <tr class="h-[100px] border-b">
                <td class="align-middle">
                  <div class="flex">
                    <img
                      class="w-[90px]"
                      src="/images/outdoors.png"
                      alt="Outdoor furniture"
                    />
                    <div class="ml-3 flex flex-col justify-center">
                      <p class="text-xl font-bold">OUTDOOR CHAIR</p>
                      <p class="text-sm text-gray-400">Size: XL</p>
                    </div>
                  </div>
                </td>
                <td class="mx-auto text-center">&#36;320</td>
                <td class="text-center align-middle">1</td>
                <td class="mx-auto text-center">&#36;320</td>
              </tr>

              {/* <!-- 4 --> */}

              <tr class="h-[100px]">
                <td class="align-middle">
                  <div class="flex">
                    <img
                      class="w-[90px]"
                      src="/images/matrass.png"
                      alt="Matrass Image"
                    />
                    <div class="ml-3 flex flex-col justify-center">
                      <p class="text-xl font-bold">MATRASS COMFORT &plus;</p>
                      <p class="text-sm text-gray-400">Size: XL</p>
                    </div>
                  </div>
                </td>
                <td class="mx-auto text-center">&#36;320</td>
                <td class="text-center align-middle">1</td>
                <td class="mx-auto text-center">&#36;320</td>
              </tr>
            </tbody>
          </table>
          {/* <!-- /Product table  --> */}

          {/* <!-- Summary  --> */}

          <section class="my-5 flex w-full flex-col gap-4 lg:flex-row">
            <div class="lg:w-1/2">
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

            {/* <!-- Address info  --> */}

            <div class="lg:w-1/2">
              <div class="border py-5 px-4 shadow-md">
                <p class="font-bold">ORDER INFORMATION</p>

                <div>
                  <p>Order &num;1245</p>
                </div>

                <div class="flex flex-col border-b py-5">
                  <p>
                    Status:
                    <span class="font-bold text-green-600">Delivered</span>
                  </p>

                  <p>Date: 20/12/2023</p>
                </div>

                <div></div>

                <div class="flex flex-col border-b py-5">
                  <p class="font-bold">ADDRESS INFORMATION</p>
                  <p>Country: Serbia</p>
                  <p>City: Belgrade</p>
                  <p>Zip-Code: 125647</p>
                  <p>Delivery: UPS</p>
                </div>

                <div class="flex flex-col py-5">
                  <p class="font-bold">PAYMENT INFORMATION</p>
                  <p>Payment method: Credit Card</p>
                  <p>Card Holder: Sarah Johnson</p>
                  <p>Card number: &bull;&bull;&bull;&bull; 4214</p>
                </div>
              </div>
            </div>

            {/* <!-- /Address info  --> */}
          </section>
        </section>

        {/* <!-- /Summary --> */}
      </section>
    </>
  )
}
