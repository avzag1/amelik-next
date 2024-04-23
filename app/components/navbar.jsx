// "use client"
import Link from "next/link";
import "../globals.css";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "./navLink";
import { usePathname } from "next/navigation";
import AppointmentButton from "./appointmentButton";
import MenuItems from "./menuItems";
import Dropdown from "./dropdown";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const pathname = usePathname();
  const links = [
    {
      
      link: "главная",
      path: "/",
    },
    {
      
      link: "о нас",
      path: "/about",
      submenu: [
        {
          title: "руководитель",
          path: "/director",
        },
        {
          title: "работники",
          path: "/staff",
        },
        {
          title: "успехи и достижения",
          path: "/achievements",
        },
        {
          title: "учредительные документы",
          path: "/charter",
        },
        {
          title: "политика и обработка ПД",
          path: "/policy",
        },
      ],
    },
    {
      
      link: "услуги и цены",
      path: "/services",
    },
    {
      
      link: "акции",
      path: "/actions",
    },
    {
      
      link: "вакансии",
      path: "/vacancies",
    },
    {
      
      link: "контакты",
      path: "/contacts",
    },
  ];

  return (
    <div className="px-2 md:px-0 border-b border-blue-900 md:border-white z-20 flex justify-between items-center w-full h-30 text-blue-900 bg-white fixed md:static nav">
      <div className="md:h-28 h-fit py-1 flex items-center md:hidden">
        <div className="md:w-fit w-12 h-12">
          <Image
            className="object-cover"
            src="/amelik_logo.png"
            width={95}
            height={95}
            alt="Логотип"
          />
        </div>
        <hr className="bg-black h-0.5 fixed top-[300px]" />
      </div>

      <ul className="hidden md:flex w-full xl:mx-20 mx:5 my-8 justify-between">
            {links.map(({ index, link, path }) => (
          <li
            key={index}
            className="px-4 cursor-pointer uppercase font-bold lg:text-xl md:text-base text-blue-900 duration-200"
          >
          <NavLink href={path} exact>
          {link}
          
          
                  <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
             

          </NavLink>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-40 text-blue-900 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="z-30 px-4 flex flex-col items-left absolute top-0 left-0 w-screen h-screen bg-gradient-to-b from-white to-white text-blue-900">
          <div className="h-8"></div>
          {links.map(({ id, link, path }) => (
            <li
              key={id}
              className="cursor-pointer uppercase py-2 text-lg font-medium"
            >
              <Link onClick={() => setNav(!nav)} href={path}>
                {link}
              </Link>
            </li>
          ))}
          <div className="my-5">
            <AppointmentButton className="text-xs" />
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
