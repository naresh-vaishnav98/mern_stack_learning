import React from 'react'
import ProfileSidebar from './Common/ProfileSidebar'

export default function ManageAddress() {
    return (
        <>
            <section
                class="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
            >
                {/* <!-- sidebar  --> */}
                <ProfileSidebar/>
                {/* <!-- /sidebar  --> */}

                {/* <!-- form  --> */}
                <section
                    class="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10"
                >
                    <div class="py-5">
                        <div class="w-full"></div>
                        <form class="flex w-full flex-col gap-3" action="">
                            <div class="flex w-full flex-col">
                                <label class="flex" for="name"
                                >Country<span
                                    class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
                                ></span
                                    ></label>
                                <input
                                    class="w-full border px-4 py-2 lg:w-1/2"
                                    type="text"
                                    placeholder="Serbia"
                                />
                            </div>

                            <div class="flex w-full flex-col">
                                <label class="flex" for="name"
                                >City<span
                                    class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
                                ></span
                                    ></label>
                                <input
                                    class="w-full border px-4 py-2 lg:w-1/2"
                                    type="text"
                                    placeholder="Belgrade"
                                />
                            </div>

                            <div class="flex flex-col">
                                <label for="">Zip Code</label>
                                <input
                                    x-mask="999999"
                                    class="w-full border px-4 py-2 lg:w-1/2"
                                    placeholder="240116"
                                />
                            </div>

                            <button class="mt-4 w-40 bg-violet-900 px-4 py-2 text-white">
                                Save changes
                            </button>
                        </form>
                    </div>
                </section>
                {/* <!-- /form  --> */}
            </section>
        </>
    )
}
