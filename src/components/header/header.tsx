"use client"

import { FaCode } from "react-icons/fa";
import { menu } from "../statics/statics";
import { useEffect, useState, useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import Link from "next/link";

import context from "@/context/context";

import "./header.css";

const Header = () => {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [openSmallMenu, setOpenSmallMenu]=useState(false);

  const contextContainer=useContext(context);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <header className={`header fixed bg-primary top-0 left-0 right-0 ${scrolledDown && 'py-5'}`}>
      <div className="flex justify-between items-center relative">
        <FaCode className="text-ternary text-8xl" data-aos="fade-right" />
        <div className="hidden md:flex w-2/3 brk2:w-1/2 brk2:pl-20" data-aos="fade-left">
          <ul className="flex text-white w-full justify-between">
            {menu.map((content, index: number) => (
              <li key={index} className={`${index === contextContainer.activeNav && 'selected'} cursor-pointer text-[rgb(200,200,200)] hover:text-white`}> 
               <Link href={`#${content.url}`} scroll={true}>{content.text}</Link> 
              </li> 
            ))}
          </ul>
        </div>
        <div className="block md:hidden" data-aos="fade-left">
            <RxHamburgerMenu className="text-white text-4xl cursor-pointer" onClick={()=>setOpenSmallMenu(!openSmallMenu)}/>
        </div> 
        <div className={`bg-secondary block md:hidden absolute top-[80px] smlMenu right-0 ${openSmallMenu && 'openSmlMenu'}`}>
          <ul className="text-white w-full justify-between p-10 pt-5">
            {menu.map((content, index: number) => (
              <li key={index} className={`${index === contextContainer.activeNav && 'text-ternary'} cursor-pointer mt-5`}> 
               <Link href={`#${content.url}`} scroll={true}>{content.text}</Link> 
              </li> 
            ))} 
          </ul>
        </div>
      </div> 
    </header> 
  )
}
export default Header;