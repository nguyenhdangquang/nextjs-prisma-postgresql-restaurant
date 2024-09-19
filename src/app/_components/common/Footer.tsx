import React from "react";
import {RiHome6Line} from "react-icons/ri";
import {IoSearch} from "react-icons/io5";
import {BiMessageDetail} from "react-icons/bi";
import {LuCalendarCheck2} from "react-icons/lu";
import {IoIosMenu} from "react-icons/io";

export function Footer() {
    return (
        <footer className="bg-white text-black p-4 py-2 shadow rounded-b-[4px] w-[395px]">
            <div className="container flex items-center">
                {/* Navigation Links */}
                <nav className="flex items-center space-x-12">
                    <div className="flex flex-col items-center cursor-pointer hover:text-[#FF4405]">
                        <RiHome6Line size="24"/>
                        <a href="#" className="hover:text-[#FF4405]">
                            홈
                        </a>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer hover:text-[#FF4405]">
                        <IoSearch size="24" color="#FF4405"/>
                        <a href="#" className="hover:text-[#FF4405] text-[#FF4405]">
                            검색
                        </a>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer hover:text-[#FF4405]">
                        <BiMessageDetail size="24"/>
                        <a href="#" className="hover:text-[#FF4405]">
                            피드
                        </a>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer hover:text-[#FF4405]">
                        <LuCalendarCheck2 size="24"/>
                        <a href="#">
                            내 예약
                        </a>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer hover:text-[#FF4405]">
                        <IoIosMenu size="24"/>
                        <a href="#" className="hover:text-[#FF4405]">
                            메뉴
                        </a>
                    </div>
                </nav>
            </div>
        </footer>
    );
}
