"use client"

/**
 * @class NavBar
 * @description purpose of this component is to render the website navigation menu
 * @author Nawod Madhuvantha
*/

import { Link } from "react-scroll";
import { styles } from "@/app/styles/styles";
import { Navigation } from "@/shared/constants/navigation";
import { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoIosClose } from "react-icons/io";
import Image from "next/image";

const NavBar = () => {

    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          if (scrollTop > 100) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

  return (
     <div
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-50 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center container mx-auto'>
        <Link
            to='home'
            spy={true}
            smooth={true}
            duration={500}
            delay={500}
          className='flex items-center gap-2'
          onClick={() =>setActive("")}
        >
          <div className="relative w-9 h-9 cursor-pointer">
            <Image src='/logo.png' alt='logo' fill className='object-contain' />
          </div>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {Navigation.links.map((nav) => (
            <Link
            to={nav.id}
            spy={true}
            offset={nav.id !== 'home' ? 150 : 0}
            smooth={true}
            duration={500}
            delay={500}
            key={nav.id}
            className={`${
                active === nav.title ? "text-themeLight" : "text-white"
              } hover:text-theme text-base font-medium cursor-pointer transition-all duration-500`}
              onClick={() => setActive(nav.title)}
            >
                {nav.title}
            </Link>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          >
           {toggle ? <IoIosClose /> : <TiThMenu/> }
          </div>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {Navigation.links.map((nav) => (
                <Link
                to={nav.id}
                spy={true}
                offset={-150}
                smooth={true}
                duration={500}
                delay={500}
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-base ${
                    active === nav.title ? "text-white" : "text-green-400"
                  }`}
                onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                    {nav.title}
                </Link>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
