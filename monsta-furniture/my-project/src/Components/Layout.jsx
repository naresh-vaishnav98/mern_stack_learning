import React from 'react'
import Header from './Header'
import SideBarr from './SideBarr'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <div className='container-fluid overflow-hidden'>
                <div className='row'>
                    <div className='w-screen h-[55px]'>
                        <Header />
                    </div>
                </div>
                <div className='row flex flex-cols-2 w-[100%]'>
                    <div className='w-[14%] h-screen'>
                        <SideBarr />
                    </div>
                    <div className='w-[90%] mb-10'>
                        <Outlet />
                    </div>
                </div>
                <div className='row'>
                    <div className='w-screen'>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}
