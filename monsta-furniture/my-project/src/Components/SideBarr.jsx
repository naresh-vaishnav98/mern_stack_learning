import React from 'react'
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo, SidebarCollapse } from "flowbite-react";
import { HiUsers,HiLocationMarker } from "react-icons/hi";
import { PiNotebookLight } from "react-icons/pi";
import { VscSettings } from "react-icons/vsc";
import { IoLogoWechat } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";
import { MdOutlineSpaceDashboard } from "react-icons/md";



// import { HiUsers } from "react-icons/hi";

export default function SideBarr() {
    return (
        <>
            <Sidebar aria-label="Sidebar with multi-level dropdown example">
                <SidebarItems>
                    <SidebarItemGroup>
                        <SidebarItem href="/" icon={MdOutlineSpaceDashboard}>
                            Dashboard
                        </SidebarItem>
                        <SidebarCollapse icon={HiUsers} label="User Management">
                            <SidebarItem href="/">Admins</SidebarItem>
                            <SidebarItem href="/">Users</SidebarItem>
                        </SidebarCollapse>
                        <SidebarCollapse icon={HiLocationMarker} label="Locations">
                            <SidebarItem href="/">Countries</SidebarItem>
                        </SidebarCollapse>
                        <SidebarCollapse icon={PiNotebookLight} label="Master Catalogs">
                            <SidebarItem href="/">Sliders</SidebarItem>
                            <SidebarItem href="/">Testimonials</SidebarItem>
                            <SidebarItem href="/">Why Choose Us</SidebarItem>
                            <SidebarItem href="/">Coupons</SidebarItem>
                        </SidebarCollapse>
                        <SidebarCollapse icon={PiNotebookLight} label="Product Catalogs">
                            <SidebarItem href="/">Catagories</SidebarItem>
                            <SidebarItem href="/">Materials</SidebarItem>
                            <SidebarItem href="/">Colors</SidebarItem>
                            <SidebarItem href="/">Products</SidebarItem>
                        </SidebarCollapse>
                        <SidebarCollapse icon={VscSettings} label="Enquirys">
                            <SidebarItem href="/">Contact Enquirys</SidebarItem>
                            <SidebarItem href="/">Newsletters</SidebarItem>
                        </SidebarCollapse>
                        <SidebarCollapse icon={VscSettings} label="Configuration">
                            <SidebarItem href="/">Payment Gateways</SidebarItem>
                            <SidebarItem href="/">Configurations</SidebarItem>
                        </SidebarCollapse>
                        <SidebarItem href="/" icon={IoLogoWechat}>
                            FAQs
                        </SidebarItem>
                        <SidebarItem href="/" icon={FiFileText}>
                            CMS Pages
                        </SidebarItem>
                    </SidebarItemGroup>
                </SidebarItems>
            </Sidebar>













            





        </>
    )
}
