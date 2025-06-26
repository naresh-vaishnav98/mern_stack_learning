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
                            <SidebarItem href="/admins">Admins</SidebarItem>
                            <SidebarItem href="/users">Users</SidebarItem>
                        </SidebarCollapse>
                        <SidebarCollapse icon={HiLocationMarker} label="Locations">
                            <SidebarItem href="/countries">Countries</SidebarItem>
                        </SidebarCollapse>
                        <SidebarCollapse icon={PiNotebookLight} label="Master Catalogs">
                            <SidebarItem href="/slider-listing">Sliders</SidebarItem>
                            <SidebarItem href="/testimonials-listing">Testimonials</SidebarItem>
                            <SidebarItem href="/whychooseus-listing">Why Choose Us</SidebarItem>
                            <SidebarItem href="/coupons">Coupons</SidebarItem>
                        </SidebarCollapse>
                        <SidebarCollapse icon={PiNotebookLight} label="Product Catalogs">
                            <SidebarItem href="/categories-listing">Catagories</SidebarItem>
                            <SidebarItem href="/materials-listing">Materials</SidebarItem>
                            <SidebarItem href="/colors-listing">Colors</SidebarItem>
                            <SidebarItem href="/products-listing">Products</SidebarItem>
                        </SidebarCollapse>
                        <SidebarCollapse icon={VscSettings} label="Enquirys">
                            <SidebarItem href="/contact-enquiry-management">Contact Enquirys</SidebarItem>
                            <SidebarItem href="/newsletter-management">Newsletters</SidebarItem>
                        </SidebarCollapse>
                        <SidebarCollapse icon={VscSettings} label="Configuration">
                            <SidebarItem href="/payment-gateway-listing">Payment Gateways</SidebarItem>
                            <SidebarItem href="/configurations">Configurations</SidebarItem>
                        </SidebarCollapse>
                        <SidebarItem href="/faqs-listing" icon={IoLogoWechat}>
                            FAQs
                        </SidebarItem>
                        <SidebarItem href="/cms-pages-listing" icon={FiFileText}>
                            CMS Pages
                        </SidebarItem>
                    </SidebarItemGroup>
                </SidebarItems>
            </Sidebar>













            





        </>
    )
}
