import React from 'react'
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo, SidebarCollapse } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

export default function SideBarr() {
    return (
        <>
            <Sidebar aria-label="Sidebar with multi-level dropdown example">
                <SidebarItems>
                    <SidebarItemGroup>
                        <SidebarItem href="#" icon={HiChartPie}>
                            Dashboard
                        </SidebarItem>
                        <SidebarCollapse icon={HiShoppingBag} label="E-commerce">
                            <SidebarItem href="#">Products</SidebarItem>
                            <SidebarItem href="#">Sales</SidebarItem>
                            <SidebarItem href="#">Refunds</SidebarItem>
                            <SidebarItem href="#">Shipping</SidebarItem>
                        </SidebarCollapse>
                        <SidebarItem href="#" icon={HiInbox}>
                            Inbox
                        </SidebarItem>
                        <SidebarItem href="#" icon={HiUser}>
                            Users
                        </SidebarItem>
                        <SidebarItem href="#" icon={HiShoppingBag}>
                            Products
                        </SidebarItem>
                        <SidebarItem href="#" icon={HiArrowSmRight}>
                            Sign In
                        </SidebarItem>
                        <SidebarItem href="#" icon={HiTable}>
                            Sign Up
                        </SidebarItem>
                    </SidebarItemGroup>
                </SidebarItems>
            </Sidebar>













            





        </>
    )
}
