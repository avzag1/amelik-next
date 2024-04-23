"use client";

import Image from "next/image";
import { useState } from "react";
//import logo from "../../public/amelik_logo.png";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
// import todoImage from "@/assets/images/icon-todo.svg";
// import calendarImage from "@/assets/images/icon-calendar.svg";
// import remindersImage from "@/assets/images/icon-reminders.svg";
// import planningImage from "@/assets/images/icon-planning.svg";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { NavLink } from "./navLink";

const navItems = [
  {
    label: "Главная",
    link: "/",
  },
  {
    label: "О нас",
    link: "/about",
    children: [
      {
        label: "Руководитель",
        link: "/director",
        // iconImage: todoImage,
      },
      {
        label: "Работники",
        link: "/staff",
        //iconImage: calendarImage,
      },
      {
        label: "Успехи и достижения",
        link: "/achievements",
        //iconImage: remindersImage,
      },
      {
        label: "Учредительные документы",
        link: "/charter",
        //iconImage: planningImage,
      },
      {
        label: "Учредительные документы",
        link: "/charter",
        //iconImage: planningImage,
      },
      {
        label: "Политика и обработка ПД",
        link: "/policy",
        //iconImage: planningImage,
      },
    ],
  },
  {
    label: "Услуги и цены",
    link: "/services",
  },
  {
    label: "Акции",
    link: "/actions",
  },
  {
    label: "Вакансии",
    link: "/vacancies",
  },
  {
    label: "Контакты",
    link: "/contacts",
  },
];

export default function Navbar1() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);
  function openSideMenu() {
    setSideMenu(true);
  }
  function closeSideMenu() {
    setSideMenu(false);
  }

  return (
    <div className="mx-20 flex w-full justify-center px-4 py-5 text-sm">
      {/* left side  */}
      <section ref={animationParent} className="flex items-center w-full">
        {/* logo */}
        {/* <Image src={logo} alt=" logo" /> */}
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-start transition-all w-full justify-between">
          {navItems.map((d, i) => (
            <NavLink exact
              key={i}
              href={d.link ?? "#"}
              className="relative group px-2 py-3 transition-all"
            >
            
              <p className="flex cursor-pointer justify-center items-center gap-2 text-2xl font-bold text-blue-900 group-hover:text-black ">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                )}
              </p>


              {/* dropdown */}
              {d.children && (
                <div className="absolute left-0 top-10 w-auto hidden flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex text-base font-bold text-blue-900">
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className="flex cursor-pointer items-center py-1 pr-8 text-blue-900 hover:text-black  "
                    >
                      {/* image */}
                      {/* {ch.iconImage && (
                        <Image src={ch.iconImage} alt="item-icon" />
                      )} */}
                      {/* item */}
                      <span className="whitespace-nowrap pl-3">
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </NavLink>
          ))}
        </div>
        {/* navitems */}
      </section>

      {/* right side data */}
      {/* <section className=" hidden md:flex   items-center gap-8 ">
        <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
          Login
        </button>

        <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
          Register
        </button>
      </section> */}

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
}

// function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
function MobileNav({ closeSideMenu }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className=" h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              // iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        {/* <section className="  flex  flex-col   gap-8  mt-4 items-center">
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            Login
          </button>

          <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
        </section> */}
      </div>
    </div>
  );
}

// function SingleNavItem(d: NavItem) {
function SingleNavItem(d) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
        <span>{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className="flex cursor-pointer items-center py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
            >
              {/* image */}
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
