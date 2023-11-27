import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { IoSearchOutline, IoReorderThreeOutline } from "react-icons/io5";
import { RiShoppingBag3Line } from "react-icons/ri";
import { shopDropDownName } from '@/helpers/navbar.helper';
function Navbar() {
    return (
        <nav className='flex bg-[#212122] p-3 justify-start align-center sticky top-0 z-50'>
            <div className='flex-1'>
                <div className="dropdown hide-md">
                    <button className="dropbtn">
                        <p className='underline-hover-effect'>brand <i className="arrow down"></i> </p>
                    </button>
                    <div className="dropdown-content">
                        {shopDropDownName.map(name => {
                            return <a href="#" className='underline-hover-effect mt-1'>{name}</a>
                        })}
                    </div>
                </div>
                <div className="dropdown hide-md">
                    <button className="dropbtn">
                        <p className='underline-hover-effect'>shop  <i className="arrow down"></i></p>
                    </button>
                    <div className="dropdown-content">
                        {shopDropDownName.map(name => {
                            return <a href="#" className='underline-hover-effect mt-1'>{name}</a>
                        })}
                    </div>
                </div>
                <div className="dropdown hide-md">
                    <button className="dropbtn">
                        <p className='underline-hover-effect'>premium</p>
                    </button>
                </div>
                <div className="dropdown hide-md">
                    <button className="dropbtn">
                        <p className='underline-hover-effect'>gift cards</p>
                    </button>
                </div>
                <div className="dropdown show-md">
                    <button className="dropbtn">
                        <IoReorderThreeOutline size={30} className='cursor-pointer' />
                    </button>
                </div>
            </div>

            <div className='flex justify-center items-center brave-logo'>
                <img src='https://bravaland.com/cdn/shop/files/Artboard_1.png?v=1678787853' width={'110px'} />
            </div>

            <div className='flex-1 flex gap-6 justify-end items-center mr-5'>
                <div className="dropdown hide-md">
                    <button className="dropbtn">
                        <p className='underline-hover-effect text-xs'>become an affiliate</p>
                    </button>
                </div>
                <div className='react-icon hide-md'>
                    <FaTwitter size={20} className='cursor-pointer' />
                </div>
                <div className='react-icon hide-md'>
                    <FaTiktok size={20} className='cursor-pointer' />
                </div>
                <div className='react-icon hide-md'>
                    <RiInstagramLine size={20} className='cursor-pointer' />
                </div>
                <div className='react-icon hide-sm'>
                    <FiUser size={20} className='cursor-pointer' />
                </div>
                <div className='react-icon'>
                    <IoSearchOutline size={20} className='cursor-pointer' />
                </div>
                <div className='react-icon'>
                    <RiShoppingBag3Line size={20} className='cursor-pointer' />
                </div>
            </div>
        </nav >
    )
}

export default Navbar